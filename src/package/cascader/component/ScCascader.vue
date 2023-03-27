<template>
  <div :class="[baseClass, uuid, newProps.widthSize ? baseClass + '-' + newProps.widthSize : '', isPrefixIcon ? 'is-prefix' : '', newProps.disabled ? 'is-disabled' : '']">
    <span>
      <span :class="[baseClass+'-prefix']" v-if="isPrefixIcon">
        <slot name="prefixIcon"></slot>
      </span>
      <Cascader
        :class="[isPrefixIcon ? 'is-prefix' : '']"
        v-bind="vBind"
        v-model="value"
        :disabled="newProps.disabled"
        :dropdownClassName="dropdownClassName"
      >
        <template #[item]="data" v-for="item in Object.keys($slots).filter(item => !['clearIcon', 'suffixIcon'].includes(item))" :key="item">
          <slot :name="item" v-bind="data || {}"></slot>
        </template> 
    
        <template #suffixIcon>
          <span v-if="!isSuffixIcon">
            <i 
              class="sc-ui sc-xiangxia" 
            />
          </span>
          <slot v-else slot="suffixIcon" />
        </template>
        <template #clearIcon>
          <CloseCircleFilled class="clearSelect" v-if="!isClearIcon" />
          <span v-else class="clearSelect">
            <slot  slot="clearIcon">
            </slot>
          </span>
        </template>
      </Cascader>
    </span>
  </div>
</template>

<script lang="ts" >

import { computed, defineComponent, unref } from 'vue'
import { Cascader, CheckboxGroup, Checkbox } from 'ant-design-vue'
import { CloseCircleFilled } from '@ant-design/icons-vue'
import { basePrefixCls } from '../../../constant'
import { buildUUID } from '../../../utils/uuid'
import { props } from './type'

export default defineComponent({
  name: 'ScCascader',
  // inheritAttrs: false,
  props: props(),
  components: {
    Cascader,
    CheckboxGroup,
    Checkbox,
    CloseCircleFilled,
  },
  setup(props, { emit, slots, attrs }) {
    const baseClass = basePrefixCls + 'Cascader'

    // const initValue = computed(() => props.value)
    const value = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        emit('update:value', val)
      }
    })
    const newProps = computed(() => {
      return props
    })

    const vBind = computed(() => {
      return {
        ...unref(newProps),
        ...attrs,
        class: undefined,
        style: undefined
      }
    })

    const uuid = 'sc' + buildUUID()
    
    const dropdownClassName = computed(() => {
      const dropdownClass = []
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
    
    return {
      uuid,
      baseClass,
      newProps,
      value,
      vBind,
      isSuffixIcon,
      isPrefixIcon,
      isClearIcon,
      dropdownClassName,
      // handleChange
    }
  }
})
</script>
