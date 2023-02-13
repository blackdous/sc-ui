<template>
  <div class="w400">
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueLargeRef"
      size="large"
    >
    </ScInput>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
    >
    </ScInput>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueSmallRef"
      size="small"
    >
    </ScInput>
  </div>
  <div class="mt20">
    <ScInput
      placeholder="请输入内容 widthSize xl"
      v-model:value="inputValueLargeRef"
      width-size="xl"
    >
    </ScInput>
  </div>
  <div class="mt20">
    <ScInput
      placeholder="请输入内容 widthSize l"
      v-model:value="inputValueLargeRef"
      width-size="l"
    >
    </ScInput>
  </div>
  <div class="mt20">
    <ScInput
      placeholder="请输入内容 widthSize md"
      v-model:value="inputValueLargeRef"
      width-size="md"
    >
    </ScInput>
  </div>
  <div class="mt20">
    <ScInput
      placeholder="请输入内容 widthSize x"
      v-model:value="inputValueLargeRef"
    >
    </ScInput>
  </div>
  <div class="mt20">
    <ScInput
      placeholder="请输入内容 widthSize xs"
      v-model:value="inputValueLargeRef"
      width-size="xs"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui'

const inputValueLargeRef = ref('')
const inputValueRef = ref('')
const inputValueSmallRef = ref('')

</script>
<style scoped>
/* @import ''; */
</style>
<style scoped>
.scInput + .scInput {
  margin-left: 20px;
}
.mt20 {
  margin-top: 20px;
}
/* .w400 {
  width: 400px;
}
.w400 + .w400 {
  margin-top: 20px;
} */
</style>
