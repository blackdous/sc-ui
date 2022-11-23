<template>
  <div>
    <!-- :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" -->
    <ScTable 
      ref="scTableRef"
      :columns="columns"
      :data-source="data"
      :actions-props="actionProps"
      :create-button-options="{
        show: true,
        text: '创建'
      }"
      :mutilp-action-options="{
        show: true,
        mutilpList: radioList
      }"
      :serach-options="{
        show: true,
        showSelect: true,
        typeList: radioList,
        customSerachFunc: serachHanle,
        selectOptions: {
          placeholder: '请选择',
          width: '120px'
        },
        inputOptions: {
          placeholder: '请输入',
          width: '120px',
          maxlength: 40
        }
      }"
      :customFilter="true"
      :columnModalList="columnList"
      @onAction="handle"
      @createClick="createClick"
      @mutilpChange="mutilpChangeHandle"
      @serachClick="serachHanle"
      @filter="handleFilter"
    >
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { ScTable } from 'sc-ui'

import {  list as ColumnList } from '../component/types/column'

import type { TooltipButtonPropsType } from 'sc-ui'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'


type Key = string | number
// const filteredInfo = ref();
const sortedInfo = ref();
const scTableRef = ref()

const columnList = ref()

// const filtered = filteredInfo.value || {};
const sorted = sortedInfo.value || {};
const list = ref([
  {
    label: '创建快照',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: 'aa',
    tooltip: false,
    tooltipDes: '创建快照创建快照aa',
  },
  {
    label: '续费',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: 'bb',
    tooltip: false,
    tooltipDes: '续费续费续费续费续费'
  },
  {
    label: '一级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: '1111',
    tooltip: false,
    tooltipDes: '一级选项111111111',
    children: [
      {
        label: '二级选项',
        isShow: true,
        isDisabled: false,
        loading: false,
        action: '2222',
        tooltip: false,
        tooltipDes: '二级选项22222222',
      }
    ]
  }, {
    label: '三级选项',
    isShow: true,
    isDisabled: true,
    loading: false,
    action: '3333',
    tooltip: true,
    tooltipDes: '三级选项33333333',
  }, {
    label: '四级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: '4444',
    tooltip: false,
    tooltipDes: '四级选项444444444',
  }
])
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left',
    slots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon'
    },
    filterList: list,
    onFilterDropdownVisibleChange: (visable:boolean) => { console.log(visable) }
  },
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age',
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 160 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 160 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 160 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    slots: { customRender: 'action' },
  },
];

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    value: 'a'
  },
  {
    tooltipDis: false,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮B',
    value: 'b'
  },
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮C',
    value: 'c'
  }
])

const actionProps = ref({
  showBtn: 2,
  actions: list
})

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  children?: DataItem[]
}

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New London',
    children: [{
      key: '11',
      name: 'John Brown',
      age: 32,
      address: 'New London',
    }]
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
    children: [{
      key: '21',
      name: 'John Brown',
      age: 32,
      address: 'New London',
    }]
  }
];


const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false,
});

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};

interface Data {
  action: string,
  tableRef: ComputedRef
}

const handle = (data: Data) => {
  console.log('Data: ', data);
}

const createClick = (data: ComputedRef) => {
  console.log('Data: ', data);
  columnList.value = ColumnList
}

const serachHanle = (data: ComputedRef) => {
  console.log('Data: ', data);
}

const mutilpChangeHandle = (type: ComputedRef, tableRef: ComputedRef) => {
  console.log('tableRef: ', tableRef);
  console.log('type: ', type);
}
// @ts-ignore
const handleFilter = ({ filterItem, setSelectedKeys, selectedKeys, column, clearFilters }) => {
  console.log('clearFilters: ', clearFilters);
  console.log('column: ', column);
  console.log('selectedKeys: ', selectedKeys);
  console.log('setSelectedKeys: ', setSelectedKeys);
  console.log('filterItem: ', filterItem);
}

</script>

<style lang="less">
@import '../../../style/index.less';
</style>