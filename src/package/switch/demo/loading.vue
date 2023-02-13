<template>
  <div>
    <ScSwitch
      v-model:checked="checked"
      loading
    />
  </div>
  <div>
    <ScSwitch
      v-model:checked="checked1"
      loading
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSwitch } from 'sc-ui'

const checked = ref(false)
const checked1 = ref(true)

</script>
<style scoped>
/* @import ''; */
</style>