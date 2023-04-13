<template>
  <div class="bg">
    <ScTabs 
      type="card" 
      styleMode="shadow"
      v-model:activeKey="key"
    >
      <TabPane 
        v-for="item in list"
        :key="item.key" 
        style="height: 100px">
        <!-- {{item.text}} -->
        <template #tab>
          <div>
            {{item.label}}
          </div>
        </template>
      </TabPane>
    </ScTabs>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { TabPane } from 'ant-design-vue'
import { ScTabs } from 'sc-ui'

interface ItemType {
  key?: string | number;
  label?: string;
  text?: string;
}

const list = ref<Array<ItemType>>([])

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    list.value = [...unref(list), {
      key: i,
      label: 'Tab ' + i,
      text: 'Content of Tab Pane ' + i
    }]
  }
  console.log('更新 list.value 值')
}, 1500);

const key = ref(4)
</script>
<style scoped>
/* @import 'comment'; */
</style>