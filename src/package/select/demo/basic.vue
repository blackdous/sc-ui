<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      @change="handleChange"
      :placeholder="'请输入1111'"
      class="aaaa"
      tooltip-align="left"
      info-tooltip="1111111111"
    >
      <SelectOption
        v-for="item in list"
        :key="item.label"
        :disabled="item.value === 4"
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
      style="min-width: 120px;"
    >
      <SelectOption
        v-for="item in list"
        :key="item.label"
        :disabled="item.value === 4"
        :value="item.value"
      >
        {{item.label}}
      </SelectOption>
    </ScSelect>
  </div>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      :options="list"
      disabled
      @change="handleChange"
    >
    </ScSelect>
  </div>
  <div class="mt20">
    <Select
      v-model:value="valueAsync"
      :allow-clear="true"
      @change="handleChange"
    >
      <SelectOption v-for="item in listAsync" :value="item.value" :key="item.key">
        {{item.label}}
      </SelectOption>
    </Select>
    <Select
      v-model:value="valueAsync"
      @change="handleChange"
      >
      <SelectOption v-for="item in listAsync" :value="item.value" :key="item.key">
        {{item.label}}
      </SelectOption>
    </Select>
    <Select
      v-model:value="valueAsync"
      disabled
      @change="handleChange"
    >
      <SelectOption v-for="item in listAsync" :value="item.value" :key="item.key">
        {{item.label}}
      </SelectOption>
    </Select>
  </div>
</template>

<script lang='ts' setup>
import { ref, unref, onMounted, watch } from 'vue'
import { SelectOption, Select } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'

const value = ref('')
const valueAsync = ref()

const handleChange = (val:string) => {
  console.log('val: handleChange', val);
}

watch(() => valueAsync.value, (val) => {
  console.log('val: watch', val);

})

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
    label: 'Instance N111',
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
/* @import 'comment'; */
</style>
<style scoped>
.aaaa {
  width: 120px;
}
.mt20 {
  margin-top: 20px;
}
</style>

<style>

</style>
