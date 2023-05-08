<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTimePicker
        format="HH:mm"
        v-model:value="value"
        :disabledHours="disabledHours"
        :disabledMinutes="disabledMinutes"
        :disabledSeconds="disabledSeconds"
      >
  
      </ScTimePicker>
    </div>
    <!-- <div>

      <TimePicker
        v-model:value="value1"
        :disabledHours="disabledHours"
        :disabledMinutes="disabledMinutes"
        :disabledSeconds="disabledSeconds"
      ></TimePicker>
    </div> -->
  </Space>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue';
import { ScTimePicker } from 'sc-ui';
import { Space, TimePicker } from 'ant-design-vue';
import dayjs, { Dayjs } from 'dayjs';

const value = ref<Dayjs>(dayjs('08:33:34', 'HH:mm:ss'));
const value1 = ref<Dayjs>(dayjs('08:33:34', 'HH:mm:ss'));
const strValue = ref<string>('11:33:12');

const range = (start: number, end: number) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};
// const disabledRangeTime = (_: Dayjs) => {
//   return {
//     disabledHours: () => range(0, 60).splice(20, 4),
//     disabledMinutes: () => range(0, 31),
//     disabledSeconds: () => [55, 56],
//   };
// };
const disabledHours = () => range(0, 60).splice(0, 4)
// const disabledMinutes = () => range(0, 31)
const disabledSeconds = () => [55, 56]
const disabledMinutes = () => {
  // console.log('selectedHour: ', selectedHour);
  return range(0, 31)
}


watch(value, () => {
  console.log(value.value);
});
watch(strValue, () => {
  console.log(strValue.value);
});

</script>

<style scoped>
/* @import 'comment'; */
</style>