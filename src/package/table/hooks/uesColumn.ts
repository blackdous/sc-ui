import { ref, Ref, unref, computed, toRaw, onMounted, nextTick, watch, watchEffect } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

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
  const customComponentKey = ref<string[]>(['tdCopy', 'tdHandle', 'tdEllipsis', 'tdStatus'])
  const customComponentHeaderKey = ref<string[]>(['thDescribe', 'thUnit'])
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>
  const getColumnRef = ref()
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
      }
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
    columnsRef.value = propsRef.value.columns
    filterColumn.value = propsRef.value.columns
    adapterColumnFunc(unref(columnsRef))
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

  function setColumnRef (columns: Column[]) {
    columnsRef.value = columns
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

  function showSortTitle (propsRef: Ref<Recordable>, uuid: string) {
    onMounted(() => {
      nextTick(() => {
        const { upTitle, downTitle, cancelUpTitle, cancelDownTitle } = unref(propsRef)
        const upDom = document.querySelectorAll(`#${uuid} .anticon-caret-up`);
        const downDom = document.querySelectorAll(`#${uuid} .anticon-caret-down`);
        const sortDom = document.querySelectorAll(`#${uuid} .ant-table-column-sorter-inner`)
        Array.from(upDom).forEach((item: HTMLElement) => {
          item.style.position = 'relative'
          item.style.zIndex = '1'
          const spanUpDom = document.createElement('span');
          spanUpDom.className = 'table-sortUp'
          spanUpDom.innerText = upTitle
          item.appendChild(spanUpDom)
          item.addEventListener('mouseenter', () => {
            spanUpDom.style.display = 'block'
          })
          item.addEventListener('mousemove', () => {
            spanUpDom.style.display = 'block'
          })
          item.addEventListener('mouseout', () => {
            spanUpDom.style.display = 'none'
          })
        })
        Array.from(downDom).forEach((item: HTMLElement) => {
          item.style.position = 'relative'
          item.style.zIndex = '1'
          const spanDownDom = document.createElement('span');
          spanDownDom.className = 'table-sortDown'
          spanDownDom.innerText = downTitle
          item.appendChild(spanDownDom)
          item.addEventListener('mouseenter', () => {
            spanDownDom.style.display = 'block'
          })
          item.addEventListener('mousemove', () => {
            spanDownDom.style.display = 'block'
          })
          item.addEventListener('mouseout', () => {
            spanDownDom.style.display = 'none'
          })
        })
        Array.from(sortDom).forEach((item: HTMLElement, index: number) => {
          let clickCount = 0;
          item.addEventListener('click', () => {
            const filterDom = Array.from(sortDom).filter((item:HTMLElement, _index) => index !== _index)
            filterDom.forEach((_item:HTMLElement) => {
              const children = _item.children
              children[0].children[1].innerText = upTitle
              children[1].children[1].innerText = downTitle
            })
            const children = item.children
            clickCount += 1
            if (clickCount === 1) {
              children[0].children[1].innerText = cancelUpTitle
            } else {
              children[0].children[1].innerText = upTitle
            }
            if (clickCount === 2) {
              children[1].children[1].innerText = cancelDownTitle
            } else {
              children[1].children[1].innerText = downTitle
            }
            if (clickCount === 3) {
              clickCount = 0
            }
          })
        })
      })
    })
  }

  const getFilterColumnRef = computed(() => {
    console.log('filterColumn: ', filterColumn);
    const columns = cloneDeep(unref(filterColumn)).map((item: Column) => {
      if (!item.default) {
        // @ts-ignore
        item.label = item.title
        if (item.titleType) {
          item.label = item.titleType.props.text
        }
        // @ts-ignore
        item.value = item.dataIndex
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
    return columns
  })

  const thColumn = computed(() => {
    const newColumn = cloneDeep(unref(getFilterColumnRef).filter((item:Column) => !!item.titleType))
    // let countComponent = {
    //   unit: 0,
    //   describe: 0
    // }
    // const aanewColumn = cloneDeep(newColumn).map((item: Column) => {
    //   if (item?.titleType?.componentName === 'thUnit') {
    //     if (countComponent.unit !== 0) {
    //       item.slots.title += countComponent.unit
    //       item.titleType.componentName += countComponent.unit
    //     }
    //     countComponent.unit += 1
    //   }
    //   if (item?.titleType?.componentName === 'thDescribe') {
    //     if (countComponent.describe !== 0) {
    //       item.slots.title += countComponent.describe
    //       item.titleType.componentName += countComponent.describe
    //     }
    //     countComponent.describe += 1
    //   }
    //   return item
    // })
    // console.log('aanewColumn: ', aanewColumn);
    // console.log('newColumn: ', newColumn);
    return newColumn
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
    thColumn,
    getFilterDropdownRef,
    getFetchFilter,
    customComponentKey,
    customComponentHeaderKey,
    showSortTitle,
    getRowClassName,
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