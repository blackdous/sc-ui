<template>
  <div :class="prefixCls">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ScSteps',
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import { defineProps, provide, watch, ref, computed } from 'vue'
import type { Ref } from 'vue'

import { CHANGE_EVENT } from '../../../constans/event'
import { stepsEmits } from './type';
// StepsPropType
import type { StepItemState } from './ScStep.vue'

export interface StepsProp {
  /**
   * 每个 step 的间距，不填写将自适应间距。 支持百分比。
   */
  space?: number|string,
  /**
   * 显示方向
   */
  direction?: 'horizontal' | 'vertical',
  /**
   * 设置当前激活步骤
   */
  active?: number,
  /**
   * 进行居中对齐
   */
  alignCenter?: boolean,
  /**
   * 是否应用简洁风格
   */
  simple?: boolean,
  /**
   * 设置结束步骤的状态
   * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
   */
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success',
  /**
   * 设置当前步骤的状态
   * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
   */
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}

const props = withDefaults(defineProps<StepsProp>(), {
  direction: 'horizontal',
  finishStatus: 'finish',
  processStatus: 'process',
  simple: false
})

const emit = defineEmits(stepsEmits);

const steps: Ref<StepItemState[]> = ref([])

watch(steps, () => {
  steps.value.forEach((instance: StepItemState, index: number) => {
    instance.setIndex(index)
  })
})

provide('ScSteps', { props, steps })

watch(() => props.active, (newVal: number, oldVal: number) => {
  emit(CHANGE_EVENT, newVal, oldVal)
})

const prefixCls = computed(() => {
  const className:string[] = ['scSteps', 'scSteps-' + props.direction]
  if (props.simple) {
    className.push('scSteps-simple')
  }
  return className
})
</script>