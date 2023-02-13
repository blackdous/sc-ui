<template>
  <Space>
    <Button @click="() => { type = 'info'; openModal('info') }">
      info
    </Button>
    <Button @click="() => { type = 'success'; openModal('success') }">
      success
    </Button>
    <Button @click="() => { type = 'warning'; openModal('warning') }">
      warning
    </Button>
    <Button @click="() => { type = 'error'; openModal('error') }">
      error
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref, h, createVNode } from 'vue'

import { Button, Space, Modal } from 'ant-design-vue'
import {
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons-vue';
// import { ScModal } from 'sc-ui'
// import "ant-design-vue/dist/antd.css"

// const visible: Ref<boolean> = ref(false)
const type = ref<string>('info')
const info = ref<string>('infoinfoinfo')

const openModal = (infoDes: string) => {
  info.value = infoDes
  // visible.value = true
  switch (infoDes) {
    case 'info':
      Modal.confirm({
        type: 'info',
        title: () => 'This is a notification message',
        icon: () => createVNode(InfoCircleFilled),
        content: () => h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        cancelText: '取消',
        okText: '确认',
        onCancel () {
          console.log('cancel');
        },
        onOk() {
          console.log('ok');
        },
      })
      break;
    case 'success':
      Modal.confirm({
        type: 'info',
        title: () => 'This is a success message',
        icon: () => createVNode(CheckCircleFilled),
        content: () => h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'warning':
      Modal.confirm({
        type: 'warning',
        title: () => 'This is a warning message',
        icon: () => createVNode(ExclamationCircleFilled),
        content: () => 'some messages...some messages...',
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'error':
      Modal.confirm({
        type: 'error',
        title: () => 'This is an error message',
        icon: () => createVNode(CloseCircleFilled),
        content: () => 'some messages...some messages...',
        cancelText: '取消',
        okText: '确认',
      });
      break
  }
}

// const handleOk = (e: MouseEvent) => {
  // console.log(e);
  // visible.value = false;
// };

</script>
<style scoped>
@import '';
</style>