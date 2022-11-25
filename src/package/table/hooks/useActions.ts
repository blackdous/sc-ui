import { cloneDeep } from 'lodash'
import { ComputedRef, ref, Ref, onMounted, unref, watch, nextTick } from "vue"

import { isArray, isFunction } from '../../../utils/is'
import type { ActionProps as ActionOptions, ActionItemProps } from '../component/TableAction.vue'
import { TableProps } from "../types/table"

export function useActions (
  propsRef: ComputedRef<TableProps>,
  tableRef: Ref<any>,
  selectedRowKeysRef?: Ref<Recordable[]>
  ) {
    const actionsOptions = ref<Recordable>({})

    function flapSetItem (actions: Array<ActionItemProps>) {
      if (!isArray(actions)) {
        return actions
      }
      // @ts-ignore
      const newActions = actions?.map(item => {
        if (isFunction(item.isDisabled)) {
          // @ts-ignore
          item.isDisabled = item?.isDisabled({ tableRef: unref(tableRef), selectedRowKeysRef: unref(selectedRowKeysRef)})
        }
        if (isFunction(item.loading)) {
          item.loading = item?.loading({ tableRef: unref(tableRef), selectedRowKeysRef: unref(selectedRowKeysRef)})
        }
        if (item.children) {
          flapSetItem(item.children)
        }
        return item
      })
      return newActions
    }

    function setActionOptions (Options: ActionOptions) {
      const { actions } = cloneDeep(Options)
      const newActions = flapSetItem(actions as Array<ActionItemProps>)
      actionsOptions.value = { ...Options, actions: newActions }
    }
    watch(
      [() => selectedRowKeysRef],
      () => {
        nextTick(() => {
          setActionOptions(unref(propsRef).actionsOptions as ActionOptions)
        })
      },
      { deep: true }
    )

    onMounted(() => {
      setActionOptions(unref(propsRef).actionsOptions as ActionOptions)
    })
  return {
    actionsOptions
  }  
}