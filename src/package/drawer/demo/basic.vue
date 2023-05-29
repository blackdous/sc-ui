<template>
  <Space>
    <ScButton
      @click="() => handleClick('large')"
    >
      大尺寸
    </ScButton>
    <ScButton
      @click="() => handleClick('middle')"
    >
      中尺寸
    </ScButton>
    <ScButton
      @click="() => handleClick('mini')"
    >
      小尺寸
    </ScButton>
    <ScButton
      @click="handleClick1"
    >
      自定义尺寸
    </ScButton>
  </Space>
  <div>
    <ScDrawer
      v-model:visible="visibleRef"
      :title="titleRef"
      placement="right"
      help-info="1111111"
      destroy-on-close
      :loading="loadingRef"
      :widthSize="widthSize"
      :width="widthRef"
      :alert-options="{
        message: '被授权主体支持用户、用户组、角色',
        type: 'info',
        textColor: true,
        showIcon: true
      }"
    >
      <div>1111111111122222222222</div>
      <div>1111111111122222222222</div>
      <div>1111111111122222222222</div>
      <div>1111111111122222222222</div>
      <div>1111111111122222222222</div>
      <div
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </div>
      <ScButton @click="handleUpdate">异步新增数据</ScButton>
    </ScDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ScDrawer, ScButton } from 'sc-ui'
import { Space } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"

const visibleRef = ref(false)
const titleRef = ref()
const list = ref()
const loadingRef = ref(false)
const widthRef = ref()

const widthSize = ref('large')

const handleClick = (size:string) => {
  visibleRef.value = true
  widthSize.value = size
  widthRef.value = undefined
  titleRef.value = '标题名称'
  console.log('visibleRef.value: ', visibleRef.value)
}

const handleClick1 = () => {
  visibleRef.value = true
  titleRef.value = '标题名称'
  widthRef.value = '200px'
}

const handleUpdate = () => {
  const newList:Array<string> = []
  for (let i = 10; i < 20; i++) {
    newList.push((i + '').padEnd(5))
  }
  loadingRef.value = true
  setTimeout(() => {
    // resolve(newList)
    list.value = newList
    loadingRef.value = false
    console.log('更新数据值')
  }, 1000)
}

</script>

<style lang="less">
@import '../../../style/index.less';
</style>
