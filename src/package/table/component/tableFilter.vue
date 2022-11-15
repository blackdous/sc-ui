<template>
  <div
    :class="className"
  >
    <slot name="createButton"></slot>
  </div>
</template>

<script lang='ts'>
import { prefixCls } from '../../../constans/event'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TableFilter',
  setup (props, { slots }) {
    console.log('slots: ', slots);
    console.log('props: ', props);
    const className = computed(() => {
      const classNames = [prefixCls + 'tableFilter']
      return classNames;
    })
    return {
      className
    }
  }
})

</script>
