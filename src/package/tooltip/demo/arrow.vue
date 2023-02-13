<template>
  <div>
    <Tooltip>
      <span>
        带箭头的文字提示
      </span>
      <template #title>
        文字提示仅展示文本内容文字提示仅展示文本内容
      </template>
    </Tooltip>
  </div>
  <div>
    <Tooltip
      overlayClassName="notArrow"
    >
      <span>
        不带箭头的文字提示
      </span>
      <template #title>
        文字提示仅展示文本内容文字提示仅展示文本内容
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
</script>
<style scoped>
/* @import ''; */
</style>