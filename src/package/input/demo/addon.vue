<template>
  <div>
    <ScInput
      addon-before="前缀内容"
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      addon-after="后缀内容"
      width-size="l"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui';
import '../../../style/index.less'

const inputValueRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
</style>
