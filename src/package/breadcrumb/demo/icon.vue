<template>
  <ScBreadcrumb>
    <BreadcrumbItem>
      <TagOutlined></TagOutlined>
      上级页面
    </BreadcrumbItem>
    <BreadcrumbItem>
      <TagOutlined></TagOutlined>
      上级页面
    </BreadcrumbItem>
    <BreadcrumbItem>
      <TagOutlined></TagOutlined>
      当前页面
    </BreadcrumbItem>
    <template #separator>
      <span>
        <i class="sc-ui sc-you"></i>
      </span>
    </template>
  </ScBreadcrumb>
</template>

<script lang='ts' setup>
// import { ref } from 'vue'
import { ScBreadcrumb } from 'sc-ui'
import { BreadcrumbItem } from 'ant-design-vue'
import { TagOutlined } from '@ant-design/icons-vue'
</script>
<style scoped>
/* @import 'comment'; */
</style>