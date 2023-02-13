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
    <ScButton type="primary" :loading="true">
      填充按钮
    </ScButton>
    <ScButton status="info" :loading="true">
      填充按钮
    </ScButton>
    <ScButton :loading="true">
      描边按钮
    </ScButton>
    <ScButton type="text" :loading="true">
      文字按钮
    </ScButton>
    <ScButton type="link" :loading="true">
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton status="info">
      填充按钮
    </ScButton>
    <ScButton status="error">
      描边按钮
    </ScButton>
    <ScButton status="warning">
      文字按钮
    </ScButton>
    <ScButton status="success">
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton status="info" :loading="true">
      填充按钮
    </ScButton>
    <ScButton status="error" :loading="true">
      描边按钮
    </ScButton>
    <ScButton status="warning" :loading="true">
      文字按钮
    </ScButton>
    <ScButton status="success" :loading="true">
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
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>