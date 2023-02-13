<template>
  <Space direction="vertical" :size="12">
    <div>
      <ScTimePicker
        v-model:value="value"
        format="HH:mm"
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
import dayjs from 'dayjs';

const value = ref(dayjs('12:08', 'HH:mm'));


  watch(value, () => {
    console.log(value.value);
  });

</script>
<style scoped>
/* @import ''; */
</style>