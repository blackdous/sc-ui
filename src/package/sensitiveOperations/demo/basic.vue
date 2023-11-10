<template>
  <div>
    <ScButton @click="handleClick"> 打开敏感操作校验modal </ScButton>
  </div>
</template>

<script lang='ts' setup>
import { ScButton, useSensitiveOperationsModal } from 'sc-ui'

const handleClick = (event: Event) => {
  console.log('event: ', event)

  const createSensitiveOperationsModal = useSensitiveOperationsModal({})
  createSensitiveOperationsModal({
    forcePass: true
  })
}
</script>
