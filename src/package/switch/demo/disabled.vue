<template>
  <div>
    <ScSwitch
      disabled
      v-model:checked="checked"
    />
  </div>
  <div>
    <ScSwitch
      disabled
      v-model:checked="checked1"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSwitch } from 'sc-ui'

const checked = ref(false)
const checked1 = ref(true)

</script>
