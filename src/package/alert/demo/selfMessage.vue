<template>
  <div>
    <ScAlert type="info" showIcon>
      <template #message>
        <div>
          这是一条普通的消息提示
          <ScButton type="link" size="small" @click="gotoLink">相关操作>></ScButton>
          <!-- <i class="sc-ui sc-a-chevron-rightdouble sc-arrow-right"></i> -->
        </div>
      </template>
    </ScAlert>
    <ScAlert type="success" showIcon>
      <template #message>
        <div>
          这是一条成功的消息提示
          <ScButton type="link" size="small" @click="gotoLink">相关操作>></ScButton>
          <!-- <i class="sc-ui sc-a-chevron-rightdouble sc-arrow-right"></i> -->
        </div>
      </template>
    </ScAlert>
    <ScAlert type="warning" showIcon>
      <template #message>
        <div>
          这是一条警示的消息提示
          <ScButton type="link" size="small" @click="gotoLink">相关操作>></ScButton>
          <!-- <i class="sc-ui sc-a-chevron-rightdouble sc-arrow-right"></i> -->
        </div>
      </template>
    </ScAlert>
    <ScAlert type="error" showIcon>
      <template #message>
        <div>
          高危操作/出错信息提示
          <ScButton type="link" size="small" @click="gotoLink">相关操作>></ScButton>
          <!-- <i class="sc-ui sc-a-chevron-rightdouble sc-arrow-right"></i> -->
        </div>
      </template>
    </ScAlert>
  </div>
</template>

<script setup lang="ts">
import { ScAlert, ScButton } from 'sc-ui'

const gotoLink = () => {
  window.open('https://www.baidu.com', '_blank')
}

</script>
<!-- <style scoped>
.sc-arrow-right {
  color: #008CD3;
  vertical-align: bottom;
}
</style> -->
<style scoped>
/* @import 'comment'; */
</style>