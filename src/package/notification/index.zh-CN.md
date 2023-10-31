---
map:
  path: /notification
---

# Notification 消息通知

轻量级的全局消息提示和确认机制，出现和消失时需要有缓动动画。

## 组件类型

### 基础消息通知

<demo src="./demo/basic.vue"
  language="vue"
  title="基础消息通知"
  >
</demo>

### 隐藏关闭按钮

<demo src="./demo/close.vue"
  language="vue"
  title="隐藏关闭按钮"
  >
</demo>

## 带操作消息通知

<demo src="./demo/edit.vue"
  language="vue"
  title="带操作消息通知"
  >
</demo>

## 组件状态

<demo src="./demo/type.vue"
  language="vue"
  title="组件状态"
  >
</demo>

## API

除 参考官方 [Alert 配置](https://2x.antdv.com/components/notification-cn#API)外，扩展以下参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeBtn | 是否显示关闭Icon | boolean | - |  |
| edit | 是否开启操作按钮 | boolean | - |  |
| cancelText | 取消按钮文本 | string | - |  |
| cancelProps | 取消按钮配置 | ScButtonProps | - |  |
| confirmText | 确认按钮文本 | string | - |  |
| confirmProps | 确认按钮配置 | ScButtonProps | - |  |
| cancelCb | 取消按钮回调 | (e) => any | - |  |
| confirmCb | 确认按钮回调 | (e) => any | - |  |
