<template>
  <div>
    <ScLoading
      :loading="loadingRef"
      size="small"
    >
    </ScLoading>
    <ScLoading
      :loading="loadingRef1"
    >
    </ScLoading>
    <ScLoading
      :loading="loadingRef2"
      size="large"
    >
    </ScLoading>
    <ScButton
      @click="handleClick"
    >
      最小
    </ScButton>
    <ScButton
      @click="handleClick1"
    >
      中等
    </ScButton>
    <ScButton
      @click="handleClick2"
    >
      最大
    </ScButton>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScLoading, ScButton } from 'sc-ui'
const loadingRef = ref(false)
const loadingRef1 = ref(false)
const loadingRef2 = ref(false)

const handleClick = () => {
  loadingRef.value = !loadingRef.value
  setTimeout(() => {
    loadingRef.value = false
  }, 1500)
}
const handleClick1 = () => {
  loadingRef1.value = !loadingRef1.value
  setTimeout(() => {
    loadingRef1.value = false
  }, 1500)
}
const handleClick2 = () => {
  loadingRef2.value = !loadingRef2.value
  setTimeout(() => {
    loadingRef2.value = false
  }, 1500)
}
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
  div > button {
    margin-left: 10px;
  }
</style>
