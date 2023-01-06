<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      @change="handleChange"
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
      :options="list"
      @change="handleChange"
    >
    </ScSelect>
  </div>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
    >
      <!-- <SelectOption value="jack">Jack</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption> -->
        <SelectOption v-for="item in list1" :value="item.value" :key="item.key">
          {{item.label}}
        </SelectOption>

    </ScSelect>
  </div>
</template>

<script lang='ts' setup>
import { ref, unref } from 'vue'
import { SelectOption } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'
import '../../../style/index.less'

const value = ref('jack1')

const handleChange = (val:string) => {
  console.log('val: ', val);
}

interface ListItem {
  label: string, 
  value: number, 
  key: string
}

const list = ref<Array<ListItem>>([])

for (let i = 0;i < 100;  i++) {
  list.value = [...unref(list), {
    label: 'Jack' + i,
    value: i,
    key: 'Jack' + i
  }]
}

const list1 = ref<Array<ListItem>>([])

const timer = setTimeout(() => {
  list1.value = list
  clearTimeout(timer)
}, 200)

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
