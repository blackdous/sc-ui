<template>
  <ScModal
    v-model:visible="visible"
    :title="title"
    type="info"
    :infoDes="infoDesCompute"
    :width="840"
    maskClosable
    :afterClose="handleCancel"
    @ok="handleOk"
    v-bind="getProps"
    destroyOnClose
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
// import cloneDeep from 'lodash/cloneDeep'
import lodash from 'lodash'

import ScModal from '../../modal/component/ScModal.vue'
import { ColumnModal, Column } from '../types/column'
import CheckoutBtnVue from './CheckoutBtn.vue'
import enUSLocale from "../../../locale/en"
import zhCNLocale from "../../../locale/zh"
import useLocale from '../../../hooks/useLocale'

interface CheckParams {
  keys: string[],
  checkedList: Column[],
  list: Column[],
}
const { cloneDeep } = lodash

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
    const { antLocale } = useLocale()
    const curCookie = document.cookie
    const isEn = (curCookie.includes('en-US'))
    const curLocale = isEn ? { ...enUSLocale } : { ...zhCNLocale }
    // const sourceList = ref()
    const delItemKeys = ref()
    const columnList = computed(() => {
      const newColumnList = cloneDeep(props.columnList)
      return newColumnList
    })
    const sourceList = computed(() => {
      const newColumnList = cloneDeep(props.columnList)
      return newColumnList
    })
    const curKeys = ref<string[]>()
    const curCheckedList = ref<Column[]>()
    const visible = computed({
      get: () => {
        return props.visible
      },
      set: (val) => {
        emit('update:visible', val)
      }
      
    })
    const getProps = computed(() => {
      return {
        ...props,
        ...attrs,
        columnList: undefined
      }
    })
    const handleCheck = ({ keys, checkedList }:CheckParams) => {
      curKeys.value = keys
      curCheckedList.value = checkedList
      checkInfo.value = (checkedList || []).length + ''

      delItemKeys.value = unref(sourceList).filter((item:Column) => { return item.checked }).map((item:string) => item.key || item.dataIndex).filter((item:string) => !keys.includes(item))
    }
    const handleCancel = () => {
      emit('cancelModal', { keys: unref(curKeys), checkedList: unref(curCheckedList) })
    }
    const handleOk = () => {
      emit('okModal',  { keys: unref(curKeys), checkedList: unref(curCheckedList), delItemKeys: unref(delItemKeys) })
    }

    const title = curLocale?.customListFields || '自定义列表字段'

    const infoDesCompute = computed(() => {
      return `${curLocale?.selectItem || '请选择您想显示的列表详细信息。您已勾选'}${checkInfo.value}${isEn ? '' : '个'}。`
    })
    return {
      curLocale,
      antLocale,
      infoDesCompute,
      title,
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
