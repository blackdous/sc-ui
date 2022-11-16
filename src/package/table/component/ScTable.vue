<template>
  <div :class="className">
    <TableFilter
      v-bind="{...allOptions.createButtonOptions, ...allOptions.mutilpActionOptions, ...allOptions.serachOptions} "
    >
      <template v-if="!isCreateButton" #createButton>
        <Button :class="[tablePrefixCls + '-creatBtn']">
        </Button>
      </template>
      <template v-else #createButton>
        <slot name="createButton"></slot>
      </template>
    </TableFilter>
    <Table
      v-bind="$attrs"
      size="small"
      ref="tableRef"
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
import { computed, useAttrs, useSlots, defineProps, ref, ComputedRef, provide } from 'vue'
import { Table, Button } from 'ant-design-vue'
// import type { ComputedRef } from 'vue'

import { prefixCls } from '../../../constans/event'
import TableFilter from './TableFilter.vue'
import ScTableAction from './TableAction.vue'
import { tableProps } from './type'
// import { createTableContext } from '../hooks/uesTableContext'

const tablePrefixCls = prefixCls + 'Table'

const attrs = useAttrs()
const slots = useSlots()

const props = defineProps(tableProps())

const tableRef = ref<ComputedRef>()

provide('scTable', { tableRef, props: ref({...props, ...attrs}) })

const allOptions = computed(() => {
  return {...props, ...attrs}
})
// console.log('vBind: ', vBind);

const className = computed(() => {
  const classNames = [tablePrefixCls]
  return classNames
})

const isCreateButton = computed(() => {
  return Object.keys(slots).includes('createButton')
})

const isAction = computed(() => {
  console.log('111111111', Object.keys(slots).includes('action') );
  return Object.keys(slots).includes('action') 
})

</script>

<style lang="less">
</style>