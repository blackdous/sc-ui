---
map:
  path: /input
---

# Input 输入框

用于承载用户信息录入的文本框，常用于表单、对话框等场景，对不同内容的信息录入，可拓展形成多种信息录入形式。

## 组件类型

### 基础输入框

<demo src="./demo/basic.vue"
  language="vue"
  title="基础输入框"
  desc="基础输入框"
  >
</demo>

### 多行文本框

<demo src="./demo/textarea.vue"
  language="vue"
  title="多行文本框"
  desc="多行文本框"
  >
</demo>

### 前标签输入框

<demo src="./demo/addon.vue"
  language="vue"
  title="前标签输入框"
  desc="前标签输入框"
  >
</demo>

### 可清空内容输入框

<demo src="./demo/clear.vue"
  language="vue"
  title="可清空内容输入框"
  desc="可清空内容输入框"
  >
</demo>

## 组件状态

### 基础状态

<demo src="./demo/status.vue"
  language="vue"
  title="基础状态"
  desc="基础状态"
  >
</demo>

### 带额外内容提示

<demo src="./demo/desc.vue"
  language="vue"
  title="带额外内容提示"
  desc="带额外内容提示"
  >
</demo>

### 主题状态

<demo src="./demo/type.vue"
  language="vue"
  title="主题状态"
  desc="主题状态"
  >
</demo>

## 组件大小

### 不同尺寸输入框

<demo src="./demo/size.vue"
  language="vue"
  title="不同尺寸输入框"
  desc="不同尺寸输入框"
  >
</demo>

## api

除 参考官方 [Input 配置](https://2x.antdv.com/components/input-cn#API)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| describe      | string、slot = describe                                             | -  |  -      |  用于显示文本框的描述文字 |
| widthSize      | string                                             | - |    'l', 'xs', 'x', 'md', 'xl'    |  用于设置文本框宽度 |

## 事件

事件与官方 [Input 事件](https://2x.antdv.com/components/Input-cn#API) 相同

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| allowClear   | 点击清除按钮时触发 | function(e) |