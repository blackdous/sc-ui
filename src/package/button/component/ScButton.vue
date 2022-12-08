<template>
  <Button

  >
    
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

// import 

export default defineComponent({
  name: 'ScButton',
  inheritAttrs: false,
  components: {
    Button
  },
  setup (props) {
    const className = []
    console.log('props: ', props)
  }
})
</script>

<style lang="less">
</style>