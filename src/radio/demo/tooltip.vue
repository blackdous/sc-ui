<template>
  <div>
    <ScRadioTooltipGroup v-model:value="value1" radioList="">
    </ScRadioTooltipGroup>
  </div>
</template>

<script setup lang="ts">
// import { RadioButton } from 'ant-design-vue'
import { ScRadioTooltipGroup } from 'sc-ui'
import { ref } from 'vue'
import "ant-design-vue/dist/antd.css"

const value1 = ref<string>('a')
// const radioListData = ref<>
</script>

<style lang="less">
</style>