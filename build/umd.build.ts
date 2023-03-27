import { resolve } from "path"
export const umdBuild = {
  lib: {
    entry: resolve(__dirname, '../src/index.ts'),
    name: 'sc-ui',
    formats: ['es', 'umd'],
    fileName: (format) => `build.${format}.ts`,
  },
  sourcemap: true,
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue', 'vue-slider-component', /^lodash(\/.+|$)/, 'moment', /^dayjs(\/.+|$)/, 'ant-design-vue', /^@ant-design\/icons-vue/],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',
        vueSlider: 'VueSlider',
        lodash: 'lodash',
        moment: 'moment',
        dayjs: 'dayjs',
        'ant-design-vue': 'antd'
      },
      exports: 'named',
      chunkFileNames: `dist/[name].js`,
      extend: true,
    },
  },
  // 传递给 @rollup/plugin-commonjs 插件的选项。
  commonjsOptions: {
    esmExternals: true
  },
  // 传递给 @rollup/plugin-dynamic-import-vars 的选项。
  dynamicImportVarsOptions: {},
}