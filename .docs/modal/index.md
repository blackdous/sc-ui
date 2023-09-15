---
map:
  path: /modal
realPath: src/package/modal/index.zh-CN.md
---

# Dialog 对话框

对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。

<!-- <demo src="./demo/locale.vue"
  language="vue"
  title="locale"
  >
</demo> -->

<!-- <demo src="./demo/confirm.vue"
  language="vue"
  title="confirm"
  >
</demo> -->

<!-- <demo src="./demo/vIf.vue"
  language="vue"
  title="confirm"
  >
</demo> -->

<!-- ## 默认对话框

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

## useModal 对话框

<demo src="./demo/useModal/index.vue"
  language="vue"
  title="useModal 对话框"
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

## status对话框

<demo src="./demo/status.vue"
  language="vue"
  title="status对话框"
  >
</demo> -->

## ScModal.confirm

<demo src="./demo/confirmStatus.vue"
  language="vue"
  title="confirmStatus"
  >
</demo>

<!-- ## 可拖拽的

<demo src="./demo/draggable.vue"
  language="vue"
  title="可拖拽的"
  >
</demo>

## useModal使用

用于外部组件调用

### useModal 用于操作组件

```ts
const [register, { openModal, setModalProps }] = useModal();
```

### register

`register` 用于注册 `useModal`，如果需要使用 `useModal` 提供的 `api`，必须将 `register` 传入组件的 `onRegister`。

原理其实很简单，就是 vue 的组件子传父通信，内部通过 `emit("register"，instance)` 实现。

同时独立出去的组件需要将 `attrs` 绑定到 `BasicModal` 上面。

```vue
<template>
  <BasicModal v-bind="$attrs"></BasicModal>
</template>

```

### openModal

用于打开/关闭弹窗

```ts
  // true/false: 打开关闭弹窗
  // data: 传递到子组件的数据
  openModal(true, data);
```

### closeModal

用于关闭弹窗

```ts
  closeModal();
```

### setModalProps

用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 `setModalProps` 方便更改内部 modal 的 props

```ts
setModalProps(props);
```

### useModalInner

用于独立的 Modal 内部调用

```vue
<template>
  <ScModal
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    :okButtonProps="{ disabled: true }"
  >
    <ScButton type="primary" @click="closeModal" class="mr-2"> 从内部关闭弹窗 </ScButton>
    <ScButton type="primary" @click="setModalProps"> 从内部修改title </ScButton>
  </ScModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModalInner, ScModal, ScButton } from 'sc-ui';
  export default defineComponent({
    components: {
      ScModal,
      ScButton
    },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      console.log('setModalProps: ', setModalProps);
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>

```

#### useModalInner用于操作独立组件

```ts
const [register, { closeModal, setModalProps }] = useModalInner(callback);
```

#### callback

```ts
type: (data:any)=>void
```

回调函数用于接收 openModal 第二个参数传递的值

```ts
useModal((data: any) => {
  console.log(data);
});

```

#### closeModal

用于关闭弹窗

```ts
  closeModal();
```

#### changeOkLoading

用于修改确认按钮的 `loading` 状态

```ts
changeOkLoading(true);
```

#### setModalProps

用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 `setModalProps` 方便更改内部 modal 的 props

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| showTooltip | title是否显示tooltip | boolean | 无 |  |
| infoDes | 辅助提示信息 | string\array | 无 |  |
| scrollOptions | [ScScrollbar配置](http://sc-ui.voneyun.com/scrollbar/#api) 根据当前视口计算内容区域高度，可以通过updateMaxHeight主动触发 | ScrollbarProps | - |  |
| tooltipDes | tooltip显示的内容，结合showTooltip 使用 | string | 无 |  |
| type | 'info'、'warning'、'success'、'error' | string | 无 |  |
| closeFunc | 用于关闭之前使用，支持promise; return 一个 boolean 为 true | Function、promise | 无 |  |
| onCancelDisable | 默认Cancel按钮是否可用 | boolean | 无 |  |
| onOkDisable | 默认onOkDisable按钮是否可用 | boolean | 无 |  |
| showCancelBtn | 是否显示取消按钮 | boolean | 无 |  |
| showOkBtn | 是否显示确认按钮 | boolean | 无 |  |
| isDraggable | 是否可拖拽 | boolean | true |  |
| DragOptions | 使用的@vueuse/core 的 useDraggable，可传入初始值 | [UseDraggableOptions](https://vueuse.org/core/usedraggable/#type-declarations) | 无 |  |
| dragChange | 拖拽时的一些属性x, y, style, position | [useDraggable](https://vueuse.org/core/usedraggable/#type-declarations) | 无 |  |
| onCancel | Modal 完全关闭后的回调 | function | 无 |  |
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
| footerAlign | 是否展示遮罩 'left'、'center'、'right' | string | 'right' |  |
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

## ScModal.confirm 与 Modal.confrim 相同

**新增多语言适配方法**

```ts
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
ScModal.changeConfirmLocale(enUS)
ScModal.changeConfirmLocale(zhCN)
```

## slot

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| insertFooter        | footer内部默认按钮左侧 | - |
| afterFooter        | footer内部默认按钮右侧 | - |
| infoText        | 文本内容插槽 | - |

## expose

| 方法名 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| scrollbarRef | 导出ScScrollbar实例，可以通过实例方法`update`更新滚动条状态 | -  | |
| setModalProps | 设置当前ScModal的props | -  | |
| updateMaxHeight | 触发一次计算内容高度方法 | -  | | -->
