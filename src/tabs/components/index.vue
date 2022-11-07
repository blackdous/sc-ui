<template>
  <Tabs v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Tabs>
</template>

<script lang="ts">
export default {
  name: 'ScTabs',
  inheritAttrs: false
}
</script>

<script lang='ts' setup>
import { Tabs } from 'ant-design-vue'
// import {  } from 'vue'

export interface TabsProps {
  type?: 'line' | 'card' | 'editable-card'
  model?: ''
}
const props = withDefaults(defineProps<TabsProps>(), {
  type: 'card'
})
</script>
