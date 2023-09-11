<template>
  <div>
    <Row class="action">
      <Col :span="8">
      <Button type="primary" @click="() => { reload() }">
        刷新
      </Button>
      </Col>
    </Row>
    <ScTable @register="registerTable" ref="scTableRef" :data-source="data" :loading="false">
      <!-- :columns="columns" -->
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
  [key: string]: any
  actionsOptions?: []
}
export default defineComponent({
  components: {
    ScTable,
    Row,
    Col,
    Button
  },
  setup(props) {
    const list = ref([
      {
        label: '创建快照创建快照创建快照创建快照创建快照创建快照创建快照创建快照创建快照',
        isShow: true,
        loading: ({ tableRef, selectedRowKeysRef, record }) => {
          console.log('record: ', record);
          console.log('selectedRowKeysRef: ', selectedRowKeysRef);
          if (record.id === '8') {
            return true
          }
          return false
        },
        key: '',
        isDisabled: false,
        action: (data: any) => {
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
        isDisabled: ({ tableRef, selectedRowKeysRef }) => {
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
        label: '一级选项一级选项一级选项一级选项一级选项',
        isShow: ({ tableRef, selectedRowKeysRef }) => {
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
            label: '二级选项二级选项二级选项二级选项二级选项',
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
        isDisabled: ({ tableRef, selectedRowKeysRef }) => {
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
    // @ts-ignore
    const columns = [
      { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left' },
      {
        width: 200, dataIndex: 'age', key: 'age',
        titleType: {
          componentName: 'thUnit2',
          props: {
            text: 'Column 2111',
            unit: '(元)'
          }
        },
        filterList: list,
        filtered: true,
        sorter: true
      },
      {
        title: 'Column 1', dataIndex: 'address', key: '1', width: 160,
        type: {
          componentName: 'tdEllipsis',
          props: {
            lineheigth: 2
          }
        }
      },
      {
        title: 'Column 2', dataIndex: 'address', key: '2', width: 160,
        type: {
          componentName: 'tdCopy',
          props: {
            successTxt: 'copy 成功',
            errorText: ''
          }
        }
      },
      {
        title: 'Column 3', dataIndex: 'address', key: '3', width: 160,
        type: {
          componentName: 'tdHandle',
          type: 'link',
          props: {
          }
        }

      }
    ]
    const [registerTable, { reload }] = useTable({
      api: demoListApi,
      columns: columns
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

    for (let i = 10; i < 11; i++) {
      data.push({
        key: i + '',
        name: 'John Brown',
        age: i,
        address: 'New London',
      })
    }


    const scTableRef = ref()

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
/* @import 'comment'; */
</style>
<style scoped>
.action {
  padding: 10px 32px 0;
}
</style>