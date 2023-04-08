<template>
  <div class="mrt20">
    <Button class="btn1" @click="handleClick">
      打开scModal.confirm
    </Button>
    <Button class="btn1" @click="handleClickModal">
      打开Modal.confirm
    </Button>
    <!-- <ConfirmDialog
      v-model="visibleRef"
    >

    </ConfirmDialog> -->
  </div>
</template>

<script lang='ts' setup>
// import { ref } from 'vue'
import { Button, Modal } from 'ant-design-vue';
import { ScModal } from 'sc-ui'
// import ConfirmDialog from '../component/ConfirmDialog.tsx';

// const visibleRef = ref()

const handleClick = () => {
  // ConfirmDialog()
  // visibleRef.value = true
  ScModal.confirm({
    type: 'warning',
    title: '111111',
    closable: true
  })
}
const handleClickModal = () => {
  // ConfirmDialog()
  // visibleRef.value = true
  Modal.confirm({
    type: 'warning',
    title: '111111',
    closable: true
  })
}
</script>
