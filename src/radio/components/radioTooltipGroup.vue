<template>
  <ScRadioGroup 
    styleMode="scLine"
    v-model:value="radioValue"
    v-bind="{...props, ...$attrs}"
  >
    <RadioButton
    >
    </RadioButton>
  </ScRadioGroup>
</template>

<script lang="ts">
export default {
  name: 'ScRadioTooltipGroup',
  inheritAttrs: false
}
</script>
<script lang='ts' setup>
import { ref, defineProps, defineEmits } from 'vue'
import { RadioButton } from 'ant-design-vue'
import type { TooltipProps } from 'ant-design-vue'

import ScRadioGroup from './radioGroup.vue'

export interface TooltipButtonProps {
  tooltipDis?: boolean,
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string
}

// export interface RadioTooltipGroup {
//   radioList?: TooltipButton[]
// } 

const props = defineProps({
  radioList: {
    type: Array<TooltipButtonProps>,
    default: () => []
  }
})
console.log('props: ', props);
const radioValue = ref('')
</script>
