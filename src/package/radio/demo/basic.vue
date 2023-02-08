<template>
  <div>
    <ScRadioGroup v-model:value="value1">
      <RadioButton value="random">随机可用区</RadioButton>
      <RadioButton value="a">可用区A</RadioButton>
      <RadioButton value="b">可用区B</RadioButton>
      <RadioButton value="c">可用区C</RadioButton>
    </ScRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioButton } from 'ant-design-vue'
import { ScRadioGroup } from 'sc-ui'
import { ref } from 'vue'

const value1 = ref<string>('a')
</script>
