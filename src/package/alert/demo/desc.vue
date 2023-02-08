<template>
  <div>
    <ScAlert 
      type="info"
      showIcon
      closable
      description="1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；"
    >
      <template #message>
        这是一条普通的消息提示
        <Button type="link" size="small" @click="gotoLink">相关操作</Button>
      </template>
      <template #icon>
        <InfoCircleFilled/>
      </template>
    </ScAlert>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
const gotoLink = () => {
  window.open('https://www.baidu.com', '_blank')
}
</script>