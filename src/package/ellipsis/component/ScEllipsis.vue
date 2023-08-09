<template>
  <Tooltip v-bind="tooltipProps">
    <template #title v-if="isTooltip && !tooltipProps.title">
      <slot v-if="$slots.tooltip" name="tooltip"></slot>
      <slot v-if="!$slots.tooltip && !isDefaultTooltip" name="default"></slot>
    </template>
    <Popover 
      v-model:visible="popoverVisible" 
      :title="null" 
      trigger="click" 
      :overlayClassName="`scEllipsis-popover ${uuid}`"
      placement="bottomLeft"
      :getPopupContainer="newProps.edit.getPopupContainer"
    >
      <template #content>
        <Form
          ref="editFormRef"
          :model="formState"
          :rules="newProps.edit.rules"
        >
          <FormItem
            label=""
            name="name"
          >
            <ScInput 
              v-model:value="formState.name" 
              v-bind="newProps.edit"
              :describe="''"
              @change="handleEditChange"
            >
              <template #suffix v-if="newProps.edit.showMaxLength">
                {{ (formState.name + '').length }}/{{ newProps.edit.maxLength }}
              </template>
            </ScInput>
          </FormItem>
          <p class="input-describe">
            {{ newProps.edit.describe }}
          </p>
        </Form>
        <div 
          :class="[baseClass + '-actives']" 
          :style="{
            textAlign: newProps?.edit?.align || 'right'
          }"
        >
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
          <span 
            v-if="$slots.suffix || newProps?.copyTxt || newProps?.edit?.show"
            :class="[baseClass + '-suffix']" 
          >
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
import { defineComponent, computed, ref, unref, nextTick, onMounted, reactive, watch } from 'vue'
import { Tooltip, message, Popover, Popconfirm, Form, FormItem } from 'ant-design-vue'
import { useClipboard } from '@vueuse/core'

import { basePrefixCls } from '../../../constant'
import { ScButton } from '../../button'
import { ScInput } from '../../input'
//@ts-ignore
import { ellipsisProps } from './type'
import { isBoolean, isObject, buildUUID } from '../../../utils'
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

    const formState = reactive({
      name: ''
    })

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
        props.hoverSuffix ? baseClass + '-hoverSuffix' : '',
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

    watch(() => popoverVisible.value, (val) => {
      if (!val) {
        editFormRef?.value?.resetFields()
      }
    })

    const handleClose = () => {
      formState.name = ''
      popoverVisible.value = false
    }

    const handleEntry = () => {
      // editFromRef?.value?.validateFields()
      emit('editConfirm', formState.name, handleClose, editFormRef.value)
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
      formState.name = edit.text || ''
      if (edit && edit.show) {
        popoverVisible.value = !popoverVisible.value
        if (popoverVisible.value) {
          // const popoverDom = document.querySelector(`.${uuid} .ant-popover-inner-content .ant-input-affix-wrapper > .ant-input`) as HTMLElement
          // waitElementReady(popoverDom, (val) => {
          //   console.log('val: ', val);
            
          //   // console.log('editFormRef.value: ', editFormRef.value);
          //   // editFormRef?.value?.resetFields()
          // })
          const timer = setTimeout(() => {
            const editInputDom = document.querySelector(`.${uuid} .ant-popover-inner-content .ant-input-affix-wrapper > .ant-input`) as HTMLInputElement
            editInputDom?.focus()
            clearTimeout(timer)
          }, 150)
        }
        return false
      }
    }

    const computedWidth = () => {
      const { isInheritParentWidth } = props
      const textDom = document.querySelector(`.${uuid} .scEllipsis-text`) as HTMLElement
      const containerDom = document.querySelector(`.${uuid}`) as HTMLElement
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { width, paddingLeft, paddingRight, borderLeftWidth, borderRightWidth } = window?.getComputedStyle(containerDom?.parentNode as HTMLElement)
      const parentDomWidth = (isInheritParentWidth && !containerDom.style.maxWidth && !containerDom.style.maxWidth) ? parseInt(width) - parseInt(borderRightWidth) - parseInt(borderLeftWidth) - parseInt(paddingRight) - parseInt(paddingLeft) : ''
      const contentDom = document.createElement('p')
      const suffixDom =  document.querySelector(`.${uuid} .scEllipsis-suffix`) as HTMLElement
      contentDom.style.display = 'inline-block'
      const maxWidth = (parentDomWidth + '') || containerDom.style.maxWidth || containerDom.style.width || window?.getComputedStyle(containerDom)?.width || window?.getComputedStyle(textDom)?.width

      contentDom.innerText = textDom?.innerText || ''
      document.body.append(contentDom)
      const contentWidth = parseInt(window.getComputedStyle(contentDom).width || '0') + (suffixDom ? parseInt(window?.getComputedStyle(suffixDom)?.width || '0') : 0)
      document.body.removeChild(contentDom)
      isDefaultTooltip.value = parseInt(maxWidth) > contentWidth
    }

    const handleEditChange = (val:string) => {
      emit('editInputChange', val)
    }


    onMounted(() => {
      nextTick(() => {
        computedWidth()
      })
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
