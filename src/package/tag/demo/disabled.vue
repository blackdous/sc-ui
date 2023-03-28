<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag type="dark">默认标签</ScTag>
      <ScTag type="light">默认标签</ScTag>
      <ScTag type="outline">默认标签</ScTag>
      <ScTag>默认标签</ScTag>
    </div>
    <div>
      <ScTag type="dark" disabled closable>默认标签</ScTag>
      <ScTag type="light" disabled closable>默认标签</ScTag>
      <ScTag type="outline" disabled closable>默认标签</ScTag>
      <ScTag disabled closable>默认标签</ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'
</script>
