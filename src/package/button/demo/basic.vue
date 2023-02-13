<template>
  <div>
    <ScButton type="primary">
      填充按钮
    </ScButton>
    <ScButton status="info">
      填充按钮
    </ScButton>
    <ScButton>
      描边按钮
    </ScButton>
    <ScButton type="text">
      文字按钮
    </ScButton>
    <ScButton type="link">
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton type="primary" disabled>
      填充按钮
    </ScButton>
    <ScButton status="info" disabled>
      填充按钮
    </ScButton>
    <ScButton disabled>
      描边按钮
    </ScButton>
    <ScButton type="text" disabled>
      文字按钮
    </ScButton>
    <ScButton type="link" disabled>
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
<!-- <style lang="less">
@import '../../../style/index.less';
</style> -->
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>