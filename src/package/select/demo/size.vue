<template>
  <div class="flexCon">
    <div class="ml20">
      <ScSelect
        v-model:value="value1"
        style="width: 120px"
        size="large"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
    </div>
    <div class="ml20">
      <ScSelect
        v-model:value="value2"
        style="width: 120px"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
    </div>
    <div class="ml20">
      <ScSelect
        v-model:value="value3"
        style="width: 120px"
        size="small"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { SelectOption } from 'ant-design-vue'
import { ScSelect } from 'sc-ui'
import '../../../style/index.less'

const value1 = ref('jack1')
const value2 = ref('jack1')
const value3 = ref('jack1')

</script>

<style scoped>
.ml20 + .ml20 {
  margin-left: 20px;
}
.flexCon {
  display: flex;
}
</style>
