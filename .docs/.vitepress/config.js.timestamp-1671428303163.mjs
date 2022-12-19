// docs/.vitepress/config.js
import { defineConfig } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/vitepress@1.0.0-alpha.26_less@4.1.3/node_modules/vitepress/dist/node/index.js";
import { applyPlugins } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+md-demo-plugins@0.2.9_less@4.1.3/node_modules/@ruabick/md-demo-plugins/dist/index.mjs";
import { genTemp } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-temp@0.2.9_less@4.1.3/node_modules/@ruabick/vite-plugin-gen-temp/dist/index.mjs";
import { genApiDoc } from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-api-doc@0.2.9_mk5g2gtn4uzmc7m7alnjzcl23m/node_modules/@ruabick/vite-plugin-gen-api-doc/dist/index.mjs";
import vueJsx from "file:///Users/velen/Desktop/work/sc/frontend/sc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2+vue@3.2.25/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// docs/.vitepress/sidebar.js
var sidebar = {
  "/en/": [
    {
      text: "SC-UI",
      items: [
        { text: "Guide", link: "/en/" }
      ]
    },
    {
      text: "General",
      items: [
        { text: "Button", link: "/en/button/" },
        { text: "Loading", link: "/en/loading/" }
      ]
    },
    {
      text: "Data Display",
      items: [
        { text: "Tabs", link: "/en/tabs/" },
        { text: "Table", link: "/en/table/" },
        { text: "Tooltip", link: "/en/tooltip/" }
      ]
    },
    {
      text: "Data Entry",
      items: [
        { text: "Radio", link: "/en/radio/" },
        { text: "Input", link: "/en/input/" },
        { text: "Checkbox", link: "/en/checkbox/" },
        { text: "InputNumber", link: "/en/inputNumber/" },
        { text: "Select", link: "/en/select/" },
        { text: "Switch", link: "/en/switch/" }
      ]
    },
    {
      text: "Navigation",
      items: [
        { text: "Steps", link: "/en/steps/" },
        { text: "Pagination", link: "/en/pagination/" },
        { text: "Dropdown", link: "/en/dropdown/" }
      ]
    },
    {
      text: "Feedback",
      items: [
        { text: "Alert", link: "/en/alert/" },
        { text: "Modal", link: "/en/modal/" },
        { text: "contextMenu", link: "/contextMenu/" }
      ]
    },
    {
      text: "From",
      items: [
        { text: "Password", link: "/en/password/" }
      ]
    }
  ],
  "/": [
    {
      text: "SC-UI",
      items: [
        { text: "\u7B80\u4ECB", link: "/" }
      ]
    },
    {
      text: "\u901A\u7528",
      items: [
        { text: "\u6309\u94AE", link: "/button/" },
        { text: "\u52A0\u8F7D\u52A8\u753B", link: "/loading/" }
      ]
    },
    {
      text: "\u5BFC\u822A",
      items: [
        { text: "\u6B65\u9AA4\u6761", link: "/steps/" },
        { text: "\u5206\u9875", link: "/pagination/" },
        { text: "\u4E0B\u62C9\u83DC\u5355", link: "/dropdown/" }
      ]
    },
    {
      text: "\u6570\u636E\u5C55\u793A",
      items: [
        { text: "\u6807\u7B7E\u9875", link: "/tabs/" },
        { text: "\u8868\u683C", link: "/table/" },
        { text: "\u6587\u5B57\u63D0\u793A", link: "/tooltip/" }
      ]
    },
    {
      text: "\u6570\u636E\u5F55\u5165",
      items: [
        { text: "\u5355\u9009\u6846", link: "/radio/" },
        { text: "\u8F93\u5165\u6846", link: "/input/" },
        { text: "\u590D\u9009\u6846", link: "/checkbox/" },
        { text: "\u6570\u5B57\u8F93\u5165\u6846", link: "/inputNumber/" },
        { text: "\u9009\u62E9\u5668", link: "/select/" },
        { text: "\u5F00\u5173", link: "/switch/" }
      ]
    },
    {
      text: "\u53CD\u9988",
      items: [
        { text: "\u8B66\u544A\u63D0\u793A", link: "/alert/" },
        { text: "\u5F39\u6846", link: "/modal/" },
        { text: "\u9F20\u6807\u53F3\u952E", link: "/contextMenu/" }
      ]
    },
    {
      text: "\u8868\u5355",
      items: [
        { text: "\u5BC6\u7801\u6846", link: "/password/" }
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
          loading: ssrTransformCustomDir
        }
      }
    }
  },
  vite: {
    plugins: [genTemp(), genApiDoc(), vueJsx()],
    resolve: {
      alias: {
        "sc-ui": resolve("./src/")
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: themeVariables,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qcyIsICJidWlsZC90aGVtZS9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcbmltcG9ydCB7IGFwcGx5UGx1Z2lucyB9IGZyb20gJ0BydWFiaWNrL21kLWRlbW8tcGx1Z2lucyc7XG5pbXBvcnQgeyBnZW5UZW1wIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLXRlbXAnO1xuaW1wb3J0IHsgZ2VuQXBpRG9jIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLWFwaS1kb2MnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB0aGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uLy4uL2J1aWxkL3RoZW1lL2luZGV4LmpzJztcblxuZXhwb3J0IGNvbnN0IHNzclRyYW5zZm9ybUN1c3RvbURpciA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogW10sXG4gICAgbmVlZFJ1bnRpbWU6IHRydWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBsYW5nOiAnemgtQ04nLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvJyA6ICcvJyxcbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgIHRpdGxlOiAnc2MtdWknLFxuICAgICAgZGVzY3JpcHRpb246ICd2dWUzIHVpIGFudC1kZXNpZ24tdnVlJyxcbiAgICB9LFxuICAgICcvZW4vJzoge1xuICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgIHRpdGxlOiAnc2MtdWknLFxuICAgICAgZGVzY3JpcHRpb246ICd2dWUzIHVpIGFudC1kZXNpZ24tdnVlJyxcbiAgICB9LFxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvbG9nby5zdmcnLFxuICAgIGxvY2FsZUxpbmtzOiB7XG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsIGxpbms6ICcvJyB9LFxuICAgICAgICB7IHRleHQ6ICdFbmdsaXNoJywgbGluazogJy9lbi8nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmF2OiBbeyB0ZXh0OiAnXHU2MzA3XHU1MzU3JywgbGluazogJy9ndWlkZScgfV0sXG4gICAgc2lkZWJhcixcbiAgICBhbGdvbGlhOiB7fSxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYy11aScgfSxcbiAgICBdLFxuICB9LFxuICB2dWU6IHtcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgc3NyOiB0cnVlLFxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXM6IHtcbiAgICAgICAgICB0ZXh0Q29sbGFwc2U6IHNzclRyYW5zZm9ybUN1c3RvbURpcixcbiAgICAgICAgICBsb2FkaW5nOiBzc3JUcmFuc2Zvcm1DdXN0b21EaXIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbZ2VuVGVtcCgpLCBnZW5BcGlEb2MoKSx2dWVKc3goKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ3NjLXVpJzogcmVzb2x2ZSgnLi9zcmMvJyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIGxlc3M6IHtcbiAgICAgICAgICBtb2RpZnlWYXJzOiB0aGVtZVZhcmlhYmxlcyxcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIGNvbmZpZzogKG1kKSA9PiB7XG4gICAgICBhcHBseVBsdWdpbnMobWQpO1xuICAgIH0sXG4gICAgdGhlbWU6IHtcbiAgICAgIGxpZ2h0OiAnZ2l0aHViLWxpZ2h0JyxcbiAgICAgIGRhcms6ICdnaXRodWItZGFyaycsXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3Avd29yay9zYy9mcm9udGVuZC9zYy11aS9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2RvY3MvLnZpdGVwcmVzcy9zaWRlYmFyLmpzXCI7Ly8gaW50ZXJmYWNlIFNpZGViYXJJdGVtc1R5cGUge1xuLy8gICB0ZXh0OiBzdHJpbmdcbi8vICAgaXRlbXM6IEl0ZW1UeXBlW11cbi8vIH1cbi8vIGludGVyZmFjZSBJdGVtVHlwZSB7XG4vLyAgIHRleHQ6IHN0cmluZ1xuLy8gICBsaW5rOiBzdHJpbmdcbi8vICAgW2tleTpzdHJpbmddOiBhbnlcbi8vIH1cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAnL2VuLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU0MtVUknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnR3VpZGUnLCBsaW5rOiAnL2VuLycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2VuZXJhbCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdCdXR0b24nLCBsaW5rOiAnL2VuL2J1dHRvbi8nIH0sXG4gICAgICAgIHsgdGV4dDogJ0xvYWRpbmcnLCBsaW5rOiAnL2VuL2xvYWRpbmcvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGF0YSBEaXNwbGF5JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1RhYnMnLCBsaW5rOiAnL2VuL3RhYnMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUYWJsZScsIGxpbms6ICcvZW4vdGFibGUvJyB9LFxuICAgICAgICB7IHRleHQ6ICdUb29sdGlwJywgbGluazogJy9lbi90b29sdGlwLycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RhdGEgRW50cnknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUmFkaW8nLCBsaW5rOiAnL2VuL3JhZGlvLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5wdXQnLCBsaW5rOiAnL2VuL2lucHV0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2hlY2tib3gnLCBsaW5rOiAnL2VuL2NoZWNrYm94LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5wdXROdW1iZXInLCBsaW5rOiAnL2VuL2lucHV0TnVtYmVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2VsZWN0JywgbGluazogJy9lbi9zZWxlY3QvJyB9LFxuICAgICAgICB7IHRleHQ6ICdTd2l0Y2gnLCBsaW5rOiAnL2VuL3N3aXRjaC8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOYXZpZ2F0aW9uJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1N0ZXBzJywgbGluazogJy9lbi9zdGVwcy8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1BhZ2luYXRpb24nLCBsaW5rOiAnL2VuL3BhZ2luYXRpb24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdEcm9wZG93bicsIGxpbms6ICcvZW4vZHJvcGRvd24vJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRmVlZGJhY2snLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQWxlcnQnLCBsaW5rOiAnL2VuL2FsZXJ0LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW9kYWwnLCBsaW5rOiAnL2VuL21vZGFsLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnY29udGV4dE1lbnUnLCBsaW5rOiAnL2NvbnRleHRNZW51LycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0Zyb20nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUGFzc3dvcmQnLCBsaW5rOiAnL2VuL3Bhc3N3b3JkLycgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1NDLVVJJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1N0I4MFx1NEVDQicsIGxpbms6ICcvJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTkwMUFcdTc1MjgnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU2MzA5XHU5NEFFJywgbGluazogJy9idXR0b24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUyQTBcdThGN0RcdTUyQThcdTc1M0InLCBsaW5rOiAnL2xvYWRpbmcvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1QkZDXHU4MjJBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NkI2NVx1OUFBNFx1Njc2MScsIGxpbms6ICcvc3RlcHMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTUyMDZcdTk4NzUnLCBsaW5rOiAnL3BhZ2luYXRpb24vJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTRFMEJcdTYyQzlcdTgzRENcdTUzNTUnLCBsaW5rOiAnL2Ryb3Bkb3duLycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUM1NVx1NzkzQScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTY4MDdcdTdCN0VcdTk4NzUnLCBsaW5rOiAnL3RhYnMvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTg4NjhcdTY4M0MnLCBsaW5rOiAnL3RhYmxlLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBJywgbGluazogJy90b29sdGlwLycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUY1NVx1NTE2NScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTUzNTVcdTkwMDlcdTY4NDYnLCBsaW5rOiAnL3JhZGlvLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU4RjkzXHU1MTY1XHU2ODQ2JywgbGluazogJy9pbnB1dC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NTkwRFx1OTAwOVx1Njg0NicsIGxpbms6ICcvY2hlY2tib3gvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTY1NzBcdTVCNTdcdThGOTNcdTUxNjVcdTY4NDYnLCBsaW5rOiAnL2lucHV0TnVtYmVyLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU5MDA5XHU2MkU5XHU1NjY4JywgbGluazogJy9zZWxlY3QvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTVGMDBcdTUxNzMnLCBsaW5rOiAnL3N3aXRjaC8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTUzQ0RcdTk5ODgnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU4QjY2XHU1NDRBXHU2M0QwXHU3OTNBJywgbGluazogJy9hbGVydC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NUYzOVx1Njg0NicsIGxpbms6ICcvbW9kYWwvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTlGMjBcdTY4MDdcdTUzRjNcdTk1MkUnLCBsaW5rOiAnL2NvbnRleHRNZW51LycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1ODg2OFx1NTM1NScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTVCQzZcdTc4MDFcdTY4NDYnLCBsaW5rOiAnL3Bhc3N3b3JkLycgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbn07IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2J1aWxkL3RoZW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC93b3JrL3NjL2Zyb250ZW5kL3NjLXVpL2J1aWxkL3RoZW1lL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92ZWxlbi9EZXNrdG9wL3dvcmsvc2MvZnJvbnRlbmQvc2MtdWkvYnVpbGQvdGhlbWUvaW5kZXgudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgbGVzc1RvSlMgZnJvbSAnbGVzcy12YXJzLXRvLWpzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lVmFyaWFibGVzID0gbGVzc1RvSlMoXG4gIGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi92YXJpYWJsZXMubGVzcycpLCAndXRmOCcpXG4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VixTQUFTLG9CQUFvQjtBQUN0WCxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7QUFDeEIsU0FBUyxpQkFBaUI7QUFDMUIsT0FBTyxZQUFZOzs7QUNLWixJQUFNLFVBQVU7QUFBQSxFQUNyQixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFNBQVMsTUFBTSxPQUFPO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSxjQUFjO0FBQUEsUUFDdEMsRUFBRSxNQUFNLFdBQVcsTUFBTSxlQUFlO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFFBQVEsTUFBTSxZQUFZO0FBQUEsUUFDbEMsRUFBRSxNQUFNLFNBQVMsTUFBTSxhQUFhO0FBQUEsUUFDcEMsRUFBRSxNQUFNLFdBQVcsTUFBTSxlQUFlO0FBQUEsTUFDMUM7QUFB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
