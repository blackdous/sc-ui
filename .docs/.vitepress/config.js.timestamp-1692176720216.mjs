// .docs/.vitepress/config.js
import { defineConfig } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vitepress@1.0.0-alpha.26_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/vitepress/dist/node/index.js";
import { applyPlugins } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+md-demo-plugins@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/@ruabick/md-demo-plugins/dist/index.mjs";
import { genTemp } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-temp@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/@ruabick/vite-plugin-gen-temp/dist/index.mjs";
import { genApiDoc } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-api-doc@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7_vite@3.2.2_vue@3.2.25/node_modules/@ruabick/vite-plugin-gen-api-doc/dist/index.mjs";
import vueJsx from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2_vue@3.2.25/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// .docs/.vitepress/sidebar.js
var sidebar = {
  "/en/": [
    {
      text: "SC-UI",
      items: [
        { text: "Guide", link: "/en/" },
        { text: "Theme", link: "/en/theme/" },
        { text: "Changelog", link: "/en/changelog/" }
      ]
    },
    {
      text: "General",
      items: [
        { text: "Button", link: "/en/button/" },
        { text: "Loading", link: "/en/loading/" },
        { text: "Scrollbar", link: "/en/scrollbar/" }
      ]
    },
    {
      text: "Data Display",
      items: [
        { text: "Tabs", link: "/en/tabs/" },
        { text: "Table", link: "/en/table/" },
        { text: "Tooltip", link: "/en/tooltip/" },
        { text: "Description", link: "/en/description/" },
        { text: "Link", link: "/en/link" },
        { text: "Tag", link: "/en/tag/" },
        { text: "Badge", link: "/en/badge/" },
        { text: "Ellipsis", link: "/en/ellipsis/" }
      ]
    },
    {
      text: "Data Entry",
      items: [
        { text: "Form", link: "/en/form/" },
        { text: "Radio", link: "/en/radio/" },
        { text: "Input", link: "/en/input/" },
        { text: "Checkbox", link: "/en/checkbox/" },
        { text: "InputNumber", link: "/en/inputNumber/" },
        { text: "Select", link: "/en/select/" },
        { text: "Switch", link: "/en/switch/" },
        { text: "Cascader", link: "/en/cascader/" },
        { text: "ScCascaderNew", link: "/en/scCascader/" },
        { text: "CascaderPanel", link: "/en/cascaderPanel/" },
        { text: "Slider", link: "/en/slider/" },
        { text: "Transfer", link: "/en/transfer/" },
        { text: "DatePicker", link: "/en/datePicker/" },
        { text: "TimePicker", link: "/en/timePicker/" }
      ]
    },
    {
      text: "Navigation",
      items: [
        { text: "Steps", link: "/en/steps/" },
        { text: "Pagination", link: "/en/pagination/" },
        { text: "Dropdown", link: "/en/dropdown/" },
        { text: "Breadcrumb", link: "/en/breadcrumb/" }
      ]
    },
    {
      text: "Feedback",
      items: [
        { text: "Alert", link: "/en/alert/" },
        { text: "Modal", link: "/en/modal/" },
        { text: "ContextMenu", link: "/en/contextMenu/" },
        { text: "Popconfirm", link: "/en/popconfirm/" },
        { text: "Message", link: "/en/message/" },
        { text: "Drawer", link: "/en/drawer/" }
      ]
    },
    {
      text: "From",
      items: [
        { text: "Password", link: "/en/password/" }
      ]
    },
    {
      text: "Other",
      items: [
        { text: "Empty", link: "/en/empty/" },
        { text: "TableColumn", link: "/en/tableColumn/" },
        { text: "Copy", link: "/en/copy/" },
        { text: "Icon", link: "/en/icon/" },
        { text: "FormIp", link: "/en/formIp/" },
        { text: "LottieIcon", link: "/en/lottieicon/" }
      ]
    }
  ],
  "/": [
    {
      text: "SC-UI",
      items: [
        { text: "\u7B80\u4ECB Guide", link: "/" },
        { text: "\u4E3B\u9898\u53D8\u91CF Theme", link: "/theme/" },
        { text: "\u53D8\u66F4\u8BB0\u5F55 Changelog", link: "/changelog/" }
      ]
    },
    {
      text: "\u901A\u7528 General",
      items: [
        { text: "\u6309\u94AE Button", link: "/button/" },
        { text: "\u52A0\u8F7D\u52A8\u753B Loading", link: "/loading/" },
        { text: "\u6EDA\u52A8\u6761 Scrollbar", link: "/scrollbar/" }
      ]
    },
    {
      text: "\u5BFC\u822A",
      items: [
        { text: "\u6B65\u9AA4\u6761 Steps", link: "/steps/" },
        { text: "\u5206\u9875 Pagination", link: "/pagination/" },
        { text: "\u4E0B\u62C9\u83DC\u5355 Dropdown", link: "/dropdown/" },
        { text: "\u9762\u5305\u5C51 Breadcrumb", link: "/breadcrumb/" }
      ]
    },
    {
      text: "\u6570\u636E\u5C55\u793A",
      items: [
        { text: "\u6807\u7B7E\u9875 Tabs", link: "/tabs/" },
        { text: "\u8868\u683C Table", link: "/table/" },
        { text: "\u6587\u5B57\u63D0\u793A Tooltip", link: "/tooltip/" },
        { text: "\u63CF\u8FF0\u5217\u8868 Description", link: "/description/" },
        { text: "\u94FE\u63A5 Link", link: "/link/" },
        { text: "\u6807\u7B7E Tag", link: "/tag/" },
        { text: "\u5FBD\u6807\u6570 Badge", link: "/badge/" },
        { text: "\u6587\u672C\u7701\u7565 Ellipsis", link: "/ellipsis/" }
      ]
    },
    {
      text: "\u6570\u636E\u5F55\u5165",
      items: [
        { text: "\u8868\u5355 Form", link: "/form/" },
        { text: "\u5355\u9009\u6846 Radio", link: "/radio/" },
        { text: "\u8F93\u5165\u6846 Input", link: "/input/" },
        { text: "\u590D\u9009\u6846 Checkbox", link: "/checkbox/" },
        { text: "\u6570\u5B57\u8F93\u5165\u6846 InputNumber", link: "/inputNumber/" },
        { text: "\u9009\u62E9\u5668 Select", link: "/select/" },
        { text: "\u5F00\u5173 Switch", link: "/switch/" },
        { text: "\u7EA7\u8054\u9009\u62E9 Cascader", link: "/cascader/" },
        { text: "\u7EA7\u8054\u9009\u62E9 ScCascaderNew", link: "/scCascader/" },
        { text: "\u7EA7\u8054\u9009\u62E9\u9762\u677F CascaderPanel", link: "/cascaderPanel/" },
        { text: "\u6ED1\u52A8\u8F93\u5165\u6761 Slider", link: "/slider/" },
        { text: "\u7A7F\u68AD\u6846 Transfer", link: "/transfer/" },
        { text: "\u65E5\u671F\u9009\u62E9\u6846 DatePicker", link: "/datePicker/" },
        { text: "\u65F6\u95F4\u9009\u62E9\u6846 TimePicker", link: "/timePicker/" }
      ]
    },
    {
      text: "\u53CD\u9988",
      items: [
        { text: "\u8B66\u544A\u63D0\u793A Alert", link: "/alert/" },
        { text: "\u5F39\u6846 Modal", link: "/modal/" },
        { text: "\u9F20\u6807\u53F3\u952E ContextMenu", link: "/contextMenu/" },
        { text: "\u6C14\u6CE1\u786E\u8BA4\u6846 Popconfirm", link: "/popconfirm/" },
        { text: "\u5168\u5C40\u63D0\u793A Message", link: "/message/" },
        { text: "\u62BD\u5C49 Drawer", link: "/drawer/" }
      ]
    },
    {
      text: "\u8868\u5355",
      items: [
        { text: "\u5BC6\u7801\u6846 Password", link: "/password/" }
      ]
    },
    {
      text: "\u5176\u4ED6",
      items: [
        { text: "\u7A7A\u7EC4\u4EF6 Empty", link: "/empty/" },
        { text: "\u8868\u683CColumn", link: "/tableColumn/" },
        { text: "\u590D\u5236Copy", link: "/copy/" },
        { text: "Icon \u56FE\u6807", link: "/icon/" },
        { text: "FormIp ip\u8F93\u5165\u6846", link: "/formIp/" },
        { text: "LottieIcon \u52A8\u6001Icon", link: "/lottieicon/" }
      ]
    }
  ]
};

// .docs/.vitepress/config.js
import { resolve } from "path";

// build/theme/index.ts
import fs from "fs";
import lessToJS from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/less-vars-to-js@1.3.0/node_modules/less-vars-to-js/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/velen/Desktop/work/sc/frontend/sc-ui/build/theme";
var themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__vite_injected_original_dirname, "./variables.less"), "utf8")
);

// .docs/.vitepress/config.js
var ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  };
};
var config_default = defineConfig({
  lang: "zh-CN",
  lastUpdated: true,
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "sc-ui",
      description: "vue3 ui ant-design-vue"
    },
    "/en/": {
      lang: "en-US",
      title: "sc-ui",
      description: "vue3 ui ant-design-vue"
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    localeLinks: {
      text: "",
      items: [
        { text: "\u7B80\u4F53\u4E2D\u6587", link: "/" },
        { text: "English", link: "/en/" }
      ]
    },
    nav: [{ text: "\u6307\u5357", link: "/guide" }],
    sidebar,
    algolia: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/sc-ui" }
    ]
  },
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: {
          textCollapse: ssrTransformCustomDir,
          loading: ssrTransformCustomDir,
          Clickoutside: ssrTransformCustomDir,
          clickoutside: ssrTransformCustomDir,
          stopEvent: ssrTransformCustomDir
        }
      }
    }
  },
  vite: {
    mode: "production",
    plugins: [genTemp(), genApiDoc(), vueJsx()],
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: ""
        },
        {
          find: "sc-ui",
          replacement: resolve("./src/")
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_debugger: true
        }
      }
    }
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  }
});
export {
  config_default as default,
  ssrTransformCustomDir
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLmRvY3MvLnZpdGVwcmVzcy9jb25maWcuanMiLCAiLmRvY3MvLnZpdGVwcmVzcy9zaWRlYmFyLmpzIiwgImJ1aWxkL3RoZW1lL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS8uZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpLy5kb2NzLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvLmRvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHsgYXBwbHlQbHVnaW5zIH0gZnJvbSAnQHJ1YWJpY2svbWQtZGVtby1wbHVnaW5zJztcbmltcG9ydCB7IGdlblRlbXAgfSBmcm9tICdAcnVhYmljay92aXRlLXBsdWdpbi1nZW4tdGVtcCc7XG5pbXBvcnQgeyBnZW5BcGlEb2MgfSBmcm9tICdAcnVhYmljay92aXRlLXBsdWdpbi1nZW4tYXBpLWRvYyc7XG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAnLi9zaWRlYmFyLmpzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vLi4vYnVpbGQvdGhlbWUvaW5kZXguanMnO1xuXG5leHBvcnQgY29uc3Qgc3NyVHJhbnNmb3JtQ3VzdG9tRGlyID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBbXSxcbiAgICBuZWVkUnVudGltZTogdHJ1ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGxhbmc6ICd6aC1DTicsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy8nIDogJy8nLFxuICBsb2NhbGVzOiB7XG4gICAgJy8nOiB7XG4gICAgICBsYW5nOiAnemgtQ04nLFxuICAgICAgdGl0bGU6ICdzYy11aScsXG4gICAgICBkZXNjcmlwdGlvbjogJ3Z1ZTMgdWkgYW50LWRlc2lnbi12dWUnLFxuICAgIH0sXG4gICAgJy9lbi8nOiB7XG4gICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgdGl0bGU6ICdzYy11aScsXG4gICAgICBkZXNjcmlwdGlvbjogJ3Z1ZTMgdWkgYW50LWRlc2lnbi12dWUnLFxuICAgIH0sXG4gIH0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogJy9sb2dvLnN2ZycsXG4gICAgbG9jYWxlTGlua3M6IHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JywgbGluazogJy8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0VuZ2xpc2gnLCBsaW5rOiAnL2VuLycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBuYXY6IFt7IHRleHQ6ICdcdTYzMDdcdTUzNTcnLCBsaW5rOiAnL2d1aWRlJyB9XSxcbiAgICBzaWRlYmFyLFxuICAgIGFsZ29saWE6IHt9LFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3NjLXVpJyB9LFxuICAgIF0sXG4gIH0sXG4gIHZ1ZToge1xuICAgIHRlbXBsYXRlOiB7XG4gICAgICBzc3I6IHRydWUsXG4gICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgZGlyZWN0aXZlVHJhbnNmb3Jtczoge1xuICAgICAgICAgIHRleHRDb2xsYXBzZTogc3NyVHJhbnNmb3JtQ3VzdG9tRGlyLFxuICAgICAgICAgIGxvYWRpbmc6IHNzclRyYW5zZm9ybUN1c3RvbURpcixcbiAgICAgICAgICBDbGlja291dHNpZGU6IHNzclRyYW5zZm9ybUN1c3RvbURpcixcbiAgICAgICAgICBjbGlja291dHNpZGU6IHNzclRyYW5zZm9ybUN1c3RvbURpcixcbiAgICAgICAgICBzdG9wRXZlbnQ6IHNzclRyYW5zZm9ybUN1c3RvbURpclxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB2aXRlOiB7XG4gICAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICAgIHBsdWdpbnM6IFtnZW5UZW1wKCksIGdlbkFwaURvYygpLHZ1ZUpzeCgpXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15+LywgXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogJ3NjLXVpJyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZSgnLi9zcmMvJylcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIGxlc3M6IHtcbiAgICAgICAgICAvLyBtb2RpZnlWYXJzOiB0aGVtZVZhcmlhYmxlcyxcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgYXBwbHlQbHVnaW5zKG1kKTtcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXG4gICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS8uZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpLy5kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpLy5kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiOy8vIGludGVyZmFjZSBTaWRlYmFySXRlbXNUeXBlIHtcbi8vICAgdGV4dDogc3RyaW5nXG4vLyAgIGl0ZW1zOiBJdGVtVHlwZVtdXG4vLyB9XG4vLyBpbnRlcmZhY2UgSXRlbVR5cGUge1xuLy8gICB0ZXh0OiBzdHJpbmdcbi8vICAgbGluazogc3RyaW5nXG4vLyAgIFtrZXk6c3RyaW5nXTogYW55XG4vLyB9XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgJy9lbi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1NDLVVJJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0d1aWRlJywgbGluazogJy9lbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1RoZW1lJywgbGluazogJy9lbi90aGVtZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0NoYW5nZWxvZycsIGxpbms6ICcvZW4vY2hhbmdlbG9nLycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2VuZXJhbCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdCdXR0b24nLCBsaW5rOiAnL2VuL2J1dHRvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0xvYWRpbmcnLCBsaW5rOiAnL2VuL2xvYWRpbmcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdTY3JvbGxiYXInLCBsaW5rOiAnL2VuL3Njcm9sbGJhci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBEaXNwbGF5JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1RhYnMnLCBsaW5rOiAnL2VuL3RhYnMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUYWJsZScsIGxpbms6ICcvZW4vdGFibGUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUb29sdGlwJywgbGluazogJy9lbi90b29sdGlwLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVzY3JpcHRpb24nLCBsaW5rOiAnL2VuL2Rlc2NyaXB0aW9uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGluaycsIGxpbms6ICcvZW4vbGluaycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVGFnJywgbGluazogJy9lbi90YWcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdCYWRnZScsIGxpbms6ICcvZW4vYmFkZ2UvJyB9LFxuICAgICAgICB7IHRleHQ6ICdFbGxpcHNpcycsIGxpbms6ICcvZW4vZWxsaXBzaXMvJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RhdGEgRW50cnknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRm9ybScsIGxpbms6ICcvZW4vZm9ybS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1JhZGlvJywgbGluazogJy9lbi9yYWRpby8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0lucHV0JywgbGluazogJy9lbi9pbnB1dC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0NoZWNrYm94JywgbGluazogJy9lbi9jaGVja2JveC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0lucHV0TnVtYmVyJywgbGluazogJy9lbi9pbnB1dE51bWJlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1NlbGVjdCcsIGxpbms6ICcvZW4vc2VsZWN0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3dpdGNoJywgbGluazogJy9lbi9zd2l0Y2gvJyB9LFxuICAgICAgICB7IHRleHQ6ICdDYXNjYWRlcicsIGxpbms6ICcvZW4vY2FzY2FkZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdTY0Nhc2NhZGVyTmV3JywgbGluazogJy9lbi9zY0Nhc2NhZGVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2FzY2FkZXJQYW5lbCcsIGxpbms6ICcvZW4vY2FzY2FkZXJQYW5lbC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1NsaWRlcicsIGxpbms6ICcvZW4vc2xpZGVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXInLCBsaW5rOiAnL2VuL3RyYW5zZmVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGF0ZVBpY2tlcicsIGxpbms6ICcvZW4vZGF0ZVBpY2tlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1RpbWVQaWNrZXInLCBsaW5rOiAnL2VuL3RpbWVQaWNrZXIvJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05hdmlnYXRpb24nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU3RlcHMnLCBsaW5rOiAnL2VuL3N0ZXBzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUGFnaW5hdGlvbicsIGxpbms6ICcvZW4vcGFnaW5hdGlvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0Ryb3Bkb3duJywgbGluazogJy9lbi9kcm9wZG93bi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0JyZWFkY3J1bWInLCBsaW5rOiAnL2VuL2JyZWFkY3J1bWIvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRmVlZGJhY2snLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQWxlcnQnLCBsaW5rOiAnL2VuL2FsZXJ0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW9kYWwnLCBsaW5rOiAnL2VuL21vZGFsLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udGV4dE1lbnUnLCBsaW5rOiAnL2VuL2NvbnRleHRNZW51LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUG9wY29uZmlybScsIGxpbms6ICcvZW4vcG9wY29uZmlybS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ01lc3NhZ2UnLCBsaW5rOiAnL2VuL21lc3NhZ2UvJyB9LFxuICAgICAgICB7IHRleHQ6ICdEcmF3ZXInLCBsaW5rOiAnL2VuL2RyYXdlci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRnJvbScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdQYXNzd29yZCcsIGxpbms6ICcvZW4vcGFzc3dvcmQvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnT3RoZXInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRW1wdHknLCBsaW5rOiAnL2VuL2VtcHR5LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVGFibGVDb2x1bW4nLCBsaW5rOiAnL2VuL3RhYmxlQ29sdW1uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29weScsIGxpbms6ICcvZW4vY29weS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0ljb24nLCBsaW5rOiAnL2VuL2ljb24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdGb3JtSXAnLCBsaW5rOiAnL2VuL2Zvcm1JcC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0xvdHRpZUljb24nLCBsaW5rOiAnL2VuL2xvdHRpZWljb24vJyB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICAnLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU0MtVUknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU3QjgwXHU0RUNCIEd1aWRlJywgbGluazogJy8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NEUzQlx1OTg5OFx1NTNEOFx1OTFDRiBUaGVtZScsIGxpbms6ICcvdGhlbWUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUzRDhcdTY2RjRcdThCQjBcdTVGNTUgQ2hhbmdlbG9nJywgbGluazogJy9jaGFuZ2Vsb2cvJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTkwMUFcdTc1MjggR2VuZXJhbCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTYzMDlcdTk0QUUgQnV0dG9uJywgbGluazogJy9idXR0b24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUyQTBcdThGN0RcdTUyQThcdTc1M0IgTG9hZGluZycsIGxpbms6ICcvbG9hZGluZy8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NkVEQVx1NTJBOFx1Njc2MSBTY3JvbGxiYXInLCBsaW5rOiAnL3Njcm9sbGJhci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1QkZDXHU4MjJBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NkI2NVx1OUFBNFx1Njc2MSBTdGVwcycsIGxpbms6ICcvc3RlcHMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUyMDZcdTk4NzUgUGFnaW5hdGlvbicsIGxpbms6ICcvcGFnaW5hdGlvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NEUwQlx1NjJDOVx1ODNEQ1x1NTM1NSBEcm9wZG93bicsIGxpbms6ICcvZHJvcGRvd24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTk3NjJcdTUzMDVcdTVDNTEgQnJlYWRjcnVtYicsIGxpbms6ICcvYnJlYWRjcnVtYi8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU1QzU1XHU3OTNBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NjgwN1x1N0I3RVx1OTg3NSBUYWJzJywgbGluazogJy90YWJzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU4ODY4XHU2ODNDIFRhYmxlJywgbGluazogJy90YWJsZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQSBUb29sdGlwJywgbGluazogJy90b29sdGlwLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2M0NGXHU4RkYwXHU1MjE3XHU4ODY4IERlc2NyaXB0aW9uJywgbGluazogJy9kZXNjcmlwdGlvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1OTRGRVx1NjNBNSBMaW5rJywgbGluazogJy9saW5rLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2ODA3XHU3QjdFIFRhZycsIGxpbms6ICcvdGFnLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1RkJEXHU2ODA3XHU2NTcwIEJhZGdlJywgbGluazogJy9iYWRnZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjU4N1x1NjcyQ1x1NzcwMVx1NzU2NSBFbGxpcHNpcycsIGxpbms6ICcvZWxsaXBzaXMvJyB9LFxuXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU1RjU1XHU1MTY1JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1ODg2OFx1NTM1NSBGb3JtJywgbGluazogJy9mb3JtLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1MzU1XHU5MDA5XHU2ODQ2IFJhZGlvJywgbGluazogJy9yYWRpby8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1OEY5M1x1NTE2NVx1Njg0NiBJbnB1dCcsIGxpbms6ICcvaW5wdXQvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTU5MERcdTkwMDlcdTY4NDYgQ2hlY2tib3gnLCBsaW5rOiAnL2NoZWNrYm94LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2NTcwXHU1QjU3XHU4RjkzXHU1MTY1XHU2ODQ2IElucHV0TnVtYmVyJywgbGluazogJy9pbnB1dE51bWJlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1OTAwOVx1NjJFOVx1NTY2OCBTZWxlY3QnLCBsaW5rOiAnL3NlbGVjdC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NUYwMFx1NTE3MyBTd2l0Y2gnLCBsaW5rOiAnL3N3aXRjaC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1N0VBN1x1ODA1NFx1OTAwOVx1NjJFOSBDYXNjYWRlcicsIGxpbms6ICcvY2FzY2FkZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTdFQTdcdTgwNTRcdTkwMDlcdTYyRTkgU2NDYXNjYWRlck5ldycsIGxpbms6ICcvc2NDYXNjYWRlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1N0VBN1x1ODA1NFx1OTAwOVx1NjJFOVx1OTc2Mlx1Njc3RiBDYXNjYWRlclBhbmVsJywgbGluazogJy9jYXNjYWRlclBhbmVsLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2RUQxXHU1MkE4XHU4RjkzXHU1MTY1XHU2NzYxIFNsaWRlcicsIGxpbms6ICcvc2xpZGVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU3QTdGXHU2OEFEXHU2ODQ2IFRyYW5zZmVyJywgbGluazogJy90cmFuc2Zlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjVFNVx1NjcxRlx1OTAwOVx1NjJFOVx1Njg0NiBEYXRlUGlja2VyJywgbGluazogJy9kYXRlUGlja2VyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2NUY2XHU5NUY0XHU5MDA5XHU2MkU5XHU2ODQ2IFRpbWVQaWNrZXInLCBsaW5rOiAnL3RpbWVQaWNrZXIvJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NTNDRFx1OTk4OCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdThCNjZcdTU0NEFcdTYzRDBcdTc5M0EgQWxlcnQnLCBsaW5rOiAnL2FsZXJ0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1RjM5XHU2ODQ2IE1vZGFsJywgbGluazogJy9tb2RhbC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1OUYyMFx1NjgwN1x1NTNGM1x1OTUyRSBDb250ZXh0TWVudScsIGxpbms6ICcvY29udGV4dE1lbnUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTZDMTRcdTZDRTFcdTc4NkVcdThCQTRcdTY4NDYgUG9wY29uZmlybScsIGxpbms6ICcvcG9wY29uZmlybS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTE2OFx1NUM0MFx1NjNEMFx1NzkzQSBNZXNzYWdlJywgbGluazogJy9tZXNzYWdlLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2MkJEXHU1QzQ5IERyYXdlcicsIGxpbms6ICcvZHJhd2VyLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTg4NjhcdTUzNTUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU1QkM2XHU3ODAxXHU2ODQ2IFBhc3N3b3JkJywgbGluazogJy9wYXNzd29yZC8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTUxNzZcdTRFRDYnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU3QTdBXHU3RUM0XHU0RUY2IEVtcHR5JywgbGluazogJy9lbXB0eS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1ODg2OFx1NjgzQ0NvbHVtbicsIGxpbms6ICcvdGFibGVDb2x1bW4vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTU5MERcdTUyMzZDb3B5JywgbGluazogJy9jb3B5LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSWNvbiBcdTU2RkVcdTY4MDcnLCBsaW5rOiAnL2ljb24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdGb3JtSXAgaXBcdThGOTNcdTUxNjVcdTY4NDYnLCBsaW5rOiAnL2Zvcm1JcC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0xvdHRpZUljb24gXHU1MkE4XHU2MDAxSWNvbicsIGxpbms6ICcvbG90dGllaWNvbi8nIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG59OyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC90aGVtZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC90aGVtZS9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2J1aWxkL3RoZW1lL2luZGV4LnRzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IGxlc3NUb0pTIGZyb20gJ2xlc3MtdmFycy10by1qcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBjb25zdCB0aGVtZVZhcmlhYmxlcyA9IGxlc3NUb0pTKFxuICBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vdmFyaWFibGVzLmxlc3MnKSwgJ3V0ZjgnKVxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFYsU0FBUyxvQkFBb0I7QUFDelgsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU8sWUFBWTs7O0FDS1osSUFBTSxVQUFVO0FBQUEsRUFDckIsUUFBUTtBQUFBLElB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
