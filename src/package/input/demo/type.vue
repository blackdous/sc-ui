<template>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueRef"
    >
    </Input>
    <p class="input-describe">
      额外提示语，文字过多时输入框宽度折行
    </p>
  </div>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueSuccessRef"
      class="isSuccess"
    >
    </Input>
    <p class="input-describe">
      额外提示语，文字过多时输入框宽度折行
    </p>
  </div>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueWarningRef"
      class="isWarning"
    >
    </Input>
    <p class="input-describe">
      额外提示语，文字过多时输入框宽度折行
    </p>
  </div>
  <div class="w400">
    <Input
      placeholder="请输入内容"
      v-model:value="inputValueErrorRef"
      class="isError"
    >
    </Input>
    <p class="input-describe">
      额外提示语，文字过多时输入框宽度折行
    </p>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Input } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const inputValueRef = ref('')
const inputValueSuccessRef = ref('')
const inputValueWarningRef = ref('')
const inputValueErrorRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
.w400 + .w400 {
  margin-top: 20px;
}
</style>
