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
      :style="styleProps"
      @click="handleClick"
    >
      <!-- @click="handleClick" -->
      <input id="exp1" :class="[baseClass + '-exp']" type="checkbox" :checked="isChecked">
      <div :class="[baseClass + '-text']" :style="lineClampStyle">
        <label v-if="isCollapse && !$slots.suffix" :class="[baseClass + '-btn']" for="exp1" @click="() => { isChecked = !isChecked }"></label>
        <span :class="[baseClass + '-suffix']" v-if="$slots.suffix || newProps.copyTxt || newProps.edit">
          <slot name="suffix"></slot>
          <i v-if="newProps.copyTxt" class="sc-ui sc-file-copy" @click="handleCopy"></i>
          <i v-if="newProps.edit" class="sc-ui sc-Frame2" @click="handleEdit"></i>
        </span>
        <slot name="default"></slot>
      </div>
    </div>
  </Tooltip>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, unref } from 'vue'
import { Tooltip, message } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

import { basePrefixCls } from '../../../constant'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject } from '../../../utils'
import useLocale from '../../../hooks/useLocale'

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
        props.lineClamp ? baseClass + '-lineClamp' : '',
        props.hoverSuffix ? baseClass + '-hoverSuffix' : ''
      ]
    })

    const isCollapse = ref(props.isCollapse)
    const isChecked = ref(false)

    const styleProps = computed(() => {
      return {
        //@ts-ignore
        ...attrs.style
      }
    })

    const lineClampStyle = computed(() => {
      const cssOss = Object.create({})
      if (props.lineClamp) {
        cssOss["-webkit-line-clamp"] = isChecked.value ? '999' : props.lineClamp
      }
      return {
        ...cssOss
      }
    })

    const isTooltip = computed(() => {
      return isBoolean(props.tooltip) ? props.tooltip : Boolean(props.tooltip)
    })

    const tooltipProps = computed(() => {
      return isObject(props.tooltip) ? props.tooltip : {}
    })

    const newProps = computed(() => {
      return props
    })

    const handleClick = () => {
      if (props.expandTrigger === 'click') {
        isChecked.value = !unref(isChecked)
      }
    }

    const { copy, copied } = useClipboard({
      legacy: true
    })
    const handleCopy = async () => {
      const copyText = unref(newProps).copyTxt
      // console.log('copyText: ', copyText);
      await copy(String(copyText))
      if (unref(newProps)?.successTxt === null) {
        return false
      }
      const { curLocale } = useLocale()
      if (copied && (unref(newProps).column?.type?.props?.successTxt || unref(newProps)?.successTxt) || curLocale?.copy?.successMessage) {
        message.success({
          content: unref(newProps).column?.type?.props?.successTxt || unref(newProps).successTxt || curLocale?.copy?.successMessage,
          duration: 1.5
        })
      }
    }

    const handleEdit = () => {

    }


    return {
      className,
      styleProps,
      isTooltip,
      tooltipProps,
      baseClass,
      lineClampStyle,
      isCollapse,
      isChecked,
      newProps,
      handleCopy,
      handleEdit,
      handleClick
    }
  }
})
</script>
