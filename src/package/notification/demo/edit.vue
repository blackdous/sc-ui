<template>
  <div class="mrt20">
    <ScButton @click="openNotification" > 带操作消息通知 </ScButton>
  </div>
</template>
<script lang="ts" setup>
import { ScButton, ScNotification } from 'sc-ui'
import type { ScNotificationProps } from 'sc-ui'

const cancelProps = {
  loading: false
}
const confirmProps = {
  loading: false
}

const notificationConfig = {
  message: 'Notification Title',
  description: 'basic notification',
  duration: 4000,
  placement: 'topLeft',
  key: 'test111',
  edit: true,
  cancelProps,
  confirmProps,
  cancelCb: (e: Event) => {
    console.log('e: cancelCb', e);
  },
  confirmCb: (e: Event) => {
    console.log('e: confirmCb', e);
  }
}
const openNotification = () => {
  ScNotification.open (notificationConfig as ScNotificationProps)
  cancelProps.loading = true
  confirmProps.loading = true
  setTimeout(() => {
    ScNotification.open (notificationConfig as ScNotificationProps)
    setTimeout(() => {
      cancelProps.loading = false
      confirmProps.loading = false
      ScNotification.open (notificationConfig as ScNotificationProps)
    }, 1000)
  }, 1500)
}

// setTimeout(() => {
//   cancelProps.loading = false
//   confirmProps.loading = false
// }, 1500)
</script>