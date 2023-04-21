<template>
  <Modal
    v-model:visible="visible"
    @cancel="handleCancel"
  >
    1111111111111
  </Modal>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits, onMounted } from 'vue'
// import { ScModal } from 'sc-ui'
import { Modal } from 'ant-design-vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
console.log('props: ', props);

// const visibleRef = computed({
//   get () {
//     return props.visible
//   },
//   set () {
//     // emits('update:visible', val)
//   }
// })

const emits = defineEmits(['update:visible'])

const handleCancel = (val: boolean) => {
  console.log('val: ', props.visible);
  emits('update:visible', props.visible)
}

onMounted(() => {
  console.log('new Date()', new Date())
})
</script>
