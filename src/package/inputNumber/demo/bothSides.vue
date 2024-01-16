<template>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      :step="'30'"
      :min="'0'"
      :max="'300'"
      :defaultValue="'30'"
      :autoFocus="true"
      :precision="0"
      :emitEmpty="true"
      @change="handleChange"
      @blur="handleBlur"
    >
    </ScInputNumber>
  </div>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef3"
      :step="30"
      :min="0"
      :max="300"
      :defaultValue="30"
      :autoFocus="true"
      :precision="0"
      stepStrictly
      @change="handleChange1"
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

const inputValueRef = ref('30')
const inputValueRef3 = ref(30)
const inputValueRef2 = ref(22)
const inputValueRef1 = ref(11)

const handleChange = (val:string) => {
  console.log('val: handleChange', val);
}

const handleChange1 = (val:string) => {
  console.log('valhandleChange1: ', val);
}

const handleBlur = (val:boolean) => {
  console.log('val:handleBlur ', val);
}

watch([() => inputValueRef.value, () => inputValueRef1.value], (val => {
  console.log('val:watch ', val);
  console.log('val1: watch', val[0]);
  console.log('val2222: watch', val[1]);

}))

// setTimeout(() => {
//   inputValueRef.value = 60
// }, 1500)

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mt10 {
  margin-top: 10px;
}
</style>
