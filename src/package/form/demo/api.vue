<template>
  <div>
    <ScForm :labelWidth="150" 
      :schemas="schemas" 
      :actionColOptions="{ span: 24 }" 
      @submit="handleSubmit"
      @reset="handleReset"
    >
      <template #localSearch="{ model, field }">
        <ApiSelect
          :api="optionsListApi"
          showSearch
          v-model:value="model[field]"
          optionFilterProp="label"
          resultField="list"
          labelField="name"
          valueField="id"
        />
      </template>
      <template #remoteSearch="{ model, field }">
        <ApiSelect
          :api="optionsListApi"
          showSearch
          v-model:value="model[field]"
          :filterOption="false"
          resultField="list"
          labelField="name"
          valueField="id"
          :params="searchParams"
          @search="onSearch"
        />
      </template>
    </ScForm>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, unref } from 'vue'
import { ScForm, FormSchema, useMessage, ApiSelect } from 'sc-ui';
import { optionsListApi, treeOptionsListApi } from './formData';

const keyword = ref<string>('');

const handleReset = () => {
  keyword.value = '';
}

const { createCloseMessage } = useMessage();

const handleSubmit = (values: any) => {
  console.log('values', values);
  createCloseMessage({ type: 'success', content: 'click search,values:' + JSON.stringify(values) });
}

const searchParams = computed<Recordable>(() => {
  return { keyword: unref(keyword) };
});

function onSearch(value: string) {
  keyword.value = value;
}

const schemas:FormSchema[] = [
  {
    field: 'field30',
    component: 'ApiSelect',
    label: '懒加载远程下拉',
    required: true,
    componentProps: {
      // more details see /src/components/Form/src/components/ApiSelect.vue
      api: optionsListApi,
      params: {
        keyword: 1,
      },
      resultField: 'list',
      // use name as label
      labelField: 'name',
      // use id as value
      valueField: 'id',
      // not request untill to select
      immediate: false,
      onChange: (e) => {
        console.log('selected:', e);
      },
      // atfer request callback
      onOptionsChange: (options) => {
        console.log('get options', options.length, options);
      },
    },
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'field31',
    component: 'Input',
    label: '下拉本地搜索',
    helpMessage: ['ApiSelect组件', '远程数据源本地搜索', '只发起一次请求获取所有选项'],
    required: true,
    slot: 'localSearch',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'field32',
    component: 'Input',
    label: '下拉远程搜索',
    helpMessage: ['ApiSelect组件', '将关键词发送到接口进行远程搜索'],
    required: true,
    slot: 'remoteSearch',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'field33',
    component: 'ApiTreeSelect',
    label: '远程下拉树',
    helpMessage: ['ApiTreeSelect组件', '使用接口提供的数据生成选项'],
    required: true,
    componentProps: {
      api: treeOptionsListApi,
      resultField: 'list',
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'field34',
    component: 'ApiRadioGroup',
    label: '远程Radio',
    helpMessage: ['ApiRadioGroup组件', '使用接口提供的数据生成选项'],
    required: true,
    componentProps: {
      api: optionsListApi,
      params: {
        count: 2,
      },
      resultField: 'list',
      // use name as label
      labelField: 'name',
      // use id as value
      valueField: 'id',
    },
    defaultValue: '1',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'field35',
    component: 'ApiRadioGroup',
    label: '远程Radio',
    helpMessage: ['ApiRadioGroup组件', '使用接口提供的数据生成选项'],
    required: true,
    componentProps: {
      api: optionsListApi,
      params: {
        count: 2,
      },
      resultField: 'list',
      // use name as label
      labelField: 'name',
      // use id as value
      valueField: 'id',
      isBtn: true,
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'field36',
    component: 'ApiTree',
    label: '远程Tree',
    helpMessage: ['ApiTree组件', '使用接口提供的数据生成选项'],
    required: true,
    componentProps: {
      api: treeOptionsListApi,
      params: {
        count: 2,
      },
      afterFetch: (v) => {
        //do something
        return v;
      },
      resultField: 'list',
    },
    colProps: {
      span: 12,
    },
  },
]
</script>
<style scoped>
/* @import ''; */
</style>
