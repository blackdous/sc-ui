<template>
  <ScAutoComplete
    v-model:value="value"
    :optionsSource="options"
    style="width: 200px"
    placeholder="请输入"
    @select="onSelect" 
    @search="onSearch"
  >
  </ScAutoComplete>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScAutoComplete } from 'sc-ui'
interface MockVal {
  value: string;
  label: string;
}
const value = ref('');
const options = ref<MockVal[]>([]);
const optionsUnref:MockVal[] = []
for(let i = 0; i < 30; i++) {
  optionsUnref.push({
    value: 'options' + ('' + i).repeat(1),
    label: 'options' + ('' + i).repeat(1),
  })
  optionsUnref.push({
    value: 'options' + ('' + i).repeat(2),
    label: 'options' + ('' + i).repeat(2),
  })
  optionsUnref.push({
    value: 'options' + ('' + i).repeat(3),
    label: 'options' + ('' + i).repeat(3),
  })
}
options.value = optionsUnref
const onSearch = (searchText: string) => {
  console.log('searchText: ', searchText);
};
const onSelect = (value: string) => {
  console.log('onSelect', value);
};
watch(value, () => {
  console.log('value', value.value);
});
</script>
