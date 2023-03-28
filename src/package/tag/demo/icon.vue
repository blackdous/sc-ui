<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag type="dark">
        <template #icon>
          <ScIcon type="icon-link"/>
        </template>
        默认标签
      </ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag, ScIcon } from 'sc-ui'
</script>
