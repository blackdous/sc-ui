<template>
  <div 
    :class="[ 
      baseClass, 
      uuid, 
      vBind.widthSize ? baseClass + '-' + vBind.widthSize : '', 
      newProps.disabled ? 'is-disabled' : '',
      $attrs.class
    ]"
    :style="{'--preWidth': prefixWidth || '7px', ...$attrs.style }"
  >
    <div :class="[
      isPrefixIcon ? 'is-prefix' : ''
    ]">
      <span :class="[baseClass+'-prefix']" v-if="isPrefixIcon">
        <slot name="prefixIcon"></slot>
      </span>
      <Select
        :class="[isPrefixIcon ? 'is-prefix' : '']"
        v-bind="vBind"
        v-model:value="initValue"
        :disabled="newProps.disabled"
        :dropdownClassName="dropdownClassName"
        @dropdownVisibleChange="handleDropdownVisibleChange"
        >
        <!-- @change="handleChange" -->
        <template #[item]="data" v-for="item in Object.keys($slots).filter(item => !['clearIcon', 'suffixIcon'].includes(item))" :key="item">
          <slot :name="item" v-bind="data || {}"></slot>
        </template> 
    
        <template #suffixIcon>
          <i 
            v-if="!isSuffixIcon"
            class="sc-ui sc-you" 
          />
          <slot v-else slot="suffixIcon" />
        </template>
        <template #clearIcon>
          <CloseCircleFilled class="clearSelect" v-if="!isClearIcon" />
          <span v-else class="clearSelect">
            <slot  slot="clearIcon">
            </slot>
          </span>
        </template>
      </Select>
    </div>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, unref, onMounted, onBeforeUnmount, ref } from 'vue'
import { Select, CheckboxGroup, Checkbox, SelectOption } from 'ant-design-vue'
import { CloseCircleFilled } from '@ant-design/icons-vue'
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
  emits: ['change', 'update:value', 'allowClear'],
  components: {
    Select,
    CheckboxGroup,
    SelectOption,
    Checkbox,
    CloseCircleFilled,
  },
  setup(props, { emit, slots, attrs, expose }) {
    const baseClass = basePrefixCls + 'Select'

    const prefixWidth = ref()
    const initValue = computed({
      get:() => {
        return props.optionMode === 'checkbox' ? props.value === undefined ? [] : props.value : props.value
      },
      set: (val) => {
        emit('update:value',  val)
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
      const dropdownClass = ['dropdown ' + uuid, 'scSelectDropdown', 'selectDropdown']
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

    const handleDropdownVisibleChange = (val:boolean) => {
      if (val) {
        const timer = setTimeout(() => {
          const doc = document.querySelector(`.${uuid} .rc-virtual-list-scrollbar-show`)
          if (doc) {
            const docu = document.querySelector(`.${uuid}.selectDropdown`)
            docu && (docu.className.includes('isSelectScroll') ? '' : docu.className = docu.className + ' isSelectScroll')
          }
          clearTimeout(timer)
        }, 200)
      }
    }

    const computePrefixWidth = () => {
      const prefixDom = document.querySelector(`.${uuid} .scSelect-prefix`) as HTMLElement
        prefixWidth.value = pxToRem(String((prefixDom && (prefixDom.offsetWidth || prefixDom.clientWidth || prefixDom.scrollWidth) + 24) || 0))
    }

    onMounted(() => {
      const dom = document.querySelector(`.${uuid}`) as HTMLElement
      dom && dom.addEventListener('mousedown', clearCall)

      // const timer = setTimeout(() => {
      //   computePrefixWidth()
      //   clearTimeout(timer)
      // }, 200)
      const prefixDom = document.querySelector(`.${uuid} .scSelect-prefix`) as HTMLElement
      waitElementReady(prefixDom, () => {
        computePrefixWidth()
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
