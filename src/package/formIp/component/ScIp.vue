<template>
  <div
    :class="classNames"
  >
    <template
      v-for="(item, index) in ipListRec"
    >
      <span
        v-if="index !== 0"
        :class="[baseClass + '-separatorInner']"
      >
        <span
          v-if="!isLabelSeparatorSlot "
          :class="[baseClass + '-labelSeparator']"
        >
        </span>
        <slot v-else name="labelSeparator"></slot>
      </span>
      <ScInputNumber
        :ref="ipList[index].ipRef"
        v-model:value="item.value"
        v-bind="{...item}"
        @keydown="($event: Event) => handleKeyDown(index, $event)"
        ></ScInputNumber>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, watch, unref } from 'vue'

import { ScInputNumber } from '../../inputNumber'
import { scIpProps } from './type'
import { basePrefixCls } from '../../../constant'
import { isObject, isArray } from '../../../utils/is'

export default defineComponent({
  name: 'ScIp',
  components: {
    ScInputNumber
  },
  emits: ['update:value', 'change'],
  props: scIpProps(),
  setup (props, { slots, emit }) {
    const ipListSourceRef = ref(props.modalValue)

    // const curProps = computed(() => {
    //   return props
    // })

    const isDefaultValue = ref(true)

    const focusIndex = ref(0)

    const baseClass = basePrefixCls + 'Ips'

    const classNames = computed(() => {
      return [
        baseClass
      ]
    })

    const valueRef = computed(() => {
      const { value } = props
      if (!value) {
        // return parseType === 'ipv4' ? '...' : parseType === 'ipv6' ? '......' : '...'
        return '...'
      }
      return value
    })

    const isLabelSeparatorSlot = computed(() => {
      return Object.keys(slots).includes('labelSeparator')
    })

    const ipList = computed(() => {
      const { parseSeparator, inputNumberOptions, disabledIndex, disabled } = props
      const list = (valueRef.value)?.split(`${parseSeparator}`)
      return list?.map((item: string, index: number) => {
        let newItem = {
          value: parseInt(item) || 0,
          disabled: disabledIndex?.includes(index)  || disabled,
          ipRef: ref()
        }
        if (isObject(inputNumberOptions)) {
          newItem = {...newItem, ...inputNumberOptions}
        }
        if (isArray(inputNumberOptions)) {
          newItem = {...newItem, ...inputNumberOptions[index] || { max: 255, min: 0, precision: 0, showControl: false} }
        }
        if (focusIndex.value === index) {
          newItem.autoFocus = true
        }
        return newItem
      }) || []
    })

    const ipListRec = reactive(ipList.value)

    watch(() => ipListRec.map((item:any) => item.value), val => {
      // console.log('val: ', val);
      const { joinSeparator, disabled } = props
      // const list = val.map((item: any) => { 
      //   if (isRef(item.value)) {
      //     return parseInt(unref(item.value))
      //   } else {
      //     return parseInt(item.value)
      //   }
      // })
      const curValue = val?.join(joinSeparator)
      if (!disabled) {
        emit('update:value', curValue)
        emit('change', curValue)
        isDefaultValue.value = false
      }
    }, {
      deep: true
    })

    const handleKeyDown = (index: number, event: any) => {
      // 往右切换
      if (
        event.keyCode === 39 && 
        index !== (ipListRec.length - 1) &&
        event.currentTarget?.selectionStart === (ipListRec[index].value.toString().length)
      ) {
        const { disabled, ipRef, value } = unref(ipList)[index + 1]
        if (disabled) {
          handleKeyDown(index + 1, { keyCode: 39, currentTarget: { selectionStart: value.toString().length} })
        } else {
          unref(ipList)?.ipRef?.value[0]?.blur()
          ipRef?.value[0]?.focus()
        }
      }
       // 往左切换
      if (event.keyCode === 37 && index !== 0 && event.currentTarget?.selectionStart === 0) {
        const { disabled, ipRef } = unref(ipList)[index - 1]
        if (disabled) {
          handleKeyDown(index - 1, { keyCode: 37, currentTarget: { selectionStart: 0 } })
        } else {
          unref(ipList)?.ipRef?.value[0]?.blur()
          ipRef?.value[0]?.focus()
        }
      }
    }

    return {
      baseClass,
      classNames,
      ipList,
      ipListRec,
      ipListSourceRef,
      isLabelSeparatorSlot,

      handleKeyDown
    }
  }
})
</script>