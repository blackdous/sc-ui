---
map:
  path: /input
realPath: src/package/input/index.zh-CN.md
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

功能上没有变化，新增了class 直接可以使用

`type`相关的class `isSuccess` 、`isWarning`、`isError` 对应实例 **主题状态**
`describe`相关的class `input-describe` 对应实例 **带额外内容提示**
