<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag type="dark" size="small">默认标签</ScTag>
      <ScTag type="dark">默认标签</ScTag>
      <ScTag type="dark" size="large">默认标签</ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'
</script>
