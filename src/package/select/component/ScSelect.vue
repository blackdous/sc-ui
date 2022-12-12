<template>
  <div :class="[baseClass, newProps.mode, newProps.disabled ? 'isDisabled' : '', newProps.size]">
    <Button
      :class="[baseClass+'-btn']"
      @click="changeVal('reduce')"
      :disabled="newProps.disabled || buttonDis || minDisabled"
      :size="newProps.size"
    >
      <i class="iconfont icon-remove"></i>
    </Button>
    <InputNumber
      v-model:value="text"
      :disabled="newProps.disabled"
      :min="min"
      :max="max"
      v-bind="$attrs"
    />
      <!-- @keydown.enter.prevent="handlePressEnter" -->
    <Button
      :class="[baseClass+'-btn']"
      @click="changeVal('add')"
      :disabled="newProps.disabled || buttonDis || maxDisabled"
    >
      <i class="iconfont icon-add"></i>
    </Button>
  </div>
</template>

<script lang="ts" >

import { ref, watch, computed, defineComponent } from 'vue'
import { InputNumber, Button } from 'ant-design-vue'
import { basePrefixCls } from '../../../constant'
import { props } from './type'

export default defineComponent({
  name: 'ScSelect',
  inheritAttrs: false,
  props: props(),
  components: {
    InputNumber,
    Button,
  },
  setup(props, { emit, attrs, slots }) {

    const baseClass = basePrefixCls + 'InputNumber'
    const buttonDis = computed(() => {
      return attrs.disabled
    })
    const text = ref(0)

    const maxDisabled = computed(() => {
      return text.value >= props.max
    })
    const minDisabled = computed(() => {
      return text.value <= props.min
    })

    const newProps = computed(() => {
      return props
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
      (val) => {
        emit('update:value', val)
        emit('change', val)
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
      buttonDis,
      maxDisabled,
      minDisabled,
      changeVal,
      // handlePressEnter
    }
  }
})
</script>
