<template>
  <div>
    <ScSwitch
      v-model:checked="checked"
      size="large"
    />
  </div>
  <div>
    <ScSwitch
      v-model:checked="checked1"
    />
  </div>
  <div>
    <ScSwitch
      v-model:checked="checked2"
      size="small"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSwitch } from 'sc-ui'
import '../../../style/index.less'

const checked = ref(false)
const checked1 = ref(true)
const checked2 = ref(true)

</script>
