<template>
  <span>
    <a
      v-if="text"
      :id="`tb_btn_${index}_${column.type.type}`"
      :class="['td_href', linkClass]"
      @click="handle({ record, type: column.type, column })"
    >
      {{ text }}
      <i
        v-if="column.icon"
        :class="['iconfont', column.icon]"
      ></i>
    </a>
    <span
      v-else
      type="text"
      >--</span
    >
  </span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
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

// const clickFlag = ref<boolean>(false)

const linkClass = computed(() => {
  let className = ''
  if (props.column.type.type === 'link') {
    className = 'linkBtn'
  }
  return className
})
const emits = defineEmits(['handle'])

const handle = (data:any) => {
  emits('handle', data)
}
</script>
