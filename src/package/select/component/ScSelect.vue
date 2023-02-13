<template>
  <div :class="[ baseClass, uuid, vBind.widthSize ? baseClass + '-' + vBind.widthSize : '', isPrefixIcon ? 'is-prefix' : '', newProps.disabled ? 'is-disabled' : '']"
  >
    <span :class="[baseClass+'-prefix']" v-if="isPrefixIcon">
      <slot name="prefixIcon"></slot>
    </span>
    <Select
      :class="[isPrefixIcon ? 'is-prefix' : '']"
      v-bind="vBind"
      v-model:value="initValue"
      :disabled="newProps.disabled"
      :dropdownClassName="dropdownClassName"
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
</template>

<script lang="ts" >

import { computed, defineComponent, unref, onMounted } from 'vue'
import { Select, CheckboxGroup, Checkbox, SelectOption } from 'ant-design-vue'
import { CloseCircleFilled } from '@ant-design/icons-vue'
import cloneDeep from 'lodash/cloneDeep'

import { basePrefixCls } from '../../../constant'
import { buildUUID } from '../../../utils'
import { findParentDom } from '../../../utils/domHelper'
import { props } from './type'

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
  setup(props, { emit, slots, attrs }) {
    const baseClass = basePrefixCls + 'Select'
    const initValue = computed({
      get:() => {
        return props.optionMode === 'checkbox' ? props.value === undefined ? [] : props.value : props.value
      },
      set: (val) => {
        // console.log('val: ', val);
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
        onChange: undefined
      }
    })    
    const dropdownClassName = computed(() => {
      const dropdownClass = ['dropdown' + uuid, 'selectDropdown']
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

    onMounted(() => {
      const dom = document.querySelector(`.${uuid}`) as HTMLElement
      dom && dom.addEventListener('mousedown', (event) => {
        const isParent = findParentDom(event.target, 5, (dom) => { return String(dom.className).includes('clearSelect') ? dom : false })
        if (isParent) {
          emit('allowClear', initValue.value)
        }
      })
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
    }
  }
})
</script>
