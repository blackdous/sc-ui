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
      @change="handleChange"
      >
      <!-- @dropdownVisibleChange="dropdownVisibleChange" -->
      <template #[item]="data" v-for="item in Object.keys($slots).filter(item => !['clearIcon', 'suffixIcon'].includes(item))" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template> 
      <template v-if="newProps.optionMode === 'checkbox'" #dropdownRender>
        <CheckboxGroup
          v-model:value="checkboxValue"
        >
          <div 
            v-for="item in checkboxOptions"
            :class="item.className"
          >
            <div class="ant-select-item-option-content">
              <Checkbox
                v-bind="item"
              >
                {{item.label || item.value}}
              </Checkbox>
            </div>
          </div>
        </CheckboxGroup>
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

import { computed, defineComponent, ref, unref, onMounted, watchEffect, nextTick } from 'vue'
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
  components: {
    Select,
    CheckboxGroup,
    SelectOption,
    Checkbox,
    CloseCircleFilled,
  },
  setup(props, { emit, slots, attrs }) {
    const baseClass = basePrefixCls + 'Select'

    const initValue = ref()
    watchEffect(() => {
      initValue.value = props.value
    })
    const newProps = computed(() => {
      return props
    })
    const checkboxValue = ref(unref(initValue))

    const uuid = 'sc' + buildUUID()
    const vBind = computed(() => {
      let newOptions = cloneDeep(attrs.options)
      return {
        ...unref(newProps),
        ...attrs,
        options: newOptions,
        dropdownStyle: {
          ...(attrs.dropdownStyle || {}),
        }
      }
    })
    if (unref(newProps)?.optionMode === 'checkbox') {
      watchEffect(() => {
        if (checkboxValue.value?.length > initValue.value?.length) {
          emit('change', checkboxValue.value)
        }
        initValue.value = checkboxValue.value
        emit('value:update',  initValue.value)
      })
    }

    const checkboxOptions = computed(() => {
      // @ts-ignore
      return attrs?.options?.map((item:any) => {
        const checkboxUnref = unref(checkboxValue)
         // @ts-ignore
        if (checkboxUnref?.includes(item.value)) {
          item.className = ['ant-select-item', 'ant-select-item-option', 'ant-select-item-option-selected']
        } else {
          item.className = ['ant-select-item', 'ant-select-item-option']
        }
        return item
      })
    })

    const handleChange = (val:any) => {
      checkboxValue.value = val
    }
    
    const dropdownClassName = computed(() => {
      const dropdownClass = ['dropdown' + uuid, 'selectDropdown']
      if (attrs.size) {
        dropdownClass.push('dropdown-' + attrs.size)
      }
      if (attrs.dropdownClassName) {
        dropdownClass.push(attrs.dropdownClassName)
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
          checkboxValue.value = undefined
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
      checkboxValue,
      checkboxOptions,
      vBind,
      handleChange,
    }
  }
})
</script>
