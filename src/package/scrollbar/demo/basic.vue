<template>
  <ScScrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </ScScrollbar>
</template>

<script lang="ts" setup>

import { ScScrollbar } from 'sc-ui'

</script>

<style scoped lang="less">
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
  & + & {
    margin-top: 10px;
  }
}
</style>