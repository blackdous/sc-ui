<template>
  <div>
    <ScAlert 
      type="info"
      showIcon
      closable
    >
      <template #message>
        这是一条普通的消息提示
        <Button type="link" size="small" @click="gotoLink">相关操作</Button>
      </template>
      <template #icon>
        <InfoCircleFilled/>
      </template>
      <template #description>
        <div v-textCollapse="'close'">
          1. 小程序云服务器有奖内测中，即刻成为产品体验官 <br/>
          2. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择! <br/>
          3. 小程序云服务器有奖内测中，即刻成为产品体验官 <br/>
          4. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择! <br/>
          5. 小程序云服务器有奖内测中，即刻成为产品体验官 <br/>
          6. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择! <br/>
        </div>
      </template>
    </ScAlert>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ScAlert, installGlobalDirectives } from 'sc-ui'
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import "../../../style/index.less"

const gotoLink = () => {
  window.open('https://www.baidu.com', '_blank')
}

const globalApp = inject('globalApp')
// @ts-ignore
installGlobalDirectives(globalApp)
</script>

<style lang="less">
</style>