<template>
  <Tag
    v-bind="$attrs"
    :color="compProps.color"
    :disable="compProps.disabled"
    :class="classNames"
    @click="handleChange"
    :style="varStyle"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <span
        v-if="compProps.loading"
        :class="['loading-transition', baseClass + '-loading']">
      </span>
      <Tooltip
        placement="top"
      >
        <template #title v-if="compProps.tooltipDes">
          {{ tooltipDes }}
        </template>
        <span :class="[compProps.tooltipDes ? 'underline-dashed ' : '']">
          <slot :name="item" v-bind="data || {}">
          </slot>
        </span>
      </Tooltip>
    </template>
  </Tag>
</template>

<script lang='ts'>
import { defineComponent, unref, computed, ref, watch } from 'vue'
import { Tag, Tooltip } from 'ant-design-vue'

import { basePrefixCls } from '../../../constant'
import { tagProps } from './type'
import { parseColorString, toRgbaString } from '../../../utils/hextorgba'

export default defineComponent({
  name: 'ScTag',
  inheritAttrs: false,
  components: {
    Tag,
    Tooltip
  },
  props: tagProps(),
  emits: ['change', 'update:checked'],
  setup (props, { attrs, emit }) {
    const baseClass = basePrefixCls + 'Tag';

    const checked = ref()

    const compProps = computed(() => {
      return props
    })
    
    watch(() => props.checked, (val) => {
      checked.value = val
    }, {
      immediate: true
    })
    
    const classNames = computed(() => {
      const { type, size, status, selected, disabled, color, border } = unref(compProps)
      return [
        attrs.class,
        baseClass,
        size ? baseClass + '--' + size : '',
        status ? 'is-' + status : '',
        type ? baseClass + '-' + type : '',
        selected ? unref(checked) ? 'is-selected onSelect' : 'onSelect' : '',
        disabled ? 'is-disabled' : '',
        color ? 'is-custom-color' : '',
        border ? '' : 'notBorder'
      ]
    })

    const varStyle = computed(() => {
      const { color } = props;
      const rgbaColor = color ? parseColorString(color) : ''
      const shadowOutColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0.1 })) : ''
      const borderOutColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0 })) : ''
      if (!color) {
        return {}
      }
      return {
        '--customColor': color,
        '--customBgColor': shadowOutColor,
        '--customBorderColor': borderOutColor,
      }
    })

    const handleChange = () => {
      const { disabled } = unref(compProps)
      if (disabled) {
        return false
      }
      emit('update:checked', !checked.value)
      emit('change', !checked.value)
    }
    return {
      baseClass,
      classNames,
      compProps,
      handleChange,
      varStyle
    }
  }
})
</script>
