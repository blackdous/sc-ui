<template>
  <ScRadioGroup 
    styleMode="scLine"
    v-model:value="radioValue"
    @change="handleChange"
  >
    <RadioButton
      v-for="item in props.radioList"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
    >
      <template v-if="item.tooltipDis">
        <Tooltip v-bind="item.toolOptions">
          <template #title>
            {{item.tooltipDes}}
          </template>
          {{item.label}}
        </Tooltip>
      </template>
      <template v-else>
        {{item.label}}
      </template>
    </RadioButton>
  </ScRadioGroup>
</template>

<script lang="ts">
export default {
  name: 'ScRadioTooltipGroup',
  inheritAttrs: false
}
</script>
<script lang='ts' setup name="ScRadioTooltipGroup">
import { ref, defineProps, defineEmits, watch } from 'vue'
import type { Ref } from 'vue'
import { RadioButton, Tooltip } from 'ant-design-vue'
import type { TooltipProps } from 'ant-design-vue'

import ScRadioGroup from './ScRadioGroup.vue'

export interface TooltipButtonProps {
  tooltipDis?: boolean,
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean
}

const props = defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  radioList: {
    type: Array<TooltipButtonProps>,
    default: () => []
  }
})

const emits = defineEmits(['update:value', 'change'])

const radioValue:Ref<string | number> = ref('')

watch(
  () => props.value,
  (val) => {
    radioValue.value = val
    emits('update:value', val)
  },
  { immediate: true }
)

watch(
  () => radioValue.value,
  (val) => {
    emits('update:value', val)
    emits('change', val)
  }
)

const handleChange = (e: Event) => {
  // @ts-ignore
  const currentItem = props.radioList.find((item: TooltipButtonProps) => item.value === e?.target?.value)
  // @ts-ignore
  emits('change', e?.target?.value, currentItem)
}

</script>
