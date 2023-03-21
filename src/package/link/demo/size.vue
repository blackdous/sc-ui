<template>
  <Space direction="vertical" :size="12">
    <div class="ml20">
      <ScLink type="primary" size="large">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink size="large">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="danger" size="large">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="warning" size="large">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="success" size="large">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink>
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="danger">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="warning">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="success">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
    </div>
    <div class="ml20">
      <ScLink type="primary" size="small">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink size="small">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="danger" size="small">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="warning" size="small">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
      </ScLink>
      <ScLink type="success" size="small">
        跳转链接
        <template #icon>
          <i class="sc-ui sc-tiaozhuan"></i>
        </template>
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
.sc-tiaozhuan {
  font-size: 14px;
}
</style>