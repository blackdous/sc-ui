<template>
  <div>
    <ScTabs
      type="line"
    >
      <TabPane key="1" tab="Tab 1" style="height: 100px">Content of Tab Pane 1</TabPane>
      <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
    </ScTabs>
  </div>
  <div class="mt20">
    <ScTabs
      type="card"
      style-mode="shadow"
    >
      <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
      <TabPane key="3" tab="Tab 3" style="height: 100px">Content of Tab Pane 3</TabPane>
      <TabPane key="4" tab="Tab 4" style="height: 100px">Content of Tab Pane 4</TabPane>
      <TabPane key="5" tab="Tab 5" style="height: 100px">
        <ScTabs
          type="card"
        >
          <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
          <TabPane key="3" tab="Tab 3" style="height: 100px">Content of Tab Pane 3</TabPane>
          <TabPane key="4" tab="Tab 4" style="height: 100px">Content of Tab Pane 4</TabPane>
        </ScTabs>
      </TabPane>
    </ScTabs>
  </div>
  <div class="mt20">
    <Tabs
      type="card"
      style-mode="shadow"
    >
      <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
      <TabPane key="3" tab="Tab 3" style="height: 100px">Content of Tab Pane 3</TabPane>
      <TabPane key="4" tab="Tab 4" style="height: 100px">Content of Tab Pane 4</TabPane>
      <TabPane key="5" tab="Tab 4" style="height: 100px">
        <Tabs
          type="card"
        >
          <TabPane key="2" tab="Tab 2" style="height: 100px">Content of Tab Pane 2</TabPane>
          <TabPane key="3" tab="Tab 3" style="height: 100px">Content of Tab Pane 3</TabPane>
          <TabPane key="4" tab="Tab 4" style="height: 100px">Content of Tab Pane 4</TabPane>
        </Tabs>
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { TabPane, Tabs } from 'ant-design-vue'
import { ScTabs } from 'sc-ui'

interface ItemType {
  key?: string | number;
  label?: string;
  text?: string;
}

const list = ref<Array<ItemType>>([])
for (let i = 0; i < 5; i++) {
  list.value = [...unref(list), {
    key: i,
    label: 'Tab ' + i,
    text: 'Content of Tab Pane ' + i
  }]
}
</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>