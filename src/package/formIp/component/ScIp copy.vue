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
      <!-- <ScInputNumber
        :ref="ipList[index].ipRef"
        v-model:value="item.value"
        v-bind="{...item}"
        @change="handleChange"
        @keydown="($event: Event) => handleKeyDown(index, $event)"
        ></ScInputNumber> -->
        <input
          :class="[baseClass + '-input', 'ant-input']"
          :ref="ipList[index].ipRef"
          v-model="item.value"
          v-bind="{...item}"
          @keydown="($event: Event) => handleKeyDown(index, $event)"
          @change="handleChange"
          @blur="($event: Event) => handleBlur(index, $event)"
          @keyup="($event: Event) => handleInput(index, $event)"
        >
          <!-- @input="handleInput" -->
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
      const { parseSeparator, inputNumberOptions, disabledIndex, disabled, value, needDefault, type } = props
      // console.log('disabledIndex: ', disabledIndex);
      const list = (valueRef.value)?.split(`${parseSeparator}`)
      const newList = list?.map((item: string, index: number) => {
        let newItem = {
          value: !needDefault ? undefined : parseInt(item) || 0,
          disabled: disabledIndex?.includes(index)  || disabled,
          ipRef: ref(),
          needDefault: needDefault,
          type: type
        }
        if (isObject(inputNumberOptions)) {
          newItem = {...newItem, ...inputNumberOptions}
        }
        if (isArray(inputNumberOptions)) {
          newItem = {...{ max: 255, min: 0, precision: 0, showControl: false}, ...newItem, ...inputNumberOptions[index] }
        }
        console.log('newItem: ', newItem);
        return newItem
      }) || []
      return newList
    })
    

    const ipListRec = reactive(ipList.value)
    // console.log('ipListRec: ', ipListRec);

    watch(() => ipListRec.map((item:any) => item.value), val => {
      const { joinSeparator, disabled } = props
      const curValue = val?.join(joinSeparator)
      if (!disabled && !isProps.value) {
        emit('update:value', curValue)
        emit('change', curValue)
        isDefaultValue.value = false
        isProps.value = false
      }
    }, {
      deep: true
    })

    watch(() => props.disabledIndex, (val: number[]) => {
      const { disabled } = props
      ipListRec.forEach((item: any, index: number) => {
        if (val.includes(index)) {
          item.disabled = true || disabled
        } else {
          item.disabled = false || disabled
        }
        
      })
    }, {
      immediate: true
    })

    watch(() => props.value, (val:any) => {
      valueRef.value = val || '...'
      const { parseSeparator, needDefault } = props
      if (needDefault) {
        const list = (val || '...')?.split(`${parseSeparator}`)
        list?.forEach((item: any, index: number) => {
          isProps.value = true
          ipListRec[index].value = parseInt(item) || 0
        })
      }
    }, {
      immediate: true
    })

    const handleKeyDown = (index: number, event: any) => {
      // 往右切换
      if (
        event.keyCode === 39 && 
        index !== (ipList.value.length - 1) &&
        event.currentTarget?.selectionStart === (ipList.value[index].value?.toString().length || 0)
      ) {
        const { disabled, ipRef, value } = unref(ipList)[index + 1]
        if (disabled) {
          handleKeyDown(index + 1, { keyCode: 39, currentTarget: { selectionStart: value?.toString().length || 0} })
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

    const handleChange = (val:any) => {
      // console.log('val: ', val);
      isProps.value = false
    }

    const handleBlur = (index: number, event: Event) => {
      // console.log('event: ', event.target.value);
      const curRef = ipListRec[index].ipRef
      console.log('curRef: ', curRef);
      // ipListRec[index].value = event
    }

    const handleInput = (index: number, event: Event) => {
      const { type } = props
      const inputNumberOptions = 
      if (type === 'number') {
        // const _value = event?.target?.value?.replace(/\D/g, '')
        // isProps.value = false
        // ipListRec[index].value = _value
        // console.log('_value: ', _value);
      }
      // const isNumber = (/D/g).test(_value)
      // console.log('isNumber: ', isNumber);
      // // return false
      // event.stopPropagation()
      // event.preventDefault()
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
                  if (index !== 3) {
                    isProps.value = true
                  } else {
                    isProps.value = false
                  }
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
      handleInput,
      handleBlur,
      handleKeyDown
    }
  }
})
</script>