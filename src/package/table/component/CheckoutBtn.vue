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
        <span class="colBtn-item-describe" v-if="item.describe">
          {{ item.describe }}
        </span>
      </span>
    </span>
  </div>
</template>

<script lang='ts'>
import { CheckOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, unref } from 'vue'

import { useChecked } from '../hooks/uesDialog'
// @ts-ignore
import { FilterItem, ColumnModal } from '../types/column'

export default defineComponent({
  name: 'CheckoutBtn',
  inheritAttrs: false,
  components: {
    CheckOutlined
  },
  props: ColumnModal(),
  setup (props, { emit }) {
    const list = ref(props.columnList)
    const checkedList = ref([] as Array<FilterItem>)
    const { setItemChecked, getCheckedItems } = useChecked(props.columnList as Array<FilterItem>)
    checkedList.value = getCheckedItems()

    emit('change', { checkedList: unref(checkedList)})

    const handleCheck = (item:FilterItem) => {
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
