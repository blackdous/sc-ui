<template>
  <div :class="[baseClass, uuid, isPrefixIcon ? 'is-prefix' : '', newProps.disabled ? 'is-disabled' : '']">
    <span :class="[baseClass+'-prefix']" v-if="isPrefixIcon">
      <slot name="prefixIcon"></slot>
    </span>
    <Cascader
      :class="[isPrefixIcon ? 'is-prefix' : '']"
      v-bind="$attrs"
      v-model:value="value"
      :disabled="newProps.disabled"
      :dropdownClassName="dropdownClassName"
      @change="handleChange"
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
  </div>
</template>

<script lang="ts" >

import { computed, defineComponent, ref, unref, onMounted } from 'vue'
import { Cascader, CheckboxGroup, Checkbox } from 'ant-design-vue'
import { CloseCircleFilled } from '@ant-design/icons-vue'
import { basePrefixCls } from '../../../constant'
import { buildUUID } from '../../../utils/uuid'
import { findParentDom } from '../../../utils/domHelper'
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

    const initValue = computed(() => props.value)
    const value = ref(unref(initValue))
    const newProps = computed(() => {
      return props
    })
    const checkboxValue = ref(unref(initValue))

    const uuid = 'sc' + buildUUID()

    const handleChange = (val) => {
      // console.log('val: ', val);
      checkboxValue.value = val
    }
    
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
      handleChange
    }
  }
})
</script>
