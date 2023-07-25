<template>
  <Tooltip
    v-bind="tooltipProps"
  >
    <template #title v-if="isTooltip && !tooltipProps.title">
      <slot v-if="$slots.tooltip" name="tooltip"></slot>
      <slot v-else name="default"></slot>
    </template>
    <div
      :class="className"
      :style="{...styleProps}"
      @click="handleClick"
    >
      <slot name="default"></slot>
    </div>
  </Tooltip>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, unref } from 'vue'
import { Tooltip } from 'ant-design-vue'
import { basePrefixCls } from '../../../constant'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject } from '../../../utils'

export default defineComponent({
  name: 'ScEllipsis',
  components: {
    Tooltip
  },
  props: ellipsisProps(),
  setup (props, { attrs }) {
    const baseClass = basePrefixCls + 'Ellipsis'
    const className = computed(() => {
      return [
        baseClass,
        props.lineClamp ? baseClass + '-lineClamp' : ''
      ]
    })

    const isCollapse = ref(false)

    const styleProps = computed(() => {

      const cssOss = Object.create({})
      if (!props.lineClamp) {
        cssOss["text-overflow"] = 'ellipsis'
      } else if (!isCollapse.value) {
        cssOss["-webkit-line-clamp"] = props.lineClamp
      }
      return {
        ...cssOss,
        //@ts-ignore
        ...attrs.style
      }
    })

    const isTooltip = computed(() => {
      return isBoolean(props.tooltip) ? props.tooltip : Boolean(props.tooltip)
    })

    const tooltipProps = computed(() => {
      return isObject(props.tooltip) ? props.tooltip : {}
    })

    const handleClick = () => {
      if (props.expandTrigger === 'click') {
        isCollapse.value = !unref(isCollapse)
      }
    }

    return {
      className,
      styleProps,
      isTooltip,
      tooltipProps,

      handleClick
    }
  }
})
</script>
