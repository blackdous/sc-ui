import { cloneDeep } from 'lodash'
import { ref, Ref, unref, computed } from 'vue'

import { Column } from '../types/column'
import { isArray } from '../../../utils/is';

export function useColumn (
  propsRef: Ref<Recordable>
) {
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>;
  const filterColumn = ref(unref(propsRef).columnModalList.length ? unref(propsRef).columnModalList : unref(columnsRef))

  function setColumnRef (colums: Column[]) {
    columnsRef.value = colums
  }

  const getColumnRef = computed(() => {
    const columns = cloneDeep(unref(columnsRef)).map(item => {
      if (item.type) {
        item.slots = {
          customRender: item.type.componentName
        }
      }
      return item
    })
    return columns
  })

  const getFilterColumnRef = computed(() => {
    const columns = unref(filterColumn).map((item: Column) => {
      if (!item.default) {
        item.label = item.title
        item.value = item.key
        item.disabled = false
        item.checked = true
        item.default = true
      }
      if (item.type) {
        item.slots = {
          customRender: item.type.componentName
        }
      }
      return item
    })
    return columns
  })

  function setFilterColumnRef (columns: Column[]) {
    filterColumn.value = columns
  }

  function setFilterColumnChecked (columnIds: string[]) {
    if (!isArray(columnIds)) {
      return false
    }
    const columns = unref(columnsRef).map((item: Column) => {
      item.checked = columnIds.includes(item.key)
      return item
    }).filter((item: Column) => item.checked)
    filterColumn.value = columns
  }

  function setFilterColumnDisabled (columnIds: string[]) {
    if (!isArray(columnIds)) {
      return false
    }
    const columns = unref(filterColumn).map((item: Column) => {
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