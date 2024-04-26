<template>
  <div class="mb20">
    <Radio
      v-model:checked="checked"
    >
      未选中
    </Radio>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value1" 
      :options="radioList"
      isNotChecked
      triggerMultiple
      @change="handleChange"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value2" 
      :options="radioList"
      triggerMultiple
      isNotChecked
      styleMode="btnLine"
      @change="handleChange1"
    >
    </ScRadioTooltipGroup>
  </div>
</template>

<script setup lang="ts">
import { Radio } from 'ant-design-vue'
import { ref, Ref } from 'vue'
import { ScRadioTooltipGroup } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    value: 'a'
  },
  {
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮B',
    value: 'b'
  },
  {
    toolOptions: {},
    label: '按钮C',
    value: 'c'
  }
])

const value1 = ref<string>('')
const value2 = ref<string>('')

const handleChange = (e:Event) => {
  console.log('e: ', e);
}

const handleChange1 = (e:Event) => {
  console.log('e: ', e);
}

const checked = ref<boolean>(false)
</script>
<style scoped>
.mb20 {
  margin-bottom: 20px;
}
</style>