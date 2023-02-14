<template>
  <div>
    <ScSteps :active="active" finish-status="success">
      <ScStep title="step 1" description="222222"/>
      <ScStep title="step 2" status="error" description="1111"/>
      <ScStep title="Step 3"/>
      <ScStep title="Step 4" status="process"/>
    </ScSteps>
    <ScButton style="margin-top: 12px" @click="next">Next step</ScButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ScSteps, ScStep, ScButton } from 'sc-ui'
const active = ref(0)
const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
<style scoped>
/* @import 'comment'; */
</style>