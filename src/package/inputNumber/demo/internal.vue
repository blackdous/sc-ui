<template>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      @pressEnter="handleChange"
      mode="internal"
    >
    </ScInputNumber>
  </div>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef1"
      @pressEnter="handleChange"
      mode="internal"
      :showControl="false"
    >
    </ScInputNumber>
  </div>
  <div class="mt10">
    <ScInputNumber
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      @pressEnter="handleChange"
      mode="internal"
      disabled
    >
    </ScInputNumber>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
// import { Input } from 'ant-design-vue'
import { ScInputNumber } from 'sc-ui'

const inputValueRef = ref()
const inputValueRef1 = ref()

const handleChange = (val:string) => {
  console.log('val: ', val);

}

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mt10 {
  margin-top: 10px;
}
</style>
