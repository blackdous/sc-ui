<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTimePicker
        v-model:value="value"
        use12-hours
      >
      </ScTimePicker>
    </div>
  </Space>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue';
import { ScTimePicker } from 'sc-ui';
import { Space } from 'ant-design-vue';
import { Dayjs } from 'dayjs';

const value = ref<Dayjs>();


  watch(value, () => {
    console.log(value.value);
  });

</script>
