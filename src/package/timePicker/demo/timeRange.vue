<template>
  <button @click="handleClick">提交</button>
  <div>
    <Form
      ref="formRef"
      :model="formState"
    >
      <FormItem 
        label="Time Range"
        name="dateRangeTime"
      >
        <ScTimeRangePicker
          v-model:value="formState.dateRangeTime"
          valueFormat="HH:mm"
          format="HH:mm"
        />
      </FormItem>
    </Form>
  </div>
  <ScTimePicker
    defaultValue="00:00"
    v-model:value="formState.dateRangeTime1"
    valueFormat="HH:mm"
    format="HH:mm"
  />
</template>

<script lang='ts' setup>
import { ref, watch, reactive } from 'vue'
import { ScTimePicker, ScTimeRangePicker } from 'sc-ui';
import { Form, FormItem } from 'ant-design-vue';
// import dayjs, { Dayjs } from 'dayjs';

// const value = ref<Dayjs[]>([]);

const formRef = ref()

const formState = reactive({
  dateRangeTime: [],
  dateRangeTime1: undefined
})

watch(formState, () => {
  console.log(formState);
});

const handleClick = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('formState.value : ', formState)
    })
    .catch((error) => {
      console.log('error', formState)
    })
}

</script>
<style scoped>
/* @import 'comment'; */
</style>