<template>
  <ScAutoComplete
    v-model:value="value"
    style="width: 200px"
    :open="openRef"
    placeholder="请输入1111"
    :optionsSource="options"
    isGroup
    @select="onSelect" 
    @search="onSearch"
    @blur="handleBlur"
    @focus="handleFocus"
    @dropdownVisibleChange="handleDropdownVisibleChange"
  >
</ScAutoComplete>
<!-- <template #options>
  <SelectOptGroup
    v-for="item in options"
    :key="item.value"
  >
      <template #label>
        <Divider>
          {{ item.label }}
        </Divider>
      </template>
      <template
      v-for="selectItem in item.children"
      :key="item.value"
    >
      <SelectOption
        :label="selectItem.label"
        :value="selectItem.value"
      >
        <span v-html="selectItem.parseHightHtml" v-if="searchText">
        </span>
        <span v-else>
          {{ selectItem.value }}
        </span>
      </SelectOption>
    </template>
  </SelectOptGroup>
</template> -->
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScAutoComplete } from 'sc-ui'
import { SelectOption, Divider, SelectOptGroup } from 'ant-design-vue';
import { treeToList, filter } from '../../../utils/treeHelper'
interface MockVal {
  value?: string;
  label?: string;
  [key:string]: any;
}
const value = ref('')
const openRef = ref(false)
const searchText = ref<string>()
const options = ref<MockVal[]>([]);
const optionsUnref:MockVal[] = [
  {
    label: 'optionsRepeat1',
    value: 'optionsRepeat1',
    children: []
  },
  {
    label: 'optionsRepeat2',
    value: 'optionsRepeat1',
    children: []
  },
  {
    label: 'optionsRepeat3',
    value: 'optionsRepeat1',
    children: []
  }
]
for(let i = 0; i < 30; i++) {
  optionsUnref[0].children.push({
    value: 'options' + ('' + i).repeat(1),
    text: 'options' + ('' + i).repeat(1),
  })
  optionsUnref[1].children.push({
    value: 'options' + ('' + i).repeat(2),
    text: 'options' + ('' + i).repeat(2),
  })
  optionsUnref[2].children.push({
    value: 'options' + ('' + i).repeat(3),
    text: 'options' + ('' + i).repeat(3),
  })
}
options.value = optionsUnref
const onSearch = (val: string) => {
  searchText.value = val
  // const regExp = new RegExp(val, 'g')
  // const listOptions = treeToList(optionsUnref).filter((item:any) => !item.children)
  // console.log('listOptions: ', listOptions);
  // const newOptions = listOptions?.filter((item: any) => item?.value?.includes(val))?.map((item: any) => {
  //   item.parseHightHtml = item.value.replace(regExp, `<span style="color: #008CD3;">${val}</span>`)
  //   return item
  // }).map((item: any) => item.value)
  // const newOptionsRef = filter(optionsUnref, (item: any) => {
  //   return newOptions.includes(item.value)
  // })
  // console.log('newOptionsRef: ', newOptionsRef);
  // console.log('newOptions: ', newOptions);
  // options.value = newOptionsRef
  // console.log('searchText: value', val);
};
const onSelect = (value: string) => {
  searchText.value = value
  console.log('onSelect: onSelect', value);
};
watch(value, () => {
  console.log('value', value.value);
});

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
