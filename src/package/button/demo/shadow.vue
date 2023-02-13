<template>
  <div>
    <ScButton type="shadow" shape="round">
      填充按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton type="shadow" shape="round" disabled>
      填充按钮
    </ScButton>
  </div>
</template>

<script lang="ts">
import { ScButton } from 'sc-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'shadow',
  inheritAttrs: false,
  components: {
    ScButton
  },
  setup () {
    return {

    }
  }
})

</script>
<!-- <style scoped>
</style> -->
<style scoped>
  /* 0.0.64作为初始版本；版本更新请在 示例页面更新 */
  /* @import 'https://cdn.jsdelivr.net/npm/@sincerecloud/sc-ui@0.0.64/style.css';  */
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>