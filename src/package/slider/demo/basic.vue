<template>
  <div>
    <ScSlider
      :showMinMaxMarker="true"
      :inputNumberOptions="{
        placeholder: '请输入'
      }"
      v-model:value="valueRef"
      @change="handleChange"
    >
    </ScSlider>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSlider } from 'sc-ui'
const valueRef = ref(12)
const handleChange = (val:string) => {
  console.log('val: handleChange', val);
}
</script>
<style scoped>
/* @import 'comment'; */
</style>