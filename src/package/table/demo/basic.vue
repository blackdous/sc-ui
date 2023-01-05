<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      size="small"
      :loading="loading"
      :create-button-options="{
        show: false
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
        },
        download: {
          text: '下载',
          show: true,
          showTooltip: true,
          href: ''
        }
      }"
      @change="handleChange"
      >
      <!-- :langLocale="zhCN" -->
      <template #copy1="{text, record, index, column}">
        <Copy v-bind="{text, record, index, column}">
          <template #text>
            1111
          </template>
        </Copy>
      </template>
      <template #status1="{text}">
        <span>
          {{text}}1111
        </span>
      </template>
      <template #tableActive>
        <Tooltip>
          <template #title>
            aaaaaa
          </template>
          <span>
            11111
          </span>
        </Tooltip>
      </template>
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'
import { ScTable, Copy } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'
import { Tooltip } from 'ant-design-vue'

import '../../../style/index.less'

const loading = ref(false)
// const globalApp = inject('globalApp')
// globalApp.component('copy1', Copy1)

const handleTd = ({column, record}: any) => {
  console.log('record, type: ', column, record);
}
const scTableRef = ref()
// @ts-ignore
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left'},
  { 
    width: 60,
    dataIndex: 'age', 
    key: 'age1',
    slots: {
      customRender: 'status1'
    },
    titleType: {
      componentName: 'thDescribe',
      props: {
        text: 'Column 2',
        describe: '提示内容'
      }
    },
  },
  {
    dataIndex: 'address', key: 'address', width: 160,
    type: {
      componentName: 'tdEllipsis',
      props: {
        lineheigth: 2
      }
    },
    titleType: {
      componentName: 'thDescribe1',
      props: {
        text: 'Column 1',
        describe: '提示内容'
      }
    },
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  }
];

setTimeout(() => {
  columns.push({ dataIndex: 'age2', key: 'age2', width: 160,
    titleType: {
      componentName: 'thUnit3',
      props: {
        text: 'Column 2111',
        unit: '(元)'
      }
    },
    slots: {
      customRender: 'copy1'
    }
  })
  columns.push({  dataIndex: 'age3', key: 'age3', width: 160,
    type: {
      componentName: 'tdHandle',
      props: {
      }
    },
    titleType: {
      componentName: 'thDescribe2',
      props: {
        text: 'Column 6',
        describe: 'Column 6'
      }
    },
    handle: handleTd
    
  })
  columns.push({  dataIndex: 'age4', key: 'age4', width: 160,
    titleType: {
      componentName: 'thDescribe3',
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

for(let i = 10; i < 11; i++) {
  data.push({
    key: i + '',
    name: 'John Brown',
    age: i,
    address: 'New London',
  })
}
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

<style lang="less">
@import '../../../style/index.less';
</style>