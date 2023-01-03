<template>
  <div class="mt20">
    <ScCascader
      v-model:value="value"
      :options="options"
      @change="handleChange"
    >
      
    </ScCascader>
  </div>
  <div class="mt20">
    <ScCascader
      v-model:value="value"
      disabled
    >
    </ScCascader>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
// import { SelectOption } from 'ant-design-vue'
import { ScCascader } from 'sc-ui'
import '../../../style/index.less'

const value = ref([])

const handleChange = (val:string) => {
  console.log('val: ', val);
}
interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    disabled: true,
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
