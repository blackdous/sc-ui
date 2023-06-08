<template>
  <ScDrawer 
    v-model:visible="visible"
    @ok="handleOk"
    cancel-text="取消"
    ok-text="确认"
    maskClosable
  >
    <template #title>
      <div>1111111</div>
    </template>
    <template #info>
      <ScAlert 
        type="warning"
        textColor
        showIcon
        message="这是一条普通的消息提示"
        description="1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；"
      > 
        <template #icon>
          <InfoCircleFilled/>
        </template>
      </ScAlert>
    </template>
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
    <div>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</div>
  </ScDrawer>
  <Button @click="openModal">
    打开
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { InfoCircleFilled } from '@ant-design/icons-vue';

import { Button } from 'ant-design-vue'
import { ScDrawer, ScAlert } from 'sc-ui'

const visible: Ref<boolean> = ref(false)

const openModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

</script>
<style scoped>
/* @import 'comment'; */
</style>