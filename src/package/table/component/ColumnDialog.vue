<template>
  <ScModal
    v-model:visible="visible"
    title="自定义列表字段"
    type="info"
    :infoDes="`请选择您想显示的列表详细信息。您已勾选${checkInfo}个。`"
    cancelText="取消"
    okText="确认"
    :width="604"
    maskClosable
  >
    <CheckoutBtnVue
      :columnList="columnList"
      @change="handleCheck"
    >
    </CheckoutBtnVue>
  </ScModal>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'

import ScModal from '../../modal/components/ScModal.vue'
// @ts-ignore
import { ColumnModal } from '../types/column'
import CheckoutBtnVue from './CheckoutBtn.vue'

export default defineComponent({
  name: 'ColumnDialog',
  inheritAttrs: false,
  components: {
    ScModal,
    CheckoutBtnVue
  },
  props: ColumnModal(),
  setup (props, { emit }) {
    const checkInfo = ref<string>('')
    const columnList = ref(props.columnList)
    const visible = computed({
      get: () => {
        return props.visible
      },
      set: (val) => {
        emit('update:visible', val)
      }
      
    })
    //@ts-ignore
    const handleCheck = ({ keys, checkedList, list }) => {
      checkInfo.value = (checkedList || []).length + ''
      emit('checkChange', { keys, checkedList, list })
    }
    return {
      visible,
      columnList,
      checkInfo,
      handleCheck
    }
  }
})
</script>
