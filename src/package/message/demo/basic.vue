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
    <ScButton
      @click="closeHandle"
    >
      close
    </ScButton>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { message } from 'ant-design-vue'
import { ScButton, useMessage } from 'sc-ui'

const successHandle = () => {
  message.success('用于表示普通操作信息提示，可关闭，通常信息较长', 3000)
}
const errorHandle = () => {
  message.error('用于表示普通操作信息提示，可关闭，通常信息较长', 3000)
}
const infoHandle = () => {
  message.info('用于表示普通操作信息提示，可关闭，通常信息较长', 3000)
}
const warningHandle = () => {
  message.warning('用于表示普通操作信息提示，可关闭，通常信息较长', 30000)
}
const loadingHandle = () => {
  message.loading({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    icon: h('span', { class: 'loading-transition' }),
    duration: 3000
  })
}
const { createCloseMessage } = useMessage()
const closeHandle = () => {
  createCloseMessage({
    type: 'warning',
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 30000
  })
}
</script>

<style lang="less" scoped>
div {
  & > .scbutton {
    margin-right: 8px;
  }
}
</style>