import { getParameters } from 'codesandbox/lib/api/define';

import packageInfo from '../../../build/package.json'

const isBrowser = () => typeof window !== 'undefined';

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ant Design Vue Demo</title>
    <style>
      body {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

const appVue = `<template>
<Demo />
</template>

<script>
import { defineComponent } from "vue";
import Demo from "./demo.vue";

export default defineComponent({
components: {
  Demo,
},
});
</script>`;

const mainJs = `import { createApp } from "vue";
import App from "./App.vue";
import 'ant-design-vue/dist/antd.css';
import '@sincerecloud/sc-ui/style.css'

const app = createApp(App);
app.mount("#app");
`;

// codeSandbox
export function getCodeSandboxParams(code: string, meta: Meta): string {
  return getParameters({
    files: {
      'package.json': {
        content: JSON.stringify({
          title: meta.title,
          dependencies: {
            vue: '^3.2.25',
            'ant-design-vue': '2.2.8',
            'moment': '^2.29.4',
            'lodash': '^4.17.21',
            'dayjs': '^1.11.7',
            '@sincerecloud/sc-ui': packageInfo.version
          },
          devDependencies: {
            '@vue/cli-plugin-babel': '~4.5.0',
            typescript: '^4.0.5',
          },
          browserslist: ['> 0.2%', 'not dead'],
        }),
        isBinary: false,
      },
      'index.html': {
        content: indexHtml,
        isBinary: false,
      },
      'src/demo.vue': {
        content: code,
        isBinary: false,
      },
      'src/App.vue': {
        content: appVue,
        isBinary: false,
      },
      'src/main.js': {
        content: mainJs,
        isBinary: false,
      },
    },
  });
}



const initClick = () => {
  const codeDom = document && document.querySelectorAll('.vp-code-light code')
  Array.from(codeDom).map(item => {
    const ClickDom = item.parentNode?.parentNode?.previousSibling?.childNodes[0];
    // console.log('item: ClickDom', item.innerText);
    if (ClickDom) {
      const sfcTemCode = `
        ${item?.innerText}
      `.trim()?.replace("from 'sc-ui'", (item) => {
        return "from '@sincerecloud/sc-ui';"
      });
      const codeSandboxParams = getCodeSandboxParams(sfcTemCode, { title: '测试代码' })
      ClickDom.addEventListener('click', () => {
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = `<form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
          <input type="hidden" name="parameters" value="${codeSandboxParams}" />
          <input type="submit" value="Open in sandbox" />
        </form>`;
        document.body.appendChild(div);
        (div.firstElementChild as HTMLFormElement).submit();
        document.body.removeChild(div);
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
        // console.log('replaceState: ', e);
        const timer = setTimeout(() => {
          initClick();
          clearTimeout(timer)
        }, 1500)
        // console.log('THEY DID IT AGAIN! replaceState 111111');
      });
      clearTimeout(timer)
    }, 1000)
  }
}

