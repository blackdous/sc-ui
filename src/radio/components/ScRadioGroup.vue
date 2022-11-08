<template>
  <RadioGroup 
    v-bind="{...props, ...$attrs}"
    :class="className"
    >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </RadioGroup>
</template>

<script lang="ts">
export default {
  name: 'ScRadioGroup',
  inheritAttrs: false
}
</script>

<script lang='ts' setup name="ScRadioGroup">
import { RadioGroup } from 'ant-design-vue'
import { computed } from 'vue'

export interface TabsProps {
  /**
   * styleMode 可选值为 `'scLine'`
   */
  styleMode?: string
}
const props = withDefaults(defineProps<TabsProps>(), {
})
const className = computed(() => {
  const classNames = props.styleMode ? [props.styleMode] : []
  return classNames
})
</script>
