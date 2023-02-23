<template>
  <div class="mt20">
    <Copy text="11111" success-txt="复制成功" :handle="customHandle">
    </Copy>
  </div>
  <div class="mt20">
    <Copy text="11111" success-txt="复制成功" copy-txt="copy内容" :handle="customHandle">
    </Copy>
  </div>
  <div class="mt20">
    <Copy text="不显示message" :handle="customHandle">
    </Copy>
  </div>
  <div class="mt20">
    <Copy text="不绑定handle">
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
<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>