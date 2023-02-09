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
import { ref, unref } from 'vue'
import type { Ref } from 'vue'

import { ColumnDialog, ScButton } from 'sc-ui'

const visible: Ref<boolean> = ref(false)

const list = [1, 2, 3, 4, 5, 6, 7, 19].map((item:number) => {
  return {
    label: item.toString().repeat(4),
    value: item.toString().repeat(4),
    key: item.toString().repeat(4),
    disabled: false,
    checked: true,
  }
})


const checkList = ref(list)

const openModal = () => {
  const timer = setTimeout(() => {
    checkList.value = unref(checkList)?.map(item => {
      item.disabled = (parseInt(Math.random() * 100)) % 2 === 1
      return item
    })
    console.log('checkList: 异步disabled更新成功 ', checkList.value);
    clearTimeout(timer)
  }, 1500)
  visible.value = true
}

const handleCancel = () => {
  console.log('close Modal')
}

const handleChange = (val: { keys: string[], checkedList: any }) => {
  // console.log('val: ', val);
  const { keys } = val
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