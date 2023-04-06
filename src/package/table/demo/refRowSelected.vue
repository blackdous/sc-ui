<template>
  <div>
    <!-- :api="demoListApi" -->
    <ScTable 
      ref="scTableRef"
      :columns="columns"
      :loading="false"
      :data-source="data"
      :scroll="{ y: 300 }"
      :row-selection="{ 
        selectedRowKeys: state.selectedRowKeys, 
        onChange: onSelectChange,
        type: 'radio'
      }"
      :activeOptions="{
        reload: {
          text: '刷新',
          show: true,
          showTooltip: true
        }
      }"
    >
      <!-- :data-source="data" -->
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ScTable } from 'sc-ui'

// import { demoListApi } from './tableData'
// import { setTime } from '../../picker/utils/timeUtil';
type Key = string | number

const scTableRef = ref()
// @ts-ignore
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name'},
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age'},
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: 160,
    type: {
      componentName: 'tdEllipsis',
      props: {
        lineheigth: 2
      }
    }
    // type: {
    //   componentName: 'copy',
    //   props: {
    //     successTxt: 'copy 成功',
    //     errorText: ''
    //   }
    // }
  },
  { title: 'Column 2', dataIndex: 'age', key: '2', width: 160 },
  { title: 'Column 3', dataIndex: 'age', key: '3', width: 160 }
];

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

for(let i = 10; i < 25; i++) {
  data.push({
    key: i + '',
    name: 'John Brown',
    age: i,
    address: 'New London',
  })
}

//@ts-ignore
const handleChange = (pagination, filters, sorter, fetchParams) => {
  console.log('pagination, filters, sorter: ', pagination, filters, sorter, fetchParams);
}

const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: ['1'], // Check here to configure the default column
  loading: false,
});

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};

setTimeout(() => {
  state.selectedRowKeys = ['2']
  console.log('state: ', state);
}, 1500)

</script>
<style scoped>
/* @import 'comment'; */
</style>