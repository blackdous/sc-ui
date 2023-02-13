<template>
  <div>
    <ScSwitch
      v-model:checked="checked"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSwitch } from 'sc-ui'

const checked = ref(false)

</script>
<style scoped>
/* @import 'comment'; */
</style>
