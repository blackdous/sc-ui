---
map:
  path: /lottieicon
realPath: src/package/lottieIcon/index.zh-CN.md
---

# LottieIcon 组件

<!-- <demo src="./demo/basic.vue"
  language="vue"
  title="LottieIcon"
  desc="LottieIcon"
  >
</demo> -->
```vue
<template>
  <div> CLICK_PLAY_AND_BACKWARDS </div>
  <Space>
    <div class="disFlex"> 
      <UseAnimations :animation="visibility2" :size="56"></UseAnimations>
      <UseAnimations :animation="searchToX" :size="56"></UseAnimations>
      <UseAnimations :animation="maximizeMinimize" :size="56"></UseAnimations>
      <UseAnimations :animation="notification" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> CLICK_PLAY </div>
  <Space>
    <div class="disFlex"> 
      <UseAnimations :animation="download" :size="56"></UseAnimations>
      <UseAnimations :animation="copy" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> HOVER_PLAY_AND_BACKWARDS </div>
  <Space>
    <UseAnimations :animation="settings" :size="56"></UseAnimations>
    <UseAnimations :animation="trash" :size="56"></UseAnimations>
    <UseAnimations :animation="help" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
    <UseAnimations :animation="alertCircle" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
  </Space>
  <div> HOVER_PLAY_AND_STOP </div>
  <Space>
    <UseAnimations :animation="userPlus" :size="56"></UseAnimations>
    <UseAnimations :animation="userMinus" :size="56"></UseAnimations>
  </Space>
  <div> LOOP_PLAY </div>
  <Space>
    <UseAnimations :animation="notification3" :size="56"></UseAnimations>
    <UseAnimations :animation="notification4" :size="56"></UseAnimations>
  </Space>
</template>

<script lang='ts' setup>
// import { onMounted } from 'vue'
import UseAnimations from 'vue3-useanimations'
import { Space } from 'ant-design-vue'
// import { UseAnimations } from '../component/index'
import visibility2 from 'vue3-useanimations/dist/types/lib/visibility2'
import searchToX from 'vue3-useanimations/dist/types/lib/searchToX'
import settings from 'vue3-useanimations/dist/types/lib/settings'
import download from 'vue3-useanimations/dist/types/lib/download'
import trash from 'vue3-useanimations/dist/types/lib/trash'
import copy from 'vue3-useanimations/dist/types/lib/copy'
import help from 'vue3-useanimations/dist/types/lib/help'
import alertCircle from 'vue3-useanimations/dist/types/lib/alertCircle'
import maximizeMinimize from 'vue3-useanimations/dist/types/lib/maximizeMinimize'
import notification from 'vue3-useanimations/dist/types/lib/notification'
import notification3 from 'vue3-useanimations/dist/types/lib/notification3'
import notification4 from 'vue3-useanimations/dist/types/lib/notification4'
import userPlus from 'vue3-useanimations/dist/types/lib/userPlus'
import userMinus from 'vue3-useanimations/dist/types/lib/userMinus'
</script>

<style scoped>
.sss {
  font-size: 22px;
  color: red;
}
.disFlex {
  align-items: center;
}
.disFlex .anticon  {
  padding: 2px 14px;
}
</style>

```

## 自定click事件

<!-- <demo src="./demo/basic1.vue"
  language="vue"
  title="自定click事件"
  desc="自定click事件"
  >
</demo> -->

```vue
<template>
  <div style="padding: 20px ">
    <span>radioButton</span>
    <UseAnimations
      :reverse="checked"
      @click="handleClick"
      :size="40"
      :wrapperStyle="{ marginTop: '5px' }"
      :animation="radioButton"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import UseAnimations from 'vue3-useanimations'
import radioButton from 'vue3-useanimations/dist/types/lib/radioButton'

const checked = ref(false)

const handleClick = () => {
  checked.value = !checked.value
}
</script>
```

## 自定render函数

<!-- <demo src="./demo/basic2.vue"
  language="vue"
  title="render函数"
  desc="render函数"
  >
</demo> -->

```vue
<template>

  <UseAnimations
    :animation={heart}
    :size="60"
    @click="handleClick"
    :render="renderFunc"
  >
  </UseAnimations>
</template>

<script lang='ts' setup>
import { h } from 'vue'
import UseAnimations from 'vue3-useanimations'
import heart from 'vue3-useanimations/dist/types/lib/heart'

const renderFunc = (eventProps: any, animationProps: any) => {
  return h('button', {
    style: { padding: '20px' },
    type: 'button',
    ...eventProps
  }, h('div', { ...animationProps }, '测试'))
}

const handleClick = () => {
  console.log('additional onClick cb is working');
}
</script>

```

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
