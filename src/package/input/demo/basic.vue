<template>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      allowClear
      @allowClear="handleClear"
      @input="handleInput"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui'

const inputValueRef = ref('')

const handleClear = (val:string) => {
  console.log('val: ', val);
}
const handleInput = (val: string) => {
  console.log('val: handleInput', val);
}

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.w400 {
  width: 400px;
}
</style>
