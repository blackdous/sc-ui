<template>
  <div>
    <Textarea
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      allowClear
    >
    </Textarea>
  </div>
  <div style="width: 400px;">
    <!-- showCount -->
    <Textarea
      showCount
      placeholder="请输入内容(0~50字符)"
      v-model:value="inputValueLengthRef"
      :maxlength="500"
    >
    </Textarea>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Textarea } from 'ant-design-vue'

const inputValueRef = ref('')
const inputValueLengthRef = ref('')

</script>
<style scoped>
/* @import 'comment'; */
</style>
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
