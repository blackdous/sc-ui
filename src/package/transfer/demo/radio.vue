<template>
  <ConfigProvider>
    <Transfer
      :data-source="mockData"
      :list-style="{
        width: '300px',
        height: '300px',
      }"
      :target-keys="targetKeys"
      @change="handleChange"
    >
      <template #render="item">
        <span class="custom-title">
          {{ item.title }}
        </span>
        <p class="custom-desc">
          <RadioGroup
            v-model:value="item.radio"
          >
            <Radio :value="1">A</Radio>
            <Radio :value="2">B</Radio>
            <Radio :value="3">C</Radio>
          </RadioGroup>
        </p>
      </template>
    </Transfer>
    <template #renderEmpty>
      <EmptyVue></EmptyVue>
    </template>
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Transfer, ConfigProvider, Radio, RadioGroup } from 'ant-design-vue';

import EmptyVue from '../component/Empty.vue'
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  components: {
    Transfer,
    EmptyVue,
    ConfigProvider,
    Radio, RadioGroup
  },
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          radio: 1,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = keys;
      console.log(keys, direction, moveKeys);
    };
    return {
      mockData,
      targetKeys,
      handleChange,
      getMock,
    };
  },
});
</script>

<style scoped>
/* @import 'comment'; */
</style>