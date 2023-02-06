<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>日期区间选择器</p>
      <!-- @change="handleChange" -->
      <ScRangePicker
        v-model:value="value"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
  </Space>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
import { Space } from 'ant-design-vue';
import { ScRangePicker } from 'sc-ui'
// import type { Dayjs } from 'dayjs';
import { Dayjs } from 'dayjs';

export default defineComponent({
  components: {
    ScRangePicker,
    Space
  },
  setup () {
    const value = ref<Dayjs>()
    const onChange = (value: Dayjs, dateString: string) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };

    return {
      value,
      onChange,
    }
  }
})

</script>

<style lang="less" scoped>
  div {
    p {
      padding: 10px 0;
    }
  }
</style>
