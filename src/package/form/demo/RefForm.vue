<template>
  <div class="mb-4">
    <ScButton @click="setProps({ labelWidth: 150 })" class="mr-12"> 更改labelWidth </ScButton>
    <ScButton @click="setProps({ labelWidth: 120 })" class="mr-12"> 还原labelWidth </ScButton>
    <ScButton @click="setProps({ size: 'large' })" class="mr-12"> 更改Size </ScButton>
    <ScButton @click="setProps({ size: 'default' })" class="mr-12"> 还原Size </ScButton>
    <ScButton @click="setProps({ disabled: true })" class="mr-12"> 禁用表单 </ScButton>
    <ScButton @click="setProps({ disabled: false })" class="mr-12"> 解除禁用 </ScButton>
    <!-- <ScButton @click="setProps({ compact: true })" class="mr-12"> 紧凑表单 </ScButton>
    <ScButton @click="setProps({ compact: false })" class="mr-12"> 还原正常间距 </ScButton> -->
    <ScButton @click="setProps({ actionColOptions: { span: 12 } })" class="mr-12">
      操作按钮位置
    </ScButton>
  </div>
  <div class="mb-4">
    <ScButton @click="setProps({ showActionButtonGroup: false })" class="mr-12">
      隐藏操作按钮
    </ScButton>
    <ScButton @click="setProps({ showActionButtonGroup: true })" class="mr-12">
      显示操作按钮
    </ScButton>
    <ScButton @click="setProps({ showResetButton: false })" class="mr-12"> 隐藏重置按钮 </ScButton>
    <ScButton @click="setProps({ showResetButton: true })" class="mr-12"> 显示重置按钮 </ScButton>
    <ScButton @click="setProps({ showSubmitButton: false })" class="mr-12">
      隐藏查询按钮
    </ScButton>
    <ScButton @click="setProps({ showSubmitButton: true })" class="mr-12"> 显示查询按钮 </ScButton>
    <ScButton
      @click="
        setProps({
          resetButtonOptions: {
            disabled: true,
            text: '重置New',
          },
        })
      "
      class="mr-12"
    >
      修改重置按钮
    </ScButton>
    <ScButton
      @click="
        setProps({
          submitButtonOptions: {
            disabled: true,
            loading: true,
          },
        })
      "
      class="mr-12"
    >
      修改查询按钮
    </ScButton>
  </div>

  <ScForm
    :schemas="schemas"
    ref="formElRef"
    :labelWidth="100"
    @submit="handleSubmit"
    :actionColOptions="{ span: 24 }"
  />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ScForm, ScButton, FormSchema, FormActionType, FormProps, useMessage } from 'sc-ui';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: '字段4',
      colProps: {
        span: 12,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
            key: '1',
          },
          {
            label: '选项2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: '字段5',
      colProps: {
        span: 12,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: '字段7',
      colProps: {
        span: 12,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
  ];

  export default defineComponent({
    components: { ScForm, ScButton },
    setup() {
      const formElRef = ref<Nullable<FormActionType>>(null);
      const { createCloseMessage } = useMessage();
      return {
        formElRef,
        schemas,
        handleSubmit: (values: any) => {
          createCloseMessage({
            type: 'success',
            content: 'click search,values:' + JSON.stringify(values)
          });
        },
        setProps(props: FormProps) {
          const formEl = formElRef.value;
          if (!formEl) return;
          formEl.setProps(props);
        },
      };
    },
});
</script>
<style scoped>
@import '';
</style>
<style scoped>
  .mb-4 .scbutton {
    margin-left: 6px;
    margin-bottom: 10px;
  }
</style>

