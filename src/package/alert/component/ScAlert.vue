<template>
  <Alert
    v-bind="vBind"
    :class="className"
  >
    <template #icon v-if="isShowDefaultErrorIcon">
      <ExclamationCircleFilled />
    </template>
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    
  </Alert>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { basePrefixCls } from '../../../constant'
import { Alert } from 'ant-design-vue'
import {
  ExclamationCircleFilled,
} from '@ant-design/icons-vue';

import { alertProps } from './type'

export default defineComponent({
  name: 'ScAlert',
  inheritAttrs: false,
  components: { Alert, ExclamationCircleFilled },
  props: alertProps(),
  setup (props, { attrs, slots }) {
    const baseClass = basePrefixCls + 'Alert'
    const vBind = computed(() => {
      return {...props,...attrs}
    })
    const className = computed(() => {
      // const classNames = 
      const { textColor, size, message } = props
      return [
        baseClass,
        textColor ? 'textColor' : '',
        size ? baseClass + '--' + size : '',
        message || slots.message ? '' : 'notMessage'
      ]
    })

    const isShowDefaultErrorIcon = computed(() => {
      const isTypeError = props.type === 'error'
      const isSlotIcon = Object.keys(slots).includes('icon')
      return isTypeError && !isSlotIcon
    })
    return {
      vBind,
      className,
      isShowDefaultErrorIcon
    }
  }
})
</script>