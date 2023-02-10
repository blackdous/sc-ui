<template>
  <div>
    <ScBreadcrumb>
      <BreadcrumbItem>上级页面</BreadcrumbItem>
      <BreadcrumbItem>上级页面</BreadcrumbItem>
      <BreadcrumbItem>当前页面</BreadcrumbItem>
      <template #separator>
        <span>
          <i class="sc-ui sc-you"></i>
        </span>
      </template>
    </ScBreadcrumb>
  </div>
  <div>
    <ScBreadcrumb>
      <BreadcrumbItem>上级页面</BreadcrumbItem>
      <BreadcrumbItem>上级页面</BreadcrumbItem>
      <BreadcrumbItem>当前页面</BreadcrumbItem>
    </ScBreadcrumb>
  </div>
</template>

<script lang='ts' setup>
// import { ref } from 'vue'
import { ScBreadcrumb } from 'sc-ui'
import { BreadcrumbItem } from 'ant-design-vue'
</script>

<style scoped>
div {
  margin-top: 10px;
}
  
</style>
