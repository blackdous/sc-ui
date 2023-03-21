<template>
  <Space direction="vertical" :size="12">
    <div class="ml20">
      <ScLink type="primary" icon="icon-link">
        跳转链接
      </ScLink>
      <ScLink icon="icon-link">
        跳转链接
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary" :icon="iconH">
        跳转链接
      </ScLink>
      <ScLink :icon="iconH">
        跳转链接
      </ScLink>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScLink } from 'sc-ui';
import { h } from 'vue';

const iconH = h('i', { class: 'sc-ui sc-link', style: { fontSize: '14px' } })
</script>

<style scoped>
.ml20 .scLink + .scLink {
  margin-left: 20px;
}
</style>