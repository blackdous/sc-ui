<template>
  <div>
    <ScTable 
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :actions-props="actionProps"
    >
      <template #createButton>
        11111
      </template>
    </ScTable>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ScTable } from 'sc-ui'
import "ant-design-vue/dist/antd.css"


type Key = string | number

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    slots: { customRender: 'action' },
  },
];

const actionProps = ref({
  showBtn: 2,
  actions: [
    {
      label: '创建快照',
      isShow: true,
      isDisabled: false,
      loading: false,
      action: 'aa',
      tooltip: false,
      tooltipDes: '创建快照创建快照aa',
    },
    {
      label: '续费',
      isShow: true,
      isDisabled: false,
      loading: false,
      action: 'bb',
      tooltip: false,
      tooltipDes: '续费续费续费续费续费'
    },
    {
      label: '一级选项',
      isShow: true,
      isDisabled: false,
      loading: false,
      action: '1111',
      tooltip: false,
      tooltipDes: '一级选项111111111',
      children: [
        {
          label: '二级选项',
          isShow: true,
          isDisabled: false,
          loading: false,
          action: '2222',
          tooltip: false,
          tooltipDes: '二级选项22222222',
        }
      ]
    }
  ]
})

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];


const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);

const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};

</script>

<style lang="less">
</style>