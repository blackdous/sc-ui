<template>
  <div>
    <Checkbox
      v-model:checked="state.checkAll"
      :indeterminate="state.indeterminate"
      @change="onCheckAllChange"
    >
      Check all
    </Checkbox>
    <CheckboxGroup v-model:value="state.checkedList" :options="plainOptions" />
  </div>
</template>

<script lang='ts' setup>
import { reactive, watch } from 'vue'
import { Checkbox, CheckboxGroup } from 'ant-design-vue'

const plainOptions = ['Apple', 'Pear', 'Orange'];

const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: ['Apple', 'Orange'],
});

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
  });
};
watch(
  () => state.checkedList,
  val => {
    state.indeterminate = !!val.length && val.length < plainOptions.length;
    state.checkAll = val.length === plainOptions.length;
  },
);
</script>
<style scoped>
/* @import 'comment'; */
</style>
