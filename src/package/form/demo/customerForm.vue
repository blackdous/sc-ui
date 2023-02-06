<template>
  <ScForm @register="register" @submit="handleSubmit">
    <template #f3="{ model, field }">
      <a-input v-model:value="model[field]" placeholder="自定义slot" />
    </template>
  </ScForm>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { ScForm, FormSchema, useForm, useMessage } from 'sc-ui';

  import { Input } from 'ant-design-vue';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: 'render方式',
      colProps: {
        span: 12,
      },
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Input, {
          placeholder: '请输入',
          value: model[field],
          onChange: (e: ChangeEvent) => {
            model[field] = e.target.value;
          },
        });
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'render组件slot',
      colProps: {
        span: 12,
      },
      rules: [{ required: true }],
      renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
    {
      field: 'field3',
      component: 'Input',
      label: '自定义Slot',
      slot: 'f3',
      colProps: {
        span: 12,
      },
      rules: [{ required: true }],
    },
  ];
  export default defineComponent({
    components: { ScForm, [Input.name]: Input },
    setup() {
      const { createCloseMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createCloseMessage({type: 'success', content: 'click search,values:' + JSON.stringify(values)});
        },
        setProps,
      };
    },
  });
</script>
