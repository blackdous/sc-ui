<template>
  <div>
    <ScForm :labelWidth="100" 
      :schemas="schemas" 
      :actionColOptions="{ span: 24 }" 
      @submit="handleSubmit"
      @reset="handleReset">
    </ScForm>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScForm, FormSchema, useMessage } from 'sc-ui';
// import { porvin, treeOptionsListApi } from './formData';

const keyword = ref<string>('');


const handleReset = () => {
  keyword.value = '';
}

const { createCloseMessage } = useMessage();

const handleSubmit = (values: any) => {
  console.log('values', values);
  createCloseMessage({ type: 'success', content: 'click search,values:' + JSON.stringify(values) });
}

const schemas: FormSchema[] = [
  {
    field: '[startTime, endTime]',
    label: '时间范围',
    component: 'RangePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      placeholder: ['开始时间', '结束时间'],
      showTime: { format: 'HH:mm:ss' },
    }
  },
]
</script>

<!-- <style lang="less" scoped>
.scPicker th, .scPicker td {
  padding: 0;
}
</style> -->