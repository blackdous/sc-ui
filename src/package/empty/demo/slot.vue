<template>
  <div>
    <Empty>
      <template #img>
        自定义图片
      </template>
      <template #text>
        自定义文字 等等
      </template>
    </Empty>
  </div>
</template>
<style scoped>
/* @import 'comment'; */
</style>
<script lang='ts' setup>
import { Empty } from 'sc-ui'
</script>
