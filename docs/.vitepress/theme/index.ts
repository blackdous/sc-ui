import DefaultTheme from 'vitepress/theme';
// import DefaultTheme from 'vitepress/dist/client/theme-default';

import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';
import './var.css';
import '../../public/font/iconfont.css'



export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    app.component('demo', DemoBlock);
    app.provide('globalApp', app)

    // if (window && document) {
    //   const linkDom = document.createElement('link');
    //   linkDom.rel = 'stylesheet'
    //   linkDom.href = '//at.alicdn.com/t/c/font_3690753_bjse551aluk.css'
    //   document.head.append(linkDom)
    // }

  },
};
