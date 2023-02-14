<template>
  <ScBreadcrumb>
    <ScBreadcrumbItem>
      <TagOutlined></TagOutlined>
      上级页面
    </ScBreadcrumbItem>
    <ScBreadcrumbItem>
      <TagOutlined></TagOutlined>
      上级页面
    </ScBreadcrumbItem>
    <ScBreadcrumbItem>
      <TagOutlined></TagOutlined>
      当前页面
    </ScBreadcrumbItem>
    <template #separator>
      <span>
        <i class="sc-ui sc-you"></i>
      </span>
    </template>
  </ScBreadcrumb>
</template>

<script lang='ts' setup>
import { ScBreadcrumb, ScBreadcrumbItem } from 'sc-ui'
import { TagOutlined } from '@ant-design/icons-vue'
</script>
<style scoped>
/* @import 'comment'; */
</style>