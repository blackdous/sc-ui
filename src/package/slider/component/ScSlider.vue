<template>
  <div
    :class="[baseClass+'-main', dotCircle ? 'dotCircle' : '']"
  >
    <div 
      :class="[baseClass+'-container']"
      :style="{ 'width': transformPxtoRem(newProps?.wrapperWidth) }"
    >
      <VueSlider
        v-bind="vBindValue"
        v-model="valueSliderRef"
        @change="handleChange"
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
              v-if="infos[value]?.desc || dotCircle"
            >
              <div 
                :class="[baseClass+'-tooltip']"
                :style="{ color: infos[value]?.color }"
                v-if="!dotCircle || infos[value]?.desc"
              >
                <component :is="getIcon(infos[value]?.Icon)"></component>
                <p
                  :class="[baseClass+'-tooltip__title']"
                >
                  {{ infos[value]?.desc }}
                </p>
              </div>
              <div class v-else>
                {{ value }} {{ newProps.unit }}
              </div>
            </template>
            <div 
              :class="['sc-dot-wrapper']"
              :style="{
                'min-width': dotCircle ? 'auto' : pxToRem(newProps?.dotWidth)
              }"
            >
              <div :class="['sc-dot', { focus }]">
                <slot
                  name="dot"
                  :value="value"
                  :focus="focus"
                  v-if="!dotCircle"
                  >
                  <span 
                    v-if="infos[value]?.dotLabel || infos[value]?.label || infos.marker?.label"
                  >
                    {{ infos[value]?.dotLabel || infos[value]?.label || infos.marker?.label }}
                  </span>
                  <span v-else>
                    {{ value }} {{ newProps.unit }}
                  </span>
                </slot>
              </div>
            </div>
          </Tooltip>
        </template>
        <template v-slot:dot="{ value, focus }" v-else>
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
      v-model:value="valueRef"
      :min="newProps.min"
      :max="newProps.max"
      :step="newProps.step"
      :disabled="newProps.disabled"
      v-bind="newProps?.inputNumberOptions"
      @blur="handleBlur"
      @focus="handleFocus"
    >
      <!-- @change="handleInputNumberChange" -->
      <!-- @pressEnter="handleChange" -->

    </ScInputNumber>
    <span
      v-if="newProps.isShowNextUnit"
      :class="[baseClass + '-nextUnit']"
    >
      {{
        newProps.unit
      }}
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, unref, ref, watch, isVNode } from 'vue'
import { Tooltip } from 'ant-design-vue'
import { ScInputNumber } from '../../inputNumber'
import { transformPxtoRem } from '../../../utils'
import { useInjectFormItemContext } from '../../form/FormItemContext';

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'

import { basePrefixCls } from '../../../constant'
import { pxToRem, buildUUID, isNumber } from '../../../utils'
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
  emits: ['change', 'update:value', 'blur', 'focus'],
  setup (props, { slots, attrs, emit }) {
    const valueRef = ref(props.value)
    const valueSliderRef = ref(props.value)
    const uuid = basePrefixCls + buildUUID()
    const baseClass = basePrefixCls+'Slider'
    const formItemContext = useInjectFormItemContext()

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
    watch(() => props.value, () => {
      valueRef.value = unref(newProps).inputNumberOptions ? Number(props.value) : props.value
      valueSliderRef.value = unref(newProps).inputNumberOptions ? Number(props.value) : props.value
    }, {
      deep: true
    })
    watch(() => valueRef.value, (val) => {
      if (unref(newProps).inputNumberOptions) {
        if (!isNumber(val)) {
          return false;
        }
      }
      emit('update:value', val)
      emit('change', val)
      formItemContext.onFieldChange()
    }, {
      flush: 'post'
    })

    const isDot = computed(() => {
      return Object.keys(slots).includes('slot')
    })

    const isLabel = computed(() => {
      return Object.keys(slots).includes('label')
    })

    const handleChange = (val:any) => {
      valueRef.value = val
    }

    const handleBlur = (event: Event) => {
      emit('blur', event)
    }
    const handleFocus = () => {
      emit('focus')
    }

    return {
      baseClass,
      vBindValue,
      newProps,
      isDot,
      isLabel,
      valueRef,
      valueSliderRef,
      uuid,
      infos,
      transformPxtoRem,
      pxToRem,
      isVNode,
      getIcon,
      handleChange,
      handleBlur,
      handleFocus
      // handleInputNumberChange
    }
  }
})
</script>
