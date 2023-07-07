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
        @change="handleChange"
        @keydown="($event: Event) => handleKeyDown(index, $event)"
        ></ScInputNumber>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, reactive, unref, onMounted, nextTick } from 'vue'
import { message } from 'ant-design-vue'

import { ScInputNumber } from '../../inputNumber'
import { scIpProps } from './type'
import { basePrefixCls } from '../../../constant'
import { isObject, isArray } from '../../../utils/is'
import { buildUUID } from '../../../utils'

export default defineComponent({
  name: 'ScIp',
  components: {
    ScInputNumber
  },
  emits: ['update:value', 'change'],
  props: scIpProps(),
  setup (props, { slots, emit }) {
    const ipListSourceRef = ref(props.modalValue)

    const isDefaultValue = ref(true)

    const focusIndex = ref(0)

    const baseClass = basePrefixCls + 'Ips'

    const ipv4Region = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/

    const uuid = basePrefixCls + buildUUID()

    const isProps = ref(false)

    const classNames = computed(() => {
      return [
        uuid,
        baseClass
      ]
    })

    const valueRef = ref(props.value || '...')
    
    const isLabelSeparatorSlot = computed(() => {
      return Object.keys(slots).includes('labelSeparator')
    })

    const ipList = computed(() => {
      const { parseSeparator, inputNumberOptions, disabledIndex, disabled } = props
      const list = (valueRef.value)?.split(`${parseSeparator}`)
      const newList = list?.map((item: string, index: number) => {
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
      return newList
    })
    

    const ipListRec = reactive(ipList.value)

    watch(() => ipListRec.map((item:any) => item.value), val => {
      const { joinSeparator, disabled } = props
      const curValue = val?.join(joinSeparator)
      console.log('isProps.value: ', isProps.value);
      if (!disabled && !isProps.value) {
        emit('update:value', curValue)
        emit('change', curValue)
        isDefaultValue.value = false
        isProps.value = false
      }
    }, {
      deep: true
    })

    watch(() => props.value, (val:any) => {
      valueRef.value = val || '...'
      const { parseSeparator } = props
      const list = (val || '...')?.split(`${parseSeparator}`)
      list?.forEach((item: any, index: number) => {
        isProps.value = true
        ipListRec[index].value = parseInt(item) || 0
      })
    }, {
      immediate: true
    })

    const handleKeyDown = (index: number, event: any) => {
      // 往右切换
      if (
        event.keyCode === 39 && 
        index !== (ipList.value.length - 1) &&
        event.currentTarget?.selectionStart === (ipList.value[index].value.toString().length)
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

    const handleChange = () => {
      isProps.value = false
    }

    onMounted(() => {
      nextTick(() => {
        const inputList = document.querySelectorAll(`.${uuid} .ant-input-number-input`)
        inputList?.forEach((item: HTMLInputElement) => {
          item.addEventListener('paste', (event: Event) => {
            const { disabledIndex, parseSeparator } = props
            const currList = String(valueRef.value)?.split(parseSeparator)
            event.preventDefault()
            let pasteStr = (event?.clipboardData || window?.clipboardData).getData("text");
            const pasteList = ipv4Region.test(pasteStr.trim()) ? pasteStr.split(parseSeparator) : false
            if (pasteList) {
              if (pasteList.length === 4) {
                const newList = currList.map((valueItem, _index) => {
                  if (!disabledIndex.includes(_index)) {
                    valueItem = pasteList[_index]
                  }
                  return valueItem
                })
                newList?.forEach((item: any, index: number) => {
                  isProps.value = true
                  ipListRec[index].value = parseInt(item) || 0
                })
              }
            } else {
              message.warning('粘贴不符合ipv4格式')
            }
          })
        })
      })
    }) 

    return {
      baseClass,
      classNames,
      ipList,
      ipListRec,
      ipListSourceRef,
      isLabelSeparatorSlot,

      handleChange,
      handleKeyDown
    }
  }
})
</script>