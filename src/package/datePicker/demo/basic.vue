<template>
  <Space direction="vertical" :size="12">
    <div>
      <p>年份选择器</p>
      <ScDatePicker
        v-model:value="value4"
        picker="year"
        value-format="YYYY"
        @change="handleChange"
      >
      </ScDatePicker>
    </div> 
    <div>
      <p>月份选择器</p>
      <ScDatePicker
        v-model:value="value2"
        value-format="YYYY-MM"
        @change="handleChange"
        picker="month"
      >
      </ScDatePicker>
    </div>
    <div>
      <p>日期选择器</p>
      <ScDatePicker
        v-model:value="value"
        value-format="YYYY-MM-DD"
        @change="handleChange"
      >
      </ScDatePicker>
    </div>
    <div>
      <p>周选择器</p>
      <ScDatePicker
        v-model:value="value1"
        @change="handleChange"
        picker="week"
      >
      </ScDatePicker>
    </div>
    <div>
      <p>季度选择器</p>
      <ScDatePicker
        v-model:value="value3"
        value-format="YYYY-Q"
        @change="handleChange"
        picker="quarter"
      >
      </ScDatePicker>
    </div> 
  </Space>
</template>

<script lang='ts'>
import { ref, defineComponent, watch } from 'vue'
import { Space } from 'ant-design-vue';
import { ScDatePicker } from 'sc-ui'
import type { Dayjs } from 'dayjs';

export default defineComponent({
  components: {
    ScDatePicker,
    Space
  },
  setup () {
    const value = ref<Dayjs>()
    console.log('value: ', value.value);
    const value1 = ref<Dayjs>()
    const value2 = ref<Dayjs>()
    const value3 = ref<Dayjs>()
    const value4 = ref<Dayjs>()

    const handleChange = (val:any) => {
      console.log('val: ', val);
    }

    watch([() => value1.value, () => value2.value, () => value3.value, () => value4], ([val1, val2, val3, val4]) => {
      console.log('val1, val2, val3, val4: ', val1, val2, val3, val4);
    })

    // console.log('value4: ', value4.value);
    return {
      value,
      value1,
      value2,
      value3,
      value4,
      handleChange
    }
  }
})

</script>

<style scoped>
  div p {
    padding: 10px 0;
  }
</style>
