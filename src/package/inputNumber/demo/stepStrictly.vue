<template>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      :step="30"
      :min="0"
      :max="300"
      :defaultValue="30"
      :autoFocus="true"
      :precision="0"
      stepStrictly
      @change="handleChange"
      @blur="handleBlur"
    >
    </ScInputNumber>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
// import { Input } from 'ant-design-vue'
import { ScInputNumber } from 'sc-ui'

const inputValueRef = ref(30)

const handleChange = (val:string) => {
  console.log('val: ', val);
}

const handleBlur = (val:boolean) => {
  console.log('val:handleBlur ', val);
}

watch([() => inputValueRef.value], (val => {
  console.log('val:2222222222 ', val);
  console.log('val1: ', val[0]);

}))

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mt10 {
  margin-top: 10px;
}
</style>
