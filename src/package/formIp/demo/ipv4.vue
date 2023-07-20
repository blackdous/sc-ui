<template>
  <ScButton @click="updateDisabledIndex">更新disabledIndex</ScButton>
  <div>
    <ScIp
      v-model:value="valueRef"
      @change="handleChange"
      :disabled-index="disabledIndex"
      >
      <!-- :copyDisabled="true" -->
    </ScIp>
  </div>
  <div class="mrt20">
    <ScIp
      v-model:value="valueRef1"
      :disabled-index="[2]"
      disabled
    >
    </ScIp>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScIp, ScButton } from 'sc-ui'

const valueRef = ref(null)
const valueRef1 = ref('12.3.4.266')

const disabledIndex = ref([2, 4])

watch(() => valueRef.value, (val) => {
  console.log('val: valueRef', val);
})

// setTimeout(() => {
//   valueRef.value = '10.12.255.255'
// }, 1500)
const handleChange = (val:any) => {
  console.log('val: handleChange', val);
}

const updateDisabledIndex = () => {
  disabledIndex.value = [1, 3]
}
</script>
