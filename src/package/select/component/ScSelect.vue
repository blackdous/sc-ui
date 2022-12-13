<template>
  <div :class="[baseClass, newProps.mode, newProps.disabled ? 'isDisabled' : '', newProps.size]">
    <!-- <Button
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
    <Button
      :class="[baseClass+'-btn']"
      @click="changeVal('add')"
      :disabled="newProps.disabled || buttonDis || maxDisabled"
    >
      <i class="iconfont icon-add"></i>
    </Button> -->
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
  setup(props, { emit, attrs }) {
    const baseClass = basePrefixCls + 'Select'
    const newProps = computed(() => {
      return props
    })
    return {
      baseClass,
      newProps
    }
  }
})
</script>
