import { ref, Ref, unref, computed, toRaw, watchEffect } from 'vue'
// import cloneDeep from 'lodash/cloneDeep'
import lodash from 'lodash'

import { Column, FilterItem } from '../types/column'
import { isArray, isFunction } from '../../../utils'
import { findNode } from '../../../utils/treeHelper'
import useLocale from '../../../hooks/useLocale'

const { cloneDeep } = lodash
export interface GetColumnsParams {
  ignoreIndex?: boolean;
  ignoreAction?: boolean;
  sort?: boolean;
}

export function useColumn (
  propsRef: Ref<Recordable>,
  fetchParams?: Ref<Recordable>,
  props?: Recordable
) {
  const customComponentKey = ref<string[]>(['tdCopy', 'tdHandle', 'tdEllipsis', 'tdStatus'])
  const customComponentHeaderKey = ref<string[]>(['thDescribe', 'thUnit'])
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>
  const getColumnRef = ref()
  const { antLocale } = useLocale()
  const adapterColumnFunc = (columns: Column[]) => {
    const newColumns = columns?.map((item) => {
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
        item.slots = {
          ...item.slots,
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
        }
        item.filtered =  item.filtered ?? true
      }
      if (!item.filterList && item.filters && item.filters?.length) {
        item.filterList = (item.filters || [])?.map(item => {
          return {
            label: item.text,
            // value: item.value,
            key: item.value
          }
        })
        item.slots = {
          ...item.slots,
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        }
        item.filtered =  item.filtered ?? true
      }
      if (item.filteredValue && isArray(item?.filterList)) {
        item.filterSelected = item?.filteredValue?.map(_item => {
          const newItem = findNode(item?.filterList || [], (node:FilterItem) => node.key === _item, { key: 'key' })
          return newItem ? newItem : {}
        })
      }
      if (antLocale?.locale === 'en') {
        item.width = item.enWidth || item.width
      }
      // console.log('item: ', item);
      return item
    })
    getColumnRef.value = newColumns
    return newColumns
  }
  const filterColumn = ref(unref(propsRef).columnFilterList.length ? unref(propsRef).columnFilterList : unref(getColumnRef))
  adapterColumnFunc(unref(columnsRef))
  const getFilterDropdownRef = computed(() => {
    return filterColumn.value
  })
  watchEffect(() => {
    columnsRef.value = (props?.columns || [])?.map((item: any) => item)
    filterColumn.value = (props?.columns || [])?.map((item: any) => item)
    adapterColumnFunc(unref(columnsRef))
  })

  function setFilterDropdownRef (column:Column, filterItem: FilterItem[]) {
    const columns = unref(filterColumn)?.map((item: Column) => {
      if (item.dataIndex === column.dataIndex) {
        item.filterSelected = filterItem
      }
      return item
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

  function setColumns (columns: Column[], isSetFilter?: boolean) {
    columnsRef.value = columns
    if (isSetFilter) {
      filterColumn.value = columns
    }
  }

  function getRowClassName(record: any, index: number) {
    const { rowClassName } = unref(propsRef);
    const classNames: string[] = [];
    if (record.disabled) {
      classNames.push('table-disabled')
    }
    if (record?.children?.length) {
      classNames.push('table-expandedRow')
    }
    if (rowClassName && isFunction(rowClassName)) {
      classNames.push(rowClassName(record, index));
    }
    return classNames.filter((cls) => !!cls).join(' ');
  }

  const thColumn = computed(() => {
    const newColumn = cloneDeep(unref(getFilterColumnRef)?.filter((item:Column) => !!item.titleType))
    return newColumn
  })

  const getColumnsRef = computed(() => {
    const columns = cloneDeep(unref(getFilterColumnRef))?.filter((item: Column) => item.checked)
    // console.log('filterColumn: ', columns);
    return columns
  })

  const getFilterColumnRef = computed(() => {
    // console.log('filterColumn: ', filterColumn, cloneDeep(unref(filterColumn)));
    const columns = cloneDeep(unref(filterColumn))?.map((item: Column) => {
      if (!item.default) {
        // @ts-ignore
        item.label = item.title || item.label
        if (item.titleType) {
          item.label = item.titleType.props.text
          // @ts-ignore
          item.describe =  item.titleType.componentName.indexOf('thUnit') > -1 ? item.titleType.props.unit : ''
        }
        // @ts-ignore
        item.value = item.key
        if (!item.key) {
          item.key = item.dataIndex
          // @ts-ignore
          item.value = item.dataIndex
        }
        item.disabled = item.disabled || false
        if (item.checked === false) {
          item.checked = false
        } else {
          item.checked = true
        }
        item.default = true
      }
      return item
    })
    // console.log('columns: ', columns);
    return columns || []
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

  function setFilterColumnChecked (columnIds: string[]) {
    if (!isArray(columnIds)) {
      return false
    }
    const columns = unref(getFilterColumnRef).map((item: Column) => {
      // @ts-ignore
      item.checked = columnIds.includes(item.key)
      return item
    })
    filterColumn.value = columns
  }

  function setFilterColumnRef (columns: Column[]) {
    filterColumn.value = columns || []
  }



  return {
    getColumnRef,
    getFilterColumnRef,
    getColumnsRef,
    thColumn,
    getFilterDropdownRef,
    getFetchFilter,
    customComponentKey,
    customComponentHeaderKey,
    // showSortTitle,
    getRowClassName,
    getTypeComponent,
    getTitleComponent,
    getColumns,
    setFilterDropdownRef,
    clearFilterDropdownRef,
    clearFilterAllDropdownRef,
    setColumns,
    setFilterColumnRef,
    setFilterColumnChecked,
    setFilterColumnDisabled
  }
} 