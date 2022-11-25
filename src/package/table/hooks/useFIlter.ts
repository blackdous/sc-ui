import { ComputedRef, ref, watchEffect, unref, Ref, watch, nextTick, onMounted, isRef} from "vue"
import { cloneDeep } from 'lodash'
import { TableProps, CreateButton, MutilpActionOptions, SerachOptions } from "../types/table"

import { isFunction } from "@vueuse/core"
export function useFilter (
  propsRef: ComputedRef<TableProps>,
  tableRef: Ref<any>,
  selectedRowKeysRef?: Ref<Recordable[]>
  ) {
  const createButtonOptions = ref<Recordable>({})
  const mutilpOptions = ref<Recordable>({})
  const serachOptions = ref<Recordable>({})

  function setMutilpAction (mutilpAction: MutilpActionOptions) {
    const { show, mutilpList } = cloneDeep(mutilpAction)
    if (!show) {
      mutilpOptions.value = mutilpAction
      return false
    }
    const newmMutilpList = mutilpList?.map(item => {
      if (isFunction(item.disabled)) {
        // @ts-ignore
        item.disabled = item?.disabled({ tableRef: unref(tableRef), selectedRowKeysRef: unref(selectedRowKeysRef)})
      }
      return item
    })
    mutilpOptions.value = { show, mutilpList: newmMutilpList }
  }

  function getMutilpAction () {
    return unref(mutilpOptions)
  }

  async function setSerachOptions (serach:SerachOptions) {
    const { show, showSelect, typeList } = serach
    if (!show) {
      serachOptions.value = serach
      return false;
    }
    let newTypeList = []
    if (showSelect) {
      // @ts-ignore
      newTypeList = typeList
      if (isFunction(typeList)) {
        // @ts-ignore
        newTypeList = typeList()
      }
      serachOptions.value = { ...serach, typeList: [], loading: true}
      if (Object.prototype.toString.call(typeList)) {
        // @ts-ignore
        newTypeList = await typeList
      }
      // if (isRef(newTypeList)) {
      //   // console.log('unref(newTypeList): ', unref(newTypeList));
      //   //@ts-ignore
      //   isArray(unref(newTypeList)) && (newTypeList = unref(newTypeList).map(item => {
      //       if (isFunction(item.disabled)) {
      //         // @ts-ignore
      //         item.disabled = item?.disabled({ tableRef: unref(tableRef), selectedRowKeysRef: unref(selectedRowKeysRef)})
      //       }
      //       return item
      //     })
      //   )
      // }
    }
    serachOptions.value = { ...serach, typeList: newTypeList, loading: false}
  }

  function getSerachOptions () {
    return unref(serachOptions)
  }

  watch(
    [() => selectedRowKeysRef],
    () => {
      nextTick(() => {
        setMutilpAction(unref(propsRef).mutilpOptions as MutilpActionOptions)
      })
    },
    { deep: true }
  )

  onMounted(() => {
    setMutilpAction(unref(propsRef).mutilpOptions as MutilpActionOptions)
    setSerachOptions(unref(propsRef).serachOptions as SerachOptions)
  })

  watchEffect(() => {
    createButtonOptions.value = unref(propsRef).createButtonOptions as CreateButton
  })

  return {
    createButtonOptions,
    mutilpOptions,
    serachOptions,
    setSerachOptions,
    getSerachOptions,
    setMutilpAction,
    getMutilpAction,
  }
}