<template>
  <Table>
  </Table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Table } from 'ant-design-vue'
import { prefixCls } from '../../../constans/event'

export default defineComponent({
  name: 'ScTable',
  inheritAttrs: false,
  components: { Table },
  props: {},
  setup (props, { attrs }) {
    const vBind = computed(() => {
      return {...props,...attrs}
    })
    const className = computed(() => {
      const classNames = [prefixCls + 'Table']
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