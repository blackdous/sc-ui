<template>
  <div>
    <ScAlert message="Info Text" type="info" showIcon closeText="知道了"/>
    <ScAlert message="Info Text" type="info" showIcon closeText="不再提醒"/>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
</script>