<template>
  <!-- <Modal
    v-model:visible="visible"
    @cancel="handleCancel"
  >
    1111111111111
  </Modal> -->
  <VIfss 
    v-model:visible="visibleRef"
    @cancel="handleCancel"
  >
  </VIfss>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits, onMounted, computed } from 'vue'
// import { ScModal } from 'sc-ui'
// import { Modal } from 'ant-design-vue'
import VIfss from './vIfss.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const visibleRef = computed({
  get () {
    console.log('props.visible: ', props.visible);
    return props.visible
  },
  set (val) {
    console.log('val: ', val)
    emits('update:visible', val)
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
  // visibleRef.value = false
  emits('update:visible', visibleRef.value)
}

onMounted(() => {
  console.log('new Date()', new Date())
})
</script>
