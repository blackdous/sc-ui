<template>
  <Button
    :class="className"
  >
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

import { basePrefixCls } from '../../../constant'
import { buttonProps } from '../type'

export default defineComponent({
  name: 'ScButton',
  inheritAttrs: false,
  props: buttonProps,
  components: {
    Button
  },
  setup (props) {
    const className = [basePrefixCls]
    console.log('props: ', props)
    return {
      className
    }
  }
})
</script>

<style lang="less">
</style>