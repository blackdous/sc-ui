<template>
  <div class="w400">
    <Input
      addon-before="前缀内容"
      placeholder="请输入内容"
      v-model:value="inputValueRef"
      addon-after="后缀内容"
    >
    </Input>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Input } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import '../../../style/index.less'

const inputValueRef = ref('')

</script>

<style scoped>
.w400 {
  width: 400px;
}
</style>
