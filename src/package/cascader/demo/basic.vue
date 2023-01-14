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
    <Cascader
      popupClassName="spsCa"
      v-model:value="value"
      :defaultValue="['jiangsu', 'nanjing', 'zhonghuamen']"
      :options="options"
      @change="handleChange"
    >
      
    </Cascader>
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
// import { SelectOption } from 'ant-design-vue'
import { ScCascader } from 'sc-ui'
import { Cascader } from 'ant-design-vue'
import '../../../style/index.less'

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

<style scoped lang="less">
.mt20 {
  margin-top: 20px;
}
</style>
