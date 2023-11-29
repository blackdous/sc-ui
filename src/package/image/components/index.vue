<template>
  <!-- 图片加载中 -->
  <span 
    v-loading="loadingRef"
    style="display: inline-block;"
    :class="[clsPrefix]"
    :style="styleCompt"
  >
    <img
      v-bind="$attrs"
      @load="handleLoad"
    >
  </span>  
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'

import LoadingDirective from '../../../directives/loading'
import { basePrefixCls } from '../../../constant'

export default defineComponent({
  name: 'ScImage',
  directives: {
    loading: LoadingDirective
  },
  setup(props, {attrs}) {
    const loadingRef = ref(true)
    const handleLoad = () => {
      loadingRef.value = false
    }
    const clsPrefix = basePrefixCls + 'Image'

    const styleCompt = computed(() => {
      return { 
        width: attrs.width + 'px',
        height: attrs.height + 'px'
      }
    })
    return {
      loadingRef,
      handleLoad,
      clsPrefix,
      styleCompt
    }
  }
})
</script>
