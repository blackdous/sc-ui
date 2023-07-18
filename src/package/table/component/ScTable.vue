<template>
  <div 
    ref="wrapRef" 
    :class="[...className, $attrs.class]"
    :style="$attrs.style"
  >
  <!-- :locale="newProps.langLocale" -->
    <ConfigProvider 
      :transformCellText="({ text }) => isEmptyText(text) ? text : '-'"
    >
      <TableFilter
        v-if="isShowFilter || (Object.keys($slots).filter((item) => ['createButton', 'search', 'multipleBtns', 'tableActive'].includes(item))).length"
        v-model:selectValue="selectValue"
        v-model:textValue="textValue"
        :createButtonOptions="createButtonOptions"
        :isActiveFilter="isActiveFilter"
        :filterLeftStyle="newProps.filterLeftStyle"
        :filterRightStyle="newProps.filterRightStyle"
        :multipleActionOptions="multipleOptions"
        :searchOptions="searchOptions"
        @createClick="createHandle"
        @multipleChange="multipleChangeHandle"
        @searchClick="searchClickHandle"
        @selectChange="handleSelectChange"
        ref="tableFilter"
      >
        <template
          template
          #[item]="data"
          v-for="item in Object.keys($slots).filter((item) =>
            ['createButton', 'search', 'multipleBtns'].includes(item)
          )"
          :key="item"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
        <template #tableActive v-if="!isTableActive">
          <Tooltip
            v-if="activeOptions?.reload?.show"
            overlayClassName="scTooltip-white"
          >
            <template #title v-if="activeOptions?.reload?.text">
              {{ activeOptions?.reload.text }}
            </template>
            <Button
              :disabled="activeOptions?.reload?.isDisabled"
              :loading="activeOptions?.reload?.loading"
              @click="refresh"
            >
              <i class="sc-ui sc-sync"></i>
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
              :loading="activeOptions?.columnDialog?.loading"
              @click="handleModal"
            >
              <i class="sc-ui sc-setting"></i>
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
              :loading="activeOptions?.columnDialog?.loading"
              @click="handleDownload"
            >
              <i class="sc-ui sc-download"></i>
            </Button>
          </Tooltip>
        </template>
        <template #tableActive v-else>
          <slot name="tableActive">
          </slot>
        </template>
      </TableFilter>
      <FilterTagsVue
        v-if="newProps.customFilter && newProps.filterTag"
        :columns="getFilterDropdownRef"
        @closeTag="handleCloseTag"
        @closeAll="handleCloseAll"
      >
      </FilterTagsVue>
      <!-- :scroll="{ x: 'calc(700px + 50%)', y: 240 }" -->
      <Table
        :id="uuid"
        size="small"
        ref="tableRef"
        v-bind="tableBindValue"
        :rowClassName="getRowClassName"
        @change="handleTableChange"
      >
        <template
          template
          #[item]="data"
          v-for="item in Object.keys($slots).filter(item => 
            ![...customComponentKey, ...customComponentHeaderKey, 'renderEmpty'].includes(item)
          )"
          :key="item"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
        
        <template
          v-for="slotItem in tableBindValue.columns.filter((item:any) => !!item.type)"
          #[slotItem.type.componentName]="slotProps"
        >
          <component
            :is="getTypeComponent(slotItem.type.componentName)"
            v-bind="{ ...slotProps, tableName: slotItem.type.componentName }"
            :key="slotItem.dataIndex"
            v-on="{...getEvent(slotItem.type.componentName)}"
          />
        </template>

        <template 
          v-for="(slotItem) in thColumn" 
          #[slotItem.titleType.componentName]>
          <component
            :is="getTitleComponent(slotItem.titleType.componentName)"
            v-bind="{...slotItem.titleType.props }"
            :key="slotItem.key"
          />
        </template>

        <template #action="{ record, dataIndex }">
          <slot v-if="isAction" slot="action" />
          <ScTableAction
            v-else
            name="action"
            :record="record"
            :data="getDataSourceRef"
            :fetchParams="fetchParams"
            v-bind="actionsOptions"
            :dataIndex="dataIndex"
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
            :filterLoading="column.filterLoading"
            :filterSelected="column.filterSelected"
            @filter="(item: FilterItem[], keys: string[]) => { filterDropDownClick(item, keys, confirm, column) }"
          >
          </FilterDropDownVue>
        </template>
        <template #filterIcon="{column}" v-if="isCustomFilter">
          <FilterFilled :style="{ color: column.filtered && column?.filterSelected?.length ? '#008CD3' : 'rgba(0, 0, 0, 0.26)' }" :class="[ column.filtered && column?.filterSelected?.length ? 'filtered' : 'notFilter' ]"></FilterFilled>
          <!-- {{ column }} -->
        </template>
      </Table>
      <ColumnDialogVue
        v-model:visible="visible"
        :columnList="getFilterColumnRef"
        @cancelModal="cancelModal"
        @okModal="okModal"
      >
      </ColumnDialogVue>
      <template #renderEmpty>
        <EmptyVue v-if="!isRenderEmpty"></EmptyVue>
        <slot name="renderEmpty" v-else>
          
        </slot>
      </template>
    </ConfigProvider>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent, unref, onMounted, nextTick, toRaw, watch } from 'vue'
import { Table, Tooltip, Button, Spin, ConfigProvider } from 'ant-design-vue'
import { FilterFilled } from '@ant-design/icons-vue'

import { isEmptyText } from '../../../utils/is'
import { buildUUID } from '../../../utils/uuid'
import { basePrefixCls } from '../../../constant'
import TableFilter from './TableFilter.vue'
import ScTableAction, { ActionItemProps } from './TableAction.vue'
import FilterDropDownVue from './FilterDropDown.vue'
import ColumnDialogVue from './ColumnDialog.vue'
import EmptyVue from './Empty.vue'
import FilterTagsVue from './FilterTags.vue'
// import { TdCopy, TdEllipsis, TdStatus, TdHandle } from './Td'
import TdComponents from './Td'
import THComponents from './Th'

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
// import isFunction from 'lodash/isFunction'
import lodash from 'lodash'

const tablePrefixCls = basePrefixCls + 'Table';

const { isFunction } = lodash

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
    // TdCopy, TdEllipsis, TdStatus, TdHandle,
    ...TdComponents,
    ...THComponents
  },
  emits: ['change', 'register', 'onAction', 'searchClick', 'onAction', 'expanded-rows-change', 'fetch-success', 'createClick', 'selectChange', 'selection-change', 'multipleChange', 'refresh', 'filter'],
  setup(props, { attrs, slots, emit, expose }) {
    const tableRef = ref()
    const wrapRef = ref()
    const tableFilter = ref()
    const tableData = ref<Recordable[]>([])

    const textValue = ref()
    const selectValue = ref()

    const zhCN = ref({})
    const enUS = ref({})

    const uuid = 'sc' + buildUUID()

    const innerPropsRef = ref<Partial<TableProps>>();

    const fetchParams = ref<Recordable>({
      tableRef,
      multipleValue: undefined,
      searchSelect: undefined,
      searchText: undefined,
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
      actionsOptions
    } = useActions(newProps, selectedRowKeysRef, fetchParams)

    const {
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
      isShowFilter,
      isActiveFilter,
      createButtonOptions,
      multipleOptions,
      searchOptions,
      setSearchOptions,
      setMultipleAction,
      clearAll,
    } = useFilter(newProps, selectedRowKeysRef, fetchParams, tableFilter.value, getDataSourceRef)

    const {
      customComponentKey,
      customComponentHeaderKey,
      getFilterColumnRef,
      getColumnsRef,
      getFilterDropdownRef,
      getFetchFilter,
      thColumn,
      showSortTitle,
      getRowClassName,
      getColumns,
      getTypeComponent,
      getTitleComponent,
      setFilterDropdownRef,
      clearFilterDropdownRef,
      clearFilterAllDropdownRef,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    } = useColumn(newProps, fetchParams)
    showSortTitle(newProps, uuid)
    const tableBindValue = computed(() => {
      const dataSource = unref(getDataSourceRef);
      fetchParams.value = {...unref(fetchParams), selectedRowKeysRef, selectedRowRef, setLoading, pagination: getPaginationInfo}
      return {
        ...attrs,
        ...unref(newProps),
        columns: toRaw(unref(getColumnsRef)),
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        ...unref(getExpandOption),
        dataSource,
        loading: unref(getLoading),
        pagination: toRaw(unref(getPaginationInfo)),
        indentSize: newProps.value?.indentSize || 30,
        change: undefined,
        style: undefined,
        class: undefined,
        expandIcon: isExpandIcon.value ? null : (expandIconFnc || newProps?.expandIcon)
      }
    })
    const className = computed(() => {
      const { scroll } = newProps.value
      // console.log('scroll: ', scroll, scroll.y);
      const classNames = [
        tablePrefixCls,
        scroll?.y ? 'not-table-scroll-empty' : ''
      ];
      return classNames;
    });

    const activeOptions = computed(() => {
      return props.activeOptions;
    });

    const isAction = computed(() => {
      return Object.keys(slots).includes('action');
    });
    const isRenderEmpty = computed(() => {
      return Object.keys(slots).includes('renderEmpty');
    });

    const isTableActive = computed(() => {
      return Object.keys(slots).includes('tableActive');
    });
    const isCustomFilter = computed(() => {
      return props.customFilter;
    });

    const isExpandIcon = computed(() => {
      return Object.keys(slots).includes('expandIcon');
    });

    function setProps(props: Partial<TableProps>) {
      innerPropsRef.value = { ...unref(innerPropsRef), ...props };
      if (props.multipleOptions) {
        setMultipleAction(props.multipleOptions)
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
      const selectItem = unref(searchOptions).typeList.find((_item: ButtonType) => item === _item.value)
      // console.log('selectItem: ', selectItem);
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
      console.log('value: ', value);
      fetchParams.value = {...unref(fetchParams), multipleValue: value}
      if (isFunction(value.action)) {
        value.action(unref(fetchParams))
      } else {
        emit('multipleChange', { ...unref(fetchParams) });
      }
    };

    const filterDropDownClick = (
      items: FilterItem[],
      keys: string[],
      confirm: Fn,
      column: any,
    ) => {
      confirm()
      setPagination({ current: 1})
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
      const cancelModal = unref(activeOptions)?.columnDialog?.cancelModal || unref(newProps).cancelModal
      if (isFunction(cancelModal)) {
        cancelModal({ keys, checkedList })
      }
    }
    //@ts-ignore
    const okModal = ({ keys, checkedList, delItemKeys }) => {
      visible.value = false
      setFilterColumnChecked(keys)
      const okModal = unref(activeOptions)?.columnDialog?.okModal || unref(newProps).okModal
      if (isFunction(okModal)) {
        okModal({keys, checkedList, delItemKeys})
      }
    }

    const searchClickHandle = ({value, type}:any) => {
      // console.log('type: ', type);
      // console.log('value: ', value);
      setPagination({ current: 1})
      const search = unref(searchOptions)
      fetchParams.value = {...unref(fetchParams), searchSelect: type, searchText: value}
      if (isFunction(search?.action)) {
        search?.action({...unref(fetchParams)})
      } else {
        emit('searchClick', { ...unref(fetchParams) })
      }
      if (unref(newProps).api) {
        handleTableChange(unref(fetchParams).pagination, unref(getFetchFilter), unref(fetchParams).sorter)
      }
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


    onMounted(() => {
      nextTick(() => {
        fetchParams.value.tableRef = tableRef
      })
    })

    // const aa = [{ "width":60,"dataIndex":"age","key":"age","slots":{"customRender":"status1","title":"thDescribe"},"titleType":{"componentName":"thDescribe","props":{"text":"Column 2","describe":"提示内容"}},"value":"age","disabled":false,"checked":true,"default":true},{"dataIndex":"address","key":"1","width":160,"type":{"componentName":"tdEllipsis","props":{"lineheigth":2}},"titleType":{"componentName":"thDescribe","props":{"text":"Column 1","describe":"提示内容"}},"slots":{"customRender":"tdEllipsis","title":"thDescribe"},"value":"address","disabled":false,"checked":true,"default":true},{"dataIndex":"age","key":"2","width":160,"titleType":{"componentName":"thUnit","props":{"text":"Column 2","unit":"(元)"}},"slots":{"customRender":"copy1","title":"thUnit"},"value":"age","disabled":false,"checked":true,"default":true}]


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
      
      clearFilter: clearAll,
      clearFilterDropdownRef,
      setSearchOptions,
      setMultipleAction,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    };
    createTableContext({ ...tableAction, wrapRef, getBindValues: tableBindValue });
    const resetFilterInputValue = () => {
      tableFilter?.value.resetInput()
    }
    expose({
      ...tableAction,
      fetch,
      getAutoCreateKey,
      resetFilterInputValue
    })
    emit('register', tableAction)
    return {
      enUS,
      zhCN,
      newProps,
      uuid,

      getDataSourceRef,
      className,
      getLoading,
      visible,
      isTableActive,
      isActiveFilter,
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
      searchOptions,
      actionsOptions,
      customComponentKey,
      customComponentHeaderKey,
      getFilterColumnRef,
      thColumn,
      isShowFilter,
      getFilterDropdownRef,
      isExpandIcon,

      getRowClassName,
      isEmptyText,
      handleCloseAll,
      handle,
      createHandle,
      handleModal,
      filterDropDownClick,
      multipleChangeHandle,
      handleTableChange,
      expandIconFnc,
      searchClickHandle,
      getTypeComponent,
      getTitleComponent,
      refresh,
      handleDownload,
      setFilterColumnRef,
      cancelModal,
      okModal,
      handleSelectChange,
      handleCloseTag,
      getEvent
    };
  },
});
</script>
