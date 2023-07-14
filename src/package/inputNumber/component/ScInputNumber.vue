<template>
  <div :class="classNames">
    <Button
      v-if="newProps.showControl"
      :class="[baseClass+'-btn']"
      @mousedown="changeVal('reduce')"
      :disabled="newProps.disabled || minDisabled"
      :size="newProps.size"
    >
      <i class="sc-ui sc-remove1"></i>
    </Button>
    <InputNumber
      ref="inputNumberRef"
      v-model:value="text"
      :disabled="newProps.disabled"
      :min="min"
      :max="max"
      v-bind="vBind"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
    />
      <!-- @keydown.enter.prevent="handlePressEnter" -->
    <Button
      v-if="newProps.showControl"
      :class="[baseClass+'-btn']"
      @mousedown="changeVal('add')"
      :disabled="newProps.disabled || maxDisabled"
    >
      <i class="sc-ui sc-add2"></i>
    </Button>
  </div>
</template>

<script lang="ts" >

import { ref, watch, computed, defineComponent, onMounted, nextTick, unref } from 'vue'
import { InputNumber, Button } from 'ant-design-vue'
// import lodash from 'lodash'
import { basePrefixCls } from '../../../constant'
import { props } from './type'
import { isNumber, isEmptyText, isString } from '../../../utils'

// const { debounce } = lodash

export default defineComponent({
  name: 'ScInputNumber',
  inheritAttrs: false,
  props: props(),
  components: {
    InputNumber,
    Button,
  },
  emits: ['change', 'update:value', 'blur', 'focus'],
  setup(props, { emit, attrs, expose }) {

    const baseClass = basePrefixCls + 'InputNumber'
    const text = ref()
    const inputNumberRef = ref()
    const prevVal = ref()
    const isBlur = ref(false)
    const isProps = ref(false)

    const maxDisabled = computed(() => {
      return text.value >= props.max
    })
    const minDisabled = computed(() => {
      return text.value <= props.min
    })

    const newProps = computed(() => {
      // console.log('props: ', props)
      return props
    })

    const vBind = computed(() => {
      return {
        ...attrs,
      }
    })

    const classNames = computed(() => {
      return [
        baseClass,
        newProps.value.mode,
        newProps.value.disabled ? 'isDisabled' : '',
        newProps.value.size,
        !newProps.value.showControl ? 'notControl' : ''
      ]
    })

    watch(
      () => props.value,
      (val, oldVal) => {
        const { needDefault } = props
        if (needDefault) {
          if (val < props.min) {
            text.value = props.min
            return
          }
          if (val > props.max) {
            text.value = props.max
            return
          }
          if (val !== text.value) {
            isProps.value = true
          }
          text.value = isEmptyText(val) ? isString(val) ?  parseFloat(val) : val : val

        }
      },
      { deep: true, immediate: true }
    )
    const debounceStepStrictly = (isClick: boolean) => {
      const val = text.value
      const { step, min } = unref(newProps)
      const curStep = Math.round(val / step) * step
      text.value = curStep
      if (!isClick) {
        emit('update:value', Math.max(text.value, min))
        emit('change', curStep || min)
      }
    }

    watch(
      () => text.value,
      (val, oldVal) => {
        const { stepStrictly } = unref(newProps)
        prevVal.value = oldVal
        // @ts-ignore
        if (val !== '' && val !== null) {
          const { max, disabled } = newProps.value
          if (!isNumber(val) || val > max) {
            return false
          }
          if (disabled) {
            return false
          }
          if (stepStrictly) {
            // debounceStepStrictly()
          } else {
            if (isProps.value) {
              isProps.value = false
              return false
            }
            emit('update:value', val)
            emit('change', val)
          }
        }
      },
      { deep: true }
    )

    const handleChange = () => {
      isProps.value = false
    }
    
    const changeVal = (type: any) => {
      const { stepStrictly, min } = unref(newProps)
      if (stepStrictly) {
        // isBlur.value = true
        debounceStepStrictly(true)
      }
      if (type === 'add') {
        text.value += props.step || 1
        if (text.value > props.max) {
          text.value = props.max
        }
      } else {
        text.value -= props.step || 1
        if (text.value < props.min) {
          text.value = props.min
        }
      }
      isProps.value = false
      if (stepStrictly) {
        // console.log('text.value: ', Math.max(text.value, min), text.value, min);
        emit('update:value', Math.max(text.value, min))
        emit('change', Math.max(text.value, min))
        inputNumberRef.value.blur()
      }
    }

    const handleFocus = () => {
      isBlur.value = false
      emit('focus')
    }

    const handleBlur = (event:Event) => {
      const { stepStrictly, min } = unref(newProps)
      if (stepStrictly) {
        // console.log('isBlur.value: ', isBlur.value);
        if (!isBlur.value) {
          debounceStepStrictly(false)
          text.value = Math.max(text.value, min)
        } else {
          isBlur.value = false
        }
      } else {
        // @ts-ignore
        if (text.value === '' || text.value === null) {
          text.value = prevVal.value
        }
      }
      emit('blur', event)
    }

    onMounted(() => {
      nextTick(() => {
        const { autoFocus } = newProps.value
        if (autoFocus) {
          const timer = setTimeout(() => {
            inputNumberRef?.value?.focus()
            clearTimeout(timer)
          }, 200);
        }
      })
    })

    expose({
      focus: () => {
        inputNumberRef.value?.focus()
      },
      blur: () => {
        inputNumberRef.value?.blur()
      }
    })
    return {
      baseClass,
      text,
      newProps,
      maxDisabled,
      minDisabled,
      classNames,
      vBind,
      inputNumberRef,
      changeVal,
      handleBlur,
      handleFocus,
      handleChange
      // handlePressEnter
    }
  }
})
</script>
