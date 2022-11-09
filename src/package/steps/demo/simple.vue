<template>
  <div>
    <ScSteps :space="180" simple>
      <ScStep title="Done" status="success" />
      <ScStep title="Processing" status="wait" />
      <ScStep title="Step 3" status="wait"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
</script>