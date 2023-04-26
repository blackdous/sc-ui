<template>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      :step="1"
      :defaultValue="22"
      :autoFocus="true"
      :precision="0"
      @change="handleChange"
      @blur="handleBlur"
    >
    </ScInputNumber>
  </div>

  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef1"
      :step="1"
      :precision="0"
      :showControl="false"
      @change="handleChange"
    >
    </ScInputNumber>
  </div>

  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef2"
      disabled
      @pressEnter="handleChange"
    >
    </ScInputNumber>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
// import { Input } from 'ant-design-vue'
import { ScInputNumber } from 'sc-ui'

const inputValueRef = ref(22)
const inputValueRef2 = ref(22)
const inputValueRef1 = ref(11)

const handleChange = (val:string) => {
  console.log('val: ', val);
}

const handleBlur = (val:boolean) => {
  console.log('val:handleBlur ', val);
}

watch([() => inputValueRef.value, () => inputValueRef1.value], (val => {
  console.log('val:2222222222 ', val);
  console.log('val1: ', val[0]);
  console.log('val2222: ', val[1]);

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
