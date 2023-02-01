<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>日期时间选择器</p>
      <!-- v-model:value="value" -->
      <ScDatePicker
        show-time
        @change="onChange" 
        @ok="onOk"
      >
      </ScDatePicker>
    </div>
  </Space>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
import { Space } from 'ant-design-vue';
import { ScDatePicker } from 'sc-ui'
// import type { Dayjs } from 'dayjs';
import { Dayjs } from 'dayjs';

export default defineComponent({
  components: {
    ScDatePicker,
    Space
  },
  setup () {
    // const value = ref<Dayjs>()
    const onChange = (value: Dayjs, dateString: string) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: Dayjs) => {
      console.log('onOk: ', value);
    };
    return {
      onChange,
      onOk,
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
