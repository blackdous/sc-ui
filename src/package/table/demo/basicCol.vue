<template>
  <div>
    <div class="btns">
      <Button
        @click="handleChecked"
      >
        设置默认选中列
      </Button>
      <Button
      @click="handleDisabled"
      >
        设置不可取消列disabled值
      </Button>
    </div>
    <ScTable 
      ref="scTableRef"
      :data-source="data"
      :columns="columns"
      :loading="false"
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
      @refresh="refresh"
      >
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, nextTick } from 'vue'
import { ScTable } from 'sc-ui'
import { Button } from 'ant-design-vue'
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
    },
    disabled: true,
    // notShowFilter: true
    // type: {
    //   componentName: 'copy',
    //   props: {
    //     successTxt: 'copy 成功',
    //     errorText: ''
    //   }
    // }
  },
  { title: 'Column 2', dataIndex: 'age2', width: 160, checked: false },
  { title: 'Column 3', dataIndex: 'age3', width: 160 }
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
    age2: 32,
    age3: 32,
    address: '111111111112333333333333333asdasdasdasdasdqweqweqweqweqweqweasdasdqweqweqweqwdadasdasd',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    age2: 40,
    age3: 40,
    address: 'London London',
  },
];

for(let i = 10; i < 12; i++) {
  data.push({
    key: i + '',
    name: 'John Brown',
    age: i,
    age2: i,
    age3: i,
    address: 'New London',
  })
}

// @ts-ignore
const refresh = ({tableRef, selectedRowKeysRef}) => {
  console.log('tableRef: ', tableRef);
  console.log('selectedRowKeysRef: ', selectedRowKeysRef);
}

const handleChecked = () => {
  const { setFilterColumnChecked } = unref(scTableRef)
  setFilterColumnChecked(['name', 'age'])
}

const handleDisabled = (e) => {
  console.log('e: ', e);
}
nextTick(() => {
  const { setFilterColumnDisabled } = unref(scTableRef)
  setFilterColumnDisabled(['name'])
})


</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.btns > .ant-btn {
  margin-right: 8px;
}
</style>
