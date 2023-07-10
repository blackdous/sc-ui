<template>
  <ScButton @click="updateDisabledIndex">更新disabledIndex</ScButton>
  <div>
    <ScIp
      v-model:value="valueRef"
      :disabled-index="disabledIndex"
      @change="handleChange"
    >
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

const valueRef = ref('0.222.104.11')
const valueRef1 = ref('0.222.104.11')

const disabledIndex = ref([2, 4])

watch(() => valueRef.value, (val) => {
  console.log('val: valueRef', val);
})

setTimeout(() => {
  valueRef.value = '10.12.255.255'
}, 1500)
const handleChange = (val:any) => {
  console.log('val: handleChange', val);
}

const updateDisabledIndex = () => {
  disabledIndex.value = [1, 3]
}
</script>
