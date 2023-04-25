<template>
  <div>
    <ScIp
      v-model:value="valueRef"
      :disabled-index="[2]"
      @change="handleChange"
    >
      <template #labelSeparator>
        <span>
          :
        </span>
      </template>
    </ScIp>
  </div>
  <div class="mrt20">
    <ScIp
      v-model:value="valueRef1"
      :disabled-index="[2]"
      disabled
    >
      <template #labelSeparator>
      <ScIcon type="icon-a-chevron-rightdouble"></ScIcon>
      </template>
    </ScIp>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScIp, ScIcon } from 'sc-ui'

const valueRef = ref('0.222.104.11')
const valueRef1 = ref('0.222.104.11')

watch(() => valueRef.value, (val) => {
  console.log('val: valueRef', val);
})

const handleChange = (val) => {
  console.log('val: handleChange', val);

}
</script>
