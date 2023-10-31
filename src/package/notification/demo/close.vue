<template>
  <div class="mrt20">
    <ScButton @click="openNotification" > 隐藏关闭按钮 </ScButton>
  </div>
</template>
<script lang="ts" setup>
import { ScButton, ScNotification } from 'sc-ui'

const openNotification = () => {
  ScNotification.open ({
    message: 'Notification Title',
    description: 'basic notification',
    duration: 4000,
    placement: 'topLeft',
    closeBtn: false
  })
}
</script>