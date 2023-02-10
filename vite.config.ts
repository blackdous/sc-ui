import { resolve } from 'path'
// import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { createVitePlugins } from './build/plugin'
import { themeVariables } from './build/theme'
import autoprefixer from 'autoprefixer'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';

  return {
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: resolve(__dirname, './src') }
      ]
    },
    build: {
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'sc-ui',
        formats: ['es', 'umd'],
        fileName: (format) => `build.${format}.ts`,
      },
      sourcemap: true,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'vue-slider-component'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
            vueSlider: 'VueSlider'
          },
          exports: 'named',
          chunkFileNames: `assets/[name].js`,
          extend: true,
        },
      },
      // 传递给 @rollup/plugin-commonjs 插件的选项。
      commonjsOptions: {
        esmExternals: true 
      },
      // 传递给 @rollup/plugin-dynamic-import-vars 的选项。
      dynamicImportVarsOptions: {},
    },

    // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',

    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,

    json: {
      // 是否支持从 .json 文件中进行按名导入
      namedExports: true,
      // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好， 尤其是当 JSON 文件较大的时候。开启此项，则会禁用按名导入
      stringify: false,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: themeVariables,
          javascriptEnabled: true
        },
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              "last 2 version",
              "> 2%"
            ],
            grid: true,
          }),
          postcssFlexbugsFixes()
        ],
      },
    },
    plugins: createVitePlugins(isBuild),
    optimizeDeps: {
      //@iconify/iconify：依赖是由@purge-icons/generated动态虚拟加载的，所以需要显式指定
      include: [
        '@vue/runtime-core',
        '@vue/shared',
        '@iconify/iconify',
        // 'ant-design-vue/es/locale/zh_CN',
        // 'ant-design-vue/es/locale/en_US',
      ]
    }
  }
}
