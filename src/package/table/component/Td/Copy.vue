<template>
  <div
    v-if="!!text"
    :id="`tb_btn_${index}_copy`"
    class="tbCopy"
    @click="copyText(text)"
  >
    <a class="mr-8">{{ text }}</a>
    <CopyOutlined />
  </div>
  <div v-else>--</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { CopyOutlined } from '@ant-design/icons-vue'
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue'

const props = defineProps({
  column: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

const copyText = (source: [string, number]) => {
  const { copy, copied } = useClipboard()
  copy(source)
  if (copied) {
    message.success({
      content: props.column?.type.props.successTxt
    })
  }
}
</script>
