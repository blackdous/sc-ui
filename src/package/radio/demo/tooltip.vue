<template>
  <div>
    <ScRadioTooltipGroup v-model:value="value1" :radioList="radioList">
    </ScRadioTooltipGroup>
  </div>
</template>

<script setup lang="ts">
// import { RadioButton } from 'ant-design-vue'
import { ScRadioTooltipGroup } from 'sc-ui'
import type { TooltipButtonPropsType } from 'sc-ui'
import { ref } from 'vue'
import type { Ref } from 'vue'
import "ant-design-vue/dist/antd.css"

const value1 = ref<string>('a')

const radioList:Ref<Array<TooltipButtonPropsType>> = ref([
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮A',
    value: 'a'
  },
  {
    tooltipDis: false,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮B',
    value: 'b'
  },
  {
    tooltipDis: true,
    toolOptions: {},
    tooltipDes: "测试tooltip",
    label: '按钮C',
    value: 'c'
  }
])

</script>

<style lang="less">
</style>