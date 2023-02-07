<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"

      :row-selection="{ 
        selectedRowKeys: state.selectedRowKeys, 
        onChange: onSelectChange
      }"

      :create-button-options="{
        show: true,
        text: '创建',
        action: createClick
      }"
      :multiple-options="{
        show: true,
        options: radioList
      }"
      :search-options="{
        show: true,
        showSelect: true,
        // typeList: () => radioList,
        typeList: promiseTypelist,
        customSearchFunc: searchHanle,
        selectOptions: {
          placeholder: '请选择',
          width: '100px'
        },
        inputOptions: {
          placeholder: '请输入',
          width: '200px',
          maxlength: 40
        }
      }"
      @change="handleChange"

      >
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, ComputedRef, reactive } from 'vue'
import { ScTable } from 'sc-ui'

import type { TooltipButtonPropsType } from 'sc-ui'

const scTableRef = ref()
type Key = string | number

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
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
    toolOptions: {},
    tooltipDes: '',
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
const list = ref([
  {
    label: '创建快照',
    isShow: true,
    loading: false,
    key: 'aa',
    value: 'aa',
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
    value: 'bb',
    loading: false,
    action: 'bb',
    tooltip: false,
    tooltipDes: '续费续费续费续费续费'
  }, {
    label: '三级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    key: 'ff',
    value: 'ff',
    action: '3333',
    tooltip: true,
    tooltipDes: '三级选项33333333',
  }, {
    label: '四级选项',
    isShow: true,
    isDisabled: false,
    loading: false,
    key: 'ee',
    value: 'ee',
    action: '4444',
    tooltip: false,
    tooltipDes: '四级选项444444444',
  }
])
const promiseTypelist = new Promise ((resolve) => {
  setTimeout(() => {
    resolve(list)
  }, 1500)
}).then((data) => {
  return data
}).catch(error => {
  console.log('error: ', error);
})
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
  },
  { title: 'Column 2', dataIndex: 'age', key: '2', width: 160,
    type: {
      componentName: 'tdCopy',
      props: {
        successTxt: 'copy 成功',
        errorText: ''
      }
    }
  },
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

const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false,
});

const handleChange = (data:any) => {
  console.log('data: ', data);
}

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};

const createClick = (data: ComputedRef) => {
  console.log('Data: ', data);
}

const searchHanle = (data: ComputedRef) => {
  console.log('Data: ', data);
}
//@ts-ignore
const multipleChangeHandle = ({tableRef, selectedRowKeysRef}) => {
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
  console.log('tableRef: ', tableRef);
}

for(let i = 10; i < 12; i++) {
  data.push({
    key: i + '',
    name: 'John Brown',
    age: i,
    address: 'New London',
  })
}


</script>