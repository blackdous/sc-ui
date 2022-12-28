<template>
  <div :style="{ width: newProps.wrapperWidth + 'px' }">
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
        <div class="sc-dot-wrapper">
          <div :class="['sc-dot', { focus }]">
            <slot
              name="dot"
              :value="value"
              :focus="focus"
              >
              <span>
                {{ value }} {{ unit }}
              </span>
            </slot>
          </div>
        </div>
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
import { defineComponent, computed, unref, ref, watch, watchEffect } from 'vue'
import VueSlider from 'vue-slider-component'

import 'vue-slider-component/theme/default.css'
import { basePrefixCls } from '../../../constant'
import { Props } from './type'

export default defineComponent({
  name: 'ScSlider',
  inheritAttrs: false,
  props: Props(),
  components: {
    VueSlider
  },
  setup (props, { slots, attrs, emit }) {
    const valueRef = ref()

    const newProps = computed(() => {
      return {
        ...props
      }
    })
    const vBindValue = computed(() => {
      return {
        ...unref(newProps),
        ...attrs,
        class: [`${basePrefixCls}-slider`]
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
      vBindValue,
      newProps,
      isDot,
      isLabel,
      valueRef
    }
  }
})
</script>
