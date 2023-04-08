<template>
  <Badge
    v-bind="curProps"
    :class="baseClass"
    :style="{'--shadowBgColor': varStyle.shadowBgColor, '--shadowOutColor': varStyle.shadowOutColor, '--shadowInColor': varStyle.shadowInColor}"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template> 
  </Badge>
</template>

<script lang='ts'>
import { defineComponent, computed, unref } from 'vue'
import { Badge } from 'ant-design-vue'
import { badgeProps } from './type'
import { basePrefixCls } from '../../../constant'
import { toRgbaString, parseColorString } from '../../../utils/hextorgba'

export default defineComponent({
  name: 'ScBadge',
  inheritAttrs: false,
  props: badgeProps,
  components: {
    Badge
  },
  setup (props, { attrs }) {
    const curProps = computed(() => {
      return {
        ...attrs,
        ...props
      }
    })

    const baseClass = computed(() => {
      const { shadow } = unref(curProps)
      return [
        shadow ? basePrefixCls + 'BadgeCustom' : ''
      ]
    })

    const varStyle = computed(() => {
      const { color } = props;
      const rgbaColor = color ? parseColorString(color) : ''
      const shadowOutColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0.18 })) : undefined
      const shadowInColor = rgbaColor ? toRgbaString(Object.assign(rgbaColor, { a: 0.6 })) : undefined

      return {
        shadowBgColor: color,
        shadowOutColor,
        shadowInColor
      }
    })

    return {
      curProps,
      baseClass,
      varStyle
    }
  }
})
</script>
