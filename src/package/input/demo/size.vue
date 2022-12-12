<template>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueLargeRef"
      size="large"
    >
    </Input>
  </div>
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
      v-model:value="inputValueSmallRef"
      size="small"
    >
    </Input>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Input } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const inputValueLargeRef = ref('')
const inputValueRef = ref('')
const inputValueSmallRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
.w400 + .w400 {
  margin-top: 20px;
}
</style>
