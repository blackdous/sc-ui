<template>
  <ScScrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </ScScrollbar>
</template>

<script lang="ts" setup>

import { ScScrollbar } from 'sc-ui'

</script>

<style scoped>
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
}
.scrollbar-demo-item + .scrollbar-demo-item {
  margin-left: 10px;
}
</style>