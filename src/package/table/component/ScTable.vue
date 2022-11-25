<template>
  <div :class="className">
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
          ['createButton', 'serach', 'mutilpBtns'].includes(item),
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
          <Button :disabled="activeOptions?.reload?.isDisabled">
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
        v-for="item in Object.keys($slots)"
        :key="item"
      >
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template #action="{ record }">
        <slot v-if="isAction" name="action../types/tablecord" />
        <ScTableAction
          v-else
          name="action"
          :record="record"
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
      :columnList="columnList"
      @checkChange="checkedChange"
    >
    </ColumnDialogVue>
  </div>
</template>

<script lang="ts">
import { computed, ref, provide, defineComponent, unref, watch } from 'vue';
import { Table, Tooltip, Button } from 'ant-design-vue';
import type { PaginationProps } from 'ant-design-vue';
import { FilterFilled } from '@ant-design/icons-vue';

import { basePrefixCls } from '../../../constans'
import TableFilter from './TableFilter.vue'
import ScTableAction, { ActionItemProps } from './TableAction.vue'
import FilterDropDownVue from './FilterDropDown.vue'
import ColumnDialogVue from './ColumnDialog.vue'
//@ts-ignore
import { tableProps, TableProps, SorterResult } from '../types/table'
import { usePagination } from '../hooks/usePagination';
import { useTableExpand } from '../hooks/useTableExpand'
import { useFilter } from '../hooks/useFIlter'
import { useRowSelection } from '../hooks/useRowSelection'
import { useLoading } from '../hooks/useLoading'
import { useTable } from '../hooks/useTable'
import { useActions } from '../hooks/useActions'
import { isFunction } from 'lodash';

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
  },
  setup(props, { attrs, slots, emit, expose }) {
    const tableRef = ref()
    const tableFilter = ref()
    const tableData = ref<Recordable[]>([])

    const textValue = ref()
    const selectValue = ref()

    const fetchParams = ref<Recordable>({
      tableRef: unref(tableRef),
      mutilpValue: '',
      search: {
        select: selectValue,
        text: textValue
      },
      filter: '',
      selectedRowKeysRef: [],
      columns: [],
      pagination: {}
    })

    provide('scTable', {
      tableRef,
      props: ref({ ...props, ...attrs }),
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

    const columnList = ref(props.columnModalList);
    // console.log('columnList: ', columnList);

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

    // watch(() => selectedRowKeysRef, () =)

    const {
      createButtonOptions,
      mutilpOptions,
      serachOptions,
      getSerachOptions,
      setSerachOptions,
      getMutilpAction,
      setMutilpAction,
    } = useFilter(newProps, tableRef, selectedRowKeysRef, fetchParams)

    const {
      actionsOptions
    } = useActions(newProps, tableRef, selectedRowKeysRef)

    const {
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


    const tableBindValue = computed(() => {
      const dataSource = unref(getDataSourceRef);
      fetchParams.value = {...unref(fetchParams), selectedRowKeysRef, pagination: getPaginationInfo}
      return {
        columns: unref(newProps).columns,
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        ...unref(getExpandOption),
        dataSource
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

    const isCustomFilter = computed(() => {
      return props.customFilter;
    });
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
      emit('mutilpChange', value, tableRef);
      fetchParams.value = {...unref(fetchParams), mutilpValue: value}
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
      emit('filter', {
        filterItem: item,
        setSelectedKeys,
        selectedKeys,
        column,
        clearFilters,
      });
    };

    const handleModal = () => {
      visible.value = !visible.value;
    };
    //@ts-ignore
    const checkedChange = ({ keys, checkedList, list }) => {
      console.log('keys, checkedList, list: ', keys, checkedList, list);
    }

    const serachClickHandle = ({value, type}:any) => {
      console.log('value, type: ', value, type);
    }

    expose({
      getLoading,
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
      
    })

    return {
      className,
      
      allOptions,
      columnList,
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

      handle,
      createHandle,
      handleModal,
      filterDropDownClick,
      mutilpChangeHandle,
      handleTableChange,
      checkedChange,
      expandIconFnc,
      serachClickHandle
    };
  },
});
</script>

<style lang="less"></style>
