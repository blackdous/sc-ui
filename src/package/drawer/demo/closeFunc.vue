<template>
  <ScDrawer 
    v-model:visible="visible"
    title="Basic Modal" 
    @ok="handleOk1"
    @cancel="handleCancel"
    :confirm-loading="confirmLoading"
    :close-func="handleBeforeClose"
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

}

const handleCancel = (e: MouseEvent) => {
  console.log(e, 'handleCancel');
};

const handleBeforeClose = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
  await promise
}

</script>
<style scoped>
/* @import 'comment'; */
</style>