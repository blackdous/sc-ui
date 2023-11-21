import { zlibSync, unzlibSync, strToU8, strFromU8 } from 'fflate'

export function utoa(data: string): string {
  const buffer = strToU8(data)
  const zipped = zlibSync(buffer, { level: 9 })
  const binary = strFromU8(zipped, true)
  return btoa(binary)
}

export function atou(base64: string): string {
  const binary = atob(base64)

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith('\x78\xDA')) {
    const buffer = strToU8(binary, true)
    const unzipped = unzlibSync(buffer)
    return strFromU8(unzipped)
  }

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary))
}

const isBrowser = () => typeof window !== 'undefined';

export class File {
  filename: string
  code: string
  hidden: boolean
  compiled = {
    js: '',
    css: '',
    ssr: ''
  }

  constructor(filename: string, code = '', hidden = false) {
    this.filename = filename
    this.code = code
    this.hidden = hidden
  }
}

const getFiles = (files) => {
  const exported: Record<string, string> = {}
  for (const filename in files) {
    exported[filename] = files[filename].code
  }
  return exported
}


const initClick = () => {
  const codeDom = document && document.querySelectorAll('.vp-code-light code')
  Array.from(codeDom).map(item => {
    const ClickDom = item.parentNode?.parentNode?.previousSibling?.childNodes[0];
    // 
    if (ClickDom) {
      const sfcTemCode = `
        ${item?.innerText}
      `.trim()?.replace("/* @import 'comment'; */", (item) => {
        // 
        return "@import 'https://cdn.jsdelivr.net/npm/@sincerecloud/sc-ui@0.0.187/style.css';"
      });
      const files = {
        'App.vue': new File('App.vue', sfcTemCode),
        'import-map.json': new File(
          'import-map.json',
          JSON.stringify(
            {
              imports: {
                'vue': 'https://sfc.vuejs.org/vue.runtime.esm-browser.js',
                "vue/server-renderer": "https://sfc.vuejs.org/server-renderer.esm-browser.js",
                "ant-design-vue": "https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.8/+esm",
                "sc-ui": "https://cdn.jsdelivr.net/npm/@sincerecloud/sc-ui@0.0.187/sc-ui.es.min.js",
                "@ant-design/icons-vue": "https://cdn.jsdelivr.net/npm/@ant-design/icons-vue@6.1.0/+esm",
                "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm",
                "dayjs": "https://cdn.jsdelivr.net/npm/dayjs@1.11.7/+esm",
                "moment": "https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm"
              }
            },
            null,
            2
          )
        )
      }
      const urlHash = 'https://sfc.vuejs.org/#' + utoa(JSON.stringify(getFiles(files)))
      ClickDom.addEventListener('click', () => {
        window.open(urlHash, '_blank')
      })
    }
  })
}

export const initLineCode = () => {
  if (isBrowser()) {
    const timer = setTimeout(() => {
      initClick()
      var _wr = function(type) {
        var orig = history[type];
        return function() {
          var rv = orig.apply(this, arguments);
          var e = new Event(type);
          e.arguments = arguments;
          window.dispatchEvent(e);
          return rv;
        };
      };
      history.pushState = _wr('pushState');
      history.replaceState = _wr('replaceState');

      window.addEventListener('replaceState', function(e) {
        // 
        const timer = setTimeout(() => {
          initClick();
          clearTimeout(timer)
        }, 1500)
        // 
      });
      clearTimeout(timer)
    }, 1500)
  }
}

