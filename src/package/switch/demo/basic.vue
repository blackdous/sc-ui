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
import '../../../style/index.less'

const checked = ref(false)

</script>
