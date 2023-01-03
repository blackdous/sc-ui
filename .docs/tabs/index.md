---
map:
  path: /tabs
realPath: src/package/tabs/index.zh-CN.md
---

## 简介

在 (antd-design-vue/tabs)[https://antdv.com/components/tabs-cn] 基础开发的，**其他api 都相同**

<demo src="./demo/basic.vue"
  language="vue"
  title="API 与 Ant-design-vue的 Tabs api相同，新增了styleMode属性"
  >
</demo>

## 新增styleMode属性为gradient

<demo src="./demo/styleMode.vue"
  language="vue"
  title="渐变色tabs button 样式"
  desc="新增了 styleMode, 默认值为 gradient；只有在`type='card'` 时生效"
  >
</demo>

## 新增styleMode属性为shadow

<demo src="./demo/shadow.vue"
  language="vue"
  title="渐变色tabs button 样式"
  desc="新增了 styleMode, 默认值为 shadow；只有在`type='card'` 时生效"
  >
</demo>

## Api

除 参考官方 [tabs 配置](https://2x.antdv.com/components/tabs-cn#API)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| styleMode      | string                                             | -  |  'gradient', 'shadow'      | styleMode 只有在 `type='card'` 时生效 |
