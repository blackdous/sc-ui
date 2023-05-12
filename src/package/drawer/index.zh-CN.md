---
map:
  path: /drawer
---

# Drawer 抽屉

抽屉常通过单击临近的按钮控件打开，从屏幕边缘滑入的浮层面板，又称半屏弹窗。

## 组件类型

## 右侧抽屉

<demo src="./demo/basic.vue"
  language="vue"
  title="右侧抽屉—大尺寸"
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

## confirmLoading

<demo src="./demo/confirmLoading.vue"
  language="vue"
  title="confirmLoading"
  >
</demo>

## closeFunc

<demo src="./demo/closeFunc.vue"
  language="vue"
  title="closeFunc"
  >
</demo>

## useDrawer

**useDrawer** 用于操作组件

<demo src="./demo/useDrawer/index.vue"
  language="vue"
  title="useDrawer"
  >
</demo>

```ts
const [register, { openDrawer, setDrawerProps }] = useDrawer();
```

**register**

register 用于注册 `useDrawer`，如果需要使用 `useDrawer` 提供的 api，必须将 `register` 传入组件的 `onRegister`。

原理其实很简单，就是 vue 的组件子传父通信，内部通过 `emit("register"，instance)` 实现。

同时，独立出去的组件需要将 `attrs` 绑定到 Drawer 的上面。

```tsx
<ScDrawer v-bind="$attrs"> Drawer Info. </ScDrawer>
```

**openDrawer**

用于打开/关闭弹窗

```ts
// true/false: 打开关闭弹窗
// data: 传递到子组件的数据
openDrawer(true, data);
```

**closeDrawer**

用于关闭弹窗

```ts
closeDrawer();
```

**setDrawerProps**

用于更改 drawer 的 props 参数因为 drawer 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 **setDrawerProps** 方便更改内部 drawer 的 props

```ts
setDrawerProps(props);
```

## useDrawerInner

用于独立的 Drawer 内部调用

```vue
<template>
  <ScDrawer v-bind="$attrs" @register="register" title="Drawer Title" width="50%">
    Drawer Info.
    <a-button type="primary" @click="closeDrawer">内部关闭drawer</a-button>
  </ScDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScDrawer, useDrawerInner } from '@sincerecloud/sc-ui';
  export default defineComponent({
    components: { ScDrawer },
    setup() {
      const [register, { closeDrawer }] = useDrawerInner();
      return { register, closeDrawer };
    },
  });
</script>
```

**useModalInner**用于操作独立组件

```ts
const [register, { closeModal, setModalProps }] = useModalInner(callback);
```

**callback**

type: `(data:any)=>void`

回调函数用于接收 openDrawer 第二个参数传递的值

```ts
openDrawer((data: any) => {
  console.log(data);
});
```

**closeDrawer**

用于关闭抽屉

```ts
closeDrawer();
```

**changeOkLoading**

用于修改确认按钮的 loading 状态

```ts
// true or false
changeOkLoading(true);
```

**changeLoading**

用于修改 modal 的 loading 状态

```ts
// true or false
changeLoading(true);
```

**setDrawerProps**

用于更改 drawer 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供**setDrawerProps** 方便更改内部 drawer 的 props

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| scrollOptions | [ScScrollbar配置](http://sc-ui.voneyun.com/scrollbar/#api) 根据当前视口计算内容区域高度，可以通过updateMaxHeight主动触发 | ScrollbarProps | - |  |
| helpInfo | tooltip显示的内容，结合showTooltip 使用 | string | 无 |  |
| alterOptions | 用于显示提示信息 | AlertProps | 无 |  |
| closeFunc | 用于关闭之前使用，支持promise; return 一个 boolean 为 true | Function、promise | 无 |  |
| onCancelDisable | 默认Cancel按钮是否可用 | boolean | 无 |  |
| showCancelBtn | 是否显示取消按钮 | boolean | 无 |  |
| showOkBtn | 是否显示确认按钮 | boolean | 无 |  |
| onCancel | Modal 完全关闭后的回调 | function | 无 |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](https://antdv.com/components/button) | - |  |
| cancelText | 取消按钮文字 | string\| slot | 取消 |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| confirmLoading | 确定按钮 loading | boolean | 无 |  |
| loading | 内容区域加载状态 | boolean | 无 |  |
| loadingText | 内容区域加载文字 | string | 无 |  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |  |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| footerAlign | 是否展示遮罩 'left'、'center'、'right' | string | 'right' |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | object | {} |  |
| okButtonProps | ok 按钮 props | [ButtonProps](https://antdv.com/components/button) | - |  |
| okText | 确认按钮文字 | string\|slot | 确定 |  |
| title | 标题 | string\|slot | 无 |  |
| visible(v-model) | 对话框是否可见 | boolean | 无 |  |
| width | 宽度 | string\|number | 300 |  |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |

## Events

| 事件           | 回调参数                  | 说明               |
| -------------- | ------------------------- | ------------------ |
| close          | `(e)=>void`               | 点击关闭回调       |
| ok             | `(e)=>void`               | 点击确定回调       |

## slot

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| insertFooter        | footer内部默认按钮左侧 | - |
| afterFooter        | footer内部默认按钮右侧 | - |

## expose

| 方法名 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| scrollbarRef | 导出ScScrollbar实例，可以通过实例方法`update`更新滚动条状态 | -  | |
| alertRef | 当前Alert提示实例 | -  | |
| setDrawerProps | 设置当前ScDrawer的props | -  | |
| updateMaxHeight | 触发一次计算内容高度方法 | -  | |
