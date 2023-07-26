<template>
  <div>
    <!-- :pagination="false" -->
      <!-- :create-button-options="{
        show: true
      }" -->
    <div>
      <ScButton @click="handleUpdateRecord">updateTableDataRecord</ScButton>
      <ScButton @click="handleUpdate">updateTableData</ScButton>
    </div>
    <!-- <ConfigProvider
      :locale="enUS"
    > -->
      <ScTable
        style="padding: 0;"
        class="aaaa"
        row-key="key"
        ref="scTableRef"
        :data-source="sourceData.list"
        :columns="columns"
        :create-button-options="{
          show: false,
        }"
        :multiple-options="{
          show: true,
          triggerMultiple: true,
          options: radioList
        }"
        :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
        :loading="loading"
        :scroll="{ x: true, y: 300 }"
        @change="handleChange"
      >
        <!-- <template #expandIcon="props">
          <span v-if="props.record"> 
            <div
              v-if="props.expanded" 
              class="pointer arrow" 
              @click="(e: any) => { props.onExpand(props.record, e) }"
            >
              <DoubleLeftOutlined />
            </div>
            <div
              v-else 
              class="pointer arrow"
              @click=" (e: any) => { props.onExpand(props.record, e) }"
            >
              <DoubleRightOutlined /> 
            </div> 
          </span>
        </template> -->
        <!-- :langLocale="zhCN" -->
        <template #copy1="{text, record, index, column}">
          <Copy v-bind="{text, record, index, column}">
            <template #text>
              11112222
            </template>
          </Copy>
        </template>
        <template #status1="{text}">
          <span>
            {{text}}1111
          </span>
        </template>
        <template #tableActive>
          <div>
            <InputSearch
              v-model:value="searchValue"
              placeholder="请输入仓库名称"
              style="width: 200px"
              @search="onSearch"
            />
          </div>
        </template>
        <!-- <template #multipleBtns>
          <div>
            111111
          </div>
        </template> -->
        <!-- <template #tableActive>
          <Tooltip>
            <template #title>
              aaaaaa
            </template>
            <span>
              11111
            </span>
          </Tooltip>
        </template> -->
        <template #status="{record}">
          <ScTag
            v-bind="record.tagOptions"
          >
            {{ record.statusStr === 0 ? '成功' : record.statusStr === 1 ? '错误' : '警告' }}
          </ScTag>
        </template>
      </ScTable>
    <!-- </ConfigProvider> -->
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { ref, unref, h, reactive } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'
import { ScTable, Copy, ScButton, ScTag } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'
import { InputSearch } from 'ant-design-vue'
// import { InputSearch, ConfigProvider } from 'ant-design-vue'
// import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import {
//   DoubleLeftOutlined,
//   DoubleRightOutlined
// } from '@ant-design/icons-vue'

const loading = ref(false)

const searchValue = ref()

const onSearch = (val:any) => {
  console.log('val: ', val);
}


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
    key: '',
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
        return false
      }
      return false
    },
    key: 0,
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
    key: '',
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
// const globalApp = inject('globalApp')
// globalApp.component('copy1', Copy1)

const handleTd = ({column, record}: any) => {
  console.log('record, type: ', column, record);
}
const scTableRef = ref()

const handleUpdateRecord = () => {
  const { updateTableDataRecord } = scTableRef.value
  updateTableDataRecord('17', { name: 'updateTableDataRecord John Brown John Brown John Brown'})
}

const handleUpdate = () => {
  const { updateTableData } = scTableRef.value
  updateTableData(3, 'name', 'updateTableData John Brown John Brown John Brown')
}

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

// @ts-ignore
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left', ellipsis: true},
  { 
    // title: 'age',
    width: 200,
    dataIndex: 'age', 
    key: 'age',
    disabled: true,
    slots: {
      customRender: 'status1'
    },
    titleType: {
      componentName: 'thUnit2',
      props: {
        text: 'Column 2111',
        unit: '(元)'
      }
    },
    sorter: true
  },
  {
    dataIndex: 'address', key: 'address', width: 180,
    type: {
      componentName: 'tdTooltip',
      props: {
        // lineheigth: 3,
        tooltipDesKey: 'addressDesc'
        // copy: true
      }
    },
    titleType: {
      componentName: 'thDescribe1',
      props: {
        text: 'Column 1',
        describe: h('div', {}, ['提示内容提示内容提示内容', h('span', { style: { color: '#FF7D00' }}, 'Column 1Column 1'), '提示内容提示内容提示内容'])
      }
    },
    filterList: list,
    filtered: true,
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  }
];

setTimeout(() => {
  columns.push({ dataIndex: 'age2', key: 'age2', width: 180,
    titleType: {
      componentName: 'thUnit3',
      props: {
        text: 'Column 2111',
        unit: '(元)'
      }
    },
    slots: {
      customRender: 'copy1'
    },
    sorter: true
  })
  columns.push({  dataIndex: 'age3', key: 'age3', width: 200,
    slots: {
      customRender: 'status'
    },
    titleType: {
      componentName: 'thDescribe2',
      props: {
        text: 'Column 6666',
        describe: 'Column 66666'
      }
    },
    handle: handleTd
    
  })
  columns.push({  dataIndex: 'age5', key: 'age5', width: 160,
    type: {
      componentName: 'tdHandle',
      props: {
      }
    },
    titleType: {
      componentName: 'thDescribe3',
      props: {
        text: 'Column 6',
        describe: 'Column 66'
      }
    },
    handle: handleTd
    
  })
  columns.push({  
    dataIndex: 'age4', key: 'age4', width: 160,
    titleType: {
      componentName: 'thDescribe4',
      props: {
        text: 'Column 7',
        describe: 'Column 7'
      }
    }
  })
  loading.value = true
  console.log('add end');

  setTimeout(() => {
    loading.value = false
  }, 1000)
}, 2000)

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  children?: DataItem[],
  [key:string]: any
  actionsOptions?: []
}


const sourceData = reactive({
  list: []
})
sourceData.list = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'sdaeqweqwdadasda',
    addressDesc: 'sdaeqweqwdadasdasdaeqweqwdadasdasdaeqweqwdadasdasdaeqweqwdadasdasdaeqweqwdadasda',
    tagOptions: {
      type: 'light',
      status: 'success',
      tooltipDes: 'sdaeqweqwdadasda'
    },
    statusStr: 0
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'LondonLondonLondon',
    addressDesc: 'LondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondon',
    tagOptions: {
      type: 'light',
      status: 'error',
      tooltipDes: 'LondonLondonLondonLondonLondonLondonLondonLondonLondon'
    },
    statusStr: 1
  },
];

for(let i = 10; i < 21; i++) {
  sourceData.list.push({
    key: i + '',
    name: 'John Brown',
    age: i,
    tagOptions: {
      type: 'light',
      status: 'warning',
      tooltipDes: 'New London LondonNew London London'
    },
    statusStr: 2,
    address: 'New London London',
    addressDesc: 'New London London London LondonNew London LondonNew London LondonNew London London'
  })
}


const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    disabled: ({ selectedRowRef }) => {
      return !selectedRowRef.find((item: any) => item.statusStr === 1)
    },
    value: 'a',
    action: ({tableRef, selectedRowKeysRef, selectedRowRef}) => {
      setTimeout(() => {
        sourceData.list = sourceData.list.map((item, index) => {
          index === 1 ? item.statusStr = 2 : ''
          return item
        })
        console.log('data: ', sourceData.list);
      }, 1500)
      // console.log('selectedRowRef: ', selectedRowRef);
      // console.log('tableRef, selectedRowKeysRef: ', tableRef, selectedRowKeysRef);
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

// @ts-ignore
const refresh = ({tableRef, selectedRowKeysRef}) => {
  scTableRef.value.setLoading(true)
  console.log('tableRef: ', tableRef);
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
}

//@ts-ignore
const handleChange = (pagination, filters, sorter, fetchParams) => {
  console.log('pagination, filters, sorter: ', pagination, filters, sorter, fetchParams);
}

const searchHanle = (data) => {
  console.log('data: ', data);
}

</script>
<style scoped>
/* @import 'comment'; */
</style>