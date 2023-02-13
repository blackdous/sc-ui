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
    :afterClose="handleCancel"
    @ok="handleOk"
    v-bind="getProps"
  >
    <CheckoutBtnVue
      :columnList="columnList"
      @change="handleCheck"
    >
    </CheckoutBtnVue>
  </ScModal>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, unref } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

import ScModal from '../../modal/component/ScModal.vue'
import { ColumnModal, Column } from '../types/column'
import CheckoutBtnVue from './CheckoutBtn.vue'

interface CheckParams {
  keys: string[],
  checkedList: Column[],
  list: Column[],
}

export default defineComponent({
  name: 'ColumnDialog',
  inheritAttrs: false,
  components: {
    ScModal,
    CheckoutBtnVue
  },
  emits: ['cancelModal', 'okModal', 'update:visible'],
  props: ColumnModal(),
  setup (props, { emit, attrs }) {
    const checkInfo = ref<string>('')
    const sourceList = ref()
    // const columnList = ref(props.columnList)
    const columnList = computed(() => {
      return cloneDeep(props.columnList)
    })
    const curKeys = ref<string[]>()
    const curCheckedList = ref<Column[]>()
    const visible = computed({
      get: () => {
        return props.visible
      },
      set: (val) => {
        console.log('val: ', val);
        emit('update:visible', val)
      }
      
    })
    const getProps = computed(() => {
      console.log('attrs: ', attrs);
      return {
        ...props,
        ...attrs,
        columnList: undefined
      }
    })
    const handleCheck = ({ keys, checkedList, list }:CheckParams) => {
      curKeys.value = keys
      curCheckedList.value = checkedList
      checkInfo.value = (checkedList || []).length + ''
      sourceList.value = list
      // emit('checkChange', { keys, checkedList, list })
    }
    const handleCancel = () => {
      emit('cancelModal', { keys: unref(curKeys), checkedList: unref(curCheckedList) })
    }
    const handleOk = () => {
      // emit('checkChange', { keys: curKeys , checkedList: , list })
      emit('okModal',  { keys: unref(curKeys), checkedList: unref(curCheckedList) })
    }
    return {
      visible,
      columnList,
      checkInfo,
      handleCheck,
      handleCancel,
      handleOk,
      getProps
    }
  }
})
</script>
