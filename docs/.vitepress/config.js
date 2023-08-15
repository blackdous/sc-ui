import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc';
import vueJsx from "@vitejs/plugin-vue-jsx";
import { sidebar } from './sidebar.js';
import { resolve } from 'path';
import { themeVariables } from '../../build/theme/index.js';

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  };
};

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'sc-ui',
      description: 'vue3 ui ant-design-vue',
    },
    '/en/': {
      lang: 'en-US',
      title: 'sc-ui',
      description: 'vue3 ui ant-design-vue',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    localeLinks: {
      text: '',
      items: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' },
      ],
    },
    nav: [{ text: '指南', link: '/guide' }],
    sidebar,
    algolia: {},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sc-ui' },
    ],
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
        },
      },
    },
  },
  vite: {
    mode: 'production',
    plugins: [genTemp(), genApiDoc(),vueJsx()],
    resolve: {
      alias: [
        {
          find: /^~/, 
          replacement: '',
        },
        {
          find: 'sc-ui',
          replacement: resolve('./src/')
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: themeVariables,
          javascriptEnabled: true
        },
      },
    },
    build: {
      minify: 'terser',
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
      light: 'github-light',
      dark: 'github-dark',
    },
  },
});
