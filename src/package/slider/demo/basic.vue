<template>
  <div class="mb20">
    <ScButton @click="handleMin">
      更新
    </ScButton>
  </div>
  <!-- <div class="mb20">
    <div>stepStrictly: true</div>
    <ScSlider
      :showMinMaxMarker="true"
      :inputNumberOptions="{
        placeholder: '请输入',
        stepStrictly: true
      }"
      :max="obj1.max"
      :min="obj1.min"
      :interval="20"
      :step="20"
      v-model:value="valueRef.size"
      @change="handleChange"
      @blur="handleBlur"
      isShowNextUnit
    >
    </ScSlider>
  </div> -->
  <div class="mb20">
    <ScSlider
      :showMinMaxMarker="true"
      :inputNumberOptions="{
        placeholder: '请输入',
        stepStrictly: true
      }"
      :max="obj1.max"
      :min="obj1.min"
      :interval="20"
      :step="20"
      v-model:value="valueRef.size"
      @change="handleChange"
      @blur="handleBlur"
      isShowNextUnit
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
import { ref, reactive } from 'vue'
import { ScSlider, ScButton } from 'sc-ui'
// const valueRef = ref(12)
const valueRef1 = ref(13)
const handleChange = (val:number) => {
  console.log('val: handleChange', val);
}

const obj1 = reactive({
  max: 200,
  min: 0
})

const valueRef = reactive({
  size: 20
})

const handleMin = () => {
  setTimeout(() => {
    obj1.min = 30
    obj1.max = 500
    valueRef.size = 40
    console.log('valueRef: ', JSON.parse(JSON.stringify(valueRef)));
  }, 500)
}

// setTimeout(() => {
//   obj1.min = 20
//   obj1.max = 500
// }, 500)

const handleChange1 = (val:number) => {
  console.log('val: handleChange1', val);
  valueRef1.value = val
  // console.log('val: handleChange', val);
}

const handleBlur = (event:any) => {
  console.log('event: ', event);

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