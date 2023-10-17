<template>

  <div class="btns">
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      okText="确认"
      cancelText="取消"
      icon=""
      :isShowIcon="false"
      @confirm="handleConfirm"
      @cancel="handleConfirm"
      @visibleChange="handleVisibleChange"
    >
      <ScButton>
        基础气泡确认框
      </ScButton>
    </ScPopconfirm>
    <Popconfirm
      title="基础气泡确认框文案示意文字按钮"
      okText="确认"
      cancelText="取消"
      icon=""
      @confirm="handleConfirm"
      @cancel="handleConfirm"
      @visibleChange="handleVisibleChange"
    >
      <ScButton>
        基础气泡确认框
      </ScButton>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { ScPopconfirm, ScButton} from 'sc-ui'
import { Popconfirm } from 'ant-design-vue';
const handleConfirm = (e:Event) => {
  console.log('e: ', e);
}
const handleVisibleChange = (visible:boolean) => {
  console.log('visible: ', visible);
}
</script>
<style scoped>
/* @import 'comment'; */
</style>