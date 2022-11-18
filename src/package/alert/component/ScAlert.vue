<template>
  <Alert
    v-bind="vBind"
    :class="className"
  >
    <template template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Alert>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { prefixCls } from '../../../constans'
import { Alert } from 'ant-design-vue'

import { alertProps } from './type'

export default defineComponent({
  name: 'ScAlert',
  inheritAttrs: false,
  components: { Alert },
  props: alertProps(),
  setup (props, { attrs }) {
    const vBind = computed(() => {
      return {...props,...attrs}
    })
    const className = computed(() => {
      const classNames = [prefixCls + 'Alert']
      if (props.textColor) {
        classNames.push('textColor');
      }
      return classNames
    })
    return {
      vBind,
      className
    }
  }
})
</script>

<style lang="less">
</style>