---
map:
  path: /alert
---

# Alert 警告

警告条用于承载需要用户注意的信息。

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

<!-- <API src="./component/type.ts" lang="zh"></API> -->

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| textColor | message字体颜色跟随type | boolean  | flase | |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 默认不显示关闭按钮 | boolean | 无 |  |
| closeIcon | 自定义关闭 Icon | slot | `<CloseOutlined />` | 3.0 |
| closeText | 自定义关闭按钮 | string\|slot | 无 |  |
| description | 警告提示的辅助性文字介绍 | string\|slot | 无 |  |
| icon | 自定义图标，`showIcon` 为 `true` 时有效 | vnode\|slot | - |  |
| message | 警告提示内容 | string\|slot | 无 |  |
| showIcon | 是否显示辅助图标 | boolean | false,`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`,`banner` 模式下默认值为 `warning` |  |

### 事件

| 事件名称 | 说明                 | 回调参数                | 版本 |
| -------- | -------------------- | ----------------------- | ---- |
| close    | 关闭时触发的回调函数 | (e: MouseEvent) => void | -    |
