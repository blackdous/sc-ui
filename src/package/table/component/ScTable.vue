<template>
  <div ref="wrapRef" :class="className">
    <ConfigProvider :locale="newProps.langLocale">
      <Spin :spinning="false" v-if="isShowFilter">
        <TableFilter
          v-model:selectValue="selectValue"
          v-model:textValue="textValue"
          :createButtonOptions="createButtonOptions"
          :multipleActionOptions="multipleOptions"
          :serachOptions="serachOptions"
          @createClick="createHandle"
          @multipleChange="multipleChangeHandle"
          @serachClick="serachClickHandle"
          @selectChange="handleSelectChange"
          ref="tableFilter"
        >
          <template
            template
            #[item]="data"
            v-for="item in Object.keys($slots).filter((item) =>
              ['createButton', 'serach', 'multipleBtns'].includes(item)
            )"
            :key="item"
          >
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
          <template #tableActive v-if="!isRableActive">
            <Tooltip
              v-if="activeOptions?.reload?.show"
              overlayClassName="scTooltip-white"
            >
              <template #title v-if="activeOptions?.reload?.text">
                {{ activeOptions?.reload.text }}
              </template>
              <Button
                :disabled="activeOptions?.reload?.isDisabled"
                @click="refresh"
              >
                <i class="iconfont icon-sync"></i>
              </Button>
            </Tooltip>
            <Tooltip
              v-if="activeOptions?.columnDialog?.show"
              overlayClassName="scTooltip-white"
            >
              <template #title v-if="activeOptions?.columnDialog?.text">
                {{ activeOptions?.columnDialog.text }}
              </template>
              <Button
                :disabled="activeOptions?.columnDialog?.isDisabled"
                @click="handleModal"
              >
                <i class="iconfont icon-setting"></i>
              </Button>
            </Tooltip>
            <Tooltip
              v-if="activeOptions?.download?.show"
              overlayClassName="scTooltip-white"
            >
              <template #title v-if="activeOptions?.download?.text">
                {{ activeOptions?.download.text }}
              </template>
              <Button
                :disabled="activeOptions?.download?.isDisabled"
                @click="handleDownload"
              >
                <i class="iconfont icon-download"></i>
              </Button>
            </Tooltip>
          </template>
          <template #tableActive v-else>
            <slot name="tableActive"></slot>
          </template>
        </TableFilter>
      </Spin>
      <FilterTagsVue
        v-if="newProps.customFilter && newProps.filterTag"
        :columns="getFilterDropdownRef"
        @closeTag="handleCloseTag"
        @closeAll="handleCloseAll"
      >
      </FilterTagsVue>
      <Table
        size="small"
        ref="tableRef"
        :expand-icon="expandIconFnc"
        v-bind="tableBindValue"
        @change="handleTableChange"
      >
        <!-- :scroll="{ y: newProps?.scroll?.y || 500}" -->
        <!-- @expandedRowsChange="handleExpand" -->
        <template
          template
          #[item]="data"
          v-for="item in Object.keys($slots).filter(item => 
            ![...customComponentKey, 'renderEmpty'].includes(item)
          )"
          :key="item"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
        
        <template
          v-for="slotItem in tableBindValue.columns.filter((item: { type: any }) => !!item.type)"
          #[slotItem.type.componentName]="slotProps"
        >
          <component
            :is="getComponent(slotItem.type.componentName)"
            v-bind="{ ...slotProps, tableName: slotItem.type.componentName }"
            :key="slotItem.dataIndex"
            v-on="{...getEvent(slotItem.type.componentName)}"
          />
        </template>

        <template #action="{ record }">
          <slot v-if="isAction" slot="action" />
          <ScTableAction
            v-else
            name="action"
            :record="record"
            :fetchParams="fetchParams"
            v-bind="actionsOptions"
            @onAction="(action) => { handle(action, record) }"
          />
        </template>
        <template
          v-if="isCustomFilter"
          #filterDropdown="{
            confirm,
            column
          }"
        >
          <FilterDropDownVue
            :filterList="column.filterList || []"
            :overlayClassName="column.dataIndex + column.key"
            :column="column"
            :filterSelected="column.filterSelected"
            @filter="(item: FilterItem[], keys: string[]) => { filterDropDownClick(item, keys, confirm, column) }"
          >
          </FilterDropDownVue>
        </template>
        <template #filterIcon="{column}" v-if="isCustomFilter">
          <FilterFilled :style="{ color: column.filtered && column?.filterSelected?.length ? '#008CD3' : 'rgba(0, 0, 0, 0.2)' }" :class="[ column.filtered && column?.filterSelected?.length ? 'filtered' : 'notFilter' ]"></FilterFilled>
        </template>
      </Table>
      <ColumnDialogVue
        v-model:visible="visible"
        :columnList="columnList || getFilterColumnRef"
        @cancelModal="cancelModal"
        @okModal="okModal"
      >
      </ColumnDialogVue>
      <template #renderEmpty>
        <EmptyVue v-if="!isRenderEmpty"></EmptyVue>
        <slot name="renderEmpty" v-else></slot>
      </template>
    </ConfigProvider>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent, unref, onMounted, nextTick, toRaw } from 'vue'
import { Table, Tooltip, Button, Spin, ConfigProvider } from 'ant-design-vue'
import { FilterFilled } from '@ant-design/icons-vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'

import { basePrefixCls } from '../../../constans'
import TableFilter from './TableFilter.vue'
import ScTableAction, { ActionItemProps } from './TableAction.vue'
import FilterDropDownVue from './FilterDropDown.vue'
import ColumnDialogVue from './ColumnDialog.vue'
import EmptyVue from './Empty.vue'
import FilterTagsVue from './FilterTags.vue'
import TdComponents from './Td'

//@ts-ignore
import { tableProps, TableProps, ButtonType, TableActionType, SorterResult, PaginationProps } from '../types/table'
import { Column, FilterItem } from '../types/column'
import { usePagination } from '../hooks/usePagination';
import { useTableExpand } from '../hooks/useTableExpand'
import { useFilter } from '../hooks/useFIlter'
import { useRowSelection } from '../hooks/useRowSelection'
import { useLoading } from '../hooks/useLoading'
import { useDataSource } from '../hooks/useDataSource'
import { useActions } from '../hooks/useActions'
import { useColumn } from '../hooks/uesColumn'
import { createTableContext } from '../hooks/useTableContext'
import isFunction from 'lodash/isFunction'
// import { Column } from '../types/column';

const tablePrefixCls = basePrefixCls + 'Table';

// const props = defineProps(tableProps())
// const emits = defineEmits(['onAction', 'tableChange', 'createClick', 'multipleChange', 'filter'])

export default defineComponent({
  name: 'ScTable',
  inheritAttrs: false,
  props: tableProps(),
  components: {
    Table,
    Tooltip,
    Button,
    FilterFilled,
    TableFilter,
    ScTableAction,
    FilterDropDownVue,
    ColumnDialogVue,
    Spin,
    ConfigProvider,
    EmptyVue,
    FilterTagsVue,
    ...TdComponents
    // Address,
    // Copy,
    // Ellipsis,
    // Status,
  },
  setup(props, { attrs, slots, emit, expose }) {
    const tableRef = ref()
    const wrapRef = ref()
    const tableFilter = ref()
    const tableData = ref<Recordable[]>([])

    const textValue = ref()
    const selectValue = ref()
    
    const zhCN = ref({})
    const enUS = ref({})

    const innerPropsRef = ref<Partial<TableProps>>();

    const fetchParams = ref<Recordable>({
      tableRef,
      multipleValue: '',
      searchSelect: '',
      searchText: '',
      filters: {},
      selectedRowKeysRef: [],
      selectedRowRef: [],
      columns: [],
      pagination: {},
      sorter: {}
    })

    const newProps = computed(() => {
      return { ...props, ...unref(innerPropsRef) } as TableProps;
    })
    const visible = ref(false);

    const allOptions = computed(() => {
      return { ...props, ...attrs };
    });

    const { getLoading, setLoading } = useLoading(newProps);

    const {
      getPaginationInfo,
      setPagination,
      getPagination,
      setShowPagination,
      getShowPagination,
    } = usePagination(newProps);

    const {
      expandIconFnc,
      getExpandOption, 
      expandAll, 
      expandRows, 
      collapseAll,
    } = useTableExpand(newProps, tableData, emit)

    const {
      selectedRowKeysRef,
      selectedRowRef,
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      setSelectedRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,
    } = useRowSelection(newProps, tableData, emit)
    
    const {
      isShowFilter,
      createButtonOptions,
      multipleOptions,
      serachOptions,
      setSerachOptions,
      setMutilpAction,
    } = useFilter(newProps, selectedRowKeysRef, fetchParams)

    const {
      actionsOptions
    } = useActions(newProps, selectedRowKeysRef, fetchParams)

    const {
      customComponentKey,
      getDataSourceRef,
      getRowKey,
      getAutoCreateKey,
      handleTableChange: onTableChange,
      getEvent,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      reload,
      updateTableData,
    } = useDataSource(
      newProps,
      {
        tableData,
        getPaginationInfo,
        setLoading,
        setPagination,
        clearSelectedRowKeys,
      },
      emit,
      fetchParams
    );

    const {
      // getColumnRef,
      getFilterColumnRef,
      getFilterDropdownRef,
      getFetchFilter,
      getColumns,
      setFilterDropdownRef,
      clearFilterDropdownRef,
      clearFilterAllDropdownRef,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    } = useColumn(newProps, fetchParams)

    const tableBindValue = computed(() => {
      const dataSource = unref(getDataSourceRef);
      fetchParams.value = {...unref(fetchParams), selectedRowKeysRef, selectedRowRef, pagination: getPaginationInfo}
      return {
        ...attrs,
        ...unref(newProps),
        columns: toRaw(unref(getFilterColumnRef)),
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        ...unref(getExpandOption),
        dataSource,
        loading: unref(getLoading),
        pagination: toRaw(unref(getPaginationInfo))
      }
    })
    const className = computed(() => {
      const classNames = [tablePrefixCls];
      return classNames;
    });

    const activeOptions = computed(() => {
      return props.activeOptions;
    });

    const isAction = computed(() => {
      return Object.keys(slots).includes('action');
    });
    const isRenderEmpty = computed(() => {
      return Object.keys(slots).includes('empty');
    });

    const isRableActive = computed(() => {
      return Object.keys(slots).includes('tableActive');
    });
    const isCustomFilter = computed(() => {
      return props.customFilter;
    });

    function setProps(props: Partial<TableProps>) {
        innerPropsRef.value = { ...unref(innerPropsRef), ...props };
      }

    const getComponent = (type:string) => {
      // 预设组件
      if (unref(customComponentKey).includes(type)) {
        return type.charAt(0).toLocaleUpperCase() + type.slice(1)
      } else {
        // 不识别组件
        return type
      }
    }

    const handle = (action: ActionItemProps, record: any) => {
      if (isFunction(action.action)) {
        action.action({...unref(fetchParams), action, record})
        return false
      }
      emit('onAction', {...unref(fetchParams), action, record});
    };

    const handleSelectChange = (item: string) => {
      const selectItem = unref(serachOptions).typeList.find((_item: ButtonType) => item === _item.value)
      if (item) {
        fetchParams.value = {...unref(fetchParams), selectValue: item}
      }
      if (isFunction(selectItem.action)) {
        selectItem.action({...unref(fetchParams)})
      } else {
        emit('selectChange', {...unref(fetchParams)})
      }
    }

    const createHandle = () => {
      const options = unref(createButtonOptions)
      if (isFunction(options.action)) {
        options.action({...unref(fetchParams)})
      } else {
        emit('createClick', {...unref(fetchParams)})
      }
    };

    const handleTableChange = (
      pagination: PaginationProps,
      filters: Partial<{[key:string]: any}>,
      sorter: SorterResult,
      // @ts-ignore
      // { currentDataSource }
    ) => {
      fetchParams.value = {...unref(fetchParams), pagination, sorter}
      onTableChange.call(null, pagination, unref(getFetchFilter), sorter)
      emit('change', pagination, unref(getFetchFilter), sorter)
    };

    const multipleChangeHandle = (value: any) => {
      fetchParams.value = {...unref(fetchParams), multipleValue: value}
      if (isFunction(value.action)) {
        value.action(unref(fetchParams))
      } else {
        emit('multipleChange', { ...unref(fetchParams) });
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    const filterDropDownClick = (
      items: FilterItem[],
      keys: string[],
      confirm: Function,
      column: any,
    ) => {
      confirm()
      setFilterDropdownRef(column, items)
      fetchParams.value = {
        ...unref(fetchParams),
        filters: {
          ...unref(fetchParams).filters,
          [column.dataIndex]: keys.length ? keys : undefined
        }
      }
      handleTableChange(unref(fetchParams).pagination, unref(getFetchFilter), unref(fetchParams).sorter)
      if (column.filterMultiple) {
        emit('filter', {
          imtes: items,
          column,
          fetchParams: unref(fetchParams),
          setLoading
        });
      } else {
        const item = items[0]
        if (isFunction(item?.action)) {
          item.action({
            filterItem: item,
            column,
            fetchParams: unref(fetchParams),
            setLoading
          })
        } else {
          emit('filter', {
            filterItem: item,
            column,
            fetchParams: unref(fetchParams),
            setLoading
          });
        }
      }
    };

    const handleCloseTag = (column: Column) => {
      clearFilterDropdownRef(column)
      handleTableChange(unref(fetchParams).pagination, unref(getFetchFilter), unref(fetchParams).sorter)
    }

    const handleCloseAll = () => {
      clearFilterAllDropdownRef()
      handleTableChange(unref(fetchParams).pagination, unref(getFetchFilter), unref(fetchParams).sorter)
    }

    const handleModal = () => {
      visible.value = !visible.value;
    };

    const handleDownload = () => {
      const actives = unref(activeOptions)
      if (actives?.download?.href) {
        window.location.href = actives?.download?.href
        return false
      }
      if (isFunction(actives?.download?.action)) {
        actives?.download?.action({...unref(fetchParams)})
      }
    }
    //@ts-ignore
    const cancelModal = ({ keys, checkedList }) => {
      const cancelModal = unref(newProps).cancelModal
      if (isFunction(cancelModal)) {
        cancelModal(keys, checkedList)
      }
    }
    //@ts-ignore
    const okModal = ({ keys, checkedList }) => {
      visible.value = false
      setFilterColumnChecked(keys)
      const okModal = unref(newProps).okModal
      if (isFunction(okModal)) {
        okModal(keys, checkedList)
      }
    }

    const serachClickHandle = ({value, type}:any) => {
      const serach = unref(serachOptions)
      fetchParams.value = {...unref(fetchParams), searchSelect: type, searchText: value}
      if (isFunction(serach?.action)) {
        serach?.action({...unref(fetchParams)})
      } else {
        emit('serachClick', { ...unref(fetchParams) })
      }
      handleTableChange(unref(fetchParams).pagination, unref(getFetchFilter), unref(fetchParams).sorter)
    }

    const refresh = () => {
      const refresh = unref(activeOptions)
      if (unref(newProps).api) {
        reload()
        return false
      }
      if (isFunction(refresh?.reload?.action)) {
        refresh?.reload?.action({ ...unref(fetchParams) })
      } else {
        emit('refresh', { ...unref(fetchParams) })
      }
    }

    const handleExpand = (expandedRows:any) => {
      console.log('expandedRows: ', expandedRows);
    }

    // watch([() => unref(textValue), () => unref(selectValue)], ([text, select]) => {
    //   if (text || select) {
    //     console.log('text: ', unref(text));
    //     console.log('select: ', unref(select));
    //   }
    // })

    onMounted(() => {
      nextTick(() => {
        fetchParams.value.tableRef = tableRef
      })
    })

    const tableAction: TableActionType = {
      reload,
      getSelectRows,
      setSelectedRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setPagination,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      setSelectedRowKeys,
      setLoading,
      getDataSource,
      getRawDataSource,
      setProps,
      getRowSelection,
      getPaginationRef: getPagination,
      // @ts-ignore
      getColumns,
      emit,
      updateTableData,
      setShowPagination,
      getShowPagination,
      expandAll,
      expandRows,
      collapseAll,
      
      clearFilterDropdownRef,
      setSerachOptions,
      setMutilpAction,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    };
    createTableContext({ ...tableAction, wrapRef, getBindValues: tableBindValue });

    expose({
      ...tableAction,
      fetch,
      getAutoCreateKey,
      
    })
    emit('register', tableAction)
    return {
      enUS,
      zhCN,
      newProps,

      className,
      getLoading,
      allOptions,
      // columnList,
      visible,
      isRableActive,
      isCustomFilter,
      activeOptions,
      isAction,
      isRenderEmpty,

      getPaginationInfo,
      tableRef,
      tableFilter,

      tableBindValue,
      fetchParams,
      selectValue,
      textValue,

      multipleOptions,
      createButtonOptions,
      serachOptions,
      actionsOptions,
      customComponentKey,
      getFilterColumnRef,
      isShowFilter,
      getFilterDropdownRef,

      
      handleCloseAll,
      handle,
      createHandle,
      handleModal,
      filterDropDownClick,
      multipleChangeHandle,
      handleTableChange,
      expandIconFnc,
      serachClickHandle,
      getComponent,
      refresh,
      handleDownload,
      setFilterColumnRef,
      cancelModal,
      okModal,
      handleSelectChange,
      handleCloseTag,
      getEvent,
      handleExpand
    };
  },
});
</script>

<style lang="less"></style>
