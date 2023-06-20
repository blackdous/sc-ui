// docs/.vitepress/config.js
import { defineConfig } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vitepress@1.0.0-alpha.26_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/vitepress/dist/node/index.js";
import { applyPlugins } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+md-demo-plugins@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/@ruabick/md-demo-plugins/dist/index.mjs";
import { genTemp } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-temp@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7/node_modules/@ruabick/vite-plugin-gen-temp/dist/index.mjs";
import { genApiDoc } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-api-doc@0.2.9_@algolia+client-search@4.14.2_less@4.1.3_terser@5.17.7_vite@3.2.2_vue@3.2.25/node_modules/@ruabick/vite-plugin-gen-api-doc/dist/index.mjs";
import vueJsx from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2_vue@3.2.25/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// docs/.vitepress/sidebar.js
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
        { text: "Badge", link: "/en/badge/" }
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
        { text: "\u5FBD\u6807\u6570 Badge", link: "/badge/" }
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

// docs/.vitepress/config.js
import { resolve } from "path";

// build/theme/index.ts
import fs from "fs";
import lessToJS from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/less-vars-to-js@1.3.0/node_modules/less-vars-to-js/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/velen/Desktop/work/sc/frontend/sc-ui/build/theme";
var themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__vite_injected_original_dirname, "./variables.less"), "utf8")
);

// docs/.vitepress/config.js
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qcyIsICJidWlsZC90aGVtZS9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcbmltcG9ydCB7IGFwcGx5UGx1Z2lucyB9IGZyb20gJ0BydWFiaWNrL21kLWRlbW8tcGx1Z2lucyc7XG5pbXBvcnQgeyBnZW5UZW1wIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLXRlbXAnO1xuaW1wb3J0IHsgZ2VuQXBpRG9jIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLWFwaS1kb2MnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB0aGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uLy4uL2J1aWxkL3RoZW1lL2luZGV4LmpzJztcblxuZXhwb3J0IGNvbnN0IHNzclRyYW5zZm9ybUN1c3RvbURpciA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogW10sXG4gICAgbmVlZFJ1bnRpbWU6IHRydWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBsYW5nOiAnemgtQ04nLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvJyA6ICcvJyxcbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgIHRpdGxlOiAnc2MtdWknLFxuICAgICAgZGVzY3JpcHRpb246ICd2dWUzIHVpIGFudC1kZXNpZ24tdnVlJyxcbiAgICB9LFxuICAgICcvZW4vJzoge1xuICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgIHRpdGxlOiAnc2MtdWknLFxuICAgICAgZGVzY3JpcHRpb246ICd2dWUzIHVpIGFudC1kZXNpZ24tdnVlJyxcbiAgICB9LFxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvbG9nby5zdmcnLFxuICAgIGxvY2FsZUxpbmtzOiB7XG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsIGxpbms6ICcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdFbmdsaXNoJywgbGluazogJy9lbi8nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmF2OiBbeyB0ZXh0OiAnXHU2MzA3XHU1MzU3JywgbGluazogJy9ndWlkZScgfV0sXG4gICAgc2lkZWJhcixcbiAgICBhbGdvbGlhOiB7fSxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYy11aScgfSxcbiAgICBdLFxuICB9LFxuICB2dWU6IHtcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgc3NyOiB0cnVlLFxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXM6IHtcbiAgICAgICAgICB0ZXh0Q29sbGFwc2U6IHNzclRyYW5zZm9ybUN1c3RvbURpcixcbiAgICAgICAgICBsb2FkaW5nOiBzc3JUcmFuc2Zvcm1DdXN0b21EaXIsXG4gICAgICAgICAgQ2xpY2tvdXRzaWRlOiBzc3JUcmFuc2Zvcm1DdXN0b21EaXIsXG4gICAgICAgICAgY2xpY2tvdXRzaWRlOiBzc3JUcmFuc2Zvcm1DdXN0b21EaXIsXG4gICAgICAgICAgc3RvcEV2ZW50OiBzc3JUcmFuc2Zvcm1DdXN0b21EaXJcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdml0ZToge1xuICAgIG1vZGU6ICdwcm9kdWN0aW9uJyxcbiAgICBwbHVnaW5zOiBbZ2VuVGVtcCgpLCBnZW5BcGlEb2MoKSx2dWVKc3goKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9efi8sIFxuICAgICAgICAgIHJlcGxhY2VtZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6ICdzYy11aScsXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoJy4vc3JjLycpXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBsZXNzOiB7XG4gICAgICAgICAgLy8gbW9kaWZ5VmFyczogdGhlbWVWYXJpYWJsZXMsXG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgYXBwbHlQbHVnaW5zKG1kKTtcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXG4gICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvZG9jcy8udml0ZXByZXNzL3NpZGViYXIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiOy8vIGludGVyZmFjZSBTaWRlYmFySXRlbXNUeXBlIHtcbi8vICAgdGV4dDogc3RyaW5nXG4vLyAgIGl0ZW1zOiBJdGVtVHlwZVtdXG4vLyB9XG4vLyBpbnRlcmZhY2UgSXRlbVR5cGUge1xuLy8gICB0ZXh0OiBzdHJpbmdcbi8vICAgbGluazogc3RyaW5nXG4vLyAgIFtrZXk6c3RyaW5nXTogYW55XG4vLyB9XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgJy9lbi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1NDLVVJJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0d1aWRlJywgbGluazogJy9lbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1RoZW1lJywgbGluazogJy9lbi90aGVtZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0NoYW5nZWxvZycsIGxpbms6ICcvZW4vY2hhbmdlbG9nLycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2VuZXJhbCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdCdXR0b24nLCBsaW5rOiAnL2VuL2J1dHRvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0xvYWRpbmcnLCBsaW5rOiAnL2VuL2xvYWRpbmcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdTY3JvbGxiYXInLCBsaW5rOiAnL2VuL3Njcm9sbGJhci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBEaXNwbGF5JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1RhYnMnLCBsaW5rOiAnL2VuL3RhYnMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUYWJsZScsIGxpbms6ICcvZW4vdGFibGUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUb29sdGlwJywgbGluazogJy9lbi90b29sdGlwLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVzY3JpcHRpb24nLCBsaW5rOiAnL2VuL2Rlc2NyaXB0aW9uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGluaycsIGxpbms6ICcvZW4vbGluaycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVGFnJywgbGluazogJy9lbi90YWcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdCYWRnZScsIGxpbms6ICcvZW4vYmFkZ2UvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBFbnRyeScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdGb3JtJywgbGluazogJy9lbi9mb3JtLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmFkaW8nLCBsaW5rOiAnL2VuL3JhZGlvLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5wdXQnLCBsaW5rOiAnL2VuL2lucHV0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2hlY2tib3gnLCBsaW5rOiAnL2VuL2NoZWNrYm94LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5wdXROdW1iZXInLCBsaW5rOiAnL2VuL2lucHV0TnVtYmVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2VsZWN0JywgbGluazogJy9lbi9zZWxlY3QvJyB9LFxuICAgICAgICB7IHRleHQ6ICdTd2l0Y2gnLCBsaW5rOiAnL2VuL3N3aXRjaC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0Nhc2NhZGVyJywgbGluazogJy9lbi9jYXNjYWRlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1NjQ2FzY2FkZXJOZXcnLCBsaW5rOiAnL2VuL3NjQ2FzY2FkZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdDYXNjYWRlclBhbmVsJywgbGluazogJy9lbi9jYXNjYWRlclBhbmVsLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2xpZGVyJywgbGluazogJy9lbi9zbGlkZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUcmFuc2ZlcicsIGxpbms6ICcvZW4vdHJhbnNmZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdEYXRlUGlja2VyJywgbGluazogJy9lbi9kYXRlUGlja2VyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVGltZVBpY2tlcicsIGxpbms6ICcvZW4vdGltZVBpY2tlci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTmF2aWdhdGlvbicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdTdGVwcycsIGxpbms6ICcvZW4vc3RlcHMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdQYWdpbmF0aW9uJywgbGluazogJy9lbi9wYWdpbmF0aW9uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRHJvcGRvd24nLCBsaW5rOiAnL2VuL2Ryb3Bkb3duLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnJlYWRjcnVtYicsIGxpbms6ICcvZW4vYnJlYWRjcnVtYi8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdGZWVkYmFjaycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdBbGVydCcsIGxpbms6ICcvZW4vYWxlcnQvJyB9LFxuICAgICAgICB7IHRleHQ6ICdNb2RhbCcsIGxpbms6ICcvZW4vbW9kYWwvJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250ZXh0TWVudScsIGxpbms6ICcvZW4vY29udGV4dE1lbnUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdQb3Bjb25maXJtJywgbGluazogJy9lbi9wb3Bjb25maXJtLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWVzc2FnZScsIGxpbms6ICcvZW4vbWVzc2FnZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0RyYXdlcicsIGxpbms6ICcvZW4vZHJhd2VyLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdGcm9tJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1Bhc3N3b3JkJywgbGluazogJy9lbi9wYXNzd29yZC8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPdGhlcicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdFbXB0eScsIGxpbms6ICcvZW4vZW1wdHkvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUYWJsZUNvbHVtbicsIGxpbms6ICcvZW4vdGFibGVDb2x1bW4vJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb3B5JywgbGluazogJy9lbi9jb3B5LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSWNvbicsIGxpbms6ICcvZW4vaWNvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0Zvcm1JcCcsIGxpbms6ICcvZW4vZm9ybUlwLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTG90dGllSWNvbicsIGxpbms6ICcvZW4vbG90dGllaWNvbi8nIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gICcvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdTQy1VSScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTdCODBcdTRFQ0IgR3VpZGUnLCBsaW5rOiAnLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU0RTNCXHU5ODk4XHU1M0Q4XHU5MUNGIFRoZW1lJywgbGluazogJy90aGVtZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTNEOFx1NjZGNFx1OEJCMFx1NUY1NSBDaGFuZ2Vsb2cnLCBsaW5rOiAnL2NoYW5nZWxvZy8nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1OTAxQVx1NzUyOCBHZW5lcmFsJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NjMwOVx1OTRBRSBCdXR0b24nLCBsaW5rOiAnL2J1dHRvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTJBMFx1OEY3RFx1NTJBOFx1NzUzQiBMb2FkaW5nJywgbGluazogJy9sb2FkaW5nLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2RURBXHU1MkE4XHU2NzYxIFNjcm9sbGJhcicsIGxpbms6ICcvc2Nyb2xsYmFyLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTVCRkNcdTgyMkEnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU2QjY1XHU5QUE0XHU2NzYxIFN0ZXBzJywgbGluazogJy9zdGVwcy8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTIwNlx1OTg3NSBQYWdpbmF0aW9uJywgbGluazogJy9wYWdpbmF0aW9uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU0RTBCXHU2MkM5XHU4M0RDXHU1MzU1IERyb3Bkb3duJywgbGluazogJy9kcm9wZG93bi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1OTc2Mlx1NTMwNVx1NUM1MSBCcmVhZGNydW1iJywgbGluazogJy9icmVhZGNydW1iLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTVDNTVcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU2ODA3XHU3QjdFXHU5ODc1IFRhYnMnLCBsaW5rOiAnL3RhYnMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTg4NjhcdTY4M0MgVGFibGUnLCBsaW5rOiAnL3RhYmxlLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBIFRvb2x0aXAnLCBsaW5rOiAnL3Rvb2x0aXAvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTYzQ0ZcdThGRjBcdTUyMTdcdTg4NjggRGVzY3JpcHRpb24nLCBsaW5rOiAnL2Rlc2NyaXB0aW9uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU5NEZFXHU2M0E1IExpbmsnLCBsaW5rOiAnL2xpbmsvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTY4MDdcdTdCN0UgVGFnJywgbGluazogJy90YWcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTVGQkRcdTY4MDdcdTY1NzAgQmFkZ2UnLCBsaW5rOiAnL2JhZGdlLycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUY1NVx1NTE2NScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTg4NjhcdTUzNTUgRm9ybScsIGxpbms6ICcvZm9ybS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTM1NVx1OTAwOVx1Njg0NiBSYWRpbycsIGxpbms6ICcvcmFkaW8vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdThGOTNcdTUxNjVcdTY4NDYgSW5wdXQnLCBsaW5rOiAnL2lucHV0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1OTBEXHU5MDA5XHU2ODQ2IENoZWNrYm94JywgbGluazogJy9jaGVja2JveC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjU3MFx1NUI1N1x1OEY5M1x1NTE2NVx1Njg0NiBJbnB1dE51bWJlcicsIGxpbms6ICcvaW5wdXROdW1iZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTkwMDlcdTYyRTlcdTU2NjggU2VsZWN0JywgbGluazogJy9zZWxlY3QvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTVGMDBcdTUxNzMgU3dpdGNoJywgbGluazogJy9zd2l0Y2gvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTdFQTdcdTgwNTRcdTkwMDlcdTYyRTkgQ2FzY2FkZXInLCBsaW5rOiAnL2Nhc2NhZGVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU3RUE3XHU4MDU0XHU5MDA5XHU2MkU5IFNjQ2FzY2FkZXJOZXcnLCBsaW5rOiAnL3NjQ2FzY2FkZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTdFQTdcdTgwNTRcdTkwMDlcdTYyRTlcdTk3NjJcdTY3N0YgQ2FzY2FkZXJQYW5lbCcsIGxpbms6ICcvY2FzY2FkZXJQYW5lbC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NkVEMVx1NTJBOFx1OEY5M1x1NTE2NVx1Njc2MSBTbGlkZXInLCBsaW5rOiAnL3NsaWRlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1N0E3Rlx1NjhBRFx1Njg0NiBUcmFuc2ZlcicsIGxpbms6ICcvdHJhbnNmZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTY1RTVcdTY3MUZcdTkwMDlcdTYyRTlcdTY4NDYgRGF0ZVBpY2tlcicsIGxpbms6ICcvZGF0ZVBpY2tlci8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjVGNlx1OTVGNFx1OTAwOVx1NjJFOVx1Njg0NiBUaW1lUGlja2VyJywgbGluazogJy90aW1lUGlja2VyLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTUzQ0RcdTk5ODgnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU4QjY2XHU1NDRBXHU2M0QwXHU3OTNBIEFsZXJ0JywgbGluazogJy9hbGVydC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NUYzOVx1Njg0NiBNb2RhbCcsIGxpbms6ICcvbW9kYWwvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTlGMjBcdTY4MDdcdTUzRjNcdTk1MkUgQ29udGV4dE1lbnUnLCBsaW5rOiAnL2NvbnRleHRNZW51LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2QzE0XHU2Q0UxXHU3ODZFXHU4QkE0XHU2ODQ2IFBvcGNvbmZpcm0nLCBsaW5rOiAnL3BvcGNvbmZpcm0vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUxNjhcdTVDNDBcdTYzRDBcdTc5M0EgTWVzc2FnZScsIGxpbms6ICcvbWVzc2FnZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjJCRFx1NUM0OSBEcmF3ZXInLCBsaW5rOiAnL2RyYXdlci8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU4ODY4XHU1MzU1JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NUJDNlx1NzgwMVx1Njg0NiBQYXNzd29yZCcsIGxpbms6ICcvcGFzc3dvcmQvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1N0E3QVx1N0VDNFx1NEVGNiBFbXB0eScsIGxpbms6ICcvZW1wdHkvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTg4NjhcdTY4M0NDb2x1bW4nLCBsaW5rOiAnL3RhYmxlQ29sdW1uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1OTBEXHU1MjM2Q29weScsIGxpbms6ICcvY29weS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0ljb24gXHU1NkZFXHU2ODA3JywgbGluazogJy9pY29uLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRm9ybUlwIGlwXHU4RjkzXHU1MTY1XHU2ODQ2JywgbGluazogJy9mb3JtSXAvJyB9LFxuICAgICAgICB7IHRleHQ6ICdMb3R0aWVJY29uIFx1NTJBOFx1NjAwMUljb24nLCBsaW5rOiAnL2xvdHRpZWljb24vJyB9XG4gICAgICBdXG4gICAgfVxuICBdLFxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvdGhlbWUvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9idWlsZC90aGVtZS9pbmRleC50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBsZXNzVG9KUyBmcm9tICdsZXNzLXZhcnMtdG8tanMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgdGhlbWVWYXJpYWJsZXMgPSBsZXNzVG9KUyhcbiAgZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3ZhcmlhYmxlcy5sZXNzJyksICd1dGY4Jylcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlWLFNBQVMsb0JBQW9CO0FBQ3RYLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUN4QixTQUFTLGlCQUFpQjtBQUMxQixPQUFPLFlBQVk7OztBQ0taLElBQU0sVUFBVTtBQUFBLEVBQ3JCLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sU0FBUyxNQUFNLE9BQU87QUFBQSxRQUM5QixFQUFFLE1BQU0sU0FBUyxNQUFNLGFBQWE7QUFBQSxRQUNwQyxFQUFFLE1BQU0sYUFBYSxNQUFNLGlCQUFpQjtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sY0FBYztBQUFBLFFBQ3RDLEVBQUUsTUFBTSxXQUFXLE1BQU0sZUFBZTtBQUFBLFFBQ3hD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
