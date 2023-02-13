<template>
  <div>
    <ScButton type="primary" size="small">
      填充按钮
    </ScButton>
    <ScButton status="info" size="small">
      填充按钮
    </ScButton>
    <ScButton size="small">
      描边按钮
    </ScButton>
    <ScButton type="text" size="small">
      文字按钮
    </ScButton>
    <ScButton type="link" size="small">
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
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
    <ScButton type="primary" size="large">
      填充按钮
    </ScButton>
    <ScButton status="info" size="large">
      填充按钮
    </ScButton>
    <ScButton size="large">
      描边按钮
    </ScButton>
    <ScButton type="text" size="large">
      文字按钮
    </ScButton>
    <ScButton type="link" size="large">
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