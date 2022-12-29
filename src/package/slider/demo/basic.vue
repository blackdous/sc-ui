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
const valueRef = ref(0)
const handleChange = (val:string) => {
  console.log('val: ', val);
}
</script>
