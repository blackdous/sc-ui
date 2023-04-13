<template>
  <div class="basicFrom">
    <div>
      <ScButton @click="updateRules">更新rules</ScButton>
    </div>
    <ScForm 
      @register="register"
      @submit="handleSubmit" 
    />
  </div>

</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { ScForm, FormSchema, useForm, useMessage, ScButton } from 'sc-ui';

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
      componentProps: {
        describe: '额外提示语，文字过多时输入框宽度折行'
      },
      className: 'mrb0',
      rules: [
        { required: true, message: '请输入', trigger: 'change' },
        // { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
      ],
      // required: true,
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
        class: 'scSe'
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
        wrapperWidth: '100%',
        dotCircle: true
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
    }
  ];

  export default defineComponent({
    components: { ScForm, ScButton },
    setup() {
      const { createCloseMessage } = useMessage();
      const [
        register,
        { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue, updateSchema },
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
      function updateRules () {
        updateSchema({ field: 'field1', rules: [
        { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ] });
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
        updateRules
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
