<template>
  <div :class="className">
    <TableFilter
      :createButtonOptions="allOptions.createButtonOptions"
      :mutilpActionOptions="allOptions.mutilpActionOptions"
      :serachOptions="allOptions.serachOptions"
      @createClick="createHandle"
      @mutilpChange="mutilpChangeHandle"
    >
      <template template #[item]="data" v-for="item in Object.keys($slots).filter(item => ['createButton', 'serach', 'mutilpBtns'].includes(item))" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </TableFilter>
    <Table
      v-bind="$attrs"
      :pagination="getPaginationInfo"
      :scroll="{ x: allOptions?.scroll?.x, y: 480}"
      size="small"
      ref="tableRef"
      @change="handleTableChange"
    >
      <template template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template #action="{ record }">
        <slot
          v-if="isAction"
          name="action"
          :record="record"
        />
        <ScTableAction
          v-else
          name="action"
          :record="record"
          v-bind="allOptions.actionsProps"
          @onAction="handle"
        />
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScTable',
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import { computed, useAttrs, useSlots, defineProps, ref, provide, defineEmits } from 'vue'
import { Table } from 'ant-design-vue'
import type { PaginationProps } from 'ant-design-vue' 

import { prefixCls } from '../../../constans'
import TableFilter from './TableFilter.vue'
import ScTableAction from './TableAction.vue'
import { tableProps, SorterResult } from './types/table'
import { usePagination } from '../hooks/usePagination'

const tablePrefixCls = prefixCls + 'Table'

const attrs = useAttrs()
const slots = useSlots()

const props = defineProps(tableProps())
const emits = defineEmits(['onAction', 'tableChange', 'createClick', 'mutilpChange'])

const tableRef = ref()

provide('scTable', { tableRef, props: ref({...props, ...attrs}) })

const allOptions = computed(() => {
  return {...props, ...attrs}
})
console.log('allOptions: ', allOptions);

const {
  getPaginationInfo,
  // getPagination,
  setPagination,
  // setShowPagination,
  // getShowPagination,
} = usePagination(allOptions);

const className = computed(() => {
  const classNames = [tablePrefixCls]
  return classNames
})

const isAction = computed(() => {
  return Object.keys(slots).includes('action') 
})

const handle = (action: string) => {
  emits('onAction', action)
}

const createHandle = () => {
  emits('createClick', tableRef)
}

const handleTableChange = (pagination: PaginationProps, filters: Partial<string[]>, sorter: SorterResult) => {
  setPagination(pagination);
  emits('tableChange', pagination, filters, sorter)
}

const mutilpChangeHandle = (value: string) => {
  emits('mutilpChange', value, tableRef)
}

</script>

<style lang="less">
</style>