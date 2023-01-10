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

<style lang="less" scoped>
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>