<template>
  <div>
    <ScSteps :active="1">
      <ScStep title="Step 1" icon="bx:error-circle" />
      <ScStep title="Step 2">
        <template #icon>
          <Icon icon="bx:error-circle"/>
        </template>
      </ScStep>
      <ScStep title="Step 3" description="Some description">
        <template #icon>
          <UserOutlined/>
        </template>
      </ScStep>
    </ScSteps>
  </div>
</template>

<script setup lang="ts">
import { ScSteps, ScStep } from 'sc-ui'
import { Icon } from '@iconify/vue'
import { UserOutlined, } from '@ant-design/icons-vue';
</script>
<style scoped>
/* @import 'comment'; */
</style>