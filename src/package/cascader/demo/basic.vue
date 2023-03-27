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
      class="test111"
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
          {
            value: 'xihu1',
            label: 'West Lake1',
          },
          {
            value: 'xihu2',
            label: 'West Lake2',
          },
          {
            value: 'xihu3',
            label: 'West Lake3',
          },
          {
            value: 'xihu4',
            label: 'West Lake4',
          },
          {
            value: 'xihu5',
            label: 'West Lake5',
          },
          {
            value: 'xihu6',
            label: 'West Lake6',
          },
          {
            value: 'xihu7',
            label: 'West Lake7',
          },
          {
            value: 'xihu8',
            label: 'West Lake8',
          },
          {
            value: 'xihu9',
            label: 'West Lake9',
          },
          {
            value: 'xihu10',
            label: 'West Lake10',
          },
          {
            value: 'xihu11',
            label: 'West Lake11',
          },
          {
            value: 'xihu12',
            label: 'West Lake12',
          },
          {
            value: 'xihu13',
            label: 'West Lake13',
          },
          {
            value: 'xihu14',
            label: 'West Lake14',
          },
          {
            value: 'xihu15',
            label: 'West Lake15',
          },
          {
            value: 'xihu16',
            label: 'West Lake16',
          },
          {
            value: 'xihu17',
            label: 'West Lake17',
          },
          {
            value: 'xihu18',
            label: 'West Lake18',
          },
          {
            value: 'xihu19',
            label: 'West Lake19',
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
