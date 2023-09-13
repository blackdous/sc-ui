---
map:
  path: /autoComplete
---

# AutoComplete 自动完成

输入框自动完成功能。

::: tip options 属性
如果需要高亮显示搜索词，请使用optionSource 字段传入 全量数据；数据结构保持{ value:string, label:string} value 与 label 是相同的值，或者只传入value
:::

::: tip options slot
在使用自定义options slot时，子组件只允许是SelectOptions、SelectOptGroup；并且不建议使用dataSource slot 2.2.8版本已经废弃
:::

::: tip Default slot
请使用ant-design-vue Input组件；不要使用ScInput 组件，因为AutoComplete 内部写死判断必须为 Input 组件；其他组件无效
:::

## 基础使用

<demo src="./demo/basic.vue"
  language="vue"
  title="basic"
  >
</demo>

## allowClear

<demo src="./demo/allowClear.vue"
  language="vue"
  title="allowClear"
  >
</demo>

## 自定义options slots

<demo src="./demo/options.vue"
  language="vue"
  title="自定义options"
  >
</demo>

## 自定义Input slots

<demo src="./demo/input.vue"
  language="vue"
  title="自定义Input slots"
  >
</demo>

## 类目

<demo src="./demo/group.vue"
  language="vue"
  title="类目搜索"
  >
</demo>

## API

除 参考官方 [AutoComplete 配置](https://2x.antdv.com/components/auto-complete-cn#API)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| optionsSource      | {value: string,label:string}[]                | -  |  -  |  全量数据源  |
| dropdownClassName      | string                | -  |  -  |  -  |
| isGroup      | boolean                | -  |  -  |  是否开启分类显示  |
| getPopupContainer      | function(triggerNode)                | () => document.body  |  -  |  菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。  |

## slots

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| default | 请使用ant-design-vue 中的 Input、InputSearch 组件，其他组件无效 |  -  | |
| options | 自定义显示搜索内容 |  -  | |
