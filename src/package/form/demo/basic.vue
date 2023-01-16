<template>
  <div>
    <ScForm @register="register" @submit="handleSubmit" />
  </div>

</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScForm, FormSchema, useForm, useMessage } from 'sc-ui';

  import { isAccountExist } from './formData';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 24,
      },
      required: true,
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 24,
      },
      required: true,
    },
    {
      field: 'id',
      label: 'id',
      required: true,
      defaultValue: 0,
      component: 'InputNumber',
      show: false,
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 24,
      },
      required: true,
    },
    {
      field: 'field33',
      component: 'DatePicker',
      label: '字段33',
      colProps: {
        span: 24,
      },
      componentProps: {
        valueFormat: 'YYYY-MM-DD',
      },
      rules: [{ required: true, type: 'string' }],
    },
    {
      field: 'field44',
      component: 'InputCountDown',
      label: '验证码',
      colProps: {
        span: 24,
      },
      required: true,
    },
    {
      field: 'field4',
      component: 'Select',
      label: '字段4',
      colProps: {
        span: 24,
      },
      componentProps: {
        mode: 'multiple',
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
      rules: [
        {
          required: true,
          message: '请输入aa',
          type: 'array',
        },
      ],
    },
    {
      field: 'field441',
      component: 'Input',
      label: '自定义校验',
      colProps: {
        span: 24,
      },
      rules: [
        {
          required: true,
          // @ts-ignore
          validator: async (rule, value) => {
            if (!value) {
              /* eslint-disable-next-line */
              return Promise.reject('值不能为空');
            }
            if (value === '1') {
              /* eslint-disable-next-line */
              return Promise.reject('值不能为1');
            }
            return Promise.resolve();
          },
          trigger: 'change',
        },
      ],
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: '字段5',
      colProps: {
        span: 24,
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
      rules: [{ required: true }],
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: '字段7',
      colProps: {
        span: 24,
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
      rules: [{ required: true, message: '覆盖默认生成的校验信息' }],
    },
    {
      field: 'field8',
      component: 'Input',
      label: '后端异步验证',
      colProps: {
        span: 24,
      },
      helpMessage: ['本字段演示异步验证', '本地规则：必须填写', '后端规则：不能包含admin'],
      rules: [
        {
          required: true,
          message: '请输入数据',
        },
        {
          validator(_, value) {
            return new Promise((resolve, reject) => {
              isAccountExist(value)
                .then(() => resolve())
                .catch((err) => {
                  reject(err || '验证失败');
                });
            });
          },
        },
      ],
    },
  ];

  export default defineComponent({
    components: { ScForm },
    setup() {
      const { createCloseMessage } = useMessage();
      const [
        register,
        { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue },
      ] = useForm({
        labelWidth: 120,
        labelAlign: 'left',
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      async function validateForm() {
        try {
          const res = await validateFields();
          console.log('passing', res);
        } catch (error) {
          console.log('not passing', error);
        }
      }
      async function resetValidate() {
        clearValidate();
      }
      function getFormValues() {
        const values = getFieldsValue();
        createCloseMessage({ type: 'success', content: 'values:' + JSON.stringify(values) });
      }
      function setFormValues() {
        setFieldsValue({
          field1: 1111,
          field5: ['1'],
          field7: '1',
          field33: '2020-12-12',
          field3: '2020-12-12',
        });
      }
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          // createMessage.success('click search,values:' + JSON.stringify(values));
          createCloseMessage({ type: 'success', content: 'click search,values:' + JSON.stringify(values) });
        },
        getFormValues,
        setFormValues,
        validateForm,
        resetValidate,
        resetFields,
      };
    },
  });
</script>
