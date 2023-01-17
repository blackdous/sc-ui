<template>
  <div>
    <DatePicker
      v-model:value="value1"
      dropdownClassName="scDatePicker"
      mode="year"
      format="YYYY"
      :open="open"
      @focus="handleFocus"
      @panelChange="handlePanelChange"
    >
    </DatePicker>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { DatePicker } from 'ant-design-vue';


const value1 = ref('2022')
const open = ref(false)

const handleFocus = () => {
  open.value = true
}

const handlePanelChange = (val:string) => {
  value1.value = val
  open.value = false
}

</script>
