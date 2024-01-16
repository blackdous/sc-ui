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
      v-bind="vBind"
      :min="newProps.min"
      :max="newProps.max"
      :step="newProps.step"
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

    
    const newProps = computed(() => {
      return {
        ...props,
        min: Number.isNaN(parseFloat(props.min + '')) ? 0 : parseFloat(props.min + ''),
        max: Number.isNaN(parseFloat(props.max + '')) ? 100 : parseFloat(props.max + ''),
        step: Number.isNaN(parseFloat(props.step + '')) ? 10 : parseFloat(props.step + '')
      }
    })
    console.log('newProps: ', newProps);
    
    const vBind = computed(() => {
      return {
        ...attrs,
      }
    })
    console.log('vBind: ', vBind);

    const maxDisabled = computed(() => {
      return text.value >= unref(newProps).max
    })
    const minDisabled = computed(() => {
      return text.value <= unref(newProps).min
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
      (val) => {
        const { needDefault } = props
        const { max, min } = unref(newProps)
        if (needDefault) {
          if (val < min) {
            text.value = min
            return
          }
          if (val > max) {
            text.value = max
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
        const { stepStrictly, needDefault } = unref(newProps)
        // Number.isNaN()
        if (isNaN(oldVal)) {
          prevVal.value = oldVal
        }
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
        if (!needDefault && (val === '' || val === null)) {
          emit('update:value', val)
          emit('change', val)
        }
      },
      { deep: true }
    )

    const handleChange = () => {
      isProps.value = false
    }
    
    const changeVal = (type: any) => {
      const { stepStrictly, min, max, step } = unref(newProps)
      if (stepStrictly) {
        // isBlur.value = true
        debounceStepStrictly(true)
      }
      if (type === 'add') {
        text.value += step || 1
        if (text.value > max) {
          text.value = max
        }
      } else {
        text.value -= step || 1
        if (text.value < min) {
          text.value = min
        }
      }
      isProps.value = false
      if (stepStrictly) {
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
      const { stepStrictly, min, needDefault, emitEmpty } = unref(newProps)
      if (stepStrictly) {
        if (!isBlur.value) {
          debounceStepStrictly(false)
          text.value = Math.max(text.value, min)
        } else {
          isBlur.value = false
        }
      } else {
        // @ts-ignore
        if ((text.value === '' || text.value === null) && needDefault) {
          text.value = isNaN(prevVal.value) ? '' : prevVal.value
        }
        if (emitEmpty && (text.value === '' || text.value === null)) {
          emit('update:value', null)
          emit('change', null)
        }
        if (!needDefault && (text.value === '' || text.value === null)) {
          text.value = undefined
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
