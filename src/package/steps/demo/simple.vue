<template>
  <div>
    <ScSteps :space="36" simple @changeIndex="handleChange">
      <ScStep title="Done" status="success" disabled />
      <ScStep title="Processing" status="error" />
      <ScStep title="Step 3" status="wait"/>
      <ScStep title="Step 4" status="process"/>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
const handleChange = (val:any) => {
  console.log('val: 111111111111', val);
}
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
/* div {
  width: 240px;
} */
</style>