<template>
  <div
    :class="[baseClass, vBind.widthSize ? baseClass + '-' + vBind.widthSize : '']"
    :id="uuid"
  >
    <Input
      ref="input"
      v-bind="vBind"
      v-model:value="value"
      :class="classNames"
    >
      <template #[item]="data" v-for="item in Object.keys($slots).filter(item => !['describe'].includes(item))">
        <slot :name="item" v-bind="data"></slot>
      </template>
    </Input>
    
    <slot name="describe" v-if="isDescribe"></slot>
    <p class="input-describe" v-else-if="vBind.describe">
      {{ vBind.describe }}
    </p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted, onUnmounted, ref } from 'vue'
import { Input } from 'ant-design-vue'
import { basePrefixCls } from '../../../constant'
import { buildUUID } from '../../../utils/uuid'
import { findParentDom } from '../../../utils/domHelper'
import { props } from './type'

export default defineComponent({
  name: 'ScInput',
  inheritAttrs: false,
  components: {
    Input
  },
  props: props(),
  setup (props, { attrs, emit, slots }) {
    const baseClass = basePrefixCls + 'Input'
    
    const vBind = computed(() => {
      return {...props, ...attrs}
    })

    const input = ref()

    const uuid = 'sc' + buildUUID()

    const value = computed({
      get: () => {
        return props.value || props.modelValue
      },
      set: (val) => {
        emit('update:value', val)
      }
    })

    const classNames = computed(() => {
      const classList = []
      if (props.type) {
        classList.push('is' + props.type.substring(0,1).toUpperCase() +  props.type.slice(1))
      }
      return classList
    })

    const isDescribe = computed(() => {
      return Object.keys(slots).includes('describe')
    })

    const clearCallback = (event: Event) => {
      const isParent = findParentDom(event.target, 5, (dom) => { return String(dom.className).includes('ant-input-clear-icon') ? dom : false })
        if (isParent) {
          emit('allowClear', undefined)
        }
    }

    onMounted(() => {
      const dom = document.querySelector(`#${uuid}`) as HTMLElement
      dom && dom.addEventListener('mousedown', clearCallback)
    })

    onUnmounted(() => {
      const dom = document.querySelector(`#${uuid}`) as HTMLElement
      dom && dom.removeEventListener('mousedown', clearCallback)
    })
    

    return {
      classNames,
      baseClass,
      vBind,
      value,
      isDescribe,
      uuid,
      input
    }
  }
})
</script>
