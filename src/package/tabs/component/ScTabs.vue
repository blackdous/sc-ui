<template>
  <Tabs 
    v-bind="{...props, ...$attrs}"
    :class="className"
    >
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
import { computed } from 'vue'

export interface TabsProps {
  /**
   * 只有type的值为card的时候，设置styleMode 生效; 可选值 `'line' | 'card' | 'editable-card'`
   */
  type?: string,
  /**
   * styleMode 可选值 `gradient`、`shadow`
   */
  styleMode?: string
}
const props = withDefaults(defineProps<TabsProps>(), {
  type: ''
})
const className = computed(() => {
  const classNames = props.styleMode ? [props.styleMode] : []
  return classNames
})
</script>
