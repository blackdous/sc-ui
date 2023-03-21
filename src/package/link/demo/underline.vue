<template>
  <Space direction="vertical" :size="12">
    <div class="ml20">
      <ScLink type="primary" underline>
        跳转链接
      </ScLink>
      <ScLink underline>
        跳转链接
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary" disabled underline>
        跳转链接
      </ScLink>
      <ScLink disabled underline>
        跳转链接
      </ScLink>
    </div>
    </Space>
</template>

<script lang='ts' setup>
import { Space } from 'ant-design-vue';
import { ScLink } from 'sc-ui';
</script>

<style scoped>
.ml20 .scLink + .scLink {
  margin-left: 20px;
}
</style>