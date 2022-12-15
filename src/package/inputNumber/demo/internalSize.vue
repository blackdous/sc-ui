<template>
  <div class="mt10">
    <ScInputNumber
      size="large"
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
      v-model:value="inputValueRef"
      @pressEnter="handleChange"
      mode="internal"
    >
    </ScInputNumber>
  </div>
  <div class="mt10">
    <ScInputNumber
      size="small"
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      @pressEnter="handleChange"
      mode="internal"
    >
    </ScInputNumber>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
// import { Input } from 'ant-design-vue'
import { ScInputNumber } from 'sc-ui'
import '../../../style/index.less'

const inputValueRef = ref()

const handleChange = (val:string) => {
  console.log('val: ', val);

}

</script>

<style scoped>
.mt10 {
  margin-top: 10px;
}
</style>
