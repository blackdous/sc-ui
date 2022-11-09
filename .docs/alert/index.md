---
map:
  path: /alert
realPath: src/package/alert/index.zh-CN.md
---

# Alert 警告

警告条用于承载需要用户注意的信息。

# 组件类型

## 基础警告

<demo src="./demo/basic.vue"
  language="vue"
  title="新增`textColor`属性"
  desc="新增`textColor`属性，通过设置`textColor` 为 true, message 样式根据type变化"
  >
</demo>

## 带相关操作的警告

<demo src="./demo/selfMessage.vue"
  language="vue"
  title="description属性"
  desc="通过description属性传入要显示的详情"
  >
</demo>

## 带相关描述文本的警告

<demo src="./demo/desc.vue"
  language="vue"
  title="通过message[slot] 自定义 message信息"
  desc="`message属性`和 `message[slot]` 不能一起用，`message属性`优先级高于`slot`"
  >
</demo>

## 带折叠的警告

<demo src="./demo/selfDesc.vue"
  language="vue"
  title="通过message[slot] 自定义 message信息"
  desc="`message属性`和 `message[slot]` 不能一起用，`message属性`优先级高于`slot`"
  >
</demo>

## 带图标的警告

<demo src="./demo/icon.vue"
  language="vue"
  title="show-icon 属性"
  desc="通过设置show-icon属性，显示不同type 默认图标"
  >
</demo>

## 带关闭操作的警告

<demo src="./demo/close.vue"
  language="vue"
  title="closeable属性"
  desc="通过设置closeable属性，显示默认的关闭图标"
  >
</demo>

## 可自定义关闭操作的警告

<demo src="./demo/selfClose.vue"
  language="vue"
  title="closeText属性, 支持 `string|slot`"
  desc="通过设置closeText属性，显示文字按钮或者自定义组件"
  >
</demo>
