<template>
  <Tooltip v-bind="tooltipProps">
    <template #title v-if="isTooltip && !tooltipProps.title">
      <slot v-if="$slots.tooltip" name="tooltip"></slot>
      <slot v-if="!$slots.tooltip && !isDefaultTooltip" name="default"></slot>
    </template>
    <Popover v-model:visible="popoverVisible" :title="null" trigger="click" overlayClassName="scEllipsis-popover"
      placement="bottomLeft">
      <template #content>
        <ScInput 
          v-model:value="textareaValue" 
          v-bind="newProps.edit"
        >
          <template #suffix v-if="newProps.edit.showMaxLength">
            {{ (textareaValue + '').length }}/{{ newProps.edit.maxLength }}
          </template>
        </ScInput>
        <div :class="[baseClass + '-actives']" :style="{
          textAlign: newProps?.edit?.align || 'right'
        }">
          <ScButton status="info" size="small" @click="handleClose">
            取消
          </ScButton>
          <ScButton
            type="primary"
            size="small"
            :loading="newProps?.edit?.confirmLoading"
            :disabled="newProps?.edit?.confirmDisabled"
            @click="handleEntry"
          >
            确定
          </ScButton>
        </div>
      </template>
      <div :class="className" :style="styleProps" @click="handleClick">
        <!-- @click="handleClick" -->
        <input id="exp1" :class="[baseClass + '-exp']" type="checkbox" :checked="isChecked">
        <div
          :class="[baseClass + '-text']" 
          :style="lineClampStyle"
        >
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
import { defineComponent, computed, ref, unref, nextTick, onMounted } from 'vue'
import { Tooltip, message, Popover, Popconfirm } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

import { basePrefixCls } from '../../../constant'
import { ScButton } from '../../button'
import { ScInput } from '../../input'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject, buildUUID } from '../../../utils'
import useLocale from '../../../hooks/useLocale'

export default defineComponent({
  name: 'ScEllipsis',
  components: {
    Tooltip,
    Popover,
    ScInput,
    ScButton,
    Popconfirm
  },
  props: ellipsisProps(),
  emits: ['editConfirm'],
  setup(props, { attrs, emit, expose }) {
    const baseClass = basePrefixCls + 'Ellipsis'
    const isCollapse = ref(props.isCollapse)
    const isChecked = ref(false)
    const popoverVisible = ref(false)
    const textareaValue = ref()
    const uuid = basePrefixCls + buildUUID()

    const isDefaultTooltip = ref(true)

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
        props.hoverSuffix || popoverVisible.value ? baseClass + '-hoverSuffix' : '',
        props.hrefLink ? baseClass + '-href--link' : ''
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
      // const { edit } = props
      // console.log('edit: ', edit);
      // textareaValue.value = edit.text
      // if (edit && edit.show) {
      // return false
      // }
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
      const { edit } = props
      textareaValue.value = edit.text
      if (edit && edit.show) {
        popoverVisible.value = !popoverVisible.value
        return false
      }
    }

    const computedWidth = () => {
      const textDom = document.querySelector(`.${uuid} .scEllipsis-text`) as HTMLElement
      const containerDom = document.querySelector(`.${uuid}`) as HTMLElement
      const contentDom = document.createElement('p')
      contentDom.style.display = 'inline-block'
      const maxWidth = containerDom.style.maxWidth || containerDom.style.width || window.getComputedStyle(textDom).width
      contentDom.innerText = textDom?.innerText || ''
      document.body.append(contentDom)
      const contentWidth = window.getComputedStyle(contentDom).width
      // console.log('contentWidht: ', contentWidth);
      document.body.removeChild(contentDom)
      isDefaultTooltip.value = parseInt(maxWidth) > parseInt(contentWidth)
    }


    onMounted(() => {
      nextTick(() => {
        computedWidth()
      })
    })


    expose({
      computedWidth
    })

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
      isDefaultTooltip,

      handleEntry,
      handleClose,
      handleCopy,
      handleEdit,
      handleClick
    }
  }
})
</script>
