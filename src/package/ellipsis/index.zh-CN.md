---
map:
  path: /ellipsis
---

# 文本省略 Ellipsis

## 基础

<demo src="./demo/basic.vue"
  language="vue"
  title="基础"
  >
</demo>

## 最大行数

<demo src="./demo/lineClamp.vue"
  language="vue"
  title="最大行数"
  >
</demo>

## 展开方式

<demo src="./demo/expand.vue"
  language="vue"
  title="展开方式"
  >
</demo>

## 自定义tooltip内容

<demo src="./demo/tooltip.vue"
  language="vue"
  title="自定义tooltip内容"
  >
</demo>

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| expandTrigger | 'click' | string | - |  |
| lineClamp | 最多显示几行 | [number, string] | - |  |
| tooltip | 是否显示tooltip；tooltip配置属性 | [boolean , TooltipProps] |  -  |  |

## slots

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| default | 默认显示内容 |  -  | |
| tooltip | 自定义tooltip 显示内容 |  -  | |
