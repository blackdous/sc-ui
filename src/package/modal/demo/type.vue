<template>
  <ScModal 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    :type="type"
  >
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <Button @click="() => { openModal() }">
    info
  </Button>
  <Button @click="() => { type = 'success'; openModal() }">
    success
  </Button>
  <Button @click="() => { type = 'warning'; openModal() }">
    warning
  </Button>
  <Button @click="() => { type = 'error'; openModal() }">
    error
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import "ant-design-vue/dist/antd.css"

const visible: Ref<boolean> = ref(false)
const type = ref<string>('info')

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