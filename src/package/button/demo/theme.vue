<template>
  <div>
    <ScButton status="info">
      填充按钮
    </ScButton>
    <ScButton>
      填充按钮
    </ScButton>
    <ScButton type="text">
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton type="primary">
      填充按钮
    </ScButton>
    <ScButton type="primary" ghost>
      填充按钮
    </ScButton>
    <ScButton type="link" disabled>
      文字按钮
    </ScButton>
  </div>
  <div class="mt20">
    <ScButton status="error">
      填充按钮
    </ScButton>
    <ScButton status="error" ghost>
      填充按钮
    </ScButton>
    <ScButton type="link" danger>
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
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>