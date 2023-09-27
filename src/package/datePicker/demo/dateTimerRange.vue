<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>日期区间选择器</p>
      <!-- v-model:value="value" -->
      <ScRangePicker
        v-model:value="value"
        show-time
        format="YYYY-MM-DD HH:mm"
        @change="onChange"
        immediateCalendarChangeDateRangePicker
        @calendarChange="onCalendarChange"
        @ok="onOk"
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

    const onOk = (value: Dayjs) => {
      console.log('onOk: ', value);
    };

    const onCalendarChange = (data:any) => {
      console.log('data: onCalendarChange', data);
    }

    return {
      value,
      onChange,
      onOk,
      onCalendarChange
    }
  }
})

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
  div p {
    padding: 10px 0;
  }
</style>
