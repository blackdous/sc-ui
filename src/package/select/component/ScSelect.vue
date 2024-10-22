<template>
  <div :class="[
      baseClass,
      uuid,
      vBind.widthSize ? baseClass + '-' + vBind.widthSize : '',
      newProps.disabled ? 'is-disabled' : '',
      $attrs.class,
    ]" 
    :style="{ '--preWidth': prefixWidth || '7px', ...$attrs.style }
  ">
    <div :class="[
      isPrefixIcon ? 'is-prefix' : ''
    ]">
      <span :class="[baseClass + '-prefix']" v-if="isPrefixIcon">
        <slot name="prefixIcon"></slot>
      </span>
      <Select 
        v-model:value="initValue"
        v-bind="vBind" 
        :class="[isPrefixIcon ? 'is-prefix' : '', newProps.infoTooltip ? 'is-info' : '']" 
        :disabled="newProps.disabled" 
        :dropdownClassName="dropdownClassName"
        @dropdownVisibleChange="handleDropdownVisibleChange">
        <template #[item]="data"
          v-for="item in Object.keys($slots).filter(item => !['clearIcon', 'suffixIcon'].includes(item))" :key="item">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>

        <template #suffixIcon>
          <i v-if="!isSuffixIcon && !newProps.infoTooltip" class="sc-ui sc-you" />
          <span :class="[newProps.infoTooltip ? 'is-info--icon' : '']" v-else-if="newProps.infoTooltip">
            <i class="sc-ui sc-you" />
            <Tooltip
            >
              <template #title>
                {{ newProps.infoTooltip }}
              </template>
              <i class="sc-ui sc-question-circle"></i>
            </Tooltip>
            <slot slot="suffixIcon" />
          </span>
          <slot v-else slot="suffixIcon" />
        </template>
        <template #clearIcon>
          <CloseCircleFilled class="clearSelect" v-if="!isClearIcon" />
          <span v-else class="clearSelect">
            <slot slot="clearIcon">
            </slot>
          </span>
        </template>
      </Select>
      <!-- <span :class="[baseClass + '-suffix']" v-if="newProps.infoTooltip">
        <Tooltip>
          <template #title>
            {{ newProps.infoTooltip }}
          </template>
          <QuestionCircleOutlined />
        </Tooltip>
      </span> -->
    </div>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, unref, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { Select, Tooltip, SelectOption } from 'ant-design-vue'
import { CloseCircleFilled, QuestionCircleOutlined } from '@ant-design/icons-vue'
// import cloneDeep from 'lodash/cloneDeep'
import lodash from 'lodash'

import { basePrefixCls } from '../../../constant'
import { buildUUID, pxToRem } from '../../../utils'
import { findParentDom } from '../../../utils/domHelper'
import { props } from './type'
import { waitElementReady } from '../../../utils/dom/waitElementReady'

const { cloneDeep } = lodash

export default defineComponent({
  name: 'ScSelect',
  inheritAttrs: false,
  props: props(),
  emits: ['change', 'update:value', 'allowClear', 'dropdownVisibleChange'],
  components: {
    Select,
    SelectOption,
    CloseCircleFilled,
    QuestionCircleOutlined,
    Tooltip
  },
  setup(props, { emit, slots, attrs, expose }) {
    const baseClass = basePrefixCls + 'Select'

    const prefixWidth = ref()
    const tooltipDom = ref()

    const divDom = document.createElement("div")
    divDom.style.position = 'absolute'
    divDom.style.top = '0px'
    divDom.style.left = '0px'
    divDom.style.width = '100%'
    tooltipDom.value = divDom

    const initValue = computed({
      get: () => {
        return props.optionMode === 'checkbox' ? props.value === undefined ? [] : props.value : props.value
      },
      set: (val) => {
        emit('update:value', val)
        emit('change', val)
      }
    })
    const newProps = computed(() => {
      return {
        ...props
      }
    })

    const uuid = 'sc' + buildUUID()
    const vBind = computed(() => {
      let newOptions = cloneDeep(attrs.options)
      // console.log('newOptions: ', newOptions);
      return {
        ...unref(newProps),
        ...attrs,
        options: newOptions,
        dropdownStyle: {
          ...(attrs.dropdownStyle || {}),
        },
        onChange: undefined,
        class: undefined,
        style: undefined
      }
    })
    const dropdownClassName = computed(() => {
      const dropdownClass = ['dropdown ' + uuid, 'scSelectDropdown', 'selectDropdown', props.tooltip ? 'is-tooltip' : '']
      if (attrs.size) {
        dropdownClass.push('dropdown-' + attrs.size)
      }
      if (attrs.dropdownClassName) {
        dropdownClass.push(attrs.dropdownClassName)
      }
      if (props.optionMode === 'checkbox') {
        dropdownClass.push('scDropdown-checkbox')
      }
      return dropdownClass.join(' ')
    })

    const isSuffixIcon = computed(() => {
      return Object.keys(slots).includes('suffixIcon')
    })

    const isPrefixIcon = computed(() => {
      return Object.keys(slots).includes('prefixIcon')
    })

    const isClearIcon = computed(() => {
      return Object.keys(slots).includes('clearIcon')
    })

    const clearCall = (event: Event) => {
      const isParent = findParentDom(event.target, 5, (dom) => { return String(dom.className).includes('clearSelect') ? dom : false })
      if (isParent) {
        emit('allowClear', initValue.value)
      }
    }

    const handleDropdownVisibleChange = (val: boolean) => {
      if (val) {
        nextTick(() => {
          const { tooltip } = props
          const dropdownDom = document.querySelector(`.${uuid}.scSelectDropdown`) as HTMLElement
          waitElementReady(dropdownDom, () => {
            if (tooltip) {
              showTooltip()
            }
            nextTick(() => {
              const virtualListDom = document.querySelector(`.${uuid} .rc-virtual-list-holder div`)
              if (virtualListDom?.style?.height) {
                virtualListDom.style.marginRight = '4px'
              }
            })
          })

        })
      } else {
        const dropdownDom = document.querySelector(`.${uuid}.scSelectDropdown`) as HTMLElement
        dropdownDom && dropdownDom?.removeEventListener('mouseover', mouseoverEvent)
      }
      emit('dropdownVisibleChange')
    }

    const computePrefixWidth = () => {
      const selectDom = document.querySelector(`.${uuid} .ant-select-selector`) as HTMLElement
      selectDom && (selectDom.style.display = 'none')
      const prefixDom = document.querySelector(`.${uuid} .scSelect-prefix`) as HTMLElement
      prefixWidth.value = pxToRem(String((prefixDom && (prefixDom.offsetWidth || prefixDom.clientWidth || prefixDom.scrollWidth) + 24) || 0))
      selectDom && (selectDom.style.paddingLeft = prefixWidth.value)
      selectDom && (selectDom.style.display = 'inline-block')
    }

    const mouseoverEvent = (event: any) => {
      if (event.target.className.includes('ant-select-item-option')) {
        event.target.title = ''
      }
      if (!event.target.className.includes('ant-select-item-option-content')) {
        return false
      }
      const rect = event?.target?.getBoundingClientRect()
      const { isAddTooltipScrollHeight, tooltipAlign } = props
      const bodyScrollLeft = isAddTooltipScrollHeight ? document.documentElement.scrollLeft : 0
      const bodyScrollTop = isAddTooltipScrollHeight ? document.documentElement.scrollTop : 0
      const newPDom = document.createElement("div")
      document.body.appendChild(newPDom)
      newPDom.className = 'ant-select-item-option-content'
      newPDom.style.display = 'inline-block'
      newPDom.style.position = 'absolute'
      newPDom.style.height = '0'
      newPDom.innerHTML = event?.target?.innerHTML
      const clientWidth = event?.target?.clientWidth
      const scrollWidth = (newPDom?.clientWidth + 16) ||  event?.target?.scrollWidth || event?.target?.clientWidth
      if (scrollWidth >= clientWidth) {
        const posLeft = tooltipAlign === 'left' ? rect.left - 252 : rect.left + rect.width + bodyScrollLeft + 10
        const posTop = rect.top + bodyScrollTop
        // const posTop = rect.top + bodyScrollTop + (rect.height / 2) - (contentHeight / 2)
        const innerText = event?.target.innerText
        const tooltipHTML = `
            <div style=>
              <!---->
              <div class="ant-tooltip ${tooltipAlign === 'left' ? 'ant-tooltip-placement-left' : 'ant-tooltip-placement-right'} scSelect-tooltip" style="left: ${posLeft}px;top: ${posTop}px; /* display: none; */">
                <div class="ant-tooltip-content">
                  <div class="ant-tooltip-arrow">
                    <span class="ant-tooltip-arrow-content"></span>
                  </div>
                  <div class="ant-tooltip-inner" role="tooltip">
                    ${innerText}
                  </div>
                </div>
              </div>
            </div>
          `
        divDom.innerHTML = tooltipHTML
      } else {
        divDom.innerHTML = ``
      }
      document.body.removeChild(newPDom)
    }

    const showTooltip = () => {
      const dropdownDom = document.querySelector(`.${uuid}.scSelectDropdown`)
      dropdownDom?.addEventListener('mouseover', mouseoverEvent)
      dropdownDom?.addEventListener('mouseout', () => {
        divDom.innerHTML = ``
      })
    }

    watch(() => props.tooltip, (val: boolean) => {
      const isInset = document.body.contains(tooltipDom.value)
      if (val) {
        if (!isInset) {
          document.body.appendChild(tooltipDom.value)
        }
      } else {
        isInset && document.body.removeChild(tooltipDom.value)
      }

    }, {
      immediate: true
    })

    onMounted(() => {
      const dom = document.querySelector(`.${uuid}`) as HTMLElement
      dom && dom.addEventListener('mousedown', clearCall)

      const prefixDom = document.querySelector(`.${uuid} .scSelect-prefix`) as HTMLElement
      waitElementReady(prefixDom, () => {
        Object.keys(slots).includes('prefixIcon') && computePrefixWidth()
      })
    })

    onBeforeUnmount(() => {
      const dom = document.querySelector(`.${uuid}`) as HTMLElement
      dom && dom.removeEventListener('mousedown', clearCall)
    })

    expose({
      computePrefixWidth
    })

    return {
      uuid,
      baseClass,
      newProps,
      initValue,
      isSuffixIcon,
      isPrefixIcon,
      isClearIcon,
      dropdownClassName,
      vBind,
      prefixWidth,
      handleDropdownVisibleChange
    }
  }
})
</script>
