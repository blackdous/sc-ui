<template>
  <div class="basicFrom">
    <ScForm 
      @register="register"
      @submit="handleSubmit" 
    />
  </div>

</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { ScForm, FormSchema, useForm, useMessage } from 'sc-ui';

  interface ListItem {
    label: string, 
    value: number, 
    key: string
  }
  const list = ref<Array<ListItem>>([])
  for (let i = 0;i < 10;  i++) {
    list.value = [...unref(list), {
      label: 'Jack' + i,
      value: i,
      key: 'Jack' + i
    }]
  }

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '输入框',
      colProps: {
        span: 24,
      },
      required: true,
    },
    {
      field: 'field2',
      label: '单选选择容器',
      colProps: {
        span: 24,
      },
      required: true,
      helpMessage: ['单选选择容器'],
      component: 'Select',
      componentProps: {
        options: unref(list)
      }
    },
    {
      field: 'field3',
      component: 'Select',
      label: '多选选择器',
      colProps: {
        span: 24,
      },
      componentProps: {
        mode: 'tags',
        optionMode:"checkbox",
        options: unref(list),
      },
      required: true,
    },
    {
      field: 'field4',
      component: 'RadioGroup',
      label: '单选框',
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
      rules: [{ message: '覆盖默认生成的校验信息' }],
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: '多选框',
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
          {
            label: '选项3',
            value: '3',
          }
        ],
      },
      rules: [{ required: true }],
    },
    {
      field: 'field6',
      label: '单选按钮组',
      component: 'RadioButtonGroup',
      colProps: {
        span: 24
      },
      componentProps: {
        options: [{
          label: 'label1',
          value: '1'
        }, {
          label: 'label2',
          value: '2',
          disabled: true
        }, {
          label: 'label3',
          value: '3'
        }]
      },
      rules: [{ required: true }]
    },
    {
      field: 'field7',
      label: '滑动条',
      component: 'Slider',
      colProps: {
        span: 24
      },
      componentProps: {
        wrapperWidth: '100%'
      },
      required: true,
    },
    {
      field: 'field8',
      label: '开关',
      component: 'Switch',
      colProps: {
        span: 24
      },
      componentProps: {},
      required: true
    },
    {
      field: 'field9',
      label: '多行文本',
      component: 'InputTextArea',
      colProps: {
        span: 24
      },
      componentProps: {

      }
    },


    // {
    //   field: 'field6',
    //   component: '',
    //   label: '多选框',
    //   colProps: {
    //     span: 24,
    //   },
    //   componentProps: {
    //     options: [
    //       {
    //         label: '选项1',
    //         value: '1',
    //       },
    //       {
    //         label: '选项2',
    //         value: '2',
    //       },
    //       {
    //         label: '选项3',
    //         value: '3',
    //       }
    //     ],
    //   },
    //   rules: [{ required: true }],
    // },
    // {
    //   field: 'field441',
    //   component: 'Input',
    //   label: '自定义校验',
    //   colProps: {
    //     span: 24,
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       // @ts-ignore
    //       validator: async (rule, value) => {
    //         if (!value) {
    //           /* eslint-disable-next-line */
    //           return Promise.reject('值不能为空');
    //         }
    //         if (value === '1') {
    //           /* eslint-disable-next-line */
    //           return Promise.reject('值不能为1');
    //         }
    //         return Promise.resolve();
    //       },
    //       trigger: 'change',
    //     },
    //   ],
    // },
    // {
    //   field: 'field8',
    //   component: 'Input',
    //   label: '后端异步验证',
    //   colProps: {
    //     span: 24,
    //   },
    //   helpMessage: ['本字段演示异步验证', '本地规则：必须填写', '后端规则：不能包含admin'],
    //   rules: [
    //     {
    //       required: true,
    //       message: '请输入数据',
    //     },
    //     {
    //       validator(_, value) {
    //         return new Promise((resolve, reject) => {
    //           isAccountExist(value)
    //             .then(() => resolve())
    //             .catch((err) => {
    //               reject(err || '验证失败');
    //             });
    //         });
    //       },
    //     },
    //   ],
    // },
  ];

  export default defineComponent({
    components: { ScForm },
    setup() {
      const { createCloseMessage } = useMessage();
      const [
        register,
        { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue },
      ] = useForm({
        labelWidth: 130,
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
          // field7: '1',
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
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.basicFrom .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 530px;
}
</style>
