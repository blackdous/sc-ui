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

const timer = setTimeout(() => {
  const aa = document.querySelectorAll('.vp-code-light code')
  console.log('aa: ', aa);
  clearTimeout(timer)
}, 1500)

const welcomeCode = `
<script setup>
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>
<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
`.trim()

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

const files = {
  'App.vue': new File('App.vue', welcomeCode),
  'import-map.json': new File(
    'import-map.json',
    JSON.stringify(
      {
        imports: {
          'vue': 'https://sfc.vuejs.org/vue.runtime.esm-browser.js',
          "vue/server-renderer": "https://sfc.vuejs.org/server-renderer.esm-browser.js",
          "ant-design-vue": "https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.8/dist/antd.min.js",
          "sc-ui": "https://cdn.jsdelivr.net/npm/@sincerecloud/sc-ui@0.0.60/sc-ui.es.min.js"
        }
      },
      null,
      2
    )
  )
}

const urlHash = '#' + utoa(JSON.stringify(getFiles(files)))
console.log('urlHash: ', urlHash);
