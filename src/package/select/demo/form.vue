<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
  >
    <FormItem
      label="select1" name="select1"
    >
      <Select
        v-model:value="formState.select1"
      >
        <SelectOption
          v-for="item in list"
          ::key="item.label"
          :value="item.value"
        >
          {{item.label}}
        </SelectOption>
      </Select>
    </FormItem>
    <FormItem
      label="select2" name="select2"
    >
      <ScSelect
        v-model:value="formState.select2"
        mode="tags"
        :options="list"
        optionMode="checkbox"
      >
      </ScSelect>
    </FormItem>
    <FormItem
      :wrapper-col="{ span: 14, offset: 4 }"
    >
      <ScButton type="primary" @click="submitForm">Submit</ScButton>
      <ScButton style="margin-left: 10px" @click="resetForm">Submit</ScButton>
    </FormItem>
  </Form>
</template>

<script lang='ts' setup>
import { ref, reactive, UnwrapRef, unref } from 'vue'
import { Form, Select, SelectOption, FormItem } from 'ant-design-vue'
import { ScSelect, ScButton } from 'sc-ui';

interface FormState {
  select1: string;
  select2: string | [] | undefined;
}

const formRef = ref();
const formState: UnwrapRef<FormState> = reactive({
  select1: '',
  select2: []
});

interface ListItem {
  label: string, 
  value: number, 
  key: string
}

const list = ref<Array<ListItem>>([])

const list1 = ref<Array<ListItem>>([])
  const aa = ref<Array<ListItem>>([])

for (let i = 1;i < 30;  i++) {
  list.value = [...unref(list), {
    label: 'Jack' + i,
    value: i,
    key: 'Jack' + i
  }]
}

setTimeout(() => {
  for (let i = 1;i < 30;  i++) {
    aa.value = [...unref(list), {
      label: 'Jack' + i,
      value: i,
      key: 'Jack' + i
    }]
  }
  list1.value = aa.value
}, 150)

const rules = {
  select1: {
    required: true,
    trigger: ['change', 'blur'],
    validator: (rule, value) => {
      if (!value) {
        return Promise.reject('请选择select1')
      }
      return Promise.resolve()
    }
  },
  select2: {
    required: true,
    trigger: ['change', 'blur'],
    validator: (rule, value) => {
      if (value.length === 0) {
        return Promise.reject('请选择select2')
      }
      return Promise.resolve()
    }
  },

}

const submitForm = () => {
  console.log(formRef.value)
  formRef.value?.validate()
}

const resetForm = () => {
  console.log(formRef.value)
  formRef.value?.resetFields()
}

</script>
