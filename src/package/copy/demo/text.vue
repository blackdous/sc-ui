<template>
  <div class="testCopy">
    <Copy text="11111" :handle="customHandle" success-txt="copy">
      <template #text>
        copy内容和显示内容不一样
      </template>
    </Copy>
  </div>
</template>

<script setup lang="ts">
import { Copy } from 'sc-ui'
const customHandle = () => {
  console.log("customHandle")
}
</script>
<style scoped>
/* @import 'comment'; */
</style>