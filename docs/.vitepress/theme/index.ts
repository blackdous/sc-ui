import DefaultTheme from 'vitepress/theme';
import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';
import './var.less';
import '../../../src/style/index';
// import { initLineCode } from './showVueSFCPlayground';
import { initLineCode } from './showCodeSandbox'

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    app.component('demo', DemoBlock);
    app.provide('globalApp', app);
    initLineCode()
  },
};
