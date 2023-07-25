<template>
  <Space direction="vertical" :size="12">
    <div class="ml20">
      <ScLink type="primary"
        href="http://console.voneyun.com/"
        :hoverUnderline="true"
      >跳转链接</ScLink>

      <ScLink type="primary"
        href="http://console.voneyun.com/"
        disabled
      >
        跳转链接
      </ScLink>

      <ScLink>
        跳转链接
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary"
        :handle="handle"
      >
        跳转链接
      </ScLink>
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

const handle = () => {
  window.location.href = 'http://console.voneyun.com/'
}
</script>
<style scoped>
.ml20 .scLink + .scLink {
  margin-left: 20px;
}
</style>
