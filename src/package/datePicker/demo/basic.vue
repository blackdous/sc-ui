<template>
  <Space direction="vertical">
    <ConfigProvider
      :locale="zh_CN"
    >
      <!-- <ScDatePicker
        v-model:value="value1"
        format="YYYY-MM-DD HH:mm:ss"
        :disabled-date="disabledDate"
        :disabled-time="disabledDateTime"
        :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
      /> -->
      <!-- <ScDatePicker v-model:value="value2" :disabled-date="disabledDate" picker="month" /> -->
      <ScRangePicker v-model:value="value3" :disabled-date="disabledDate" />
      <ScRangePicker
        v-model:value="value4"
        style="width: 400px"
        :disabled-date="disabledDate"
        :disabled-time="disabledRangeTime"
        :show-time="{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
        }"
        format="YYYY-MM-DD HH:mm:ss"
      />
    </ConfigProvider>
  </Space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref, watch } from 'vue';
import { Space, ConfigProvider } from 'ant-design-vue';
import { ScDatePicker, ScRangePicker } from 'sc-ui';
// import zh_CN from 'ant-design-vue/es/locale/zh_CN.js'
// console.log('zhCN: ', zh_CN);

export default defineComponent({
  components: {
    Space,
    ScDatePicker,
    ScRangePicker,
    ConfigProvider
  },
  setup() {
    const range = (start: number, end: number) => {
      const result = [];

      for (let i = start; i < end; i++) {
        result.push(i);
      }

      return result;
    };

    const disabledDate = (current: Dayjs) => {
      // Can not select days before today and today
      return current && current < dayjs().endOf('day');
    };

    const value1 = ref<Dayjs>();
    const value2 = ref<Dayjs>();
    const value3 = ref<[Dayjs, Dayjs]>();
    const value4 = ref<[Dayjs, Dayjs]>();

    watch(() => value3.value, (val) => {
      console.log('val: ', val);

    })

    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    };

    const disabledRangeTime = (_: Dayjs, type: 'start' | 'end') => {
      if (type === 'start') {
        return {
          disabledHours: () => range(0, 60).splice(4, 20),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    };

    return {
      dayjs,
      value1,
      value2,
      value3,
      value4,
      disabledDate,
      disabledDateTime,
      disabledRangeTime,
      zh_CN
    };
  },
});
</script>

