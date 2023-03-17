<template>
  <ScRadioGroup 
    styleMode="scLine"
    v-model:value="radioValue"
    @change="handleChange"
    :class="[props.triggerMultiple ? 'triggerMultiple' : '']"
  >
    <RadioButton
      v-for="item in props.options"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
    >
      <template v-if="item.tooltipDes">
        <Tooltip 
          v-bind="item.toolOptions"
          overlayClassName="scTooltip-white"
        >
          <template #title>
            {{item.tooltipDes}}
          </template>
          <span class="triggerMultiple-item" @click="() => { handleClick(item) }">
            {{item.label}}
          </span>
        </Tooltip>
      </template>
      <template v-else>
        <span class="triggerMultiple-item" @click="() => { handleClick(item) }">
          {{item.label}}
        </span>
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
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean,
  overlayClassName?: string
}

const props = defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array<TooltipButtonProps>,
    default: () => []
  },
  triggerMultiple: {
    type: Boolean,
    default: () => {
      return false
    }
  }
})

const emits = defineEmits(['update:value', 'change', 'customChange'])

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
  const currentItem = props.options.find((item: TooltipButtonProps) => item.value === e?.target?.value)
  // @ts-ignore
  emits('customChange', e?.target?.value, currentItem)
}

const handleClick = (item: TooltipButtonProps) => {
  const isFlag = props.value === item.value
  if (props.triggerMultiple && isFlag) {
    emits('update:value', item.value)
    emits('change', item.value)
  }
}

</script>
