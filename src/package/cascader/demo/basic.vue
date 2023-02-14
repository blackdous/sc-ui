<template>
  <div class="mt20">
    <ScCascader
      popupClassName="spsCa"
      v-model:value="value"
      :defaultValue="['jiangsu', 'nanjing', 'zhonghuamen']"
      :options="options"
      @change="handleChange"
    >
      
    </ScCascader>
  </div>
  <div class="mt20">
    <ScCascader
      popupClassName="spsCa"
      v-model:value="value"
      disabled
    >
    </ScCascader>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScCascader } from 'sc-ui'

const value = ref()

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
  {
    value: 'xianggang',
    label: 'xianggang',
  }
];

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
