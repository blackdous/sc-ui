<template>
  <div class="w400">
    <ScInput
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      describe="额外提示语，文字过多时输入框宽度折行"
    >
    </ScInput>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScInput } from 'sc-ui'
import '../../../style/index.less'

const inputValueRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
</style>
