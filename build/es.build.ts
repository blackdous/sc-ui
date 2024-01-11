import { resolve } from 'path'
export const esBuild = {
  outDir: 'dist',
  lib: {
    entry: resolve(__dirname, '../src/index.ts'),
    name: 'ScUi',
  },
  
  sourcemap: true,
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue', 'vue-slider-component', /^lodash(\/.+|$)/, 'moment', /^dayjs(\/.+|$)/, 'ant-design-vue', /^@ant-design\/icons-vue/],
    output: [
      {
        format: 'es',
        //不用打包成.es.js,这里我们想把它打包成.js
        entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        //配置打包根目录
        dir: 'dist/es',
        preserveModulesRoot: 'src',
        globals: {
          vue: 'Vue',
          vueSlider: 'VueSlider',
          lodash: 'lodash',
          moment: 'moment',
          dayjs: 'dayjs',
          'ant-design-vue': 'ant-design-vue'
        },
      },
      {
        format: 'cjs',
        entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        //配置打包根目录
        dir: 'dist/lib',
        preserveModulesRoot: 'src',
        globals: {
          vue: 'Vue',
          vueSlider: 'VueSlider',
          lodash: 'lodash',
          moment: 'moment',
          dayjs: 'dayjs',
          'ant-design-vue': 'ant-design-vue'
        },
      }
    ]
  },
  // 传递给 @rollup/plugin-commonjs 插件的选项。
  commonjsOptions: {
    esmExternals: true 
  },
  // 传递给 @rollup/plugin-dynamic-import-vars 的选项。
  dynamicImportVarsOptions: {},
}