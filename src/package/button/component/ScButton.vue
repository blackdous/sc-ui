<template>
  <Button
    v-bind="getBindValue"
    :class="getButtonClass"
    @click="onClick"
    :style="{'--shadowBgColor': varStyle.shadowBgColor, '--shadowOutColor': varStyle.shadowOutColor, '--shadowInColor': varStyle.shadowInColor}"
  >
    <template #icon v-if="isIcon">
      <span class="scButton-icon">
        <slot name="icon"></slot>
      </span>
    </template>
    <template #default="data">
      <slot v-bind="data || {}"></slot>
    </template>
    <!-- <template #icon v-if="isIcon">
      <span class="scButton-icon">
        <slot name="icon"></slot>
      </span>
    </template> -->
  </Button>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { Button } from 'ant-design-vue'

import { basePrefixCls } from '../../../constant'
import { buttonProps } from '../type'
import { useAttrs } from '../../../hooks/useAttrs'
import { parseColorString, toRgbaString } from '../../../utils/hextorgba'
  

export default defineComponent({
  name: 'ScButton',
  inheritAttrs: false,
  props: buttonProps,
  components: {
    Button
  },
  setup (props, { slots }) {
    const attrs = useAttrs({ excludeDefaultKeys: false });
    const getButtonClass = computed(() => {
      const { status, disabled, type, color } = props;
      return [
        basePrefixCls + 'button',
        type || status ? '' : 'is-default', 
        {
          [`ant-btn-${status}`]: !!status,
          [`is-disabled`]: disabled,
          [`ant-btn-${type}`]: !!type,
        },
        color ? 'customColor' : ''
      ];
    });

    const getBindValue = computed(() => {
      const { type } = props;
      return { 
        ...unref(attrs), 
        ...props, 
        type: ['shadow', 'icon'].includes(type) ? undefined : type,
        color: undefined
      }
    });

    const varStyle = computed(() => {
      const { color } = props;
      const rgbaColor = color ? parseColorString(color) : ''
      const shadowOutColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0.18 })) : ''
      const shadowInColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0.6 })) : ''

      return {
        shadowBgColor: color,
        shadowOutColor,
        shadowInColor
      }
    })
    const isIcon = computed(() => {
      return Object.keys(slots).includes('icon')
    })
    return {
      getButtonClass,
      getBindValue,
      varStyle,
      isIcon
    };
  }
})
</script>