<template>
  <div>
    <ScSteps :space="36" simple>
      <ScStep title="Done" status="success" />
      <ScStep title="Processing" status="error" />
      <ScStep title="Step 3" status="wait"/>
      <ScStep title="Step 4" status="process"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
/* div {
  width: 240px;
} */
</style>