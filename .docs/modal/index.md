---
map:
  path: /modal
realPath: src/package/modal/index.zh-CN.md
---

# Dialog 对话框

对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。

## 默认对话框

<demo src="./demo/basic.vue"
  language="vue"
  title="默认对话框"
  >
</demo>

## 自定义title 对话框

<demo src="./demo/selftHeader.vue"
  language="vue"
  title="自定义title 组件"
  >
</demo>

## 带tooltip的 对话框

<demo src="./demo/tooltip.vue"
  language="vue"
  title="带tooltip的 对话框"
  >
</demo>

## 无关闭按钮对话框

<demo src="./demo/notClose.vue"
  language="vue"
  title="无关闭按钮对话框"
  >
</demo>

## 自定义footer 对话框

<demo src="./demo/selfFooter.vue"
  language="vue"
  title="自定义footer 对话框"
  >
</demo>

## 有图标对话框

<demo src="./demo/type.vue"
  language="vue"
  title="有图标对话框"
  >
</demo>

## 可拖拽的

<demo src="./demo/draggable.vue"
  language="vue"
  title="可拖拽的"
  >
</demo>


## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| showTooltip | title是否显示tooltip | boolean | 无 |  |
| tooltipDes | tooltip显示的内容，结合showTooltip 使用 | string | 无 |  |
| type | 'info'、'warning'、'success'、'error' | string | 无 |  |
| closeFunc | 用于关闭之前使用，支持promise; return 一个 boolean 为 true | Function、promise | 无 |  |
| onCancelDisable | 默认Cancel按钮是否可用 | boolean | 无 |  |
| onOkDisable | 默认onOkDisable按钮是否可用 | boolean | 无 |  |
| isDraggable | 是否可拖拽 | boolean | 无 |  |
| DragOptions | 使用的@vueuse/core 的 useDraggable，可传入初始值 | [UseDraggableOptions](https://vueuse.org/core/usedraggable/#type-declarations) | 无 |  |
| dragChange | 拖拽时的一些属性x, y, style, position | [useDraggable](https://vueuse.org/core/usedraggable/#type-declarations) | 无 |  |
| onCancelDisable | Modal 完全关闭后的回调 | function | 无 |  |
| afterClose | Modal 完全关闭后的回调 | function | 无 |  |
| bodyStyle | Modal body 样式 | object | {} |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](https://antdv.com/components/button) | - |  |
| cancelText | 取消按钮文字 | string\| slot | 取消 |  |
| centered | 垂直居中展示 Modal | boolean | `false` |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | VNode \| slot | - |  |
| confirmLoading | 确定按钮 loading | boolean | 无 |  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |  |
| dialogClass | 可用于设置浮层的类名 | string | - |  |
| dialogStyle | 可用于设置浮层的样式，调整浮层位置等 | object | - |  |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `:footer="null"` | string\|slot | 确定取消按钮 |  |
| forceRender | 强制渲染 Modal | boolean | false |  |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | object | {} |  |
| okButtonProps | ok 按钮 props | [ButtonProps](https://antdv.com/components/button) | - |  |
| okText | 确认按钮文字 | string\|slot | 确定 |  |
| okType | 确认按钮类型 | string | primary |  |
| title | 标题 | string\|slot | 无 |  |
| visible(v-model) | 对话框是否可见 | boolean | 无 |  |
| width | 宽度 | string\|number | 520 |  |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |

### 事件

| 事件名称 | 说明                                 | 回调参数    |
| -------- | ------------------------------------ | ----------- |
| cancel   | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) |
| ok       | 点击确定回调                         | function(e) |
