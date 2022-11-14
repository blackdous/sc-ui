<template>
  <div>
    <ScAlert message="Info Text" type="info" textColor/>
    <ScAlert message="Success Text" type="success" textColor />
    <ScAlert message="Warning Text" type="warning" textColor/>
    <ScAlert message="Error Text" type="error" textColor/>
  </div>
</template>

<script setup lang="ts">
import { ScAlert } from 'sc-ui'
import "ant-design-vue/dist/antd.css"

</script>

<style lang="less">
</style>