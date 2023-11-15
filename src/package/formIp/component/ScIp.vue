<template>
  <div
    :class="classNames"
  >
    <template
      v-for="(item, index) in ipListRec.list"
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
      <Tooltip
        :trigger="item.tooltipTrigger || ['hover', 'focus']"
      >
        <template #title v-if="newInputNumberOptions[index]?.tooltipDes">
          <component :is='item.tooltipDes' v-if="isVNode(newInputNumberOptions[index].tooltipDes)"></component>
          <span v-else class="formIp-tooltip">{{ newInputNumberOptions[index].tooltipDes }}</span>
        </template>
        <input
          :class="[baseClass + '-input', 'ant-input']"
          :ref="refList[index as number]"
          v-model="item.value"
          v-bind="{...item}"
          @input="($event) => checkIpVal(index as number)"
          @blur="($event) => setVal(index as number)"
          @keydown="($event) => handleKeyboardDelete(index as number, $event)"
          @keyup="($event) => turnIpPOS(index as number, $event)"
        >
      </Tooltip>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, reactive, unref, onMounted, nextTick, isVNode } from 'vue'
import { message, Tooltip } from 'ant-design-vue'

import { scIpProps, IpItemType } from './type'
import { basePrefixCls } from '../../../constant'
import { isObject, isArray } from '../../../utils/is'
import { buildUUID } from '../../../utils'

export default defineComponent({
  name: 'ScIp',
  emits: ['update:value', 'change'],
  props: scIpProps(),
  components: {
    Tooltip
  },
  setup (props, { slots, emit }) {
    const ipListSourceRef = ref(props.modalValue)

    const baseClass = basePrefixCls + 'Ips'

    const ipv4Region = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/

    const uuid = basePrefixCls + buildUUID()

    const isProps = ref(false)

    const keyDownSelectionStart = ref(0)

    const refList = ref([])

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
    

    const ipListRec = reactive<{list: IpItemType}>({
      list: [
        {
          value: '',
          type: 'text',
          max: 255, 
          min: 0
        }, {
          value: '',
          type: 'text',
          max: 255, 
          min: 0
        }, {
          value: '',
          type: 'text',
          max: 255, 
          min: 0
        }, {
          value: '',
          type: 'text',
          max: 255, 
          min: 0
        }
      ]
    })

    watch(() => props.disabledIndex, (val: number[]) => {
      const { disabled } = props
      ipListRec.list.forEach((item: any, index: number) => {
        if (val.includes(index)) {
          item.disabled = true || disabled
        } else {
          item.disabled = false || disabled
        }
        
      })
    }, {
      immediate: true
    })

    const checkValue = (value: string, options: IpItemType) => {
      const { needDefault } = props
      const { max, min } = options as IpItemType
      // 当输入的是空格时，值赋为空
      let val = parseInt(value + '')
      val = val < min ? min : val
      val = val > max ? max : val
      return !needDefault ? val || '' : val || 0
      // return val || ''
    }

    watch(() => props.value, (val:any) => {
      const { parseSeparator, inputNumberOptions, disabledIndex, disabled, joinSeparator } = props
      const list = (val || '...')?.split(`${parseSeparator}`)
      const newList = list?.map((item: string, index: number) => {
        let newItem = {
          // value: !needDefault ? parseInt(item) || '' : parseInt(item) || 0,
          disabled: disabledIndex?.includes(index)  || disabled,
          type: 'text'
        }
        if (isObject(inputNumberOptions)) {
          newItem = {...newItem, ...inputNumberOptions}
        }
        if (isArray(inputNumberOptions)) {
          newItem = {...{ max: 255, min: 0, precision: 0, showControl: false}, ...newItem, ...inputNumberOptions[index] }
        }
        newItem.value = checkValue(item, newItem)
        isProps.value = true
        return newItem
      }) || []
      ipListRec.list = newList
      valueRef.value = newList.map((item: IpItemType) => item.value).join(joinSeparator)
      refList.value = list.map((item:any) => {
        return ref()
      })
    }, {
      immediate: true
    })

    const newInputNumberOptions = computed(() => {
      return props.inputNumberOptions || []
    })

    const jumpLeft = (index: number) => {
      const { disabled, value } = ipListRec.list[index - 1] || {}
      if (disabled) {
        jumpLeft(index - 1)
      } else {
        const ipRef = unref(refList)[index - 1]
        ipRef?.value[0]?.focus()
        ipRef?.value[0].setSelectionRange((value + '').length, (value + '').length)
      }
    }

    const jumpRight = (index: number) => {
      const { disabled, value } = ipListRec.list[index + 1] || {}
      console.log('disabled: ', disabled);
      if (disabled) {
        jumpRight(index + 1)
      } else {
        const ipRef = unref(refList)[index + 1]
        ipRef?.value[0].focus()
        ipRef?.value[0].setSelectionRange((value + '').length, (value + '').length)
      }
    }

    const emitValue = () => {
      const { joinSeparator, disabled } = props
      const curValue = ipListRec.list.map((item: IpItemType) => item.value)?.join(joinSeparator)
        if (!disabled) {
          emit('update:value', curValue)
          emit('change', curValue)
        }
    }

    const checkIpVal = (index: number) => {
      const { value, min, max } = ipListRec.list[index]
      const { joinSeparator, disabled, needDefault } = props
      // 当输入的是空格时，值赋为空
      let val = parseInt(value + '')
      if (isNaN(val)) {
        if (needDefault) {
          ipListRec.list[index].value = 0
        } else {
          ipListRec.list[index].value = ''
        }
        emitValue()
        return
      }
      val = val < min ? min : val
      val = val > max ? max : val
      ipListRec.list[index].value = val
      if ((ipListRec.list[index].value + '').length === 3 && index !== 3) jumpRight(index)

      const curValue = ipListRec.list.map((item: IpItemType) => item.value)?.join(joinSeparator)
      if (!disabled) {
        emit('update:value', curValue)
        emit('change', curValue)
      }
    }

    const setVal = (index: number) => {
      const { needDefault } = props
      if (needDefault && (ipListRec.list[index].value === '' || ipListRec.list[index].value === undefined)) {
        ipListRec.list[index].value = 0
      }
    }

    const handleKeyboardDelete = (index: number, event: any) => {
      const e = event || window.event
      keyDownSelectionStart.value = (unref(refList)[index]?.value[0] as HTMLInputElement).selectionStart || 0
      if (e.keyCode === 190 || e.keyCode === 110) {
        e.preventDefault()
        return false
      }
    }

    const turnIpPOS = (index: number, event: any) => {
      const e = event
      // 左箭头向左跳转，左一不做任何措施
      if (e.keyCode === 37 && index && keyDownSelectionStart.value === 0) jumpLeft(index)
      // 删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
      if (e.keyCode === 8 && index && e.currentTarget.selectionStart === 0 && keyDownSelectionStart.value === 0) jumpLeft(index)
      // 右箭头、回车键、小键盘.、字母键盘.，右一不做任何措施
      if (
        (e.keyCode === 39 || e.keyCode === 13 || e.keyCode === 110 || e.keyCode === 190) &&
        index !== 3 &&
        keyDownSelectionStart.value === ipListRec.list[index].value.toString().length
        ) {
          jumpRight(index)
      }
    }

    onMounted(() => {
      nextTick(() => {
        const inputList = document.querySelectorAll(`.${uuid} .scIps-input`)
        inputList?.forEach((item: HTMLInputElement, inputIndex: number) => {
          item.addEventListener('paste', (event: Event) => {
            const { disabledIndex, parseSeparator, copyDisabled } = props
            const currList = String(valueRef.value || '...')?.split(parseSeparator)
            event.preventDefault()
            let pasteStr = (event?.clipboardData || window?.clipboardData).getData("text");
            const pasteList = ipv4Region.test(pasteStr.trim()) ? pasteStr.split(parseSeparator) : false
            if (pasteList && pasteList.length === 4) {
              const newList = currList.map((valueItem, _index) => {
                if (!disabledIndex.includes(_index) || copyDisabled) {
                  valueItem = pasteList[_index]
                }
                return valueItem
              })
              newList?.forEach((item: any, index: number) => {
                ipListRec.list[index].value = item
              })
              emitValue()
            } else if (!isNaN(pasteStr.trim())) {
              currList?.forEach((item: any, index: number) => {
                if (inputIndex === index) {
                  ipListRec.list[index].value = checkValue(pasteStr.trim(), ipListRec.list[index])
                }
              })
              emitValue()
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
      ipListRec,
      ipListSourceRef,
      isLabelSeparatorSlot,
      refList,
      newInputNumberOptions,

      isVNode,
      setVal,
      checkIpVal,
      handleKeyboardDelete,
      turnIpPOS
    }
  }
})
</script>