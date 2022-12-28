<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      style="width: 280px"
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
      style="width: 280px"
      :options="list"
      @change="handleChange"
    >
    </ScSelect>
  </div>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      style="width: 280px"
      disabled
    >
      <SelectOption value="jack">Jack</SelectOption>
      <SelectOption value="jack1">Jack1</SelectOption>
      <SelectOption value="jack2">Jack2</SelectOption>
      <SelectOption value="jack3">Jack3</SelectOption>
      <SelectOption value="jack4">Jack4</SelectOption>
      <SelectOption value="jack5">Jack5</SelectOption>
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

const list = ref<Array<{label: string, value: number}>>([])

for (let i = 0;i < 100;  i++) {
  list.value = [...unref(list), {
    label: 'Jack' + i,
    value: i
  }]
}

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
