<template>
  <div>
    <ScAlert message="Info Text" type="info" textColor showIcon/>
    <ScAlert message="Success Text" type="success" textColor showIcon />
    <ScAlert message="Warning Text Warning Text Warning TextWarning TextWarning TextWarning TextWarning TextWarning Text" type="warning" textColor showIcon/>
    <ScAlert message="Error Text" type="error" textColor showIcon/>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
import '../../../style/index.less'
</script>