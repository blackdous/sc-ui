---
map:
  path: /loading
realPath: src/package/loading/index.zh-CN.md
---

## 简介

<demo src="./demo/basic.vue"
  language="vue"
  title="loading"
  >
</demo>

- 包含`ScLoading`组件
- `useLoading` 方法
- `v-loading` 指令

### Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| tip | `string` | - | - | 加载文本 |
| size | `default, small , large` | `default` | - | 大小 |
| absolute | `boolean` | false | - | 绝对定位，为 `false` 时可以全屏 |
| loading | `boolean` | - | - | 当前加载状态 |
| background | `string` | - | - | 背景色 |
| theme | `'dark' or 'light'` | `light` | - | 背景色主题，当背景色不为空时使用背景色 |