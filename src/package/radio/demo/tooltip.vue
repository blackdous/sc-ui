<template>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value1" 
      :options="radioList"
      triggerMultiple
      radioType="Radio"
      @change="handleChange"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value1" 
      :options="radioList"
      triggerMultiple
      @change="handleChange"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value1" 
      :options="radioList"
      styleMode="btnLine"
      triggerMultiple
      @change="handleChange"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      v-model:value="value2" 
      :options="radioList"
      @change="handleChange1"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
    widthSize="large"
      v-model:value="value2" 
      :options="radioList"
      @change="handleChange1"
    >
    </ScRadioTooltipGroup>
  </div>
  <div class="mb20">
    <ScRadioTooltipGroup 
      class="radio-min-width142"
      v-model:value="value2" 
      :options="radioList"
      @change="handleChange1"
    >
    </ScRadioTooltipGroup>
  </div>
</template>

<script setup lang="ts">
import { ScRadioTooltipGroup } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'
import { ref } from 'vue'
import type { Ref } from 'vue'

const value1 = ref<string>('a')
const value2 = ref<string>('a')

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

const handleChange = (val:any) => {
  console.log('val: triggerMultiple', val);
}

const handleChange1 = (val:any) => {
  console.log('val: ', val);
}

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mb20 {
  margin-bottom: 20px;
}
</style>