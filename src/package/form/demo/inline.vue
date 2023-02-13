<template>
  <div class="basicFrom">
    <ScForm 
      layout="inline"
      @register="register"
      @submit="handleSubmit"
      :showActionButtonGroup="false"
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
        span: 8,
      },
      // required: true,
    },
    {
      field: 'field2',
      label: '输入框',
      colProps: {
        span: 8,
      },
      // required: true,
      // helpMessage: ['单选选择容器'],
      component: 'Input',
      componentProps: {
        options: unref(list)
      }
    },
    {
      field: 'field3',
      component: 'Select',
      label: '选择器',
      colProps: {
        span: 8,
      },
      componentProps: {
        // mode: 'tags',
        // optionMode:"checkbox",
        // options: unref(list),
      },
      // required: true,
    },
    {
      field: 'field4',
      component: 'Input',
      label: '输入框',
      colProps: {
        span: 8,
      },
      // required: true,
    },
    {
      field: 'field5',
      label: '输入框',
      colProps: {
        span: 8,
      },
      // required: true,
      // helpMessage: ['单选选择容器'],
      component: 'Input',
      componentProps: {
        options: unref(list)
      }
    },
    {
      field: 'field6',
      component: 'Select',
      label: '选择器',
      colProps: {
        span: 8,
      },
      componentProps: {
        // mode: 'tags',
        // optionMode:"checkbox",
        // options: unref(list),
      },
      // required: true,
    }
  ];

  export default defineComponent({
    components: { ScForm },
    setup() {
      const { createCloseMessage } = useMessage();
      const [
        register,
        { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue },
      ] = useForm({
        labelWidth: 60,
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
.basicFrom .ant-form:not(.ant-form-inline) {
  max-width: 400px;
}
</style>
