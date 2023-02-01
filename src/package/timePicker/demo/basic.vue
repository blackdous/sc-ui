<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTimePicker
        v-model:value="value"
      >
  
      </ScTimePicker>
    </div>
    <div>
      <ScTimePicker
        v-model:value="strValue"
        value-format="HH:mm:ss"
      >
  
      </ScTimePicker>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue';
import { ScTimePicker } from 'sc-ui';
import { Space } from 'ant-design-vue';
import dayjs, { Dayjs } from 'dayjs';

const value = ref<Dayjs>(dayjs('08:00:00', 'HH:mm:ss'));
const strValue = ref<string>('09:00:00');


  watch(value, () => {
    console.log(value.value);
  });
  watch(strValue, () => {
    console.log(strValue.value);
  });

</script>

<style lang="less" scoped>

</style>
