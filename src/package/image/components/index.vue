<template>
  <!-- 图片加载中 -->
  <span 
    v-loading="loadingRef"
    style="display: inline-block;"
  >
    <img 
      v-bind="$attrs"
      @load="handleLoad"
    >
  </span>  
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

import LoadingDirective from '../../../directives/loading'

export default defineComponent({
  name: 'ScImage',
  directives: {
    loading: LoadingDirective
  },
  setup() {
    const loadingRef = ref(true)
    const handleLoad = (event: any) => {
      console.log('event: ', event);
      loadingRef.value = false
    }
    return {
      loadingRef,
      handleLoad
    }
  }
})
</script>
