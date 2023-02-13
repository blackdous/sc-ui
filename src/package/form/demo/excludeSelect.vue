<template>
  <div>
    <ScForm :labelWidth="100" :schemas="schemas" :actionColOptions="{ span: 24 }" @submit="handleSubmit"
      @reset="handleReset">
      <template #selectA="{ model, field }">
        <!-- optionMode="checkbox" -->
        <ScSelect
          :options="optionsA"
          placeholder="请选择"
          mode="multiple"
          optionMode="checkbox"
          v-model:value="model[field]"
          @change="valueSelectA = model[field]"
          allowClear
        />
          <!-- @change="() => { handleChangeA(model[field]) }" -->
      </template>
      <template #selectB="{ model, field }">
        <!-- optionMode="checkbox" -->
        <ScSelect
          placeholder="请选择"
          :options="optionsB"
          mode="multiple"
          optionMode="checkbox"
          v-model:value="model[field]"
          @change="valueSelectB = model[field]"
          allowClear
        />
      </template>
    </ScForm>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, unref, watch } from 'vue'
import { ScForm, FormSchema, useMessage, ScSelect } from 'sc-ui';
import cloneDeep from 'lodash/cloneDeep';
// import { porvin, treeOptionsListApi } from './formData';

const keyword = ref<string>('');

  const valueSelectA = ref<string[]>([]);
  const valueSelectB = ref<string[]>([]);
  const options = ref<Recordable[]>([]);

  watch(() => valueSelectA.value, (val) => {
    console.log('valueSelectA: ', val);
  })
  watch(() => valueSelectB.value, (val) => {
    console.log('valueSelectB: ', val);
  })

  const handleChangeA = (val) => {
    console.log('val: ', val);
    // valueSelectA = model[field]
  }

  for (let i = 1; i < 10; i++) options.value.push({ label: '选项' + i, value: `${i}` });

  const optionsA = computed(() => {
    const optionsAList = cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectB).indexOf(op.value) !== -1;
      return op;
    });
    console.log('optionsAList: ', optionsAList);
    return optionsAList
  });
  const optionsB = computed(() => {
    const optionsBList = cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectA).indexOf(op.value) !== -1;
      return op;
    });
    console.log('optionsBList: ', optionsBList);
    return optionsBList
  });

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
    field: 'selectA',
    component: 'Select',
    label: '互斥SelectA',
    slot: 'selectA',
    defaultValue: [],
    colProps: {
      span: 8,
    },
  },
  {
    field: 'selectB',
    component: 'Select',
    label: '互斥SelectB',
    slot: 'selectB',
    defaultValue: [],
    colProps: {
      span: 8,
    },
  },
]
</script>
<style scoped>
/* @import 'comment'; */
</style>