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
    <div>
      <Button @click="() => { type = 'info'; openModalType('info') }">
        ScModal.info
      </Button>
      <Button @click="updateInfo">
        update ScModal.info
      </Button>
      <Button @click="destroyInfo">
        destroy ScModal.info
      </Button>
    </div>
  </Space>

  <Space style="margin-top: 10px;">
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

const handleOk1 = async (e: MouseEvent) => {
  console.log(e);
  // loadingRef.value = true

  // const newPromise = new Promise((resolve) => {
  //   const timer = setTimeout(async () => {
  //     console.log('异步更新')
  //     resolve(true)
  //     clearTimeout(timer)
  //   }, 3500)
  // })
  try {
    const aaa =  await new Promise((resolve) => {
      const timer = setTimeout(async () => {
        console.log('异步更新')
        resolve(true)
        clearTimeout(timer)
      }, 3500)
    })
    
    console.log('aaa: ', aaa);
  } finally {
    console.log(1111)
  }

};

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
        // cancelText: '取消',
        // okText: '确认',
        onCancel () {
          console.log('cancel');
        },
        onOk: handleOk1
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
        // cancelText: '取消',
        // okText: '确认',
      });
      break;
    case 'warning':
      ScModal.confirm({
        type: 'warning',
        title: () => 'This is a warning message',
        content: () => 'some messages...some messages...',
        // cancelText: '取消',
        // okText: '确认',
        onOk() {
          console.log('ok');
        }
      });
      break;
    case 'error':
      ScModal.confirm({
        type: 'error',
        title: () => 'This is an error message',
        content: () => 'some messages...some messages...',
        onOk: handleOk1
        // cancelText: '取消',
        // okText: '确认',
      });
      break
  }
}
let modalInfo:any = undefined
const openModalType = (infoDes: string) => {
  info.value = infoDes
  // visible.value = true
  switch (infoDes) {
    case 'info':
      modalInfo = ScModal.info({
        title: () => 'This is a notification message',
        content: () => h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        // cancelText: '取消',
        // okText: '确认',
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
        onOk() {
          console.log('ok');
        }
        // cancelText: '取消',
        // okText: '确认',
      });
      break;
    case 'warning':
      ScModal.warning({
        // type: 'warning',
        title: () => 'This is a warning message',
        content: () => 'some messages...some messages...',
        // cancelText: '取消',
        // okText: '确认',
        onOk: handleOk1
      });
      break;
    case 'error':
      ScModal.error({
        // type: 'error',
        title: () => 'This is an error message',
        content: () => 'some messages...some messages...',
        // cancelText: '取消',
        // okText: '确认',
      });
      break
  }
}

const updateInfo = () => {
  console.log('modalInfo: ', modalInfo);
  modalInfo?.update({
    title: '修改的标题',
    content: '修改的内容',
    visible: true
  })
}

const destroyInfo = () => {
  console.log('modalInfo: ', modalInfo);
  modalInfo?.destroy()
}

// const handleOk = (e: MouseEvent) => {
  // console.log(e);
  // visible.value = false;
// };

</script>
<style scoped>
/* @import 'comment'; */
</style>