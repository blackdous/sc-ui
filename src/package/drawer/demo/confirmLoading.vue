<template>
  <ScDrawer 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    @cancel="handleCancel"
    :confirm-loading="confirmLoading"
    maskClosable
    :closable="false"
  >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScDrawer>
  <Button @click="openModal">
    打开
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button } from 'ant-design-vue'
import { ScDrawer } from 'sc-ui'

const visible: Ref<boolean> = ref(false)
const confirmLoading = ref(false)

const openModal = () => {
  visible.value = true
  confirmLoading.value = true
  setTimeout(() => {
    confirmLoading.value = false
  }, 1500)
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
const handleCancel = (e: MouseEvent) => {
  console.log(e, 'handleCancel');
};

</script>
<style scoped>
/* @import 'comment'; */
</style>