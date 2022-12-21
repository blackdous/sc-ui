<template>
  <div>
    <ScButton type="primary">
      <template #icon>
        <i class="sc-ui sc-add"></i>
      </template>
      填充按钮
    </ScButton>
    <ScButton>
      <template #icon>
        <i class="sc-ui sc-upload"></i>
      </template>
      描边按钮
    </ScButton>
    <ScButton type="icon">
      <template #icon>
        <i class="sc-ui sc-upload"></i>
      </template>
    </ScButton>
    <ScButton type="icon">
      <template #icon>
        <i class="sc-ui sc-delete"></i>
      </template>
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

<style lang="less">
  .ant-btn  + .ant-btn {
    margin-left: 24px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>