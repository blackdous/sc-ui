<template>
  <div
    :class="className"
  >
    <div :class="[className + '-left']">
      <slot name="createButton"></slot>
      <slot name="mutilpBtns"></slot>
    </div>
    <slot name="serach"></slot>
  </div>
</template>

<script lang='ts' setup>
import { prefixCls } from '../../../constans'
import { computed } from 'vue'

const tableHeaderPrefixClas = prefixCls + 'TableFilter'
const className = computed(() => {
  const classNames = [tableHeaderPrefixClas]
  return classNames;
})

</script>
