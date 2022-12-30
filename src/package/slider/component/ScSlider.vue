<template>
  <div
    :class="[baseClass+'-main']"
  >
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
        <template v-slot:dot="{ value, focus }" v-if="!isDot">
          <Tooltip
            :color="infos[value]?.bgColor"
          >
            <template #title
              v-if="infos[value]?.desc"
            >
              <div 
                :class="[baseClass+'-tooltip']"
                :style="{ color: infos[value]?.color }"
              >
                <component :is="getIcon(infos[value]?.Icon)"></component>
                <p
                :class="[baseClass+'-tooltip__title']"
                >
                  {{ infos[value]?.desc }}
                </p>
              </div>
            </template>
            <div class="sc-dot-wrapper"
              :style="{
                'min-width': pxToRem(newProps?.dotWidth)
              }"
            >
              <div :class="['sc-dot', { focus }]">
                <slot
                  name="dot"
                  :value="value"
                  :focus="focus"
                  >
                  <span 
                    v-if="infos[value]?.dotLabel || infos[value]?.label || infos.marker?.label"
                  >
                    {{ infos[value]?.dotLabel || infos[value]?.label || infos.marker?.label}}
                  </span>
                  <span v-else>
                    {{ value }} {{ newProps.unit }}
                  </span>
                </slot>
              </div>
            </div>
          </Tooltip>
        </template>
        <template v-slot:dot="{ value, focus }">
          <slot
            name="dot"
            :value="value"
            :focus="focus"
            >
          </slot>
        </template>
        <template v-slot:label="{ label, active }">
          <slot
            name="label"
            :label="label"
            :active="active"
          >
            <div
              v-if="!isLabel && !newProps.showMinMaxMarker && newProps.customMarker"
              :class="['vue-slider-mark-label', 'custom-label', active ? 'vue-slider-mark-label-active' : '']"
              :style="{ color: infos[label]?.marker?.markerColor }"
            >
              <span :class="[baseClass + '-marker__icon']">
                <component v-if="infos[label]?.marker?.icon" :is="getIcon(infos[label]?.marker?.icon)"></component>
              </span>
              <span :class="[baseClass + '-marker__text']">
                {{ infos[label]?.marker?.label }}
              </span>
            </div>
          </slot>
        </template>
      </VueSlider>
    </div>
    <ScInputNumber
      v-if="newProps.inputNumberOptions"
      :placeholder="newProps?.inputNumberOptions.placeholder"
      v-model:value="valueRef"
      :min="newProps.min"
      :max="newProps.max"
    >
      <!-- @pressEnter="handleChange" -->

    </ScInputNumber>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, unref, ref, watch, watchEffect, isVNode, h } from 'vue'
import { Tooltip } from 'ant-design-vue'
import { ScInputNumber } from '../../inputNumber'

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
import { basePrefixCls } from '../../../constant'
import { pxToRem, buildUUID } from '../../../utils'
import { Props } from './type'
import { getIcon } from '../hooks/index'

export default defineComponent({
  name: 'ScSlider',
  inheritAttrs: false,
  props: Props(),
  components: {
    VueSlider,
    Tooltip,
    ScInputNumber
  },
  setup (props, { slots, attrs, emit }) {
    const valueRef = ref()
    const uuid = basePrefixCls + buildUUID()
    const baseClass = basePrefixCls+'Slider'

    const newProps = computed(() => {
      return {
        ...props
      }
    })

    const infos = computed(() => {
      return unref(newProps).infos
    })

    const marks = computed(() => {
      const { showMinMaxMarker } =  unref(newProps)
      if (showMinMaxMarker) {
        const { min, max, unit } = unref(newProps)
        
        return {
          [min]: {
            label: min + unit
          },
          [max]: {
            label: max + unit
          }
        }
      }
      return undefined
    })

    const vBindValue = computed(() => {
      const { customMarker } =  unref(newProps)
      return {
        marks: customMarker ? undefined : unref(marks),
        lazy: true,
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
      uuid,
      infos,
      pxToRem,
      isVNode,
      getIcon
    }
  }
})
</script>
