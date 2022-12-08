import { ref, Ref, unref, computed, toRaw } from 'vue'

import { Column, FilterItem } from '../types/column'
import { isArray, isFunction } from '../../../utils/is'

export interface GetColumnsParams {
  ignoreIndex?: boolean;
  ignoreAction?: boolean;
  sort?: boolean;
}

export function useColumn (
  propsRef: Ref<Recordable>,
  fetchParams?: Ref<Recordable>
) {
  const customComponentKey = ref<string[]>(['copy', 'address', 'ellipsis', 'status'])
  const customComponentHeaderKey = ref<string[]>(['describe', 'unit'])
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>
  const getColumnRef = computed(() => {
    const columns = unref(columnsRef).map((item) => {
      if (item?.type?.componentName) {
        item.slots = {
          ...item.slots,
          customRender: item.type.componentName
        }
      }
      if (item?.titleType?.componentName) {
        item.slots = {
          ...item.slots,
          title: item.titleType.componentName
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
  const filterColumn = ref(unref(propsRef).columnFilterList.length ? unref(propsRef).columnFilterList : unref(getColumnRef))

  const getFilterDropdownRef = computed(() => {
    return filterColumn.value
  })

  function setFilterDropdownRef (column:Column, filterItem: FilterItem[]) {
    const columns = unref(filterColumn)
    columns.forEach((item: Column) => {
      if (item.dataIndex === column.dataIndex) {
        item.filterSelected = filterItem
      }
    })
    filterColumn.value = columns
  }

  function clearFilterDropdownRef (column: Column) {
    const columns = unref(filterColumn)
    columns.forEach((item: Column) => {
      if (item.dataIndex === column.dataIndex) {
        item.filterSelected = []
      }
    })
    filterColumn.value = columns
  }

  function clearFilterAllDropdownRef () {
    const columns = unref(filterColumn)
    columns.forEach((item: Column) => {
      item.filterSelected = []
    })
    filterColumn.value = columns
  }

  const getFetchFilter = computed(() => {
    const filter = {}
    const columns = unref(filterColumn)
    columns.forEach((item: Column) => {
      if (item.filterSelected?.length) {
        // @ts-ignore
        filter[item.dataIndex] = item.filterSelected?.map(item => item.key)
      }
    })
    return filter
  })

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

  const getTypeComponent = (type:string) => {
    // 预设组件
    if (unref(customComponentKey).includes(type)) {
      return type.charAt(0).toLocaleUpperCase() + type.slice(1)
    } else {
      // 不识别组件
      return type
    }
  }
  const getTitleComponent = (type:string) => {
    // 预设组件
    if (unref(customComponentHeaderKey).includes(type)) {
      return type.charAt(0).toLocaleUpperCase() + type.slice(1)
    } else {
      // 不识别组件
      return type
    }
  }

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
    filterColumn.value = columns
  }


  function getColumns(opt?: GetColumnsParams) {
    const { ignoreIndex, ignoreAction } = opt || {};
    let columns = toRaw(unref(getColumnRef));
    if (ignoreIndex) {
      columns = columns.filter((item) => item.flag !== 'INDEX');
    }
    if (ignoreAction) {
      columns = columns.filter((item) => item.flag !== 'ACTION');
    }

    return columns;
  }



  return {
    getColumnRef,
    getFilterColumnRef,
    getFilterDropdownRef,
    getFetchFilter,
    customComponentKey,
    customComponentHeaderKey,
    getTypeComponent,
    getTitleComponent,
    getColumns,
    setFilterDropdownRef,
    clearFilterDropdownRef,
    clearFilterAllDropdownRef,
    setColumnRef,
    setFilterColumnRef,
    setFilterColumnChecked,
    setFilterColumnDisabled
  }
} 