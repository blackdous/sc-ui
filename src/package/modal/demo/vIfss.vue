<template>
  <div v-if="visibleRef">
    <ScButton
      @click="handleCancel"
    >
      取消
    </ScButton>
    <ScButton>
      更新visible
    </ScButton>
  </div>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits, ref, watchEffect } from 'vue'

// import { ScModal } from 'sc-ui'
// import { Modal } from 'ant-design-vue'
import { ScButton } from 'sc-ui'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const visibleRef = ref(false)

watchEffect(() => {
  visibleRef.value = !!props.visible
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

const emits = defineEmits(['update:visible', 'cancel'])

const handleCancel = () => {
  visibleRef.value = false
  console.log('visibleRef.value: ', visibleRef.value)
  emits('update:visible', false)
  emits('cancel', false)
}

// onMounted(() => {
//   console.log('new Date()', new Date())
// })
</script>
