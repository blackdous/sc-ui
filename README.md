# sc-ui

ant-design-vue vue3 ts ui 

## 引入 ant-design-vue

```shell

npm i ant-design-vue@2.2.8 -D
npm i @sincerecloud/sc-ui -D

```

本项目是基于`ant-design-vue`组件库固定版本（2.2.8）基础上开发的，所以在使用本项目前请安装`ant-design-vue@2.2.8`;

使用简介：

`main.js/main.ts`根文件中引入`index.css`

```js
import '@sincerecloud/sc-ui/style.css'
```

本项目也支持按需加载

`App.vue`

```js
import { ScAlert } from '@sincerecloud/sc-ui'
```

## 问题

如有问题请及时反馈