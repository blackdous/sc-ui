<template>
  <div class="flexCon">
    <div class="ml20">
      <ScSelect
        v-model:value="value1"
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
  <div class="mrt">
    <ScSelect
        v-model:value="value1"
        width-size="xl"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
  </div>
  <div class="mrt">
    <ScSelect
        v-model:value="value1"
        width-size="l"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
  </div>
  <div class="mrt">
    <ScSelect
        v-model:value="value1"
        width-size="md"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
  </div>
  <div class="mrt">
    <ScSelect
        v-model:value="value1"
        width-size="x"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
        <SelectOption value="jack2">Jack2</SelectOption>
        <SelectOption value="jack3">Jack3</SelectOption>
        <SelectOption value="jack4">Jack4</SelectOption>
        <SelectOption value="jack5">Jack5</SelectOption>
      </ScSelect>
  </div>
  <div class="mrt">
    <ScSelect
        v-model:value="value1"
        width-size="xs"
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption disabled value="jack1">Jack1</SelectOption>
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

const value1 = ref('jack1')
const value2 = ref('jack1')
const value3 = ref('jack1')

</script>
<style scoped>
/* @import ''; */
</style>
<style scoped>
.ml20 + .ml20 {
  margin-left: 20px;
}
.flexCon {
  display: flex;
}
.mrt {
  margin-top: 20px;
}
</style>
