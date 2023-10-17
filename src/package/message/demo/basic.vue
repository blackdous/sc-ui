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
import { ExclamationCircleFilled } from '@ant-design/icons-vue'

const successHandle = () => {
  message.success({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 3
  })
}
const errorHandle = () => {
  message.error({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 3,
    icon: h(ExclamationCircleFilled, { class: 'sc-ui sc-warning-circle-fill', style: { fontSize: '18px', marginRight: '8px' } })
  })
}
const infoHandle = () => {
  message.info({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 3
  })
}
const warningHandle = () => {
  message.warning({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 3
  })
}
const loadingHandle = () => {
  message.loading({
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    icon: h('span', { class: 'loading-transition' }),
    duration: 3
  })
}
const { createCloseMessage } = useMessage()
const closeHandle = () => {
  createCloseMessage({
    type: 'warning',
    content: '用于表示普通操作信息提示，可关闭，通常信息较长',
    duration: 3
  })
}
</script>
<style lang="less">
@import '../../../style/index.less';
</style>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
div > .scbutton {
  margin-right: 8px;
}
</style>