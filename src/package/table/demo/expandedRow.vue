<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"
      :indentSize="0"
      :is-tree-table="true"
      @change="handleChange"
      >
        <template #expandedRowRender>
          <p>11111111111</p>
        </template>
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ScTable } from 'sc-ui'

const scTableRef = ref()
// @ts-ignore
const columns = [
  { title: 'Full Name', width: 350, dataIndex: 'name', key: 'name'},
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
    children: [
      {
        key: '12',
        name: 'Jim Gree45455555555n',
        age: 40,
        address: 'London London1111111111111111',
        children: [
          {
            key: '1222212123123123122',
            name: 'Jim Gree123123123n',
            age: 40,
            address: 'London London1111111111111111'
          }
        ],
      }
    ],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
    isShowExPandIcon: true,
    children: [
    ],
  },
];

for(let i = 10; i < 13; i++) {
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


</script>
<style scoped>
/* @import 'comment'; */
</style>