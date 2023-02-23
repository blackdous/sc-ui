---
map:
  path: copy
---

# copy组件

## 基础使用

<demo src="./demo/basic.vue"
  language="vue"
>
</demo>

## 自定义Text

<demo src="./demo/text.vue"
  language="vue"
>
</demo>

## props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| text | 显示内容 |  string (required) | - | |
| handle | 点击文本区域回调的方法 |  void | - | |
| successTxt | 复制成功message显示的内容 |  string | - | |
| copyTxt | 想要复制的内容、如果为空复制text的内容 |  string | - | |

**table中参数**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| column | table的column数据 |  column | - | |
| index | 当前行数 |  number | - | |
| record | 当前行dataItem |  an'y | - | |

## slot

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| text        | 替换text内容 | - |