<template>
  <div>
    <ConfigProvider
    >
      <Transfer
        :data-source="mockData"
        :titles="['Source', 'Target']"
        :target-keys="targetKeys"
        :selected-keys="selectedKeys"
        :render="item => item.title"
        :disabled="disabled"
        @change="handleChange"
        @selectChange="handleSelectChange"
        @scroll="handleScroll"
      />
      <template #renderEmpty>
        <EmptyVue></EmptyVue>
      </template>
    </ConfigProvider>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Switch, Transfer, ConfigProvider } from 'ant-design-vue';

import EmptyVue from '../component/Empty.vue'

interface MockData {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}
const mockData: MockData[] = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    // disabled: false
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
export default defineComponent({
  components: {
    Switch,
    Transfer,
    EmptyVue,
    ConfigProvider
  },
  data() {
    const disabled = ref<boolean>(false);

    const targetKeys = ref<string[]>(oriTargetKeys);

    const selectedKeys = ref<string[]>(['1', '4']);

    const handleChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = nextTargetKeys;
      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    };
    const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
      selectedKeys.value = [...sourceSelectedKeys, ...targetSelectedKeys];
      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    };
    const handleScroll = (direction: string, e: Event) => {
      console.log('direction:', direction);
      console.log('target:', e.target);
    };

    return {
      mockData,
      targetKeys,
      selectedKeys,
      disabled,
      handleChange,
      handleSelectChange,
      handleScroll,
    };
  },
});
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.tableEmpty {
  min-height: 100px;
  padding-top: 0;
}
</style>

