<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :columns="columns"
      :data-source="data"
      :create-button-options="{
        show: true,
        text: '创建'
      }"
      :mutilp-options="{
        show: true,
        mutilpList: radioList
      }"
      :serach-options="{
        show: true,
        showSelect: true,
        // typeList: () => radioList,
        typeList: promiseTypelist,
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
      locale="zh"
      
      @createClick="createClick"
      @mutilpChange="mutilpChangeHandle"
      @serachClick="serachHanle"
      @filter="handleFilter"
      @refresh="refresh"
      >
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, ref } from 'vue'
import type { Ref } from 'vue'
import { ScTable } from 'sc-ui'
//@ts-ignore
import { list as ColumnList } from '../types/column'

import type { TooltipButtonPropsType } from 'sc-ui'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'


// const filteredInfo = ref();
const scTableRef = ref()

const columnList = ref()
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left'},
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 160, },
  { title: 'Column 2', dataIndex: 'age', key: '2', width: 160 },
  { title: 'Column 3', dataIndex: 'age', key: '3', width: 160 },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 200,
  //   slots: { customRender: 'action' },
  // },
];

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    disabled: false,
    value: 'a',
    //@ts-ignore
    action: ({tableRef, selectedRowKeysRef}) => {
      console.log('tableRef, selectedRowKeysRef: ', tableRef, selectedRowKeysRef);
    }
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

const promiseTypelist = new Promise ((resolve) => {
  setTimeout(() => {
    resolve(radioList)
  }, 1500)
}).then((data) => {
  return data
}).catch(error => {
  console.log('error: ', error);
})


interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  children?: DataItem[],
  [key:string]: any
  actionsOptions?: []
}

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '111111111112333333333333333asdasdasdasdasdqweqweqweqweqweqweasdasdqweqweqweqwdadasdasd',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
  },
];

for(let i = 10; i < 40; i++) {
  data.push({
    key: i.toString(),
    name: 'John Brown',
    age: i,
    address: 'New London',
  })
}

interface Data {
  action: string,
  tableRef: ComputedRef
}

const createClick = (data: ComputedRef) => {
  console.log('Data: ', data);
  columnList.value = ColumnList
}

const serachHanle = (data: ComputedRef) => {
  console.log('Data: ', data);
}
//@ts-ignore
const mutilpChangeHandle = ({tableRef, selectedRowKeysRef}) => {
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
  console.log('tableRef: ', tableRef);
}
// @ts-ignore
const handleFilter = ({ filterItem, setSelectedKeys, selectedKeys, column, clearFilters }) => {
  console.log('clearFilters: ', clearFilters);
  console.log('column: ', column);
  console.log('selectedKeys: ', selectedKeys);
  console.log('setSelectedKeys: ', setSelectedKeys);
  console.log('filterItem: ', filterItem);
}
// @ts-ignore
const refresh = ({tableRef, selectedRowKeysRef}) => {
  console.log('tableRef: ', tableRef);
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
}


</script>

<style lang="less">
@import '../../../style/index.less';
</style>