<template>
  <ScModal 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    :closable="false"
  >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <Button @click="openModal">
    打开
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import "ant-design-vue/dist/antd.css"

const visible: Ref<boolean> = ref(false)

const openModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

</script>

<style lang="less">
</style>