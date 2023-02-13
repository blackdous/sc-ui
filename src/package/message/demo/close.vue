<template>
  <div>
    <ScButton
      @click="successHandle"
    >
      success
    </ScButton>
    <ScButton
      @click="infoHandle"
    >
      info
    </ScButton>
    <ScButton
      @click="warningHandle"
    >
      warning
    </ScButton>
    <ScButton
      @click="errorHandle"
    >
      error
    </ScButton>
    <ScButton
      @click="loadingHandle"
    >
      loading
    </ScButton>
  </div>
</template>

<script setup lang="ts">
import { ScButton, useMessage } from 'sc-ui'

const { createCloseMessage } = useMessage()
const successHandle = () => {
  createCloseMessage({type: 'success', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
const errorHandle = () => {
  createCloseMessage({type: 'error', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
const infoHandle = () => {
  createCloseMessage({type: 'info', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
const warningHandle = () => {
  createCloseMessage({type: 'warning', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
const loadingHandle = () => {
  createCloseMessage({type: 'loading', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
</script>
<style scoped>
/* @import ''; */
</style>
<style scoped>
div > .scbutton {
  margin-right: 8px;
}
</style>