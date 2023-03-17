<template>
  <div class="mb20">
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
  <div class="mb20">
    <ScSlider
      :showMinMaxMarker="true"
      :inputNumberOptions="{
        placeholder: '请输入'
      }"
      :value="valueRef1"
      @change="handleChange1"
    >
    </ScSlider>
  </div>
  <div class="mb20">
    <div> 最新版</div>
    <ScSlider
      :showMinMaxMarker="true"
      :inputNumberOptions="{
        placeholder: '请输入'
      }"
      dotCircle
      :value="valueRef1"
      @change="handleChange1"
    >
    </ScSlider>

  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScSlider } from 'sc-ui'
const valueRef = ref(12)
const valueRef1 = ref(13)
const handleChange = (val:number) => {
  console.log('val: handleChange', val);
}
const handleChange1 = (val:number) => {
  console.log('val: handleChange1', val);
  valueRef1.value = val
  // console.log('val: handleChange', val);
}
</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mb20 {
  margin-bottom: 20px;
}
</style>