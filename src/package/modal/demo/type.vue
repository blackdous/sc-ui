<template>
  <ScModal 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
    :type="type"
    :infoDes="info"
    footerAlign="left"
  >
    <div style="padding: 32px; background-color: #fff;">我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScModal>
  <Space>
    <Button @click="() => { type = 'info'; openModal('infoinfoinfo') }">
      info
    </Button>
    <Button @click="() => { type = 'success'; openModal('successsuccesssuccess') }">
      success
    </Button>
    <Button @click="() => { type = 'warning'; openModal('warningwarningwarningwarning') }">
      warning
    </Button>
    <Button @click="() => { type = 'error'; openModal('errorerrorerrorerror') }">
      error
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { Button, Space } from 'ant-design-vue'
import { ScModal } from 'sc-ui'
import "ant-design-vue/dist/antd.css"

const visible: Ref<boolean> = ref(false)
const type = ref<string>('info')
const info = ref<string>('infoinfoinfo')

const openModal = (infoDes: string) => {
  info.value = infoDes
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

</script>

<style lang="less">
</style>