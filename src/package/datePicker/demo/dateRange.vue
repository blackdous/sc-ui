<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>日期区间选择器</p>
      <!-- @change="handleChange" -->
      <ScRangePicker
        v-model:value="dateReactive.date"
        value-format="YYYY-MM-DD"
        format="YYYY-MM-DD"
        :disabledDate="onDisabledDate"
        allow-clear
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
      date: []
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
