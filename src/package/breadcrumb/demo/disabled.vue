<template>
  <div>
    <ScBreadcrumb>
      <BreadcrumbItem
        disabled
      >上级页面</BreadcrumbItem>
      <BreadcrumbItem>上级页面</BreadcrumbItem>
      <BreadcrumbItem>当前页面</BreadcrumbItem>
      <template #separator>
        <span>
          <i class="sc-ui sc-you"></i>
        </span>
      </template>
    </ScBreadcrumb>
  </div>
</template>

<script lang='ts' setup>
// import { ref } from 'vue'
import { ScBreadcrumb } from 'sc-ui'
import { BreadcrumbItem } from 'ant-design-vue'
import '../../../style/index.less'
</script>

<style lang="less" scoped>
div {
  margin-top: 10px;
}
  
</style>
