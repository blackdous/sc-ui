---
map:
  path: /tag
---

# Tag 标签

定义：标签常用于标记、分类和选择。

## 组件类型

## 基础标签

<demo src="./demo/basic.vue"
  language="vue"
  title="基础标签"
  >
</demo>

## 图标标签

<demo src="./demo/icon.vue"
  language="vue"
  title="图标标签"
  >
</demo>

## 可删除或添加标签

<demo src="./demo/close.vue"
  language="vue"
  title="可删除或添加标签"
  >
</demo>

## 可选择标签

<demo src="./demo/selected.vue"
  language="vue"
  title="可选择标签"
  >
</demo>

## 组件状态

## 标签失效态，失效可删除

<demo src="./demo/disabled.vue"
  language="vue"
  title="可选择标签"
  >
</demo>

## 不同主题

<demo src="./demo/typeStatus.vue"
  language="vue"
  title="不同主题"
  >
</demo>

## 组件大小

<demo src="./demo/size.vue"
  language="vue"
  title="组件大小"
  >
</demo>

## props

::: tip 温馨提醒

- 除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv tag](https://2x.antdv.com/components/tag-cn#API)


| 属性         | 类型                         | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------- | ------- | ------ | ------------------------ |
| size      | string     | medium |  medium、small、large   |  设置tag大小 |
| type      | string     | lightOutline |  'dark', 'light', 'outline', 'lightOutline'   |  设置tag样式模式 |
| status      | string     | -  | 'success', 'warning', 'error', 'primary', 'default', 'process', 'freeze' |  设置显示状态样式 |
| checked      | boolean     | -  |  -   |  当前按钮是否为选中状态结合selected属性使用 |
| selected      | boolean     | -  |  -   |  当前按钮是否可以选中 |
| disabled      | boolean     | -  |  -   |  当前按钮是否为禁用状态 |
| loading      | boolean     | -  |  -   |  是否开启loading状态 |
| tooltipDes      | string     | -  |  -   |  是否嵌套tooltip组件 |

## 事件

事件与官方 [tag 事件](https://2x.antdv.com/components/tag-cn#API) 相同

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| change   | 在selected 为true时，启用状态 | function(e: boolean) |
