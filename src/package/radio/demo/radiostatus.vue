<template>
  <div>
    <RadioGroup v-model:value="value">
      <Radio :value="1" disabled>A</Radio>
      <Radio :value="2">B</Radio>
      <Radio :value="3" disabled>C</Radio>
      <Radio :value="4">D</Radio>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, Radio } from 'ant-design-vue'
import { ref } from 'vue'

const value = ref<number>(1)
</script>
