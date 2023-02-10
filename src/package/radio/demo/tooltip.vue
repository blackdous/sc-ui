<template>
  <div>
    <ScRadioTooltipGroup v-model:value="value1" :options="radioList">
    </ScRadioTooltipGroup>
  </div>
</template>

<script setup lang="ts">
import { ScRadioTooltipGroup } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'
import { ref } from 'vue'
import type { Ref } from 'vue'

const value1 = ref<string>('a')

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
    tooltipDes: "测试tooltip",
    label: '按钮C',
    value: 'c'
  }
])

</script>
