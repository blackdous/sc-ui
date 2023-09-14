<template>
  <ScAutoComplete
    v-model:value="value"
    style="width: 200px"
    :open="openRef"
    placeholder="请输入1111"
    @select="onSelect" 
    @search="onSearch"
    @blur="handleBlur"
    @focus="handleFocus"
    @dropdownVisibleChange="handleDropdownVisibleChange"
  >
    <template #options>
      <template
        v-for="item in options"
        :key="item.value"
      >
        <SelectOption
          v-if="item.parseHightHtml"
          :label="item.label"
          :value="item.value"
        >
          <span v-html="item.parseHightHtml" v-if="searchText">
          </span>
          <span v-else>
            {{ item.value }}
          </span>
        </SelectOption>
      </template>
    </template>
    <InputSearch @search="handleSearch" allowClear />
  </ScAutoComplete>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScAutoComplete } from 'sc-ui'
import { SelectOption, InputSearch } from 'ant-design-vue';
interface MockVal {
  value: string;
  label: string;
}
const value = ref('')
const openRef = ref(false)
const searchText = ref<string>()
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

const onSearch = (val: string) => {
  searchText.value = val
  const regExp = new RegExp(val, 'g')
  const newOptions = optionsUnref?.filter((item: any) => item?.value?.includes(val))?.map((item: any) => {
    item.parseHightHtml = item.value.replace(regExp, `<span style="color: #008CD3;">${val}</span>`)
    return item
  })
  // console.log('newOptions: ', newOptions);
  options.value = newOptions
  console.log('searchText: value', val);
};
const onSelect = (val: string) => {
  searchText.value = val
  const regExp = new RegExp(val, 'g')
  const newOptions = optionsUnref?.filter((item: any) => item?.value?.includes(val))?.map((item: any) => {
    item.parseHightHtml = item.value.replace(regExp, `<span style="color: #008CD3;">${val}</span>`)
    return item
  })
  // console.log('newOptions: ', newOptions);
  options.value = newOptions
  console.log('onSelect: onSelect', value);
};
watch(value, () => {
  console.log('value', value.value);
});

const handleSearch = (val:string) => {
  console.log('val: handleSearch', val);
}

const handleDropdownVisibleChange = (val:boolean) => {
  console.log('val: ', val);
  openRef.value = val
}

const handleBlur = (val:boolean) => {
  console.log('val: handleBlur', val);
}

const handleFocus = (val:boolean) => {
  console.log('val: handleFocus', val);
}
</script>
