<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      @change="handleChange"
      show-search
      :show-arrow="false"
    >
      <SelectOption
        v-for="item in list"
        ::key="item.label"
        :value="item.value"
      >
        {{item.label}}
      </SelectOption>
    </ScSelect>
  </div>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      @change="handleChange"
      show-search
    >
      <SelectOption
        v-for="item in list"
        ::key="item.label"
        :value="item.value"
      >
        {{item.label}}
      </SelectOption>
    </ScSelect>
  </div>
  <div class="mt20">
    <Select
      class="customSelect"
      v-model:value="value"
      :options="list"
      show-search
      :show-arrow="false"
      @change="handleChange"
    >
    </Select>
  </div>
  <div class="mt20">
    <Select
      class="customSelect"
      v-model:value="value"
      :options="list"
      show-search
      @change="handleChange"
    >
    </Select>
  </div>
</template>

<script lang='ts' setup>
import { ref, unref, onMounted } from 'vue'
import { SelectOption, Select } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'

const value = ref('jack1')
const valueAsync = ref()

const handleChange = (val:string) => {
  console.log('val: handleChange', val);
}

interface ListItem {
  label: string, 
  value: number, 
  key: string
}

const list = ref<Array<ListItem>>([])

const listAsync = ref<any>([])

const mockFetch = () => {
  return new Promise(function(resolve){
    setTimeout(function(){
      let result = [...new Array(100).keys()].map((i) => {
        return {
          label: 'Async' + i,
          value: i + '',
          key: 'Async' + i
        }
      })
      resolve(result);
    },2000);
  });
}

for (let i = 0;i < 100;  i++) {
  list.value = [...unref(list), {
    label: 'Jack' + i,
    value: i,
    key: 'Jack' + i
  }]
}

const fetchList = () => {
  console.log(listAsync.value);
  
  mockFetch().then((res:any)=> {
    console.log(res);
    console.log(res[0]);
    listAsync.value = res
    valueAsync.value = res[0].value
  })
}

onMounted(() => {
  fetchList()
})

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
.customSelect {
  min-width: 216px;
}
</style>
