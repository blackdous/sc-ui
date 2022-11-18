<template>
  <div :class="className">
    <TableFilter
      v-bind="{...allOptions.createButtonOptions, ...allOptions.mutilpActionOptions, ...allOptions.serachOptions} "
    >
      <template v-if="!isCreateButton" #createButton>
        <Button
          :class="[tablePrefixCls + '-creatBtn']"
          type="primary"
        >
          <PlusOutlined></PlusOutlined>
          {{ allOptions?.createButtonOptions?.text }}
        </Button>
      </template>
      <template v-else #createButton>
        <slot name="createButton"></slot>
      </template>

      <template v-if="isMutilpBtns" #mutilpBtns>

      </template>
      <template v-else #mutilpBtns>
        <slot name="createButton"></slot>
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
import { computed, useAttrs, useSlots, defineProps, ref, ComputedRef, provide, defineEmits } from 'vue'
import { Table, Button } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
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
const emits = defineEmits(['onAction', 'tableChange'])

const tableRef = ref<ComputedRef>()

provide('scTable', { tableRef, props: ref({...props, ...attrs}) })

const allOptions = computed(() => {
  return {...props, ...attrs}
})

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

const isCreateButton = computed(() => {
  return Object.keys(slots).includes('createButton')
})

const isMutilpBtns = computed(() => {
  return Object.keys(slots).includes('mutilpBtns')
})

const isAction = computed(() => {
  return Object.keys(slots).includes('action') 
})

const handle = (action: string) => {
  emits('onAction', action)
}
const handleTableChange = (pagination: PaginationProps, filters: Partial<string[]>, sorter: SorterResult) => {
  // console.log(' pagination, filters, sorter: ',  pagination, filters, sorter);
  setPagination(pagination);
  emits('tableChange', pagination, filters, sorter)
}

</script>

<style lang="less">
</style>