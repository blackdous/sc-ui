<template>
  <div>
    <ScSteps :active="2" alignCenter>
      <ScStep title="Step 1" description="Some description" />
      <ScStep title="Step 2" description="Some description" />
      <ScStep title="Step 3" description="Some description"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
</script>