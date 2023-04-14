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
    <ScButton type="primary" :loading="loadingRef">
      填充按钮
    </ScButton>
    <ScButton status="info" :loading="loadingRef">
      填充按钮
    </ScButton>
    <ScButton :loading="loadingRef">
      描边按钮
    </ScButton>
    <ScButton type="text" :loading="loadingRef">
      文字按钮
    </ScButton>
    <ScButton type="link" :loading="loadingRef">
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
    <ScButton status="info" :loading="loadingRef">
      填充按钮
    </ScButton>
    <ScButton status="error" :loading="loadingRef">
      描边按钮
    </ScButton>
    <ScButton status="warning" :loading="loadingRef">
      文字按钮
    </ScButton>
    <ScButton status="success" :loading="loadingRef">
      文字按钮
    </ScButton>
  </div>
</template>

<script lang="ts">
import { ScButton } from 'sc-ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'basic',
  inheritAttrs: false,
  components: {
    ScButton
  },
  setup () {
    const loadingRef = ref(true)
    setTimeout(() => {
      loadingRef.value = false
    }, 1500)
    return {
      loadingRef
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