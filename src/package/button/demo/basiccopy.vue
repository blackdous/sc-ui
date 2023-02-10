<template>
  <div>
    <ScButton type="primary">
      填充按钮
    </ScButton>
  </div>

</template>

<script lang="ts">
import { ScButton } from 'sc-ui'
import { defineComponent } from 'vue'
import './url'
import '../../../'

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

<style lang="less" scoped>
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>