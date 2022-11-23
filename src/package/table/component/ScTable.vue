<template>
  <div :class="className">
    <TableFilter
      :createButtonOptions="allOptions.createButtonOptions"
      :mutilpActionOptions="allOptions.mutilpActionOptions"
      :serachOptions="allOptions.serachOptions"
      @createClick="createHandle"
      @mutilpChange="mutilpChangeHandle"
      @serachClick="serachClickHandle"
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
      v-bind="$attrs"
      :dataSource="allOptions.dataSource"
      :pagination="getPaginationInfo"
      :scroll="{ x: allOptions?.scroll?.x || 500 }"
      size="small"
      ref="tableRef"
      :expand-icon="expandIconFnc"
      @change="handleTableChange"
      >
      <!-- :expandIcon="expandIconFnc" -->
      <template
        template
        #[item]="data"
        v-for="item in Object.keys($slots)"
        :key="item"
      >
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template #action="{ record }">
        <slot v-if="isAction" name="action" :record="record" />
        <ScTableAction
          v-else
          name="action"
          :record="record"
          v-bind="allOptions.actionsProps"
          @onAction="handle"
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
import { computed, ref, provide, defineComponent } from 'vue';
import { Table, Tooltip, Button } from 'ant-design-vue';
import type { PaginationProps } from 'ant-design-vue';
import { FilterFilled } from '@ant-design/icons-vue';

import { basePrefixCls } from '../../../constans';
import TableFilter from './TableFilter.vue';
import ScTableAction from './TableAction.vue';
import FilterDropDownVue from './FilterDropDown.vue';
import ColumnDialogVue from './ColumnDialog.vue';
import { tableProps, SorterResult } from './types/table';
import { usePagination } from '../hooks/usePagination';
import { useTable } from '../hooks/useTable'

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
  setup(props, { attrs, slots, emit }) {
    const tableRef = ref();

    provide('scTable', {
      tableRef,
      props: ref({ ...props, ...attrs }),
    });
    const visible = ref(false);

    const allOptions = computed(() => {
      return { ...props, ...attrs };
    });
    console.log('allOptions: ', allOptions);

    const columnList = ref(props.columnModalList);
    // console.log('columnList: ', columnList);

    const {
      getPaginationInfo,
      // getPagination,
      setPagination,
      // setShowPagination,
      // getShowPagination,
    } = usePagination(allOptions);

    const {
      expandIconFnc
    } = useTable()

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

    const handle = (action: string) => {
      emit('onAction', action);
    };

    const createHandle = () => {
      emit('createClick', tableRef);
    };

    const isCustomFilter = computed(() => {
      return props.customFilter;
    });
    const handleTableChange = (
      pagination: PaginationProps,
      filters: Partial<string[]>,
      sorter: SorterResult,
    ) => {
      setPagination(pagination);
      emit('tableChange', pagination, filters, sorter);
    };

    const mutilpChangeHandle = (value: string) => {
      emit('mutilpChange', value, tableRef);
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
      console.log('type: ', type);
      console.log('value: ', value);

    }

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
