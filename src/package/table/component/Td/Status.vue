<template>
  <span>
    {{ !!text ? '--' : column.statusChange(text) }}
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  column: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  }
})
</script>
