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
  <Space style="margin-top: 10px;">
    <Button @click="() => { type = 'info'; openModalType('info') }">
      ScModal.info
    </Button>
    <Button @click="() => { type = 'success'; openModalType('success') }">
      ScModal.success
    </Button>
    <Button @click="() => { type = 'warning'; openModalType('warning') }">
      ScModal.warning
    </Button>
    <Button @click="() => { type = 'error'; openModalType('error') }">
      ScModal.error
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

import { Button, Space, Modal } from 'ant-design-vue'
import { ScModal } from 'sc-ui';
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
      ScModal.confirm({
        type: 'info',
        title: () => 'This is a notification message',
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
      ScModal.confirm({
        type: 'success',
        title: () => 'This is a success message',
        content: () => h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'warning':
      ScModal.confirm({
        type: 'warning',
        title: () => 'This is a warning message',
        content: () => 'some messages...some messages...',
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'error':
      ScModal.confirm({
        type: 'error',
        title: () => 'This is an error message',
        content: () => 'some messages...some messages...',
        cancelText: '取消',
        okText: '确认',
      });
      break
  }
}
const openModalType = (infoDes: string) => {
  info.value = infoDes
  // visible.value = true
  switch (infoDes) {
    case 'info':
      ScModal.info({
        title: () => 'This is a notification message',
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
      ScModal.success({
        // type: 'success',
        title: () => 'This is a success message',
        content: () => h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'warning':
      ScModal.warning({
        // type: 'warning',
        title: () => 'This is a warning message',
        content: () => 'some messages...some messages...',
        cancelText: '取消',
        okText: '确认',
      });
      break;
    case 'error':
      ScModal.error({
        // type: 'error',
        title: () => 'This is an error message',
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
/* @import 'comment'; */
</style>