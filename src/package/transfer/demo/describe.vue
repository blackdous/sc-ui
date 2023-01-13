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
        <div class="custom-item">
          <p class="custom-title">
            {{ item.title }}
          </p>
          <p class="custom-desc">
            {{ item.description }}
          </p>
        </div>
      </template>
    </Transfer>
    <template #renderEmpty>
      <EmptyVue></EmptyVue>
    </template>
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Transfer, ConfigProvider } from 'ant-design-vue';

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
    ConfigProvider
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

<style lang="less" scoped>
.custom-item {
  display: inline-flex;
  flex-direction: column;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  .custom-desc {
    color: @text-color-secondary;
  }
}
.ant-checkbox-wrapper-checked {
  & + .ant-transfer-list-content-item-text {
    .custom-desc {
      color: fade(@primary-color, 60%);
    }
  }
}
</style>

