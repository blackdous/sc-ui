<template>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
    >
    </ScInput>
  </div>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueDisabledRef"
      disabled
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui'
import '../../../style/index.less'

const inputValueRef = ref('')
const inputValueDisabledRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
.w400 + .w400 {
  margin-top: 20px;
}
div + div {
  margin-top: 20px;
}
</style>
