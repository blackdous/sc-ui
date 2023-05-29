<template>
  <div>
    <ScButton type="primary">
      填充按钮
    </ScButton>
    <ScButton type="primary" shape="round">
      填充按钮
    </ScButton>
    <ScButton type="primary" style="padding: 4px 11px;">
      T
    </ScButton>
    <ScButton type="primary" shape="circle">
      T
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton status="info">
      填充按钮
    </ScButton>
    <ScButton status="info" shape="round">
      填充按钮
    </ScButton>
    <ScButton status="info" style="padding: 4px 11px;">
      T
    </ScButton>
    <ScButton status="info" shape="circle">
      T
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton>
      填充按钮
    </ScButton>
    <ScButton shape="round">
      填充按钮
    </ScButton>
    <ScButton style="padding: 4px 11px;">
      T
    </ScButton>
    <ScButton shape="circle">
      T
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton status="error">
      填充按钮
    </ScButton>
    <ScButton status="error" shape="round">
      填充按钮
    </ScButton>
    <ScButton status="error" style="padding: 4px 11px;">
      T
    </ScButton>
    <ScButton status="error" shape="circle">
      T
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