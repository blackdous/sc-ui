<template>
  <div>
    <ScBreadcrumb>
      <ScBreadcrumbItem
        disabled
      >上级页面</ScBreadcrumbItem>
      <ScBreadcrumbItem>上级页面</ScBreadcrumbItem>
      <ScBreadcrumbItem>当前页面</ScBreadcrumbItem>
      <template #separator>
        <span>
          <i class="sc-ui sc-you"></i>
        </span>
      </template>
    </ScBreadcrumb>
  </div>
</template>

<script lang='ts' setup>
import { ScBreadcrumb, ScBreadcrumbItem } from 'sc-ui'
</script>

<style scoped>
/* @import 'comment'; */
div {
  margin-top: 10px;
}
  
</style>
