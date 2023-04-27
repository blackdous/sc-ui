<template>
  <div>
    <ScSwitch
      v-model:checked="checked"
      @change="handleChange"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { ScSwitch } from 'sc-ui'

const checked = ref(false)


watch(() => checked.value, (val) => {
  console.log('val: checked', val);
})

const handleChange = (val:boolean) => {
  console.log('val: handleChange', val);

}

</script>
<style scoped>
/* @import 'comment'; */
</style>
