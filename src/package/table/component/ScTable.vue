<template>
  <TableFilter>
    <template #createButton>
      <solt name="createButton"></solt>
    </template>
  </TableFilter>
  <Table>
  </Table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Table } from 'ant-design-vue'

import { prefixCls } from '../../../constans/event'
import TableFilter from './tableFilter.vue'

export default defineComponent({
  name: 'ScTable',
  inheritAttrs: false,
  components: { Table, TableFilter },
  props: {},
  setup (props, { attrs, slots }) {
    console.log('slots: ', slots);
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