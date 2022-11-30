import { ref, Ref, unref, computed } from 'vue'

import { Column } from '../types/column'
import { isArray, isFunction } from '../../../utils/is';

export function useColumn (
  propsRef: Ref<Recordable>,
  fetchParams?: Ref<Recordable>
) {
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>
  const getColumnRef = computed(() => {
    const columns = unref(columnsRef).map((item) => {
      if (item.type) {
        item.slots = {
          customRender: item.type.componentName
        }
      }
      if (item.filterList) {
        if (isFunction(item.filterList)) {
          item.filterList = item.filterList({ propsRef: unref(propsRef), fetchParams: unref(fetchParams) })
        }
      }
      return item
    })
    return columns
  })
  const filterColumn = ref(unref(propsRef).columnModalList.length ? unref(propsRef).columnModalList : unref(getColumnRef))

  function setColumnRef (colums: Column[]) {
    columnsRef.value = colums
  }


  const getFilterColumnRef = computed(() => {
    const columns = unref(filterColumn).map((item: Column) => {
      if (!item.default) {
        // @ts-ignore
        item.label = item.title
        // @ts-ignore
        item.value = item.key
        item.disabled = false
        item.checked = true
        item.default = true
      }
      return item
    })
    return columns
  })

  function setFilterColumnRef (columns: Column[]) {
    filterColumn.value = columns || []
  }

  function setFilterColumnChecked (columnIds: string[]) {
    if (!isArray(columnIds)) {
      return false
    }
    const columns = unref(columnsRef).map((item: Column) => {
      // @ts-ignore
      item.checked = columnIds.includes(item.key)
      return item
    }).filter((item: Column) => item.checked)
    console.log('columns: ', columns);
    filterColumn.value = columns
  }

  function setFilterColumnDisabled (columnIds: string[]) {
    if (!isArray(columnIds)) {
      return false
    }
    const columns = unref(filterColumn).map((item: Column) => {
      // @ts-ignore
      item.disabled = columnIds.includes(item.key)
      return item
    })
    setFilterColumnRef(columns)
  }



  return {
    getColumnRef,
    getFilterColumnRef,
    setColumnRef,
    setFilterColumnRef,
    setFilterColumnChecked,
    setFilterColumnDisabled
  }
} 