<template>
  <Tooltip
    v-bind="tooltipProps"
    destroyTooltipOnHide
  >
    <template #title v-if="isTooltip && !tooltipProps.title">
      <slot v-if="$slots.tooltip" name="tooltip"></slot>
      <slot v-if="!$slots.tooltip && (!isDefaultTooltip || isHeightOver)" name="default"></slot>
    </template>

    <div :class="className" :style="styleProps" @click="handleClick">
      <!-- @click="handleClick" -->
      <input id="exp1" :class="[baseClass + '-exp']" type="checkbox" :checked="isChecked">
      <div :class="[baseClass + '-text', isChecked ? 'isCheck' : '']" :style="lineClampStyle">
        <span
          :class="[baseClass + '-suffix-container', (!isDefaultTooltip || isHeightOver) ? isChecked ? '' : 'showEllipsisTxt' : '']"
        >
          <label
            v-if="isCollapse && !$slots.suffix" 
            :class="[baseClass + '-btn']" 
            for="exp1"
            @click="() => { isChecked = !isChecked }"
          >
          </label>
          <span
            v-if="$slots.suffix || newProps?.copyTxt || newProps?.edit?.show" 
            :class="[baseClass + '-suffix']"
          >
            <slot name="suffix"></slot>
            <i v-if="newProps?.copyTxt" class="sc-ui sc-file-copy" @click="handleCopy"></i>
            <Popover
              v-model:visible="popoverVisible" 
              :title="null" trigger="click"
              :overlayClassName="popoverClassName" 
              placement="bottomLeft"
              destroyTooltipOnHide
              :getPopupContainer="getPopupContainer">
              <template #content>
                <Form ref="editFormRef" :model="formState" :rules="newProps.edit.rules">
                  <FormItem label="" name="name">
                    <ScInput v-model:value="formState.name" v-bind="newProps.edit" :describe="''"
                      @change="handleEditChange">
                      <template #suffix v-if="newProps.edit.showMaxLength">
                        {{ (formState.name + '').length }}/{{ newProps.edit.maxLength }}
                      </template>
                    </ScInput>
                  </FormItem>
                  <p v-if="newProps.edit.describe" class="input-describe">
                    {{ newProps.edit.describe }}
                  </p>
                </Form>
                <div :class="[baseClass + '-actives']" :style="{
                  textAlign: newProps?.edit?.align || 'right'
                }">
                  <ScButton status="info" size="small" @click="handleClose">
                    取消
                  </ScButton>
                  <ScButton type="primary" size="small" :loading="newProps?.edit?.confirmLoading"
                    :disabled="newProps?.edit?.confirmDisabled" @click="handleEntry">
                    确定
                  </ScButton>
                </div>
              </template>
              <i v-if="newProps?.edit?.show" class="sc-ui sc-Frame2" @click="handleEdit"></i>
            </Popover>
          </span>
        </span>
        <span
          ref="textDefaultRef"
          :class="[baseClass + '-text-default']"
        >
          <slot name="default"></slot>
        </span>
      </div>
    </div>
  </Tooltip>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, unref, nextTick, onMounted, reactive, watch, onUnmounted } from 'vue'
import { Tooltip, message, Popover, Popconfirm, Form, FormItem } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

import { basePrefixCls } from '../../../constant'
import { ScButton } from '../../button'
import { ScInput } from '../../input'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject, buildUUID, isFunction } from '../../../utils'
// import { waitElementReady } from '../../../utils/dom/waitElementReady'
import useLocale from '../../../hooks/useLocale'

export default defineComponent({
  name: 'ScEllipsis',
  components: {
    Tooltip,
    Popover,
    ScInput,
    ScButton,
    Popconfirm,
    Form,
    FormItem
  },
  props: ellipsisProps(),
  emits: ['editConfirm', 'editInputChange'],
  setup(props, { attrs, emit, expose }) {
    const baseClass = basePrefixCls + 'Ellipsis'
    const isCollapse = ref(props.isCollapse)
    const isChecked = ref(false)
    const popoverVisible = ref(false)
    const uuid = basePrefixCls + buildUUID()
    const editFormRef = ref()
    const isHeightOver = ref(false)
    const maxWidthValue = ref()
    const contentWidthValue = ref()
    // const animationId = ref()
    const textDefaultRef = ref()

    const formState = reactive({
      name: ''
    })

    const isDefaultTooltip = ref(false)

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
        props.hoverSuffix ? baseClass + '-hoverSuffix' : '',
        props.hrefLink ? baseClass + '-href--link' : ''
      ]
    })

    const popoverClassName = computed(() => {
      return [
        props.isOnlyTips ? baseClass + '-isOnlyTips' : '',
        baseClass + '-popover',
        uuid
      ].join(' ')
    })
    

    const lineClampStyle = computed(() => {
      const cssOss = Object.create({})
      if (props.lineClamp) {
        cssOss["-webkit-line-clamp"] = isChecked.value ? '999' : props.lineClamp
        cssOss["max-height"] = isChecked.value ? '999px' : parseInt(props.lineClamp + '') * props.baseHeight + 'px'
      }
      cssOss["--baseHeight"] = props.baseHeight + 'px'
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

    const getPopupContainer = (target: HTMLElement) => {
      const { edit } = props
      if (edit?.getPopupContainer && isFunction(edit?.getPopupContainer)) {
        return edit?.getPopupContainer(target)?.parentNode?.parentNode?.parentNode?.parentNode
      }
      return document.body
    }

    /**
     * 1. 计算传入元素宽度
     * 2. 对比父级或者当前元素最大宽度
     * 3. 是否自动出现tooltip
     */
    const computedWidth = () => {
      const { isInheritParentWidth, lineClamp, baseHeight } = props
      const textDom = document.querySelector(`.${uuid} .scEllipsis-text`) as HTMLElement
      const containerDom = document.querySelector(`.${uuid}`) as HTMLElement
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { width, paddingLeft, paddingRight, borderLeftWidth, borderRightWidth } = isInheritParentWidth ? window?.getComputedStyle(containerDom?.parentNode as HTMLElement) : { width: '0', paddingLeft: '0', paddingRight: '0', borderLeftWidth: '0', borderRightWidth: '0'}
      const parentDomWidth = (isInheritParentWidth && !containerDom.style.maxWidth && !containerDom.style.maxWidth) ? parseInt(width) - parseInt(borderRightWidth) - parseInt(borderLeftWidth) - parseInt(paddingRight) - parseInt(paddingLeft) : ''
      const contentDom = document.createElement('p')
      const suffixDom = document.querySelector(`.${uuid} .scEllipsis-suffix-container`) as HTMLElement
      const suffixDomWidth = suffixDom ? isNaN(parseInt(window?.getComputedStyle(suffixDom)?.width || '0')) ? 0: parseInt(window?.getComputedStyle(suffixDom)?.width || '0') : 0
      contentDom.style.display = 'inline-block'
      // contentDom.style.whiteSpace = 'nowrap'
      const maxWidth = (parentDomWidth + '') || containerDom?.style?.maxWidth || containerDom?.style?.width || (containerDom ? window?.getComputedStyle(containerDom)?.width : containerDom) || (textDom ? window?.getComputedStyle(textDom)?.width : textDom)
      contentDom.innerText = textDom?.innerText || ''
      document.body.append(contentDom)
      const contentWidth = parseInt(window.getComputedStyle(contentDom).width || '0') + suffixDomWidth
      // console.log('contentWidth: ', contentWidth);
      contentWidthValue.value = parseInt(window.getComputedStyle(contentDom).width || '0')
      // console.log('contentWidthValue.value: ', contentWidthValue.value);
      const contentHeight = parseInt(window.getComputedStyle(contentDom).height || '0')
      const maxHeight = parseInt((lineClamp || '') + '' || '1') * baseHeight
      isHeightOver.value = contentHeight > maxHeight
      document.body.removeChild(contentDom)
      maxWidthValue.value = parseInt(maxWidth) - suffixDomWidth
      // console.log('maxWidthValue.value: ', maxWidthValue.value);
      isDefaultTooltip.value = (parseInt(maxWidth) * parseInt((lineClamp || '') + '' || '1')) > contentWidth
      // console.log('isDefaultTooltip.value: ', isDefaultTooltip.value);
    }

    const observer1 = new MutationObserver(() => {
      computedWidth()
    })


    watch(() => popoverVisible.value, (val) => {
      if (!val) {
        editFormRef?.value?.resetFields()
      }
    })

    const handleClose = async() => {
      const { edit } = props
      if (edit?.cancel && isFunction(edit?.cancel)) {
        const result = await edit?.cancel(() => { popoverVisible.value = false })
        if (result) {
          popoverVisible.value = false
        }
      } else {
        formState.name = ''
        popoverVisible.value = false
      }
    }

    const handleEntry = async() => {
      // editFromRef?.value?.validateFields()
      emit('editConfirm', formState.name, handleClose, editFormRef.value)
      const { afterCallback } = props
      if (isFunction(afterCallback)) {
        await afterCallback?.()
      }
    }

    // const closePopover = () => {
    //   popoverVisible.value = false
    // }

    const handleClick = () => {
      if (props.expandTrigger === 'click') {
        isChecked.value = !unref(isChecked)
      }
      // event.stopPropagation()
      // event.preventDefault()
      // window?.cancelAnimationFrame(animationId.value)
      // animationId.value = window?.requestAnimationFrame(closePopover)
      
    }
    const { copy, copied } = useClipboard({
      legacy: true
    })
    const { curLocale } = useLocale()
    const handleCopy = async () => {
      const copyText = unref(newProps).copyTxt
      const { beforeCallback, afterCallback } = props
      if (isFunction(beforeCallback)) {
        await beforeCallback?.()
      }
      await copy(String(copyText))
      if (copied && curLocale?.copy?.successMessage) {
        message.success({
          content: curLocale?.copy?.successMessage,
          duration: 1.5
        })
      }
      if (isFunction(afterCallback)) {
        await afterCallback?.()
      }
    }

    const closeEditPopover = (event: Event) => {
      if (event?.target?.className.indexOf('scEllipsis-popover') > -1) {
        popoverVisible.value = false
      }
    }

    const handleEdit = async (event: Event) => {
      event.stopPropagation()
      const { edit, isComputedEditPopoverPosition, beforeCallback } = props
      formState.name = edit.text || ''
      if (isFunction(beforeCallback)) {
        await beforeCallback?.()
      }
      if (edit && edit.show) {
        popoverVisible.value = !popoverVisible.value
        if (popoverVisible.value) {
          // waitElementReady(popoverDom, (val) => {
          //   console.log('val: ', val);
          // })
          const timer = setTimeout(() => {
            const editInputDom = document.querySelector(`.${uuid} .ant-popover-inner-content .ant-input-affix-wrapper > .ant-input`) as HTMLInputElement
            editInputDom?.focus()
            editInputDom?.setSelectionRange((formState.name + '').length, (formState.name + '').length)
            if (isComputedEditPopoverPosition) {
              const popoverDom = document.querySelector(`.${uuid} .ant-popover-content`) as HTMLElement
              const popoverContainerDom = document.querySelector(`.${uuid}.scEllipsis-popover`) as HTMLElement
              popoverContainerDom?.removeEventListener('click', closeEditPopover)
              popoverContainerDom?.addEventListener('click', closeEditPopover)
              if (contentWidthValue.value > maxWidthValue.value) {
                popoverDom.style.transform = `translateX(-${maxWidthValue.value}px)`
              }
              if (contentWidthValue.value < maxWidthValue.value) {
                popoverDom.style.transform = `translateX(-${contentWidthValue.value}px)`
              }
            }
            clearTimeout(timer)
          }, 0)
        }
        return false
      }
    }

    const handleEditChange = (val: string) => {
      emit('editInputChange', val)
    }


    onMounted(() => {
      nextTick(() => {
        computedWidth()
        const containerDom = document.querySelector(`.${uuid} .scEllipsis-text-default`) as HTMLElement
        if (containerDom || textDefaultRef.value) {
          observer1.observe(containerDom || textDefaultRef.value, { attributes: true, childList: true, characterData: true, subtree: true })
        }
        // clearTimeout(timer)
      })
    })

    onUnmounted(() => {
      observer1.disconnect()
      const popoverContainerDom = document.querySelector(`.${uuid}.scEllipsis-popover`) as HTMLElement
      popoverContainerDom?.removeEventListener('click', closeEditPopover)
      // window?.cancelAnimationFrame(animationId.value)
    })


    expose({
      computedWidth,
      editFormRef
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
      isDefaultTooltip,
      uuid,
      formState,
      editFormRef,
      isHeightOver,
      textDefaultRef,
      popoverClassName,
      // maxWidthValue,
      // contentWidthValue,

      getPopupContainer,
      handleEntry,
      handleClose,
      handleCopy,
      handleEdit,
      handleClick,
      handleEditChange
    }
  }
})
</script>
