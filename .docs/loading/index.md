---
map:
  path: /loading
realPath: src/package/loading/index.zh-CN.md
---

# Loading 加载中

在网络较慢或数据较多时，表示数据正在加载的状态

<demo src="./demo/basic.vue"
  language="vue"
  title="loading"
  >
</demo>

- 包含`ScLoading`组件
- `useLoading` 方法
- `v-loading` 指令

## 组件类型

<demo src="./demo/simple.vue"
  language="vue"
  title="组件类型"
  >
</demo>

## 组件大小

<demo src="./demo/size.vue"
  language="vue"
  title="组件大小"
  >
</demo>

## Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| tip | `string` | - | - | 加载文本 |
| isFullPage | `boolean` | `true` | - | 为`true`加载图片为`loading.gif`;`false`时为显示loading动画 |
| size | `default, small , large` | `default` | - | 大小 |
| absolute | `boolean` | false | - | 绝对定位，为 `false` 时可以全屏 |
| loading | `boolean` | - | - | 当前加载状态 |
| background | `string` | - | - | 背景色 |
| theme | `'dark' or 'light'` | `light` | - | 背景色主题，当背景色不为空时使用背景色 |
