<template>
  <Tooltip v-bind="tooltipProps">
    <template #title v-if="isTooltip && !tooltipProps.title">
      <slot v-if="$slots.tooltip" name="tooltip"></slot>
      <slot v-else name="default"></slot>
    </template>
    <Popover v-model:visible="popoverVisible" :title="null" trigger="click" overlayClassName="scEllipsis-popover"
      placement="bottomLeft">
      <template #content>
        <Textarea v-model:value="textareaValue" v-bind="newProps.edit"></Textarea>
        <p :class="[baseClass + '-edit--describe']">
          {{ newProps?.edit?.describe }}
        </p>
        <div :class="[baseClass + '-actives']" :style="{
          textAlign: newProps?.edit?.align || 'right'
        }">
          <ScButton status="info" size="small" @click="handleClose">
            取消
          </ScButton>
          <ScButton type="primary" size="small" @click="handleEntry" :loading="newProps?.edit?.confirmLoading">
            确定
          </ScButton>
        </div>
      </template>
      <div
        :class="className" 
        :style="styleProps" 
        @click="handleClick"
      >
        <!-- @click="handleClick" -->
        <input id="exp1" :class="[baseClass + '-exp']" type="checkbox" :checked="isChecked">
        <div :class="[baseClass + '-text']" :style="lineClampStyle">
          <label v-if="isCollapse && !$slots.suffix" :class="[baseClass + '-btn']" for="exp1"
            @click="() => { isChecked = !isChecked }"></label>
          <span :class="[baseClass + '-suffix']" v-if="$slots.suffix || newProps?.copyTxt || newProps?.edit?.show"
            :style="{ visibility: popoverVisible ? 'visible' : '' }">
            <slot name="suffix"></slot>
            <i v-if="newProps?.copyTxt" class="sc-ui sc-file-copy" @click="handleCopy"></i>
            <i v-if="newProps?.edit?.show" class="sc-ui sc-Frame2" @click="handleEdit"></i>
          </span>
          <slot name="default"></slot>
        </div>
      </div>
    </Popover>
  </Tooltip>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, unref } from 'vue'
import { Tooltip, message, Popover, Textarea } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

import { basePrefixCls } from '../../../constant'
import { ScButton } from '../../button'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject, buildUUID } from '../../../utils'
import useLocale from '../../../hooks/useLocale'

export default defineComponent({
  name: 'ScEllipsis',
  components: {
    Tooltip,
    Popover,
    Textarea,
    ScButton
  },
  props: ellipsisProps(),
  emits: ['editConfirm'],
  setup(props, { attrs, emit }) {
    const baseClass = basePrefixCls + 'Ellipsis'
    const isCollapse = ref(props.isCollapse)
    const isChecked = ref(false)
    const popoverVisible = ref(false)
    const textareaValue = ref()
    const uuid = basePrefixCls + buildUUID()

    const styleProps = computed(() => {
      return {
        //@ts-ignore
        ...attrs.style
      }
    })

    const className = computed(() => {
      return [
        uuid,
        baseClass,
        props.lineClamp ? baseClass + '-lineClamp' : '',
        props.hoverSuffix || popoverVisible.value ? baseClass + '-hoverSuffix' : ''
      ]
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

    const handleClose = () => {
      textareaValue.value = ''
      popoverVisible.value = false
    }

    const handleEntry = () => {
      emit('editConfirm', textareaValue.value, handleClose)
    }

    const handleClick = () => {
      if (props.expandTrigger === 'click') {
        isChecked.value = !unref(isChecked)
      }
      const { edit } = props
      if (edit && edit.show) {
        return false
      }
      window?.requestAnimationFrame(() => {
        popoverVisible.value = false
      })
    }
    const { copy, copied } = useClipboard({
      legacy: true
    })
    const handleCopy = async () => {
      const copyText = unref(newProps).copyTxt
      await copy(String(copyText))
      const { curLocale } = useLocale()
      if (copied && curLocale?.copy?.successMessage) {
        message.success({
          content: curLocale?.copy?.successMessage,
          duration: 1.5
        })
      }
    }

    const handleEdit = (event: Event) => {
      event.stopPropagation()
      popoverVisible.value = !popoverVisible.value
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
      popoverVisible,
      textareaValue,

      handleEntry,
      handleClose,
      handleCopy,
      handleEdit,
      handleClick
    }
  }
})
</script>
