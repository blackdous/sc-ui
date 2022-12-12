<template>
  <div class="w400">
    <Textarea
      placeholder="请输入内容"
      v-model:value="inputValueRef"
    >
    </Textarea>
  </div>
  <div class="w400">
    <Textarea
      placeholder="请输入内容"
      showCount
      v-model:value="inputValueLengthRef"
      :maxlength="150"
    >
    </Textarea>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Textarea } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const inputValueRef = ref('')
const inputValueLengthRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
.w400 + .w400 {
  margin-top: 20px;
}
</style>
