<template>
  <div>
    <Checkbox
      v-model:checked="state.checkAll"
      :indeterminate="state.indeterminate"
      @change="onCheckAllChange"
      disabled
    >
      Check all
    </Checkbox>
    <CheckboxGroup v-model:value="state.checkedList" :options="plainOptionsRef" />
  </div>
</template>

<script lang='ts' setup>
import { reactive, watch, computed } from 'vue'
import { Checkbox, CheckboxGroup } from 'ant-design-vue'

const plainOptions = ['Apple', 'Pear', 'Orange', 'Orange1'];

const plainOptionsRef = computed(() => {
  return plainOptions.map((item, index) => {
    return { label: item, value: item, disabled: index % 2 === 1 ? true : false }
  })
})

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
