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

## suffix 自定义内容

<demo src="./demo/suffix.vue"
  language="vue"
  title="suffix 自定义内容"
  >
</demo>

## copy参数

<demo src="./demo/copy.vue"
  language="vue"
  title="copy参数"
  >
</demo>

## edit参数

<demo src="./demo/edit.vue"
  language="vue"
  title="edit参数"
  >
</demo>

## hrefLink参数

<demo src="./demo/href.vue"
  language="vue"
  title="hrefLink参数"
  >
</demo>

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| expandTrigger | 'click' | string | - |  |
| lineClamp | 最多显示几行 | [number, string] | - |  |
| tooltip | 是否显示tooltip；tooltip配置属性 | [boolean , TooltipProps] |  false  |  |
| hoverSuffix | 是否hover状态显示；suffix 模块 | boolean |  false  |  |
| isCollapse | 是否可以展开/隐藏 | boolean |  -  |  |
| isInheritParentWidth | 是否继承父级元素宽度(只外层一级元素) | boolean | true |  |
| copyTxt | copy 内容; 默认在文本最后补充icon| string |  -  |  |
| edit | 启用edit模式，使用popConfirm弹出修改内容和事件 | EditType |  -  |  |
| hrefLink | 启用hrefLink 样式 | false |  -  |  |
| getPopupContainer | edit弹窗要显示在父级 | () => dom |  -  |  |
| baseHeight | 基础高度，适用于多行时 | number |  22  |  |
| isComputedEditPopoverPosition | 是否强制修改edit 弹窗位置 | boolean |  true  |  |

## EditType

```js
interface EditType {
  show?: boolean
  placeholder?: string
  maxLength?: number
  describe?: string
  info?: string,
  confirmLoading?: boolean
  align?: string
  text?: string
  showMaxLength?: boolean
  getPopupContainer?: HTMLElement
  /**
   * 关闭函数
   * 1. 支持异步
   * @params Function closeFunc 关闭操作
   * @returns Boolean 返回true 自动关闭弹窗 返回false 不执行操作
   */
  cancel?: (closeFnc:() => {}) => boolean
  /**
   * 用于form表单 正则校验
   */
  rules?: FormRules
  [key: string]: any
}
```

## events

| 事件           | 回调参数                  | 说明               |
| -------------- | ------------------------- | ------------------ |
| editConfirm          | `(inputValue: string, close: function, editFormRef)`               | 输入内容、关闭方法、form表单实例 |
| editInputChange          | `(value: string)`               | input框输入内容 |

## expose

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| computedWidth | 触发当前宽度计算；是否默认显示tooltip |  -  | |
| editForm | 自定义tooltip 显示内容 |  -  | |
| suffix | 后准显示内容 |  -  | |

## slots

| 名字 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| default | 默认显示内容 |  -  | |
| tooltip | 自定义tooltip 显示内容 |  -  | |
| suffix | 后准显示内容 |  -  | |
