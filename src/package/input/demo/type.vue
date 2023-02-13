<template>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      width-size="l"
      describe="额外提示语，文字过多时输入框宽度折行"
    >
    </ScInput>
  </div>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueSuccessRef"
      type="success"
      width-size="l"
      describe="额外提示语，文字过多时输入框宽度折行"
    >
    </ScInput>
  </div>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueWarningRef"
      type="warning"
      width-size="l"
      describe="额外提示语，文字过多时输入框宽度折行"
    >
    </ScInput>
  </div>
  <div>
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueErrorRef"
      type="error"
      width-size="l"
      describe="额外提示语，文字过多时输入框宽度折行"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui';

const inputValueRef = ref('')
const inputValueSuccessRef = ref('')
const inputValueWarningRef = ref('')
const inputValueErrorRef = ref('')

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
</style>
