<template>
  <div>
    <ScButton type="primary" block>
      填充按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton block>
      描边按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton type="text" block>
      文字按钮
    </ScButton>
  </div>
</template>

<script lang="ts">
import { ScButton } from 'sc-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'basic',
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
<style scoped>
/* @import ''; */
</style>
<style scoped>
  div {
    width: 300px;
  }
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>