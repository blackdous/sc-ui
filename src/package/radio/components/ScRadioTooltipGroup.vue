<template>
  <ScRadioGroup 
    styleMode="scLine"
    v-bind="$attrs"
    v-model:value="radioValue"
    @change="handleChange"
    :class="[$attrs.class, props.isNotChecked ? 'isNotChecked' : '', props.styleMode, 'is' + props.radioType,  props.triggerMultiple ? 'triggerMultiple' : '', props.widthSize === 'large' ? 'radio-min-width142' : undefined]"
  >
    <template v-if="props.radioType === 'RadioButton'">
      <RadioButton
        v-for="item in props.options"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        @click="() => { handleClick(item) }"
      >
        <template v-if="item.tooltipDes">
          <Tooltip 
            v-bind="item.toolOptions"
            overlayClassName="scTooltip-white"
            :overlayStyle="{}"
            destroyTooltipOnHide
          >
            <template #title>
              {{item.tooltipDes}}
            </template>
            <span class="triggerMultiple-item">
              {{item.label}}
            </span>
          </Tooltip>
        </template>
        <template v-else>
          <span class="triggerMultiple-item">
            {{item.label}}
          </span>
        </template>
      </RadioButton>
    </template>
    <template v-else>
      <Radio
        v-for="item in props.options"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        @click="() => { handleClick(item) }"
      >
        <template v-if="item.tooltipDes">
          <Tooltip 
            v-bind="item.toolOptions"
            overlayClassName="scTooltip-white"
            :overlayStyle="{}"
            destroyTooltipOnHide
          >
            <template #title>
              {{item.tooltipDes}}
            </template>
            <span class="isRadioTooltip" >
              {{item.label}}
            </span>
          </Tooltip>
        </template>
        <template v-else>
          <span>
            {{item.label}}
          </span>
        </template>
      </Radio>
    </template>
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
import { RadioButton, Tooltip, Radio } from 'ant-design-vue'
import type { TooltipProps } from 'ant-design-vue'

import ScRadioGroup from './ScRadioGroup.vue'
export interface TooltipButtonProps {
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean,
  overlayClassName?: string,
  widthSize?: string
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
  },
  isNotChecked: {
    type: Boolean,
    default: () => {
      return false
    }
  },
  radioType: {
    type: String,
    default: () => {
      return 'RadioButton'
    }
  },
  styleMode: String,
  widthSize: String
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
  if (props.triggerMultiple && isFlag && !item.disabled) {
    emits('update:value', item.value)
    emits('change', item.value)
  }
}

</script>
