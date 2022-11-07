<template>
  <div>
    <ScSteps :space="200" :active="1" finish-status="success">
      <ScStep title="step 1" />
      <ScStep title="step 2" />
      <ScStep title="Step 3"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
</script>