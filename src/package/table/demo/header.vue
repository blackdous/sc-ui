<template>
  <div style="margin-top: 20px;">
    <ScButton @click="handleSetProps">setProps</ScButton>
    <ScButton @click="handleClearSelectedRowKeys">clearSelectedRowKeys</ScButton>
    <ScButton @click="handleMultipleShow">handleMultipleShow</ScButton>
  </div>
  <div>
    <ScTable 
      ref="scTableRef"
      row-key="key"
      :data-source="data"
      :columns="columns"
      :loading="loading"
      :pagination="pagination"
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
        show: multipleShow,
        triggerMultiple: true,
        options: radioList.slice(0, 1)
      }"
      :search-options="{
        show: true,
        showSelect: true,
        // typeList: () => radioList,
        typeList: promiseTypelist,
        action: searchHanle,
        selectOptions: {
          placeholder: '请选择',
          width: '120px',
          defaultValue: 'bb',
          clearInput: false
        },
        inputOptions: {
          placeholder: (selectItem: any) => {
            return '请输入' + selectItem?.label
          },
          width: '200px',
          maxlength: 40,
          defaultValue: searchDefaultValue
        }
      }"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @selection-change="handleSelectionChange"
      >
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, ComputedRef, reactive, h, unref } from 'vue'
import { ScTable, ScButton } from 'sc-ui'

import type { TooltipButtonPropsType } from 'sc-ui'
import lodash from 'lodash'

const { cloneDeep } = lodash

const scTableRef = ref()
type Key = string | number

const searchDefaultValue = ref<string>('测试默认值')

const loading = ref(false)

const multipleShow = ref(true)

const handleMultipleShow = () => {
  // multipleShow.value = !unref(multipleShow)
  scTableRef.value.setMultipleAction({
    show: !multipleShow.value,
    triggerMultiple: true,
    options: unref(radioList).slice(0, 1)
  })
  multipleShow.value = !multipleShow.value
}

const pagination = reactive({
      total: 100,
      current: 1,
      pageSize: 10,
      size: 'default',
      defaultPageSize: 10,
      showTotal: (total:string) => `共 ${total} 条`,
      itemRender: ({type, originalElement}:any) => {
        if (type === 'prev') {
          return h('i', { class: 'sc-ui sc-you' })
        } else if (type === 'next') {
          return h('i', { class: 'sc-ui sc-you' })
        } else {
          return originalElement
        }
  
      },
      // showSizeChanger: true,
      // // pageSizeOptions: PAGE_SIZE_OPTIONS,
      // showQuickJumper: true,
    })

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    // disabled: ({tableRef, selectedRowKeysRef}) => {
    //   if (selectedRowKeysRef.length > 3) {
    //     return true
    //   }
    //   return false
    // },
    disabled: false,
    value: 'a',
    action: ({tableRef, selectedRowKeysRef}: any) => {
      console.log('tableRef, selectedRowKeysRef: 1111111', tableRef, selectedRowKeysRef);
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
    label: 'Instance Name',
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
  key?: string;
  code?: string;
  name: string;
  age: number;
  address: string;
  children?: DataItem[],
  [key:string]: any
  actionsOptions?: []
}

let data: DataItem[] = [
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

const handleSetProps = () => {
  const tableRef = unref(scTableRef)
  console.log('tableRef: ', tableRef);
  const radioListClone = cloneDeep(unref(radioList))
  radioListClone[0].disabled = false
  console.log('radioListClone: ', radioListClone);
  // tableRef?.clearSelectedRowKeys()
  tableRef?.setProps({
    multipleOptions: {
      show: true,
      triggerMultiple: true,
      options: radioListClone
    }
  })
}

const handleClearSelectedRowKeys = () => {
  const tableRef = unref(scTableRef)
  tableRef?.clearSelectedRowKeys()
  console.log('tableRef: ', tableRef);
}

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

const searchHanle = (aaa: ComputedRef) => {
  console.log('aaa: ', aaa);
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 100)
  // console.log('Data: ', data);
  data.push(  {
    code: '2asdasdad',
    name: 'Jim Green112222222',
    age: 4022222,
    address: 'London London32222',
  })
  pagination.total = parseInt(Math.random() * 100)
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

const handleSelectChange = (val:string) => {
  console.log('val: ', val);
}

const handleSelectionChange = ({ keys, rows }: any) => {
  console.log('rows: ', rows);
  console.log('keys: ', keys);
}

setTimeout(() => {
  searchDefaultValue.value = '测试异步更新searchDefaultValue值'
  console.log('更新searchDefaultValue: ', searchDefaultValue);
}, 500)
</script>
<style scoped>
/* @import 'comment'; */
</style>