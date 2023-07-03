<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>日期区间选择器 -- 年</p>
      <ScRangePicker
        v-model:value="dateReactive.year"
        picker="year"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
    <div>
      <p>日期区间选择器 -- 月</p>
      <ScRangePicker
        v-model:value="dateReactive.month"
        picker="month"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
    <div>
      <p>日期区间选择器 -- 日</p>
      <ScRangePicker
        v-model:value="dateReactive.date"
        picker="year"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
    <div>
      <p>日期区间选择器 -- 周</p>
      <ScRangePicker
        v-model:value="dateReactive.week"
        picker="week"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
    <div>
      <p>日期区间选择器 -- 季度</p>
      <ScRangePicker
        v-model:value="dateReactive.quarter"
        picker="quarter"
        @change="onChange"
      >
      </ScRangePicker>
    </div>
  </Space>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import { Space } from 'ant-design-vue';
import { ScRangePicker } from 'sc-ui'
// import type { Dayjs } from 'dayjs';
import { Dayjs } from 'dayjs';
import moment from 'moment';

export default defineComponent({
  components: {
    ScRangePicker,
    Space
  },
  setup () {
    // const value = ref<Dayjs>()
    const dateReactive = reactive({
      date: [],
      year: [],
      month: [],
      week: [],
      quarter: []
    })
    const onChange = (value: Dayjs, dateString: string) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };

    const onDisabledDate = (current:any) => {
      return moment(current).year() < 2021
    }

    return {
      dateReactive,
      onDisabledDate,
      onChange,
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
