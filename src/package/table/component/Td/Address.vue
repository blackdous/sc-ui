<template>
  <div class="address-row flex align-center">
    <div>{{ text }}</div>
    <div
      v-if="record.isDefault"
      class="default-tag"
    >
      {{}}
    </div>

    <div
      v-else
      :id="`tb_btn_${index}_${column.type}`"
      class="btn-set-default"
      @click="handle({ record, type: column.type, column })"
    >
      <!-- {{ $t('prodComp.TdAddress.sheWeiMoRen') }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  column: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  record: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

const emits = defineEmits(['handle'])

const handle = (data:any) => {
  emits('handle', data)
}
</script>
