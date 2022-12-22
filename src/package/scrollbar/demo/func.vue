<template>

  <div class="btns">
    <ScButton
      type="primary"
      @click="refHandleScroll"
    >
      handleScroll
    </ScButton>
    <ScButton
      type="primary"
      @click="refScrollTo"
    >
      scrollTo
    </ScButton>
    <ScButton
      type="primary"
      @click="refSetScrollTop"
    >
      setScrollTop
    </ScButton>
    <ScButton
      type="primary"
      @click="setScrollLeft"
    >
      setScrollLeft
    </ScButton>
    <ScButton
      type="primary"
      @click="update"
    >
      update
    </ScButton>
  </div>
  <ScScrollbar
    height="100px"
    @scroll="handleScroll"
    ref="scrollRef"
  >
    <div class="scrollbar-flex-content" v-for="lineItem in 10">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ lineItem + '-' + item }}</p>
    </div>
  </ScScrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ScScrollbar, ScButton } from 'sc-ui'

const handleScroll = ({scrollLeft, scrollTop}:{ scrollLeft: number, scrollTop: number }) => {
  console.log('scrollTop: ', scrollTop);
  console.log('scrollLeft: ', scrollLeft);
}

const scrollRef = ref()

const refHandleScroll = () => {
  scrollRef.value.handleScroll()
}

const refScrollTo = () => {
  scrollRef.value.scrollTo(20, 40)
}

const refSetScrollTop = () => {
  scrollRef.value.setScrollTop(50)
}

const setScrollLeft = () => {
  scrollRef.value.setScrollLeft(100)
}

const update = () => {
  scrollRef.value.update()
}

</script>

<style scoped lang="less">
.btns {
  & > button {
   margin-left: 10px;
  }
}
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px!important;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
  & + & {
    margin-left: 10px;
  }
}
</style>