<template>
  <div class="mrt20">
    <ScButton class="mrl20" @click="() => openNotificationWithIcon('success')">Success</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon('info')">Info</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon('warning')">Warning</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon('warn')">warn</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon('error')">Error</ScButton>
  </div>
  <div class="mrt20">
    <ScButton class="mrl20" @click="() => openNotificationWithIcon1('success')">Success</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon1('info')">Info</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon1('warning')">Warning</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon1('warn')">warn</ScButton>
    <ScButton class="mrl20" @click="() => openNotificationWithIcon1('error')">Error</ScButton>
  </div>
</template>
<script lang="ts" setup>
import { ScButton, ScNotification } from 'sc-ui'
const openNotificationWithIcon = (type: string) => {
  // @ts-ignore
  ScNotification[type]({
    message: 'Notification Title',
    duration: 400.5,
    description: 'This is the content of the notification'
  });
};
const openNotificationWithIcon1 = (type: string) => {
  // @ts-ignore
  ScNotification[type]({
    message: 'Notification Title',
    duration: 400.5,
    description: 'This is the content of the notification',
    edit: true
  });
};
</script>
