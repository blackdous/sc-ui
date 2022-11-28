<template>
  <div :class="className">
    <Spin :spinning="tableBindValue.loading">
      <TableFilter
        v-model:selectValue="selectValue"
        v-model:textValue="textValue"
        :createButtonOptions="createButtonOptions"
        :mutilpActionOptions="mutilpOptions"
        :serachOptions="serachOptions"
        @createClick="createHandle"
        @mutilpChange="mutilpChangeHandle"
        @serachClick="serachClickHandle"
        ref="tableFilter"
      >
        <template
          template
          #[item]="data"
          v-for="item in Object.keys($slots).filter((item) =>
            ['createButton', 'serach', 'mutilpBtns'].includes(item)
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
            <template #title v-if="activeOptions?.reload?.showTooltip">
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
            <template #title v-if="activeOptions?.columnDialog?.showTooltip">
              {{ activeOptions?.columnDialog.text }}
            </template>
            <Button
              :disabled="activeOptions?.columnDialog?.isDisabled"
              @click="handleModal"
            >
              <i class="iconfont icon-setting"></i>
            </Button>
          </Tooltip>
        </template>
        <template #tableActive v-else>
          <slot name="tableActive"></slot>
        </template>
      </TableFilter>
    </Spin>
    <Table
      v-bind="tableBindValue"
      :pagination="getPaginationInfo"
      :scroll="{ x: allOptions?.scroll?.x || 500 }"
      size="small"
      ref="tableRef"
      :expand-icon="expandIconFnc"
      @change="handleTableChange"
      >
      <template
        template
        #[item]="data"
        v-for="item in Object.keys($slots).filter(item => 
          !customComponentKey.includes(item)
        )"
        :key="item"
      >
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      
      <template
        v-for="slotItem in tableBindValue.columns.filter((item) => !!item.type)"
        #[slotItem.type.componentName]="slotProps"
      >
        <component
          :is="getComponent(slotItem.type.componentName)"
          v-bind="{ ...slotProps, tableName: slotItem.type.componentName }"
          :key="slotItem.dataIndex"
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
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          column,
        }"
      >
        <FilterDropDownVue
          :filterList="column.filterList || []"
          @filter="(item: any) => { filterDropDownClick(item, setSelectedKeys, selectedKeys, confirm, clearFilters, column) }"
        >
        </FilterDropDownVue>
      </template>
      <template #filterIcon v-if="isCustomFilter">
        <FilterFilled></FilterFilled>
      </template>
    </Table>
    <ColumnDialogVue
      v-model:visible="visible"
      :columnList="columnList || getFilterColumnRef"
      @checkChange="checkedChange"
      @cancelModal="cancelModal"
      @okModal="okModal"
    >
    </ColumnDialogVue>
  </div>
</template>

<script lang="ts">
import { computed, ref, provide, defineComponent, unref, onMounted, nextTick, toRaw } from 'vue';
import { Table, Tooltip, Button, Spin } from 'ant-design-vue';
import type { PaginationProps } from 'ant-design-vue';
import { FilterFilled } from '@ant-design/icons-vue';

import { basePrefixCls } from '../../../constans'
import TableFilter from './TableFilter.vue'
import ScTableAction, { ActionItemProps } from './TableAction.vue'
import FilterDropDownVue from './FilterDropDown.vue'
import ColumnDialogVue from './ColumnDialog.vue'
//@ts-ignore
import Address from './Td/Address.vue'
import Copy from './Td/Copy.vue'
import Ellipsis from './Td/Ellipsis.vue'
import Status from './Td/Status.vue'
//@ts-ignore
import { tableProps, TableProps, SorterResult } from '../types/table'
import { usePagination } from '../hooks/usePagination';
import { useTableExpand } from '../hooks/useTableExpand'
import { useFilter } from '../hooks/useFIlter'
import { useRowSelection } from '../hooks/useRowSelection'
import { useLoading } from '../hooks/useLoading'
import { useTable } from '../hooks/useTable'
import { useActions } from '../hooks/useActions'
import { useColumn } from '../hooks/uesColumn'
import { isFunction } from 'lodash'
import { Column } from '../types/column';

const tablePrefixCls = basePrefixCls + 'Table';

// const props = defineProps(tableProps())
// const emits = defineEmits(['onAction', 'tableChange', 'createClick', 'mutilpChange', 'filter'])

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
    Address,
    Copy,
    Ellipsis,
    Status
  },
  setup(props, { attrs, slots, emit, expose }) {
    const tableRef = ref()
    const tableFilter = ref()
    const tableData = ref<Recordable[]>([])

    const textValue = ref()
    const selectValue = ref()

    const fetchParams = ref<Recordable>({
      tableRef,
      mutilpValue: '',
      searchSelect: '',
      searchText: '',
      // serach: {
      //   select: selectValue,
      //   text: textValue
      // },
      filter: '',
      selectedRowKeysRef: [],
      columns: [],
      pagination: {}
    })

    provide('scTable', {
      tableRef
    });

    const newProps = computed(() => {
      return {
        ...props
      }
    })
    const visible = ref(false);

    const allOptions = computed(() => {
      return { ...props, ...attrs };
    });

    // const columnList = ref(props.columnModalList);
    // console.log('columnList: ', unref(columnList));

    const { getLoading, setLoading } = useLoading(newProps);

    const {
      getPaginationInfo,
      // getPagination,
      setPagination,
      // setShowPagination,
      // getShowPagination,
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
      createButtonOptions,
      mutilpOptions,
      serachOptions,
      getSerachOptions,
      setSerachOptions,
      getMutilpAction,
      setMutilpAction,
    } = useFilter(newProps, tableRef, selectedRowKeysRef)

    const {
      actionsOptions
    } = useActions(newProps, selectedRowKeysRef, fetchParams)

    const {
      customComponentKey,
      getDataSourceRef,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData,
    } = useTable(
      newProps,
      {
        tableData,
        getPaginationInfo,
        setLoading,
        setPagination,
        clearSelectedRowKeys,
      },
      emit,
    );

    const {
      // getColumnRef,
      getFilterColumnRef,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    } = useColumn(newProps)

    const tableBindValue = computed(() => {
      const dataSource = unref(getDataSourceRef);
      fetchParams.value = {...unref(fetchParams), selectedRowKeysRef, pagination: getPaginationInfo}
      return {
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

    const isRableActive = computed(() => {
      return Object.keys(slots).includes('tableActive');
    });
    const isCustomFilter = computed(() => {
      return props.customFilter;
    });

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

    const createHandle = () => {
      emit('createClick', {...fetchParams});
    };

    const handleTableChange = (
      pagination: PaginationProps,
      filters: Partial<string[]>,
      sorter: SorterResult,
    ) => {
      // @ts-ignore
      setPagination(pagination);
      emit('tableChange', pagination, filters, sorter);
    };

    const mutilpChangeHandle = (value: any) => {
      fetchParams.value = {...unref(fetchParams), mutilpValue: value}
      if (isFunction(value.action)) {
        value.action(unref(fetchParams))
      } else {
        emit('mutilpChange', { ...unref(fetchParams) });
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    const filterDropDownClick = (
      item: any,
      setSelectedKeys: Array<string>,
      selectedKeys: string,
      confirm: Function,
      clearFilters: void,
      column: any,
    ) => {
      confirm();
      if (isFunction(item?.action)) {
        item.action({
          filterItem: item,
          setSelectedKeys,
          selectedKeys,
          column,
          clearFilters,
          fetchParams: unref(fetchParams),
          setLoading
        })
      } else {
        emit('filter', {
          filterItem: item,
          setSelectedKeys,
          selectedKeys,
          column,
          clearFilters,
          fetchParams: unref(fetchParams),
          setLoading
        });
      }
    };

    const handleModal = () => {
      visible.value = !visible.value;
    };
    //@ts-ignore
    const checkedChange = ({ keys}) => {
      console.log('keys: ', keys);
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
      console.log('keys: ', keys);
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
    }

    const refresh = () => {
      const refresh = unref(activeOptions)
      if (isFunction(refresh?.reload?.action)) {
        refresh?.reload?.action({ ...unref(fetchParams) })
      } else {
        emit('refresh', { ...unref(fetchParams) })
      }
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

    expose({

      getLoading,
      setLoading,
      expandAll, 
      expandRows, 
      collapseAll,
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      setSelectedRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,

      setSerachOptions,
      getSerachOptions,
      setMutilpAction,
      getMutilpAction,

      getDataSourceRef,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData,

      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
      
    })

    return {
      className,
      getLoading,
      allOptions,
      // columnList,
      visible,
      isRableActive,
      isCustomFilter,
      activeOptions,
      isAction,

      getPaginationInfo,
      tableRef,
      tableFilter,

      tableBindValue,
      fetchParams,
      selectValue,
      textValue,

      mutilpOptions,
      createButtonOptions,
      serachOptions,
      actionsOptions,
      customComponentKey,
      getFilterColumnRef,

      handle,
      createHandle,
      handleModal,
      filterDropDownClick,
      mutilpChangeHandle,
      handleTableChange,
      checkedChange,
      expandIconFnc,
      serachClickHandle,
      getComponent,
      refresh,
      setFilterColumnRef,
      cancelModal,
      okModal
    };
  },
});
</script>

<style lang="less"></style>
