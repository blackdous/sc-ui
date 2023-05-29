<template>
  <div :class="classNames">
    <Button
      v-if="newProps.showControl"
      :class="[baseClass+'-btn']"
      @click="changeVal('reduce')"
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
    />
      <!-- @keydown.enter.prevent="handlePressEnter" -->
    <Button
      v-if="newProps.showControl"
      :class="[baseClass+'-btn']"
      @click="changeVal('add')"
      :disabled="newProps.disabled || maxDisabled"
    >
      <i class="sc-ui sc-add2"></i>
    </Button>
  </div>
</template>

<script lang="ts" >

import { ref, watch, computed, defineComponent, onMounted, nextTick } from 'vue'
import { InputNumber, Button } from 'ant-design-vue'
import { basePrefixCls } from '../../../constant'
import { props } from './type'
import { isNumber } from '../../../utils'

export default defineComponent({
  name: 'ScInputNumber',
  inheritAttrs: false,
  props: props(),
  components: {
    InputNumber,
    Button,
  },
  emits: ['change', 'update:value'],
  setup(props, { emit, attrs, expose }) {

    const baseClass = basePrefixCls + 'InputNumber'
    const text = ref(0)
    const inputNumberRef = ref()
    const prevVal = ref()

    const maxDisabled = computed(() => {
      return text.value >= props.max
    })
    const minDisabled = computed(() => {
      return text.value <= props.min
    })

    const newProps = computed(() => {
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
      (val) => {
        if (val < props.min) {
          text.value = props.min
          return
        }
        if (val > props.max) {
          text.value = props.max
          return
        }
        text.value = val
      },
      { deep: true, immediate: true }
    )

    watch(
      () => text.value,
      (val, oldVal) => {
        prevVal.value = oldVal
        // console.log('val !!==', val, oldVal, val !== '');
        // @ts-ignore
        if (val !== '' && val !== null) {
          const { max, min, disabled } = newProps.value
          if (!isNumber(val) || val > max || min > val) {
            return false
          }
          if (disabled) {
            return false
          }
          emit('update:value', val)
          emit('change', val)
        }
      },
      { deep: true }
    )
    

    const changeVal = (type: any) => {
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
    }

    const handleBlur = () => {
      // @ts-ignore
      if (text.value === '' || text.value === null) {
        text.value = prevVal.value
      }
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

    // const handlePressEnter = (e:KeyboardEvent) => {
    //   if (e.keyCode === 13) {
    //     emit('pressEnter', text.value)
    //   }
    //   return false
    // }

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
      handleBlur
      // handlePressEnter
    }
  }
})
</script>
