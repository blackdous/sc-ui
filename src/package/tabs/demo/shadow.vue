<template>
  <div class="bg">
    <ScTabs type="card" styleMode="shadow">
      <TabPane key="1" tab="Tab 1" style="height: 100px">Content of Tab Pane 1</TabPane>
      <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
      <TabPane key="3" tab="Tab 3" style="height: 100px">Content of Tab Pane 3</TabPane>
      <TabPane key="4" tab="Tab 4" style="height: 100px">Content of Tab Pane 4</TabPane>
    </ScTabs>
  </div>
</template>

<script setup lang="ts">
import { TabPane } from 'ant-design-vue'
import { ScTabs } from 'sc-ui'
import '../../../style/index.less'
</script>

<style lang="less">
.bg {
  // background: #e5e5e5;
}
</style>