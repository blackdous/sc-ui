<template>
  <div class="w400">
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      :allow-clear="true"
      @allowClear="handleClear"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui';
import '../../../style/index.less'

const inputValueRef = ref('')
const handleClear = (val:string) => {
  console.log('val: ', val);
}
</script>

<style scoped>
.w400 {
  width: 400px;
}
</style>
