---
map:
  path: /description
realPath: src/package/description/index.zh-CN.md
---

# 详情组件

## 组件类型

<demo src="./demo/basic.vue"
  language="vue"
>
</demo>

## useDescription

<demo src="./demo/layout.vue"
  language="vue"
>
</demo>

```ts
const [register] = useDescription(Props);
```

## Api

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| title | `string` | - | - | 标题 |
| size | `string` | small | - | 大小 |
| bordered | `boolean` | true | - | 是否展示边框 |
| column | `Number, Object` | `{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | - | 一行的 `DescriptionItems` 数量 |
| useCollapse | `boolean` | - | - | 是否包裹 CollapseContainer 组件 |
| collapseOptions | `Object` | - | - | `CollapseContainer` 组件属性 |
| schema | `DescItem[]` | - | - | 详情项配置，见下方 `DescItem` 配置 |
| data | `object` | - | - | 数据源 |

## DescItem

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| label | `string` | - | - | 标签名 |
| labelMinWidth | `number` | - | - | label 最小宽度 |
| contentMinWidth | `number` | - | - | content 最小宽度 |
| labelStyle | `any` | - | - | label 样式 |
| span | `number` | - | - | 和并列数量 |
| show | `(data)=>boolean` | - | - | 动态判断当前组件是否显示 |
| render | `(val: string, data: any)=>VNode,undefined,Element,string,number` | - | - | 自定义渲染 content |
