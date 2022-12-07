import { ComputedRef, ref, watchEffect, unref, Ref, watch, nextTick, onMounted, computed} from "vue"
import { CreateButton, MutilpActionOptions, SerachOptions } from "../types/table"
import cloneDeep from 'lodash/cloneDeep'

import { isFunction } from "@vueuse/core"
export function useFilter (
  propsRef: ComputedRef<Recordable>,
  selectedRowKeysRef?: Ref<Recordable[]>,
  fetchParams?: Ref<Recordable>
  ) {
  const createButtonOptions = ref<CreateButton>({})
  const multipleOptions = ref<Recordable>({})
  const serachOptions = ref<Recordable>({})

  function setMutilpAction (multipleAction: MutilpActionOptions) {
    if (!multipleAction) {
      return multipleAction
    }
    const { show, options } = cloneDeep(multipleAction)
    if (!show) {
      multipleOptions.value = multipleAction
      return false
    }
    const newmMutilpList = options?.map(item => {
      if (isFunction(item.disabled)) {
        // @ts-ignore
        item.disabled = item?.disabled({selectedRowKeysRef: unref(selectedRowKeysRef), ...unref(fetchParams)})
      }
      return item
    })
    multipleOptions.value = { show, options: newmMutilpList }
  }

  function getMutilpAction () {
    return unref(multipleOptions)
  }

  async function setSerachOptions (serach:SerachOptions) {
    if (!serach) {
      return serach
    }
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
      if (Object.prototype.toString.call(typeList) === '[object Promise]') {
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
  
  const  isShowFilter = computed(() => {
    const isShow = (unref(propsRef)?.activeOptions?.reload?.show 
    || unref(propsRef)?.activeOptions?.columnDialog?.show 
    || unref(propsRef)?.multipleOptions?.show 
    || unref(propsRef)?.serachOptions?.show)
    return isShow
  })

  watch(
    [() => selectedRowKeysRef],
    () => {
      nextTick(() => {
        setMutilpAction(unref(propsRef).multipleOptions as MutilpActionOptions)
      })
    },
    { deep: true }
  )

  onMounted(() => {
    setMutilpAction(unref(propsRef).multipleOptions as MutilpActionOptions)
    setSerachOptions(unref(propsRef).serachOptions as SerachOptions)
  })

  watchEffect(() => {
    createButtonOptions.value = unref(propsRef).createButtonOptions
  })

  return {
    createButtonOptions,
    multipleOptions,
    serachOptions,
    setSerachOptions,
    getSerachOptions,
    setMutilpAction,
    getMutilpAction,
    isShowFilter
  }
}