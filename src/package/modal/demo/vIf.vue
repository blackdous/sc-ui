<template>
  <!-- v-if="visibleRef" -->
  <Vifs 
    v-model:visible="visibleRef">
  </Vifs>

  <ScButton @click="showVisible">
    展示
  </ScButton>

</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScButton } from 'sc-ui'

import Vifs from './vIfs.vue'

const visibleRef = ref(false)

const showVisible = () => {
  visibleRef.value = true
}
</script>
