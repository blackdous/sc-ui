---
map:
  path: /message
---

# Message 全局提示

对用户的操作作出轻量的全局反馈。

## 组件类型

**常规全局提示**

<demo src="./demo/basic.vue"
  language="vue"
  >
</demo>

## 带关闭按钮全局提示

<demo src="./demo/close.vue"
  language="vue"
  >
</demo>

## useMessage

```ts

interface Options {
  type?: NoticeType;
  content?: VNode | string;
  duration?: number;
  onClose?: () => void;
  icon?: VNode;
}

// 导出useMessage
import { useMessage } from 'sc-ui'
const { createCloseMessage } = useMessage;
createCloseMessage(Options)
```

可以通过`createCloseMessage` 创建带关闭按钮的 `message`组件

`message.loading`动画可以通过`icon: h('span', { class: 'loading-transition' })`配置更换为最新的***loading动画*
