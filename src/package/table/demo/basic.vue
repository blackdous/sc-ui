<template>
  <div>
    <!-- :pagination="false" -->
    <ScTable
      style="padding: 0;"
      class="aaaa"
      ref="scTableRef"
      :filterRightStyle="{'justify-content': 'space-between'}"
      :data-source="data"
      :columns="columns"
      size="small"
      :loading="loading"
      :create-button-options="{
        show: true,
        loading: true
      }"
      :scroll="{ x: true }"
      :search-options="{
        show: true,
        showSelect: false,
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
          action: refresh
        },
        columnDialog: {
          text: '定制列',
          show: true,
        },
        download: {
          text: '下载',
          show: true,
          href: ''
        },
        // customActiveList: [
        //   {
        //     text: '刷新',
        //     show: true,
        //     action: refresh
        //   }
        //   // h(Tooltip, { title: '其他Icon' }, [h(Button, { disabled: false }, [h('i', { class: 'sc-ui sc-sync'})])])
        // ]
      }"
      :pagination="{
        
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
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, h } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'
import { ScTable, Copy } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'

const loading = ref(false)

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
    // title: 'age',
    width: 60,
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
    filterList: list,
    filtered: true,
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
    },
    sorter: true
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
<style scoped>
/* @import 'comment'; */
</style>