<template>
  <div style="height: 300px">
    <ScSteps :active="1" direction="vertical" finish-status="success">
      <ScStep title="Step 1" description="Some description" />
      <ScStep title="Step 2" description="Some description" />
      <ScStep title="Step 3" description="Some description"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
</script>