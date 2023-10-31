<template>
  <div class="mrt20">
    <ScButton @click="openNotification" > 带操作消息通知 </ScButton>
  </div>
</template>
<script lang="ts" setup>
import { ScButton, ScNotification } from 'sc-ui'

const cancelProps = {
  loading: false
}
const confirmProps = {
  loading: false
}
const openNotification = () => {
  ScNotification.open ({
    message: 'Notification Title',
    description: 'basic notification',
    duration: 4000,
    placement: 'topLeft',
    edit: true,
    cancelProps,
    confirmProps,
    cancelCb: (e: Event) => {
      console.log('e: ', e);
    },
    confirmCb: (e: Event) => {
      console.log('e: ', e);
      confirmProps.loading = true
      setTimeout(() => {
        confirmProps.loading = false
      }, 1000)
    }
  })
}

// setTimeout(() => {
//   cancelProps.loading = false
//   confirmProps.loading = false
// }, 1500)
</script>