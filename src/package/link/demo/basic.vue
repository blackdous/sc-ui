<template>
  <Space direction="vertical" :size="12">
    <div class="ml20">
      <ScLink type="primary">
        跳转链接
      </ScLink>

      <ScLink>
        跳转链接
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary" disabled>
        跳转链接
      </ScLink>

      <ScLink disabled>
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
