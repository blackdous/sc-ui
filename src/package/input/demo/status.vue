<template>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueRef"
    >
    </Input>
  </div>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueDisabledRef"
      disabled
    >
    </Input>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Input } from 'ant-design-vue'
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
</style>
