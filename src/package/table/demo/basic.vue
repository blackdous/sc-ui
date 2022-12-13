<template>
  <div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      size="small"
      :loading="false"
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
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'
import { ScTable, Copy } from 'sc-ui'

import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

// const globalApp = inject('globalApp')
// globalApp.component('copy1', Copy1)

const handleTd = ({column, record}: any) => {
  console.log('record, type: ', column, record);
}
const scTableRef = ref()
// @ts-ignore
const columns = [
  { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left'},
  { title: 'Age', width: 60, dataIndex: 'age', key: 'age',
    slots: {
      customRender: 'status1'
    },
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  },
  {
    dataIndex: 'address', key: '1', width: 160,
    type: {
      componentName: 'tdEllipsis',
      props: {
        lineheigth: 2
      }
    },
    titleType: {
      componentName: 'thDescribe',
      props: {
        text: 'Column 1',
        describe: '提示内容'
      }
    },
    onFilter: (value: string, record: DataItem) => record.name.includes(value),
    sorter: (a: DataItem, b: DataItem) => a.age - b.age,
  },
  { dataIndex: 'age', key: '2', width: 160,
    titleType: {
      componentName: 'thUnit',
      props: {
        text: 'Column 2',
        unit: '(元)'
      }
    },
    slots: {
      customRender: 'copy1'
    }
  },
  { title: 'Column 3', dataIndex: 'age', key: '3', width: 160,
    type: {
      componentName: 'tdHandle',
      props: {
      }
    },
    handle: handleTd
    
  }
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

for(let i = 10; i < 11; i++) {
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

<style lang="less">
@import '../../../style/index.less';
</style>