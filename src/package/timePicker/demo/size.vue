<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTimePicker
        v-model:value="value"
        size="large"
      >
      </ScTimePicker>
    </div>
    <div>
      <ScTimePicker
        v-model:value="value1"
      >
      </ScTimePicker>
    </div>
    <div>
      <ScTimePicker
        v-model:value="value2"
        size="small"
      >
      </ScTimePicker>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { ScTimePicker } from 'sc-ui';
import { Space } from 'ant-design-vue';
import dayjs from 'dayjs';

const value = ref(dayjs('12:08:23', 'HH:mm'));
const value1 = ref(dayjs('12:08:23', 'HH:mm'));
const value2 = ref(dayjs('12:08:23', 'HH:mm'));

</script>
<style scoped>
/* @import 'comment'; */
</style>