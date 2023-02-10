<template>
  <div class="mb-4">
    <ScButton @click="changeLabel3" class="mr-8"> 更改字段3label </ScButton>
    <ScButton @click="changeLabel34" class="mr-8"> 同时更改字段3,4label </ScButton>
    <ScButton @click="appendField" class="mr-8"> 往字段3后面插入字段10 </ScButton>
    <ScButton @click="deleteField" class="mr-8"> 删除字段11 </ScButton>
  </div>
  <p class="title-demo"> 动态表单示例,动态根据表单内其他值改变 </p>
  <ScForm @register="register" />
  <p class="mt-8 title-demo"> componentProps动态改变 </p>
  <ScForm @register="register1" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScForm, FormSchema, useForm, ScButton } from 'sc-ui';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 12,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 12,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 12,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: '字段4',
      colProps: {
        span: 12,
      },
      dynamicRules: ({ values }) => {
        return values.field8 ? [{ required: true, message: '字段4必填' }] : [];
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
      field: 'field11',
      component: 'DatePicker',
      label: '字段11',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field5',
      component: 'Switch',
      label: '是否显示字段1(css控制)',
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
    },
    {
      field: 'field6',
      component: 'Switch',
      label: '是否显示字段2(dom控制)',
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
    },
    {
      field: 'field7',
      component: 'Switch',
      label: '是否禁用字段3',
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
    },
    {
      field: 'field8',
      component: 'Switch',
      label: '字段4是否必填',
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'f1',
      component: 'Input',
      label: 'F1',
      required: true,
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
      componentProps: ({ formModel }) => {
        return {
          placeholder: '同步f2的值为f1',
          onChange: (e: ChangeEvent) => {
            formModel.f2 = e.target.value;
          },
        };
      },
    },
    {
      field: 'f2',
      component: 'Input',
      label: 'F2',
      required: true,
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      required: true,
      colProps: {
        span: 12,
      },
      // labelWidth: 200,
      // @ts-ignore
      componentProps: ({ formActionType }) => {
        return {
          placeholder: '值改变时执行查询,查看控制台',
          onChange: async () => {
            const { validate } = formActionType;
            // tableAction只适用于在表格内开启表单的例子
            // const { reload } = tableAction;
            const res = await validate();
            console.log(res);
          },
        };
      },
    },
  ];

  export default defineComponent({
    components: { ScForm, ScButton },
    setup() {
      const [register, { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled }] =
        useForm({
          labelWidth: 200,
          schemas,
          actionColOptions: {
            span: 24,
          },
        });
      const [register1] = useForm({
        labelWidth: 100,
        schemas: schemas1,
        actionColOptions: {
          span: 24,
        },
      });
      function changeLabel3() {
        updateSchema({
          field: 'field3',
          label: '字段3 New',
        });
      }
      function changeLabel34() {
        updateSchema([
          {
            field: 'field3',
            label: '字段3 New++',
          },
          {
            field: 'field4',
            label: '字段4 New++',
          },
        ]);
      }

      function appendField() {
        appendSchemaByField(
          {
            field: 'field10',
            label: '字段10',
            component: 'Input',
            colProps: {
              span: 12,
            },
          },
          'field3',
        );
      }
      function deleteField() {
        removeSchemaByFiled('field11');
      }
      return {
        register,
        register1,
        schemas,
        setProps,
        changeLabel3,
        changeLabel34,
        appendField,
        deleteField,
      };
    },
  });
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
.mb-4 > .scbutton {
    margin-right: 8px;
  }
.mt-8 {
  margin-top: 24px;
}

.title-demo {
  font-weight: bold;
  font-size: 18px;
  padding: 0 0 10px;
}

</style>