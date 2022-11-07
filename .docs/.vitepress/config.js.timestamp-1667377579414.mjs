// docs/.vitepress/config.js
import { defineConfig } from "file:///Users/velen/Desktop/velen/sc-ui/node_modules/.pnpm/vitepress@1.0.0-alpha.26_less@4.1.3/node_modules/vitepress/dist/node/index.js";
import { applyPlugins } from "file:///Users/velen/Desktop/velen/sc-ui/node_modules/.pnpm/@ruabick+md-demo-plugins@0.2.8_less@4.1.3/node_modules/@ruabick/md-demo-plugins/dist/index.mjs";
import { genTemp } from "file:///Users/velen/Desktop/velen/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-temp@0.2.8_less@4.1.3/node_modules/@ruabick/vite-plugin-gen-temp/dist/index.mjs";
import { genApiDoc } from "file:///Users/velen/Desktop/velen/sc-ui/node_modules/.pnpm/@ruabick+vite-plugin-gen-api-doc@0.2.8_mk5g2gtn4uzmc7m7alnjzcl23m/node_modules/@ruabick/vite-plugin-gen-api-doc/dist/index.mjs";

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
      text: "Navigation",
      items: [
        { text: "Steps", link: "/en/steps/" }
      ]
    },
    {
      text: "Feedback",
      items: [
        {
          text: "Model",
          link: "/en/model/"
        },
        {
          text: "contextMenu",
          link: "/contextMenu/"
        }
      ]
    },
    {
      text: "From",
      items: [
        {
          text: "Password",
          link: "/en/password/"
        }
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
      text: "\u5BFC\u822A",
      items: [
        { text: "\u6B65\u9AA4\u6761", link: "/steps/" }
      ]
    },
    {
      text: "\u53CD\u9988",
      items: [
        {
          text: "\u5F39\u6846",
          link: "/model/"
        },
        {
          text: "\u9F20\u6807\u53F3\u952E",
          link: "/contextMenu/"
        }
      ]
    },
    {
      text: "\u8868\u5355",
      items: [
        {
          text: "\u5BC6\u7801\u6846",
          link: "/password/"
        }
      ]
    }
  ]
};

// docs/.vitepress/config.js
import { resolve } from "path";
var config_default = defineConfig({
  lang: "zh-CN",
  lastUpdated: true,
  base: process.env.NODE_ENV === "production" ? "/sc-ui" : "/",
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
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc()],
    resolve: {
      alias: {
        "sc-ui": resolve("./src/")
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
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92ZWxlbi9EZXNrdG9wL3ZlbGVuL3NjLXVpL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3AvdmVsZW4vc2MtdWkvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmVsZW4vRGVza3RvcC92ZWxlbi9zYy11aS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcbmltcG9ydCB7IGFwcGx5UGx1Z2lucyB9IGZyb20gJ0BydWFiaWNrL21kLWRlbW8tcGx1Z2lucyc7XG5pbXBvcnQgeyBnZW5UZW1wIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLXRlbXAnO1xuaW1wb3J0IHsgZ2VuQXBpRG9jIH0gZnJvbSAnQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLWFwaS1kb2MnO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGxhbmc6ICd6aC1DTicsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy9zYy11aScgOiAnLycsXG4gIGxvY2FsZXM6IHtcbiAgICAnLyc6IHtcbiAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICB0aXRsZTogJ3NjLXVpJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAndnVlMyB1aSBhbnQtZGVzaWduLXZ1ZScsXG4gICAgfSxcbiAgICAnL2VuLyc6IHtcbiAgICAgIGxhbmc6ICdlbi1VUycsXG4gICAgICB0aXRsZTogJ3NjLXVpJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAndnVlMyB1aSBhbnQtZGVzaWduLXZ1ZScsXG4gICAgfSxcbiAgfSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgICBsb2NhbGVMaW5rczoge1xuICAgICAgdGV4dDogJycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLCBsaW5rOiAnLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5nbGlzaCcsIGxpbms6ICcvZW4vJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5hdjogW3sgdGV4dDogJ1x1NjMwN1x1NTM1NycsIGxpbms6ICcvZ3VpZGUnIH1dLFxuICAgIHNpZGViYXIsXG4gICAgYWxnb2xpYToge30sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vc2MtdWknIH0sXG4gICAgXSxcbiAgfSxcbiAgdnVlOiB7fSxcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFtnZW5UZW1wKCksIGdlbkFwaURvYygpXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnc2MtdWknOiByZXNvbHZlKCcuL3NyYy8nKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgYXBwbHlQbHVnaW5zKG1kKTtcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXG4gICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3ZlbGVuL0Rlc2t0b3AvdmVsZW4vc2MtdWkvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmVsZW4vRGVza3RvcC92ZWxlbi9zYy11aS9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmVsZW4vRGVza3RvcC92ZWxlbi9zYy11aS9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci5qc1wiOy8vIGludGVyZmFjZSBTaWRlYmFySXRlbXNUeXBlIHtcbi8vICAgdGV4dDogc3RyaW5nXG4vLyAgIGl0ZW1zOiBJdGVtVHlwZVtdXG4vLyB9XG4vLyBpbnRlcmZhY2UgSXRlbVR5cGUge1xuLy8gICB0ZXh0OiBzdHJpbmdcbi8vICAgbGluazogc3RyaW5nXG4vLyAgIFtrZXk6c3RyaW5nXTogYW55XG4vLyB9XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgJy9lbi8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1NDLVVJJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0d1aWRlJywgbGluazogJy9lbi8nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05hdmlnYXRpb24nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU3RlcHMnLCBsaW5rOiAnL2VuL3N0ZXBzLycgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0ZlZWRiYWNrJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTW9kZWwnLCBsaW5rOiAnL2VuL21vZGVsLydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdjb250ZXh0TWVudScsIGxpbms6ICcvY29udGV4dE1lbnUvJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRnJvbScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Bhc3N3b3JkJywgbGluazogJy9lbi9wYXNzd29yZC8nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gICcvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdTQy1VSScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTdCODBcdTRFQ0InLCBsaW5rOiAnLycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1QkZDXHU4MjJBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NkI2NVx1OUFBNFx1Njc2MScsIGxpbms6ICcvc3RlcHMvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1M0NEXHU5OTg4JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1RjM5XHU2ODQ2JywgbGluazogJy9tb2RlbC8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU5RjIwXHU2ODA3XHU1M0YzXHU5NTJFJywgbGluazogJy9jb250ZXh0TWVudS8nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTg4NjhcdTUzNTUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVCQzZcdTc4MDFcdTY4NDYnLCBsaW5rOiAnL3Bhc3N3b3JkLydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbn07Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VCxTQUFTLG9CQUFvQjtBQUNyVixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7QUFDeEIsU0FBUyxpQkFBaUI7OztBQ01uQixJQUFNLFVBQVU7QUFBQSxFQUNyQixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFNBQVMsTUFBTSxPQUFPO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFNBQVMsTUFBTSxhQUFhO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFTLE1BQU07QUFBQSxRQUN2QjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFlLE1BQU07QUFBQSxRQUM3QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFZLE1BQU07QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUMxQjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sc0JBQU8sTUFBTSxVQUFVO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFNLE1BQU07QUFBQSxRQUNwQjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFRLE1BQU07QUFBQSxRQUN0QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFPLE1BQU07QUFBQSxRQUNyQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUR2RUEsU0FBUyxlQUFlO0FBRXhCLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxXQUFXO0FBQUEsRUFDekQsU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sSUFBSTtBQUFBLFFBQzFCLEVBQUUsTUFBTSxXQUFXLE1BQU0sT0FBTztBQUFBLE1BQ2xDO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSyxDQUFDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFNBQVMsQ0FBQztBQUFBLElBQ3BDO0FBQUEsSUFDQSxTQUFTLENBQUM7QUFBQSxJQUNWLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sMkJBQTJCO0FBQUEsSUFDckQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLLENBQUM7QUFBQSxFQUNOLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQUEsSUFDaEMsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsU0FBUyxRQUFRLFFBQVE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixRQUFRLENBQUMsT0FBTztBQUNkLG1CQUFhLEVBQUU7QUFBQSxJQUNqQjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
