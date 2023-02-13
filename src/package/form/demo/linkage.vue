<template>
  <div>
    <ScForm 
      :labelWidth="100" 
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

const provincesOptions = [
  {
    id: 'guangdong',
    label: '广东省',
    value: '1',
    key: '1',
  },
  {
    id: 'jiangsu',
    label: '江苏省',
    value: '2',
    key: '2',
  },
];
const citiesOptionsData = {
  guangdong: [
    {
      label: '珠海市',
      value: '1',
      key: '1',
    },
    {
      label: '深圳市',
      value: '2',
      key: '2',
    },
    {
      label: '广州市',
      value: '3',
      key: '3',
    },
  ],
  jiangsu: [
    {
      label: '南京市',
      value: '1',
      key: '1',
    },
    {
      label: '无锡市',
      value: '2',
      key: '2',
    },
    {
      label: '苏州市',
      value: '3',
      key: '3',
    },
  ],
};

const schemas: FormSchema[] = [
  {
    field: 'province',
    component: 'Select',
    label: '省份',
    colProps: {
      span: 12,
    },
    componentProps: ({ formModel, formActionType }) => {
      return {
        options: provincesOptions,
        placeholder: '省份与城市联动',
        onChange: (e: any) => {
          // console.log(e)
          let citiesOptions =
            e == 1
              ? citiesOptionsData[provincesOptions[0].id]
              : citiesOptionsData[provincesOptions[1].id];
          // console.log(citiesOptions)
          if (e === undefined) {
            citiesOptions = [];
          }
          formModel.city = undefined; //  reset city value
          const { updateSchema } = formActionType;
          updateSchema({
            field: 'city',
            componentProps: {
              options: citiesOptions,
            },
          });
        },
      };
    },
  },
  {
    field: 'city',
    component: 'Select',
    label: '城市',
    colProps: {
      span: 12,
    },
    componentProps: {
      options: [], // defalut []
      placeholder: '省份与城市联动',
    },
  },
]
</script>
<style scoped>
/* @import 'comment'; */
</style>
