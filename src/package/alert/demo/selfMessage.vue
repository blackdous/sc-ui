<template>
  <div>
    <ScAlert type="info" showIcon>
      <template #message>
        <div>
          这是一条普通的消息提示
          <Button type="link" @click="gotoLink">相关操作</Button>
        </div>
      </template>
    </ScAlert>
    <ScAlert type="success" showIcon>
      <template #message>
        <div>
          这是一条成功的消息提示
          <Button type="link" @click="gotoLink">相关操作</Button>
        </div>
      </template>
    </ScAlert>
    <ScAlert type="warning" showIcon>
      <template #message>
        <div>
          这是一条警示的消息提示
          <Button type="link" @click="gotoLink">相关操作</Button>
        </div>
      </template>
    </ScAlert>
    <ScAlert type="error" showIcon>
      <template #message>
        <div>
          高危操作/出错信息提示
          <Button type="link" @click="gotoLink">相关操作</Button>
        </div>
      </template>
    </ScAlert>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
import { Button } from 'ant-design-vue'
import "../../../style/index.less"

const gotoLink = () => {
  window.open('https://www.baidu.com', '_blank')
}

</script>

<style lang="less">
</style>