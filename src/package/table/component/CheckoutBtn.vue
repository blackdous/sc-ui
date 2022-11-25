<template>
  <div class="colBtn">
    <span
      v-for="item in list"
      :key="item.key"
      :class="[
        'colBtn-item',
        item.disabled ? 'disabled' : '',
        item.checked ? 'checked' : ''
      ]"
      @click="handleCheck(item)"
    >
      <span
        v-if="item.checked"
        class="colBtn-item__checked"
      >
        <CheckOutlined></CheckOutlined>
      </span>
      <span
        class="colBtn-item-text"
      >
        {{ item.label }}
      </span>
    </span>
  </div>
</template>

<script lang='ts'>
import { CheckOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, unref } from 'vue'

import { useChecked } from '../hooks/uesDialog'
// @ts-ignore
import { ColumnItem, ColumnModal } from '../types/column'

export default defineComponent({
  name: 'CheckoutBtn',
  inheritAttrs: false,
  components: {
    CheckOutlined
  },
  props: ColumnModal(),
  setup (props, { emit }) {
    const list = ref(props.columnList)
    const checkedList = ref([] as Array<ColumnItem>)
    const { setItemChecked, getCheckedItems } = useChecked(props.columnList as Array<ColumnItem>)
    checkedList.value = getCheckedItems()

    emit('change', { checkedList: unref(checkedList)})

    const handleCheck = (item:ColumnItem) => {
      if (item.disabled) {
        return false
      }
      const { keys, list, checkedList } = setItemChecked(item)
      
      emit('change', { keys: unref(keys), checkedList: unref(checkedList), list: unref(list) })
    }
      return {
      list,
      handleCheck
    }
  }
})

</script>
