<template>
  <div :class="[baseClass, uuid, vBind.widthSize ? baseClass + '-' + vBind.widthSize : '', isPrefixIcon ? 'is-prefix' : '', newProps.disabled ? 'is-disabled' : '']" :style="{'--lastChild-height': lastChildHeight}">
    <span :class="[baseClass+'-prefix']" v-if="isPrefixIcon">
      <slot name="prefixIcon"></slot>
    </span>
    <Select
      :class="[isPrefixIcon ? 'is-prefix' : '']"
      v-bind="vBind"
      v-model:value="value"
      :disabled="newProps.disabled"
      :dropdownClassName="dropdownClassName"
      @change="handleChange"
      @dropdownVisibleChange="dropdownVisibleChange"
    >
      <!-- <template #[item]="data" v-for="item in Object.keys($slots).filter(item => !['clearIcon', 'suffixIcon', 'default'].includes(item))" :key="item">
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
      <template #default>
        <slot name="default"></slot>
        <SelectOption value="" :style="{minHeight: lastChildHeight, height: lastChildHeight}"></SelectOption>
      </template> -->
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
import { findParentDom, pxToRem } from '../../../utils/domHelper'
import { props, SizePx } from './type'

export default defineComponent({
  name: 'ScSelect',
  // inheritAttrs: false,
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

    const initValue = computed(() => props.value)
    const value = ref(unref(initValue))
    const lastChildHeight = ref('0')
    const newProps = computed(() => {
      return props
    })
    const checkboxValue = ref(unref(initValue))

    const uuid = 'sc' + buildUUID()
    const vBind = computed(() => {
      let newOptions = cloneDeep(attrs.options)
      if (newOptions) {
        newOptions?.push({value: ''})
      }
      return {
        ...unref(newProps),
        ...attrs,
        options: newOptions,
        dropdownStyle: {
          ...(attrs.dropdownStyle || {}),
          '--lastChild-height': unref(lastChildHeight)
        }
      }
    })
    if (unref(newProps)?.optionMode === 'checkbox') {
      watchEffect(() => {
        if (checkboxValue.value?.length > value.value?.length) {
          emit('change', checkboxValue.value)
        }
        value.value = checkboxValue.value
        emit('value:update',  value.value)
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

    const dropdownVisibleChange = (val: boolean) => {
      if (!val) {
        return false
      }
      nextTick(() => {
        const timer = setTimeout(() => {
          const dropdownItemContainer = document.querySelector(`.dropdown${uuid} .rc-virtual-list-holder > div`)
          if (dropdownItemContainer) {
            const preHeight = parseInt(dropdownItemContainer?.style?.height || 0) / SizePx[attrs.size || 'default']
            lastChildHeight.value = pxToRem(preHeight * 0.18)
            // lastChildHeight.value = preHeight * 0.18 + 'px'
            if (!preHeight) {
              return false
            }
          }
          clearTimeout(timer)
  
        }, 300)
      })
    }

    onMounted(() => {
      const dom = document.querySelector(`.${uuid}`) as HTMLElement
      dom && dom.addEventListener('mousedown', (event) => {
        const isParent = findParentDom(event.target, 5, (dom) => { return String(dom.className).includes('clearSelect') ? dom : false })
        if (isParent) {
          checkboxValue.value = undefined
          emit('allowClear', value.value)
        }
      })
    })
    
    return {
      uuid,
      baseClass,
      newProps,
      value,
      isSuffixIcon,
      isPrefixIcon,
      isClearIcon,
      dropdownClassName,
      checkboxValue,
      checkboxOptions,
      lastChildHeight,
      vBind,
      handleChange,
      dropdownVisibleChange
    }
  }
})
</script>
