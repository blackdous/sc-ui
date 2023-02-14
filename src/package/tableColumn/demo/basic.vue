<template>
  <ColumnDialog 
    v-model:visible="visible"
    @okModal="handleChange"
    @cancelModal="handleCancel"
    :columnList="checkList"
  >
  </ColumnDialog>
  <ScButton @click="openModal">
    打开
  </ScButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { ColumnDialog, ScButton } from 'sc-ui'

const visible: Ref<boolean> = ref(false)

const list = ['全部', '全部1', '全部2', '全部3', '全部4', '全部5', '全部6', '全部7'].map((item:number, index) => {
  return {
    label: item.toString().repeat(4),
    value: item.toString().repeat(4),
    key: item.toString().repeat(4),
    disabled: (Math.random() * 100)%2 === 1,
    checked: index % 2 === 0,
  }
})

const checkList = ref(list)

const openModal = () => {
  visible.value = true
}

const handleCancel = () => {
  console.log('close Modal')
}

const handleChange = (val: { keys: string[], checkedList: any, delItemKeys: string[] }) => {
  // console.log('val: ', val);
  const { keys, delItemKeys } = val
  console.log('delItemKeys: ', delItemKeys);
  visible.value = false
  checkList.value = list.map(item => {
    if (keys.includes(item.key)) {
      item.checked = true
    } else {
      item.checked = false
    }
    return item
    // return keys.includes(item.key)
  })
  console.log('checkList: ', checkList);
}

</script>
<style scoped>
/* @import 'comment'; */
</style>