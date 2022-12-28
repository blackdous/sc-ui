<template>
  <div 
    :class="[baseClass+'-container']"
    :style="{ 'width': pxToRem(newProps?.wrapperWidth) }"
  >
    <VueSlider
      v-bind="vBindValue"
      v-model="valueRef"
    >
      <template 
        #[item]="data" 
        v-for="item in Object.keys($slots).filter((_item) => !['dot', 'label'].includes(_item))"
        :key="item"
      >
        <slot :name="item" v-bind="data || {}"></slot>
      </template> 
      <template v-slot:dot="{ value, focus }">
        <Tooltip
          :color="newProps?.tooltipInfos[value]?.bgColor"
        >
          <template #title
            v-if="newProps?.tooltipInfos[value]?.desc"
          >
            <div 
              :class="[baseClass+'-tooltip']"
              :style="{ color: newProps?.tooltipInfos[value]?.color }"
            >
              {{getIcon(newProps?.tooltipInfos[value]?.Icon)}}
              <p>
                {{ newProps?.tooltipInfos[value]?.desc }}
              </p>
            </div>
          </template>
          <div class="sc-dot-wrapper">
            <div :class="['sc-dot', { focus }]">
              <slot
                name="dot"
                :value="value"
                :focus="focus"
                >
                <span 
                  v-if="newProps?.tooltipInfos[value]?.dotLabel || newProps?.tooltipInfos[value]?.dotLabel"
                >
                  {{ newProps?.tooltipInfos[value]?.dotLabel || newProps?.tooltipInfos[value]?.dotLabel }}
                </span>
                <span v-else>
                  {{ value }} {{ unit }}
                </span>
              </slot>
            </div>
          </div>
        </Tooltip>
      </template>
      <template #label="{ label, active }">
        <slot
          name="label"
          :label="label"
          :active="active"
        ></slot>
      </template>


    </VueSlider>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, unref, ref, watch, watchEffect, isVNode, h } from 'vue'
import VueSlider from 'vue-slider-component'
import { Tooltip } from 'ant-design-vue'

import 'vue-slider-component/theme/default.css'
import { basePrefixCls } from '../../../constant'
import { pxToRem } from '../../../utils'
import { Props } from './type'
import { getIcon } from '../hooks/index'

export default defineComponent({
  name: 'ScSlider',
  inheritAttrs: false,
  props: Props(),
  components: {
    VueSlider,
    Tooltip
  },
  setup (props, { slots, attrs, emit }) {
    const valueRef = ref()

    const baseClass = basePrefixCls+'Slider'
    console.log('baseClass: ', baseClass);

    const newProps = computed(() => {
      return {
        ...props
      }
    })
    const vBindValue = computed(() => {
      return {
        ...unref(newProps),
        ...attrs,
        class: [baseClass],
        wrapperWidth: undefined,
        unit: undefined,
        tooltipInfos: undefined
      }
    })

    watch(() => valueRef.value, (val) => {
      emit('update:value', val)
      emit('change', val)
    })

    watchEffect(() => {
      valueRef.value = props.value
    })


    const isDot = computed(() => {
      return Object.keys(slots).includes('slot')
    })

    const isLabel = computed(() => {
      return Object.keys(slots).includes('label')
    })
    
    return {
      baseClass,
      vBindValue,
      newProps,
      isDot,
      isLabel,
      valueRef,
      pxToRem,
      isVNode,
      getIcon
    }
  }
})
</script>
