<template>
  <div>
    <ScButton>
      1111
    </ScButton>
  </div>
</template>

<script lang="ts">
import { ScButton } from 'sc-ui'
import { ref, defineComponent } from 'vue'

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
</style>