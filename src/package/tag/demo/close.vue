<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTag type="dark" closable>
        <template #icon>
          <ScIcon type="icon-link"/>
        </template>
        默认标签
      </ScTag>
      <ScTag type="light" closable>
        默认标签
      </ScTag>
      <ScTag type="outline" closable>
        默认标签
      </ScTag>
      <ScTag closable>
        默认标签
      </ScTag>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScTag, ScIcon } from 'sc-ui'
</script>
