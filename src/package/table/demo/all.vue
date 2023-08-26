<template>
  <div>
    <ScButton @click="handlePagination">setPagination</ScButton>
  </div>
  <div>
    <!-- :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" -->
    <ScTable 
      ref="scTableRef"
      :columns="columns"
      rowKey="id"
      :loading="false"
      :pagination="pagination"
      :data-source="dataSource"
      :before-fetch="beforeFetch"
      :actionsOptions="actionProps"
      :activeOptions="{
        reload: {
          text: '刷新',
          show: true,
          action: refresh
        },
        columnDialog: {
          text: '定制列',
          show: true,
          okModal: handleOkModal
        },
        download: {
          text: '下载',
          loading: true,
          show: true,
          href: ''
        }
      }"
      :multiple-options="{
        show: true,
        options: radioList,
        styleMode: 'btnLine'
      }"
      :search-options="{
        show: true,
        showSelect: true,
        // typeList: () => radioList,
        typeList: promiseTypelist,
        customSearchFunc: searchHanle,
        selectOptions: {
          placeholder: '请选择',
          width: '80px'
        },
        inputOptions: {
          placeholder: handle,
          validator: validatorFunc,
          validatorTrigger: 'search',
          width: '160px',
          maxlength: 40,
          allowClear: true
        }
      }"
      :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
      :customFilter="true"
      :filterTag="true"
      
      @onAction="handle"
      @createClick="createClick"
      @multipleChange="multipleChangeHandle"
      @searchClick="searchHanle"
      @filter="handleFilter"
      @refresh="refresh"
      >
      <!-- isTreeTable -->
    <!-- <template #expandedRowRender>
      <p>11111111111</p>
    </template> -->
    <!-- :columnModalList="columnList" -->
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, reactive, ref, unref } from 'vue'
import type { Ref } from 'vue'
import { ScTable, ScButton } from 'sc-ui'
//@ts-ignore
import { list as ColumnList } from '../types/column'
import { demoListApi } from './tableData'

import type { TooltipButtonPropsType } from 'sc-ui'


type Key = string | number
// const filteredInfo = ref();
const sortedInfo = ref();
const scTableRef = ref()

const columnList = ref()

const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
  size: 'default',
  defaultPageSize: 10,
})

const dataSource = ref([])

const arr: any = []
for (let index = 0; index < parseInt((Math.random() * 100) + ''); index++) {
  arr.push({
    id: `${index}`,
    name: 'John Brown' + index,
    name1: 'name01--' + index,
    name2: 'name02--' + index,
    name3: 'name03--' + index,
    name4: 'name04--' + index,
    name5: 'name05--' + index,
    name6: 'name06--' + index,
    name7: 'name07--' + index,
    name8: 'name08--' + index,
    radio1: `选项${index + 1}`,
    radio2: `选项${index + 1}`,
    radio3: `选项${index + 1}`,
    age: `1${index}`,
    no: `${index + 10}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
    // imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
    address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    beginTime: new Date().toLocaleString(),
    endTime: new Date().toLocaleString(),
    date: `2022-05-06`,
    time: `12:07`,
    status: 1,
  });
}
dataSource.value = arr
pagination.total = arr.length

// const filtered = filteredInfo.value || {};
const sorted = sortedInfo.value || {};
const list = ref([
  {
    label: '创建快照',
    isShow: true,
    loading: ({tableRef, selectedRowKeysRef, record}) => {
      console.log('record: ', record);
      console.log('selectedRowKeysRef: ', selectedRowKeysRef);
      if (record.id === '8') {
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
    tooltip: false,
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
    tooltip: false,
    tooltipDes: '续费续费续费续费续费'
  },
  {
    label: '一级选项',
    isShow: ({tableRef, selectedRowKeysRef}) => {
      console.log('selectedRowKeysRef: ', selectedRowKeysRef);
      if (selectedRowKeysRef.length > 3) {
        return true
      }
      return false
    },
    isDisabled: false,
    loading: false,
    key: 'cc',
    action: '1111',
    tooltip: false,
    tooltipDes: '一级选项111111111',
    children: [
      {
        label: '二级选项',
        isShow: true,
        isDisabled: false,
        loading: true,
        key: 'dd',
        action: '2222',
        tooltip: false,
        tooltipDes: '二级选项22222222',
      }
    ]
  }, {
    label: '三级选项',
    isShow: true,
    isDisabled: ({tableRef, selectedRowKeysRef}) => {
      console.log('selectedRowKeysRef: ', selectedRowKeysRef);
      if (selectedRowKeysRef.length > 3) {
        return true
      }
      return false
    },
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
  },
];

const handlePagination = (event: Event) => {
  console.log('event: handlePagination', event);
  pagination.total = 11
  console.log('pagination: ', pagination);
}

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    disabled: false,
    value: 'a',
    action: ({tableRef, selectedRowKeysRef, selectedRowRef}) => {
      console.log('selectedRowRef: ', selectedRowRef);
      console.log('tableRef, selectedRowKeysRef: ', tableRef, selectedRowKeysRef);
    }
  },
  {
    toolOptions: {},
    tooltipDes: "",
    label: '按钮B',
    value: 'b'
  },
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮C',
    value: 'c'
  }
])

const promiseTypelist = new Promise ((resolve) => {
    setTimeout(() => {
      resolve(unref(radioList))
    }, 1500)
  }).then((data) => {
    return data
  }).catch(error => {
    console.log('error: ', error);
  })

const actionProps = ref({
  showBtn: 2,
  actions: list
})

const handleOkModal = (keys, checkedList) => {
  console.log('checkedList: ', checkedList);
  console.log('keys: ', keys);
  // console.log('val: ', val);
  // const { keys, checkedList } = val
  // console.log('checkedList: ', checkedList);
  // console.log('keys: ', keys);
}

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
    // actionsOptions: unref(actionProps),
    // children: [{
    //   key: '3',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New London',
    // }]
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
    // actionsOptions: unref(actionProps)
    // children: [{
    //   key: '4',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New London',
    // }]
  },
];

// for(let i = 10; i < 40; i++) {
//   data.push({
//     key: i.toString(),
//     name: 'John Brown',
//     age: i,
//     address: 'New London',
//   })
// }

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

const beforeFetch = (params: any, tableParams: any) => {
  console.log('tableParams: ', tableParams);
  console.log('params: ', params);
  return params
}

const handle = (data: Data) => {
  console.log('Data: ', data);
  return '请输入  data'
}

const validatorFunc = (selectType: Data, value: string) => {
  // console.log('value: ', value);
  // console.log('selectType: ', selectType);
  if (selectType.value === 'b' && (/[^\d]/g.test(value))) {
    return { result: false, tip: '请输入数字' }
  }
  return { result: true, tip: '' }
}

const createClick = (data: ComputedRef) => {
  console.log('Data: ', data);
  columnList.value = ColumnList
}

const searchHanle = (data: ComputedRef) => {
  console.log('Data: ', data);
}
//@ts-ignore
const multipleChangeHandle = ({tableRef, selectedRowKeysRef}) => {
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
  scTableRef.value.setLoading(true)
  console.log('tableRef: ', tableRef);
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
}

const handleModalClick = () => {
}

</script>
<style scoped>
/* @import 'comment'; */
</style>