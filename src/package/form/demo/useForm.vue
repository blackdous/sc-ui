<template>
  <div class="mb-4">
    <ScButton @click="setProps({ labelWidth: 150 })" class="mr-8"> 更改labelWidth </ScButton>
    <ScButton @click="setProps({ labelWidth: 120 })" class="mr-8"> 还原labelWidth </ScButton>
    <ScButton @click="setProps({ size: 'large' })" class="mr-8"> 更改Size </ScButton>
    <ScButton @click="setProps({ size: 'default' })" class="mr-8"> 还原Size </ScButton>
    <ScButton @click="setProps({ disabled: true })" class="mr-8"> 禁用表单 </ScButton>
    <ScButton @click="setProps({ disabled: false })" class="mr-8"> 解除禁用 </ScButton>
    <!-- <ScButton @click="setProps({ compact: true })" class="mr-8"> 紧凑表单 </ScButton>
    <ScButton @click="setProps({ compact: false })" class="mr-8"> 还原正常间距 </ScButton> -->
    <ScButton @click="setProps({ actionColOptions: { span: 12 } })" class="mr-8">
      操作按钮位置
    </ScButton>
  </div>
  <div class="mb-4">
    <ScButton @click="setProps({ showActionButtonGroup: false })" class="mr-8">
      隐藏操作按钮
    </ScButton>
    <ScButton @click="setProps({ showActionButtonGroup: true })" class="mr-8">
      显示操作按钮
    </ScButton>
    <ScButton @click="setProps({ showResetButton: false })" class="mr-8"> 隐藏重置按钮 </ScButton>
    <ScButton @click="setProps({ showResetButton: true })" class="mr-8"> 显示重置按钮 </ScButton>
    <ScButton @click="setProps({ showSubmitButton: false })" class="mr-8">
      隐藏查询按钮
    </ScButton>
    <ScButton @click="setProps({ showSubmitButton: true })" class="mr-8"> 显示查询按钮 </ScButton>
    <ScButton
      @click="
        setProps({
          resetButtonOptions: {
            disabled: true,
            text: '重置New',
          },
        })
      "
      class="mr-8"
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
      class="mr-8"
    >
      修改查询按钮
    </ScButton>
    <ScButton @click="handleLoad" class="mr-8"> 联动回显 </ScButton>
  </div>

  <ScForm @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ScForm, ScButton, FormSchema, useForm, useMessage } from 'sc-ui';
  import { areaRecord } from './formData';
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
      field: 'fieldTime',
      component: 'RangePicker',
      label: '时间字段',
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
    {
      field: 'field8',
      component: 'ApiCascader',
      label: '联动',
      colProps: {
        span: 12,
      },
      componentProps: {
        api: areaRecord,
        apiParamKey: 'parentCode',
        dataField: 'data',
        labelField: 'name',
        valueField: 'code',
        initFetchParams: {
          parentCode: '',
        },
        isLeaf: (record:any) => {
          return !(record.levelType < 3);
        },
      },
    },
    {
      field: 'field9',
      component: 'ApiCascader',
      label: '联动回显',
      colProps: {
        span: 12,
      },
      componentProps: {
        api: areaRecord,
        apiParamKey: 'parentCode',
        dataField: 'data',
        labelField: 'name',
        valueField: 'code',
        initFetchParams: {
          parentCode: '',
        },
        isLeaf: (record:any) => {
          return !(record.levelType < 3);
        },
      },
    },
  ];

  export default defineComponent({
    components: { ScButton, ScForm },
    setup() {
      const { createCloseMessage } = useMessage();

      const [register, { setProps, setFieldsValue, updateSchema }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });

      async function handleLoad() {
        const promiseFn = function () {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                field9: ['430000', '430100', '430102'],
                province: '湖南省',
                city: '长沙市',
                district: '岳麓区',
              });
            }, 1000);
          });
        };

        const item = await promiseFn();

        const { field9, province, city, district } = item as any;
        await updateSchema({
          field: 'field9',
          componentProps: {
            displayRenderArray: [province, city, district],
          },
        });
        await setFieldsValue({
          field9,
        });
      }

      return {
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createCloseMessage({
            type: 'success',
            content: 'click search,values:' + JSON.stringify(values)
          });
        },
        setProps,
        handleLoad,
      };
    },
  });
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
  .mb-4 .scbutton {
    margin-left: 6px;
    margin-bottom: 10px;
  }
</style>
