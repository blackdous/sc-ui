<template>

  <div class="btns">
    <ScPopconfirm
      title="基础气泡确认框文案示意文字按钮"
      okText="确认"
      cancelText="取消"
      icon=""
      :isShowIcon="false"
      :okBeforeFun="okBeforeFunc"
      :cancelBeforeFun="cancelBeforeFunc"
      @confirm="handleConfirm"
    >
      <ScButton>
        基础气泡确认框
      </ScButton>
    </ScPopconfirm>
    
  </div>
</template>

<script setup lang="ts">
import { ScPopconfirm, ScButton } from 'sc-ui'

const okBeforeFunc = async() => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(false)
      console.log('beforeFunc 方法测试: ', false);
    }, 1500)
  })

  return await promise1;
}

const cancelBeforeFunc = async() => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(false)
      console.log('cancelBeforeFunc 方法测试: ', false);
    }, 1500)
  })

  return await promise1;
}

const handleConfirm = (e:Event) => {
  console.log('e: ', e);
}

</script>
<style scoped>
/* @import 'comment'; */
</style>