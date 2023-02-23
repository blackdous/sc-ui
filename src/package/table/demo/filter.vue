<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"
      :customFilter="true"
      :filterTag="true"
      @change="handleChange"
      >
      <!-- @filter="handleFilter" -->
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ScTable } from 'sc-ui'

const scTableRef = ref()
const list = ref([
  {
    label: '创建快照',
    isShow: true,
    loading: false,
    key: 'aa',
    isDisabled: false,
    action: (data:any) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },
    tooltip: false,
    tooltipDes: '创建快照创建快照aa',
  },
  {
    label: '续费',
    isShow: true,
    isDisabled: false,
    key: 'bb',
    loading: false,
    action: 'bb',
    tooltip: false,
    tooltipDes: '续费续费续费续费续费',
    children: [
      {
        label: '二级选项1111',
        isShow: true,
        isDisabled: false,
        loading: true,
        key: 'dd',
        action: '2222',
        tooltip: false,
        tooltipDes: '二级选项22222222',
      },
      {
        label: '二级选项2222111',
        isShow: true,
        isDisabled: false,
        loading: false,
        key: 'ee',
        action: '5555',
        tooltip: true,
        tooltipDes: '二级选项2222',
      }
    ]
  }, {
    label: '三级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    key: 'ff',
    action: '3333',
    tooltip: true,
    tooltipDes: '三级选项33333333',
  }, {
    label: '四级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: '4444',
    key: '4444',
    tooltip: false,
    tooltipDes: '四级选项444444444',
  }
])
// const promiseTypelist = new Promise ((resolve) => {
//   setTimeout(() => {
//     resolve(list)
//   }, 1500)
// }).then((data) => {
//   return data
// }).catch(error => {
//   console.log('error: ', error);
// })
const filtersList = ref([])
// @ts-ignore
const columns = ref([
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left', 
    // slots: {
    //   filterDropdown: 'filterDropdown',
    //   filterIcon: 'filterIcon'
    // },
    filtered: true,
    filterMultiple: true,
    filterList: () => list,
    filterLoading: true,
  },
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age',
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  },
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: 160,
    // slots: {
    //   filterDropdown: 'filterDropdown',
    //   filterIcon: 'filterIcon'
    // },
    // filterMultiple: false,
    // filterList: () => list,
    // filters: list,
    filters: filtersList,
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
]);

setTimeout(() => {
  columns.value = unref(columns).map((item, index) => {
    // item.filterList = []
    if (index === 0) {
      item.filterList = unref(list).slice(0, 4)
      item.filterLoading = false
    }
    return item
  })
  filtersList.value = [{ text: 'aaa', value: 'aa1' }]
}, 5000)

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
    key: '2',
    name: 'John Brown',
    age: 32,
    address: '111111111112333333333333333asdasdasdasdasdqweqweqweqweqweqweasdasdqweqweqweqwdadasdasd',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
  },
];

for(let i = 10; i < 14; i++) {
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
  columns.value = unref(columns).map(item => {
    // if (item.dataIndex ===)
    item.filteredValue = filters[item.dataIndex]
    console.log('item: ', item);
    return item
  })
}

// @ts-ignore
const handleFilter = ({ items, column, setLoading, fetchParams }) => {
  console.log('fetchParams: ', fetchParams);
  console.log('items: ', items);
  console.log('setLoading: ', setLoading);
  console.log('column: ', column);
}


</script>
<style scoped>
/* @import 'comment'; */
</style>