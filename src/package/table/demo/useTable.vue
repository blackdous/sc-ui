<template>
  <div>
    <Row class="action">
      <Col :span="8">
        <Button type="primary"
          @click="() => {reload()}"
        >
          刷新
        </Button>
      </Col>
    </Row>
    <ScTable
      @register="registerTable"
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"
      >
      <!-- :langLocale="zhCN" -->
    </ScTable>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'
import { ScTable, useTable } from 'sc-ui'
import { Row, Col, Button } from 'ant-design-vue'

import { demoListApi } from './tableData'
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  children?: DataItem[],
  [key:string]: any
  actionsOptions?: []
}
export default defineComponent({
  components: {
    ScTable,
    Row,
    Col,
    Button
  },
  setup (props) {

    const [registerTable, { reload }] = useTable({
      api: demoListApi
    });
    console.log('reload: ', reload);

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
    { title: 'Column 3', dataIndex: 'age', key: '3', width: 160,
    type: {
      componentName: 'tdHandle',
      type: 'link',
      props: {
      }
    }
      
    }
  ];

  return {
    scTableRef,
    columns,
    data,
    reload,
    registerTable
  }

  }
})

</script>

<style scoped>
.action {
  padding: 10px 32px 0;
}
</style>