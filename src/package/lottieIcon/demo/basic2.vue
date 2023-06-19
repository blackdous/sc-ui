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
import heart from 'vue3-useanimations/dist/lib/heart'

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


