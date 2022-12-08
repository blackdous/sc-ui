import { ComputedRef, ref, watchEffect, isRef, unref, Ref, watch, nextTick, onMounted, computed} from "vue"
import { CreateButton, MutilpActionOptions, SearchOptions } from "../types/table"
import cloneDeep from 'lodash/cloneDeep'

import { isFunction } from "@vueuse/core"
export function useFilter (
  propsRef: ComputedRef<Recordable>,
  selectedRowKeysRef?: Ref<Recordable[]>,
  fetchParams?: Ref<Recordable>,
  tableFilter?: ComputedRef<Recordable>
  ) {
  const createButtonOptions = ref<CreateButton>({})
  const multipleOptions = ref<Recordable>({})
  const searchOptions = ref<Recordable>({})

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

  function clearAll () {
    if (isRef(tableFilter)) {
      unref(tableFilter).clearAll()
    }
  }

  function getMutilpAction () {
    return unref(multipleOptions)
  }

  async function setSearchOptions (search:SearchOptions) {
    if (!search) {
      return search
    }
    const { show, showSelect, typeList } = search
    if (!show) {
      searchOptions.value = search
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
      searchOptions.value = { ...search, typeList: [], loading: true}
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
    searchOptions.value = { ...search, typeList: newTypeList, loading: false}
  }

  function getSearchOptions () {
    return unref(searchOptions)
  }
  
  const  isShowFilter = computed(() => {
    const isShow = (unref(propsRef)?.activeOptions?.reload?.show 
    || unref(propsRef)?.activeOptions?.columnDialog?.show 
    || unref(propsRef)?.multipleOptions?.show 
    || unref(propsRef)?.searchOptions?.show)
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
    setSearchOptions(unref(propsRef).searchOptions as SearchOptions)
  })

  watchEffect(() => {
    createButtonOptions.value = unref(propsRef).createButtonOptions
  })

  return {
    createButtonOptions,
    multipleOptions,
    searchOptions,
    isShowFilter,
    setSearchOptions,
    getSearchOptions,
    setMutilpAction,
    getMutilpAction,
    clearAll
  }
}