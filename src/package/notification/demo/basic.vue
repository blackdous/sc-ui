<template>
  <div class="mrt20">
    <ScButton @click="openNotification" > basic notification </ScButton>
  </div>
</template>
<script lang="ts" setup>
import { ScButton, ScNotification } from 'sc-ui'

const openNotification = () => {
  ScNotification.open ({
    message: 'Notification Title',
    description: 'basic notification',
    duration: 4000,
    placement: 'topLeft'
  })
}
</script>