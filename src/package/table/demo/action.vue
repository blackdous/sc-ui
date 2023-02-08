<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"
      :actionsOptions="actionProps"
      @change="handleChange"
      >
      <!-- @onAction="handleAction" -->
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ScTable } from 'sc-ui'

const scTableRef = ref()
// @ts-ignore
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left'},
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
  { title: 'Column 3', dataIndex: 'age', key: '3', width: 160 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    slots: { customRender: 'action' },
  }
];

const list = ref([
  {
    label: '创建快照',
    isShow: true,
    loading: ({tableRef, selectedRowKeysRef}) => {
      console.log('selectedRowKeysRef: ', selectedRowKeysRef);
      if (selectedRowKeysRef.length > 3) {
        return true
      }
      return false
    },
    key: 'aa',
    isDisabled: false,
    action: (data:any) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },
    tooltipDes: '创建快照创建快照aa',
  },
  {
    label: '续费',
    isShow: true,
    isDisabled: ({tableRef, selectedRowKeysRef}) => {
      console.log('selectedRowKeysRef: ', selectedRowKeysRef);
      if (selectedRowKeysRef.length > 3) {
        return true
      }
      return false
    },
    key: 'bb',
    loading: false,
    action: 'bb',
    tooltipDes: '续费续费续费续费续费'
  },
  {
    label: '一级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    key: 'cc',
    action: '1111',
    tooltipDes: '一级选项111111111',
    children: [
      {
        label: '二级选项',
        isShow: true,
        isDisabled: ({record}) => {
          console.log('record: ', record);
          if (record.key === '17') {
            return true
          }
          return false
        },
        loading: false,
        key: 'dd',
        action: '2222',
        tooltipDes: '二级选项22222222',
      }
    ]
  }, {
    label: '三级选项',
    isShow: true,
    isDisabled: ({record}) => {
      console.log('record: ', record);
      if (record.key === '17') {
        return true
      }
      return false
    },
    loading: false,
    key: 'ff',
    // action: '3333',
    tooltipDes: '1111111',
    action: (data) => {
      console.log('data: ', data);
    }
  }, {
    label: '四级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    action: '4444',
    tooltipDes: '四级选项444444444',
  }
])

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
    'aa': {
      loading: true,
      disable: false
    },
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London London',
    'bb': {
      loading: false,
      disable: true
    },
  },
];

const actionProps = ref({
  showBtn: 2,
  actions: list
})

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
//@ts-ignore
const handleAction = (data: any) => {
  console.log('Data: ', data);
}


</script>

<style lang="less">
@import '../../../style/index.less';
</style>