
import { ComputedRef, ref, onMounted, unref } from "vue"

// import { isArray, isFunction } from '../../../utils/is'
import type { ActionProps as ActionOptions } from '../component/TableAction.vue'
// import { TableProps } from "../types/table"
// import cloneDeep from 'lodash/cloneDeep'
import lodash from 'lodash'
// const { cloneDeep } = pkg

const { cloneDeep } = lodash

export function useActions (
  propsRef: ComputedRef<Recordable>,
  ) {
    const actionsOptions = ref<Recordable>({})

    function setActionOptions (Options: ActionOptions) {
      if (!Options) {
        return false
      }
      const { actions } = cloneDeep(Options)
      // const newActions = flapSetItem(actions as Array<ActionItemProps>)
      actionsOptions.value = { ...Options, actions: actions }
    }
    // watch(
    //   [() => selectedRowKeysRef],
    //   () => {
    //     nextTick(() => {
    //       setActionOptions(unref(propsRef).actionsOptions as ActionOptions)
    //     })
    //   },
    //   { deep: true }
    // )

    onMounted(() => {
      setActionOptions(unref(propsRef).actionsOptions as ActionOptions)
    })
  return {
    actionsOptions
  }  
}