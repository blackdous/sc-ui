<template>
  <div> CLICK_PLAY_AND_BACKWARDS </div>
  <Space>
    <div class="disFlex"> 
      <ElButton>11111111</ElButton>
      <UseAnimations :animation="{ animationData: visibility2, animationKey: 'visibility2' }" :size="56"></UseAnimations>
      <UseAnimations :animation="{ animationData: searchToX, animationKey: 'searchToX' }" :size="56"></UseAnimations>
      <UseAnimations :animation="{ animationData: maximizeMinimize, animationKey: 'maximizeMinimize' }" :size="56"></UseAnimations>
      <UseAnimations :animation="{ animationData: notification, animationKey: 'notification' }" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> CLICK_PLAY </div>
  <Space>
    <div class="disFlex"> 
      <UseAnimations :animation="{ animationData: download, animationKey: 'download' }" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> HOVER_PLAY_AND_BACKWARDS </div>
  <Space>
    <UseAnimations :animation="{ animationData: settings, animationKey: 'settings' }" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: trash, animationKey: 'trash' }" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: help, animationKey: 'help' }" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: alertCircle, animationKey: 'alertCircle' }" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: copy, animationKey: 'copy' }" :size="56"></UseAnimations>
  </Space>
  <div> HOVER_PLAY_AND_STOP </div>
  <Space>
    <UseAnimations :animation="{ animationData: userPlus, animationKey: 'userPlus' }" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: userMinus, animationKey: 'userMinus' }" :size="56"></UseAnimations>
  </Space>
  <div> LOOP_PLAY </div>
  <Space>
    <UseAnimations :animation="{ animationData: notification3, animationKey: 'notification3' }" :size="56"></UseAnimations>
    <UseAnimations :animation="{ animationData: notification4, animationKey: 'notification4' }" :size="56"></UseAnimations>
  </Space>
</template>

<script lang="ts" setup>
import UseAnimations from 'vue3-useanimations'
import { Space } from 'ant-design-vue'
import { ElButton } from 'element-plus'
// import { UseAnimations } from '../component/index'
import visibility2 from 'vue3-useanimations/dist/types/lib/visibility2/visibility2.json'
import searchToX from 'vue3-useanimations/dist/types/lib/searchToX/searchToX.json'
import settings from 'vue3-useanimations/dist/types/lib/settings/settings.json'
import download from 'vue3-useanimations/dist/types/lib/download/download.json'
import trash from 'vue3-useanimations/dist/types/lib/trash/trash.json'
import copy from 'vue3-useanimations/dist/types/lib/copy/copy.json'
import help from 'vue3-useanimations/dist/types/lib/help/help.json'
import alertCircle from 'vue3-useanimations/dist/types/lib/alertCircle/alertCircle.json'
import maximizeMinimize from 'vue3-useanimations/dist/types/lib/maximizeMinimize/maximizeMinimize.json'
import notification from 'vue3-useanimations/dist/types/lib/notification/notification.json'
import notification3 from 'vue3-useanimations/dist/types/lib/notification3/notification3.json'
import notification4 from 'vue3-useanimations/dist/types/lib/notification4/notification4.json'
import userPlus from 'vue3-useanimations/dist/types/lib/userPlus/userPlus.json'
import userMinus from 'vue3-useanimations/dist/types/lib/userMinus/userMinus.json'

</script>

<style scoped>
.sss {
  font-size: 22px;
  color: red;
}
.disFlex {
  align-items: center;
}
.disFlex .anticon  {
  padding: 2px 14px;
}
</style>
