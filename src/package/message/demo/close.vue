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
import { h } from 'vue'
import { ScButton, useMessage } from 'sc-ui'
import { ExclamationCircleFilled } from '@ant-design/icons-vue'

const { createCloseMessage } = useMessage()
const successHandle = () => {
  createCloseMessage({type: 'success', content: '用于表示普通操作信息提示，可关闭，通常信息较长'})
}
const errorHandle = () => {
  createCloseMessage({
    type: 'error', 
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    icon: h(ExclamationCircleFilled, { class: 'sc-ui sc-warning-circle-fill', style: { fontSize: '18px', marginRight: '8px' } })
  })
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
/* @import 'comment'; */
</style>
<style scoped>
div > .scbutton {
  margin-right: 8px;
}
</style>