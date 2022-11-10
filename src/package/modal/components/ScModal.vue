<template>
  <Modal
    :class="className"
    v-bind="vBind"
    :visible="vBind.visible"
  >
    <template #[item]="data" v-for="item in ['default']">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Modal>
</template>

<script lang='ts' setup>
import { computed, defineProps, useSlots } from 'vue'
import { Modal } from 'ant-design-vue'

import { modalProps } from './type'

const prefixCls = 'scModel'

const vBind = defineProps(modalProps())

// const props = computed(() => {})

const slots = useSlots()
console.log('slots: ', slots);
const className = computed(() => {
  const classNames = ['scModal']
  return classNames
})

// const isSlotTitle = computed(() => {
//   return Object.keys(slots).includes('title')
// })



</script>
