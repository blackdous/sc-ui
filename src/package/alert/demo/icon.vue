<template>
  <div>
    <ScAlert message="Info Text" type="info" show-icon/>
    <ScAlert message="Success Text" type="success" show-icon />
    <ScAlert message="Warning Text" type="warning" show-icon/>
    <ScAlert message="Error Text" type="error" show-icon/>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
</script>
<style scoped>
/* @import 'comment'; */
</style>