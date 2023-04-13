<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag type="dark">默认标签</ScTag>
      <ScTag type="dark" status="primary">默认标签</ScTag>
      <ScTag type="dark" status="success">默认标签</ScTag>
      <ScTag type="dark" status="warning">默认标签</ScTag>
      <ScTag type="dark" status="error">默认标签</ScTag>
      <ScTag type="dark" color="#87d068">默认标签</ScTag>
    </div>
    <div>
      <ScTag type="light">默认标签</ScTag>
      <ScTag type="light" status="primary">默认标签</ScTag>
      <ScTag type="light" status="success">默认标签</ScTag>
      <ScTag type="light" status="warning">默认标签</ScTag>
      <ScTag type="light" status="error">默认标签</ScTag>
      <ScTag type="light" color="#87d068">默认标签</ScTag>
    </div>
    <div>
      <ScTag type="outline">默认标签</ScTag>
      <ScTag type="outline" status="primary">默认标签</ScTag>
      <ScTag type="outline" status="success">默认标签</ScTag>
      <ScTag type="outline" status="warning">默认标签</ScTag>
      <ScTag type="outline" status="error">默认标签</ScTag>
      <ScTag type="outline" color="#87d068">默认标签</ScTag>
    </div>
    <div>
      <ScTag type="lightOutline">默认标签</ScTag>
      <ScTag type="lightOutline" status="primary">默认标签</ScTag>
      <ScTag type="lightOutline" status="success">默认标签</ScTag>
      <ScTag type="lightOutline" status="warning">默认标签</ScTag>
      <ScTag type="lightOutline" status="error">默认标签</ScTag>
      <ScTag type="lightOutline" color="#87d068">默认标签</ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag } from 'sc-ui'
</script>
