<template>
  <div
    :class="className"
  >
    <template name="createButton"> </template>
  </div>
</template>

<script lang='ts'>
import { prefixCls } from '../../../constans/event'
import { computed, defineComponent } from 'vue'

export default defineComponent({
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
