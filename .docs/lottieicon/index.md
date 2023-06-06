---
map:
  path: /lottieicon
realPath: src/package/lottieIcon/index.zh-CN.md
---

<!-- # LottieIcon 组件

<demo src="./demo/basic.vue"
  language="vue"
  title="LottieIcon"
  desc="LottieIcon"
  >
</demo>

## 自定click事件

<demo src="./demo/basic1.vue"
  language="vue"
  title="自定click事件"
  desc="自定click事件"
  >
</demo>

## 自定render函数

<demo src="./demo/basic2.vue"
  language="vue"
  title="render函数"
  desc="render函数"
  >
</demo> -->

## props

| 属性         | 类型                         | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------- | ------- | ------ | ------------------------ |
| animation      | animation file     | - |  -   |  lottie 动画json 文件 |
| size      | number     | 24 |  -  |  当前icon 大小 |
| strokeColor      | `'inherit'`     | -  | - |  svg stroke color 属性 |
| fillColor      | boolean     | false |  -   |  svg fill color 属性 |
| wrapperStyle      | object     | -  |  -   | 外层div style 属性 |
| pathCss      | string    | -  |  -   |  - |
| reverse      | boolean    | false  |  -   |  是否翻转播放动画 |
| autoplay      | boolean    | false  |  -   |  是否自动播放 |
| loop      | boolean    | false  |  -   | 是否循环播放  |
| options      | object    | -  |  -   |  其他配置项，可以参考 `lottie-web` 文档 |
| speed      | number    | -  |  -   |  动画速度 |
|  effectType | string | -  | `'CLICK_PLAY_AND_SEGMENTS'  'CLICK_PLAY'  'HOVER_PLAY_AND_STOP' 'HOVER_PLAY_AND_BACKWARDS'  'CLICK_PLAY_AND_BACKWARDS'` | 触发动画的方式 |
