<template>
  <div class="mt20 scSe">
    <ScSelect
      v-model:value="value"
      :options="options"
      mode="tags"
      placeholder="请选择"
      optionMode="checkbox"
      @change="() => { handleChange(value) }"
      :allow-clear="true"
    >
    </ScSelect>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScSelect } from 'sc-ui'

const value = ref()

const options = [...Array(6)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1), label: (i + 10).toString(36) + (i + 1) }))

const handleChange = (val:string) => {
  console.log('val: handleChange', val.length);
  if (val.length > 3) {
    value.value = val.slice(0, 3)
  }
}

watch(() => value.value, (val) => {
  console.log('val: watch', val);
})

// setTimeout(() => {
//   value.value = ['a1']
// }, 3000);

</script>
<style scoped>
/* @import 'comment'; */
</style>
<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
