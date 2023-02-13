<template>
  <div>
    <ScAlert message="Info Text" type="info" show-icon closable/>
    <ScAlert message="Success Text" type="success" show-icon closable />
    <ScAlert message="Warning Text" type="warning" show-icon closable/>
    <ScAlert message="Error Text" type="error" show-icon closable/>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
</script>
<style scoped>
/* @import 'comment'; */
</style>