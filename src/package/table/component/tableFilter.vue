<template>
  <div
    :class="className"
  >
    <div :class="[className]">
      <slot name="createButton"></slot>
      <slot name="mutilpBtns"></slot>
    </div>
    <slot name="serach"></slot>
  </div>
</template>

<script lang='ts' setup>
import { prefixCls } from '../../../constans/event'
import { computed } from 'vue'

const tableHeaderPrefixClas = prefixCls + 'tableFilter'
const className = computed(() => {
  const classNames = [tableHeaderPrefixClas]
  return classNames;
})

</script>
