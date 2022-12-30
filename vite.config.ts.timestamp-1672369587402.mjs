// vite.config.ts
import { resolve } from "path";

// build/plugin/index.ts
import vue from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.2+vue@3.2.25/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vite-plugin-dts@1.6.6_vite@3.2.2/node_modules/vite-plugin-dts/dist/index.mjs";
import vueJsx from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2+vue@3.2.25/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/unplugin-vue-components@0.22.9_rollup@2.79.1+vue@3.2.25/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/unplugin-vue-components@0.22.9_rollup@2.79.1+vue@3.2.25/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import viteCompression from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@3.2.2/node_modules/vite-plugin-compression/dist/index.mjs";
import DefineOptions from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/unplugin-vue-define-options@0.12.6/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import vueSetupExtend from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@3.2.2/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";

// build/plugin/legacy.ts
import legacy from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-legacy@2.3.0_vite@3.2.2/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var legacy_default = () => legacy({
  targets: ["ie >= 11"],
  additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
});

// build/plugin/visualizer.ts
import { visualizer } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/rollup-plugin-visualizer@5.8.3_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var visualizer_default = () => {
  return visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: true,
    gzipSize: true,
    brotliSize: true
  });
};

// build/plugin/copy.ts
import copy from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/rollup-plugin-copy@3.4.0/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
var copy_default = () => {
  return copy({
    targets: [
      { src: "README.md", dest: "dist/" },
      { src: "src/style/", dest: "dist/" },
      { src: "build/package.json", dest: "dist/" }
    ],
    hook: "writeBundle",
    verbose: true
  });
};

// build/constant.ts
var VITE_APP_LEGACY = false;
var VITE_APP_ANALYZE = false;
var VITE_APP_COMPRESS_GZIP = false;
var VITE_APP_COMPRESS_GZIP_DELETE_FILE = false;

// build/plugin/index.ts
var ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  };
};
var createVitePlugins = (isBuild) => {
  const vitePlugins = [
    vue({
      template: {
        compilerOptions: {
          directiveTransforms: {
            "text-collapse": ssrTransformCustomDir
          }
        }
      }
    }),
    vueJsx(),
    copy_default(),
    vueSetupExtend(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false
    }),
    DefineOptions(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less"
        })
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    })
  ];
  VITE_APP_LEGACY && isBuild && vitePlugins.push(legacy_default());
  VITE_APP_ANALYZE && vitePlugins.push(visualizer_default());
  if (isBuild) {
    VITE_APP_COMPRESS_GZIP && vitePlugins.push(
      viteCompression({
        deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE
      })
    );
  }
  return vitePlugins;
};

// build/theme/index.ts
import fs from "fs";
import lessToJS from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/less-vars-to-js@1.3.0/node_modules/less-vars-to-js/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/velen/Desktop/work/sc/frontend/sc-ui/build/theme";
var themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__vite_injected_original_dirname, "./variables.less"), "utf8")
);

// vite.config.ts
import autoprefixer from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/autoprefixer@10.4.13_postcss@8.4.18/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssFlexbugsFixes from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/postcss-flexbugs-fixes@5.0.2_postcss@8.4.18/node_modules/postcss-flexbugs-fixes/index.js";
var __vite_injected_original_dirname2 = "/Users/velen/Desktop/work/sc/frontend/sc-ui";
var vite_config_default = ({ command }) => {
  const isBuild = command === "build";
  return {
    resolve: {
      alias: [{ find: "@", replacement: resolve(__vite_injected_original_dirname2, "./src") }]
    },
    build: {
      lib: {
        entry: resolve(__vite_injected_original_dirname2, "./src/index.ts"),
        name: "sc-ui",
        formats: ["es", "umd"],
        fileName: (format) => `build.${format}.ts`
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          }
        }
      },
      commonjsOptions: {},
      dynamicImportVarsOptions: {}
    },
    logLevel: "info",
    clearScreen: false,
    json: {
      namedExports: true,
      stringify: false
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: themeVariables,
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              "last 2 version",
              "> 2%"
            ],
            grid: true
          }),
          postcssFlexbugsFixes()
        ]
      }
    },
    plugins: createVitePlugins(isBuild),
    optimizeDeps: {
      include: [
        "@vue/runtime-core",
        "@vue/shared",
        "@iconify/iconify"
      ]
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2luL2luZGV4LnRzIiwgImJ1aWxkL3BsdWdpbi9sZWdhY3kudHMiLCAiYnVpbGQvcGx1Z2luL3Zpc3VhbGl6ZXIudHMiLCAiYnVpbGQvcGx1Z2luL2NvcHkudHMiLCAiYnVpbGQvY29uc3RhbnQudHMiLCAiYnVpbGQvdGhlbWUvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbi8vIGltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvcGx1Z2luJ1xuaW1wb3J0IHsgdGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL2J1aWxkL3RoZW1lJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgcG9zdGNzc0ZsZXhidWdzRml4ZXMgZnJvbSAncG9zdGNzcy1mbGV4YnVncy1maXhlcydcblxuZnVuY3Rpb24gcGF0aFJlc29sdmUoZGlyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4nLCBkaXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJztcblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJykgfV1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaW5kZXgudHMnKSxcbiAgICAgICAgbmFtZTogJ3NjLXVpJyxcbiAgICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBidWlsZC4ke2Zvcm1hdH0udHNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XG4gICAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBcdTRGMjBcdTkwMTJcdTdFRDkgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMgXHU2M0QyXHU0RUY2XHU3Njg0XHU5MDA5XHU5ODc5XHUzMDAyXG4gICAgICBjb21tb25qc09wdGlvbnM6IHt9LFxuICAgICAgLy8gXHU0RjIwXHU5MDEyXHU3RUQ5IEByb2xsdXAvcGx1Z2luLWR5bmFtaWMtaW1wb3J0LXZhcnMgXHU3Njg0XHU5MDA5XHU5ODc5XHUzMDAyXG4gICAgICBkeW5hbWljSW1wb3J0VmFyc09wdGlvbnM6IHt9LFxuICAgIH0sXG5cbiAgICAvLyBcdThDMDNcdTY1NzRcdTYzQTdcdTUyMzZcdTUzRjBcdThGOTNcdTUxRkFcdTc2ODRcdTdFQTdcdTUyMkIgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyB8ICdzaWxlbnQnXG4gICAgbG9nTGV2ZWw6ICdpbmZvJyxcblxuICAgIC8vIFx1OEJCRVx1NEUzQSBmYWxzZSBcdTUzRUZcdTRFRTVcdTkwN0ZcdTUxNEQgVml0ZSBcdTZFMDVcdTVDNEZcdTgwMENcdTk1MTlcdThGQzdcdTU3MjhcdTdFQzhcdTdBRUZcdTRFMkRcdTYyNTNcdTUzNzBcdTY3RDBcdTRFOUJcdTUxNzNcdTk1MkVcdTRGRTFcdTYwNkZcbiAgICBjbGVhclNjcmVlbjogZmFsc2UsXG5cbiAgICBqc29uOiB7XG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTY1MkZcdTYzMDFcdTRFQ0UgLmpzb24gXHU2NTg3XHU0RUY2XHU0RTJEXHU4RkRCXHU4ODRDXHU2MzA5XHU1NDBEXHU1QkZDXHU1MTY1XG4gICAgICBuYW1lZEV4cG9ydHM6IHRydWUsXG4gICAgICAvLyBcdTgyRTVcdThCQkVcdTdGNkVcdTRFM0EgdHJ1ZVx1RkYwQ1x1NUJGQ1x1NTE2NVx1NzY4NCBKU09OIFx1NEYxQVx1ODhBQlx1OEY2Q1x1NjM2Mlx1NEUzQSBleHBvcnQgZGVmYXVsdCBKU09OLnBhcnNlKFwiLi4uXCIpIFx1NEYxQVx1NkJENFx1OEY2Q1x1OEJEMVx1NjIxMFx1NUJGOVx1OEM2MVx1NUI1N1x1OTc2Mlx1OTFDRlx1NjAyN1x1ODBGRFx1NjZGNFx1NTk3RFx1RkYwQyBcdTVDMjRcdTUxNzZcdTY2MkZcdTVGNTMgSlNPTiBcdTY1ODdcdTRFRjZcdThGODNcdTU5MjdcdTc2ODRcdTY1RjZcdTUwMTlcdTMwMDJcdTVGMDBcdTU0MkZcdTZCNjRcdTk4NzlcdUZGMENcdTUyMTlcdTRGMUFcdTc5ODFcdTc1MjhcdTYzMDlcdTU0MERcdTVCRkNcdTUxNjVcbiAgICAgIHN0cmluZ2lmeTogZmFsc2UsXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgbGVzczoge1xuICAgICAgICAgIG1vZGlmeVZhcnM6IHRoZW1lVmFyaWFibGVzLFxuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbXG4gICAgICAgICAgICAgIFwibGFzdCAyIHZlcnNpb25cIixcbiAgICAgICAgICAgICAgXCI+IDIlXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBvc3Rjc3NGbGV4YnVnc0ZpeGVzKClcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyhpc0J1aWxkKSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIC8vQGljb25pZnkvaWNvbmlmeVx1RkYxQVx1NEY5RFx1OEQ1Nlx1NjYyRlx1NzUzMUBwdXJnZS1pY29ucy9nZW5lcmF0ZWRcdTUyQThcdTYwMDFcdTg2NUFcdTYyREZcdTUyQTBcdThGN0RcdTc2ODRcdUZGMENcdTYyNDBcdTRFRTVcdTk3MDBcdTg5ODFcdTY2M0VcdTVGMEZcdTYzMDdcdTVCOUFcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ0B2dWUvcnVudGltZS1jb3JlJyxcbiAgICAgICAgJ0B2dWUvc2hhcmVkJyxcbiAgICAgICAgJ0BpY29uaWZ5L2ljb25pZnknLFxuICAgICAgICAvLyAnYW50LWRlc2lnbi12dWUvZXMvbG9jYWxlL3poX0NOJyxcbiAgICAgICAgLy8gJ2FudC1kZXNpZ24tdnVlL2VzL2xvY2FsZS9lbl9VUycsXG4gICAgICBdLFxuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2J1aWxkL3BsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW4vaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW4vaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnO1xuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQnO1xuXG5pbXBvcnQgbGVnYWN5IGZyb20gJy4vbGVnYWN5JztcbmltcG9ydCB2aXN1YWxpemVyUGx1Z2luIGZyb20gJy4vdmlzdWFsaXplcic7XG4vLyBpbXBvcnQgdHJhbnNmb3JtTGVzcyBmcm9tICcuL3RyYW5zZm9ybUxlc3MnO1xuaW1wb3J0IHdpbmRpY3NzIGZyb20gJy4vd2luZGljc3MnO1xuaW1wb3J0IGNvcHkgZnJvbSAnLi9jb3B5JztcblxuaW1wb3J0IHtcbiAgVklURV9BUFBfQU5BTFlaRSxcbiAgVklURV9BUFBfQ09NUFJFU1NfR1pJUCxcbiAgVklURV9BUFBfQ09NUFJFU1NfR1pJUF9ERUxFVEVfRklMRSxcbiAgVklURV9BUFBfTEVHQUNZLFxufSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmV4cG9ydCBjb25zdCBzc3JUcmFuc2Zvcm1DdXN0b21EaXIgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtdLFxuICAgIG5lZWRSdW50aW1lOiB0cnVlLFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVWaXRlUGx1Z2lucyA9IChpc0J1aWxkOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXG4gICAgdnVlKHtcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXM6IHtcbiAgICAgICAgICAgICd0ZXh0LWNvbGxhcHNlJzogc3NyVHJhbnNmb3JtQ3VzdG9tRGlyLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIHRyYW5zZm9ybUxlc3MoKSxcbiAgICB2dWVKc3goKSxcbiAgICBjb3B5KCksXG4gICAgdnVlU2V0dXBFeHRlbmQoKSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIGNvcHlEdHNGaWxlczogZmFsc2UsXG4gICAgfSksXG4gICAgRGVmaW5lT3B0aW9ucygpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcbiAgICAgICAgICBpbXBvcnRTdHlsZTogJ2xlc3MnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgIH0pXG4gIF07XG4gIC8vIHZpdGVQbHVnaW5zLnB1c2goKTtcbiAgLy8gbGVnYWN5XG4gIFZJVEVfQVBQX0xFR0FDWSAmJiBpc0J1aWxkICYmIHZpdGVQbHVnaW5zLnB1c2gobGVnYWN5KCkpO1xuXG4gIC8vIHZpc3VhbGl6ZXJcbiAgVklURV9BUFBfQU5BTFlaRSAmJiB2aXRlUGx1Z2lucy5wdXNoKHZpc3VhbGl6ZXJQbHVnaW4oKSk7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgLy8gZ3ppcFxuICAgIFZJVEVfQVBQX0NPTVBSRVNTX0daSVAgJiZcbiAgICAgIHZpdGVQbHVnaW5zLnB1c2goXG4gICAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9BUFBfQ09NUFJFU1NfR1pJUF9ERUxFVEVfRklMRSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG4gIHJldHVybiB2aXRlUGx1Z2lucztcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvcGx1Z2luXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2J1aWxkL3BsdWdpbi9sZWdhY3kudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW4vbGVnYWN5LnRzXCI7Ly8gQHRzLWlnbm9yZVxuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICBsZWdhY3koe1xuICAgIHRhcmdldHM6IFsnaWUgPj0gMTEnXSxcbiAgICBhZGRpdGlvbmFsTGVnYWN5UG9seWZpbGxzOiBbJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSddLFxuICB9KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvcGx1Z2luL3Zpc3VhbGl6ZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW4vdmlzdWFsaXplci50c1wiO2ltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gdmlzdWFsaXplcih7XG4gICAgZmlsZW5hbWU6ICcuL25vZGVfbW9kdWxlcy8uY2FjaGUvdmlzdWFsaXplci9zdGF0cy5odG1sJyxcbiAgICBvcGVuOiB0cnVlLFxuICAgIGd6aXBTaXplOiB0cnVlLFxuICAgIGJyb3RsaVNpemU6IHRydWUsXG4gIH0pO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvcGx1Z2luL2NvcHkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9wbHVnaW4vY29weS50c1wiO2ltcG9ydCBjb3B5IGZyb20gJ3JvbGx1cC1wbHVnaW4tY29weSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gY29weSh7XG4gICAgdGFyZ2V0czogW1xuICAgICAgeyBzcmM6ICdSRUFETUUubWQnLCBkZXN0OiAnZGlzdC8nIH0sXG4gICAgICB7IHNyYzogJ3NyYy9zdHlsZS8nLCBkZXN0OiAnZGlzdC8nIH0sXG4gICAgICB7IHNyYzogJ2J1aWxkL3BhY2thZ2UuanNvbicsIGRlc3Q6ICdkaXN0LycgfSxcbiAgICBdLFxuICAgIGhvb2s6ICd3cml0ZUJ1bmRsZScsIC8vIFx1OTRBOVx1NUI1MFx1RkYwQ1x1NjNEMlx1NEVGNlx1OEZEMFx1ODg0Q1x1NTcyOHJvbGx1cFx1NUI4Q1x1NjIxMFx1NjI1M1x1NTMwNVx1NUU3Nlx1NUMwNlx1NjU4N1x1NEVGNlx1NTE5OVx1NTE2NVx1NzhDMVx1NzZEOFx1NEU0Qlx1NTI0RFxuICAgIHZlcmJvc2U6IHRydWVcbiAgfSlcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC9jb25zdGFudC50c1wiOy8vIFx1NTNCQlx1OTY2NCBjb25zb2xlXG5leHBvcnQgY29uc3QgVklURV9EUk9QX0NPTlNPTEUgPSB0cnVlO1xuLy8gXHU1RjAwXHU1NDJGXHU1MTdDXHU1QkI5XG5leHBvcnQgY29uc3QgVklURV9BUFBfTEVHQUNZID0gZmFsc2U7XG4vLyBcdTVGMDBcdTU0MkZcdTUzMDVcdTUyMDZcdTY3OTBcbmV4cG9ydCBjb25zdCBWSVRFX0FQUF9BTkFMWVpFID0gZmFsc2U7XG4vLyBcdTVGMDBcdTU0MkZHemlwXHU1MzhCXHU3RjI5XG5leHBvcnQgY29uc3QgVklURV9BUFBfQ09NUFJFU1NfR1pJUCA9IGZhbHNlO1xuLy8gXHU1RjAwXHU1NDJGR3ppcFx1NTM4Qlx1N0YyOVx1RkYwQ1x1NTIyMFx1OTY2NFx1NTM5Rlx1NjU4N1x1NEVGNlxuZXhwb3J0IGNvbnN0IFZJVEVfQVBQX0NPTVBSRVNTX0daSVBfREVMRVRFX0ZJTEUgPSBmYWxzZTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvdGhlbWUvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC90aGVtZS9pbmRleC50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBsZXNzVG9KUyBmcm9tICdsZXNzLXZhcnMtdG8tanMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgdGhlbWVWYXJpYWJsZXMgPSBsZXNzVG9KUyhcbiAgZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3ZhcmlhYmxlcy5sZXNzJyksICd1dGY4Jylcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsZUFBZTs7O0FDRTNVLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBRW5CLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sb0JBQW9COzs7QUNWM0IsT0FBTyxZQUFZO0FBQ25CLElBQU8saUJBQVEsTUFDYixPQUFPO0FBQUEsRUFDTCxTQUFTLENBQUMsVUFBVTtBQUFBLEVBQ3BCLDJCQUEyQixDQUFDLDZCQUE2QjtBQUMzRCxDQUFDOzs7QUNOcVYsU0FBUyxrQkFBa0I7QUFDblgsSUFBTyxxQkFBUSxNQUFNO0FBQ25CLFNBQU8sV0FBVztBQUFBLElBQ2hCLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxFQUNkLENBQUM7QUFDSDs7O0FDUjRVLE9BQU8sVUFBVTtBQUU3VixJQUFPLGVBQVEsTUFBTTtB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O0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixZQUFZO0FBQUEsVUFDWixtQkFBbUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxZQUNYLHNCQUFzQjtBQUFBLGNBQ3BCO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxVQUNSLENBQUM7QUFBQSxVQUNELHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsa0JBQWtCLE9BQU87QUFBQSxJQUNsQyxjQUFjO0FBQUEsTUFFWixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFHRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
