<template>
  <div>
    <!-- :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" -->
    <ScTable 
      ref="scTableRef"
      :columns="columns"
      :loading="false"
      :api="demoListApi"
      :before-fetch="beforeFetch"
      :actionsOptions="actionProps"
      :activeOptions="{
        reload: {
          text: '刷新',
          show: true,
          showTooltip: true,
          action: refresh
        },
        columnDialog: {
          text: '定制列',
          show: true,
          showTooltip: true
        }
      }"
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
          width: '80px'
        },
        inputOptions: {
          placeholder: '请输入',
          width: '160px',
          maxlength: 40,
          allowClear: true
        }
      }"
      :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
      locale="zh"
      :customFilter="true"
      :filterTag="true"
      
      @onAction="handle"
      @createClick="createClick"
      @mutilpChange="mutilpChangeHandle"
      @serachClick="serachHanle"
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
import { ComputedRef, reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { ScTable } from 'sc-ui'
//@ts-ignore
import { list as ColumnList } from '../types/column'
import { demoListApi } from './tableData'

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
    filtered: true,
    onFilterDropdownVisibleChange: (visable:boolean) => { console.log(visable) }
  },
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age',
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  },
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: 160,
    type: {
      componentName: 'ellipsis',
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

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    disabled: ({tableRef, selectedRowKeysRef}) => {
      if (selectedRowKeysRef.length > 3) {
        return true
      }
      return false
    },
    value: 'a',
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

const actionProps = ref({
  showBtn: 2,
  actions: list
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
  scTableRef.value.setLoading(true)
  console.log('tableRef: ', tableRef);
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
}

const handleModalClick = () => {
}

</script>

<style lang="less">
@import '../../../style/index.less';
</style>