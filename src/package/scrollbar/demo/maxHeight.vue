<template>
  <ScScrollbar maxHeight="400px" viewClass="pd14">
    <p v-for="item in list" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </ScScrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ScScrollbar } from 'sc-ui'
const list = ref(2)

const timer = setTimeout(() => {
  list.value = 25
  clearTimeout(timer)
}, 3500)
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
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
}
.scrollbar-demo-item + .scrollbar-demo-item {
  margin-top: 10px;
}
</style>