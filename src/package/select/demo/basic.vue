<template>
  <div class="mt20">
    <ScSelect
      v-model:value="value"
      style="width: 280px"
      @change="handleChange"
    >
      <SelectOption value="jack">Jack</SelectOption>
      <SelectOption disabled value="jack1">Jack1</SelectOption>
      <SelectOption value="jack2">Jack2</SelectOption>
      <SelectOption value="jack3">Jack3</SelectOption>
      <SelectOption value="jack4">Jack4</SelectOption>
      <SelectOption value="jack5">Jack5</SelectOption>
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
import { ref } from 'vue'
import { SelectOption } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const value = ref('jack1')

const handleChange = (val:string) => {
  console.log('val: ', val);
}

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
