<template>
  <div class="colBtn">
    <!-- <span
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
    </span> -->
    <div class="column-checkboxAll">
      <Checkbox
        v-model:checked="checkAll"
        @change="onCheckAllChange"
        :indeterminate="indeterminate"
        >
        全部
      </Checkbox>
    </div>
    <CheckboxGroup
      v-model:value="checkedListKeys"
      :options="sourceList"
      @change="handleGroup"
    >
    </CheckboxGroup>
  </div>
</template>

<script lang='ts'>
import { CheckOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, unref, computed, onMounted, watch } from 'vue'
import { CheckboxGroup, Checkbox } from 'ant-design-vue'

import { useChecked } from '../hooks/uesDialog'
// @ts-ignore
import { Column, ColumnModal, FilterItem } from '../types/column'

export default defineComponent({
  name: 'CheckoutBtn',
  inheritAttrs: false,
  components: {
    CheckOutlined,
    Checkbox,
    CheckboxGroup
  },
  props: ColumnModal(),
  setup (props, { emit }) {
    const checkAll = ref(true)
    const sourceList = ref(props.columnList as Array<Column | FilterItem>)
    const checkedListKeys = ref([] as Array<string>)
    const checkedItems = ref([] as Array<Column | FilterItem>)
    const { setItemChecked, getCheckedKeys, getCheckedItems } = useChecked(props.columnList as Array<Column>)
    checkedListKeys.value = getCheckedKeys()
    checkedItems.value = getCheckedItems()

    watch(() => props.columnList, (val) => {
      sourceList.value = val
      const { getCheckedKeys, getCheckedItems } = useChecked(val as Array<Column>)
      checkedListKeys.value = getCheckedKeys()
      checkedItems.value = getCheckedItems()
      emit('change', { keys: unref(checkedListKeys), checkedList: unref(checkedItems) })
    })
    
    
    emit('change', { keys: unref(checkedListKeys), checkedList: unref(checkedItems) })

    const handleGroup = (item:any) => {
      const { keys, list, checkedList } = setItemChecked(item)
      console.log('keys, list, checkedList: ', keys, list, checkedList);
      emit('change', { keys: unref(keys), checkedList: unref(checkedList), list: unref(list) })
      checkAll.value = checkedListKeys.value.length === sourceList.value.length
      if (checkedListKeys.value.length === 0) {
        checkAll.value = false
      }
    }

    const indeterminate = computed(() => {
      if (checkedListKeys.value.length === 0) {
        return false
      }
      return checkedListKeys.value.length !== sourceList.value.length
    })

    onMounted(() => {
      if (checkedListKeys.value.length === 0) {
        checkAll.value = false
      }
    })

    const onCheckAllChange = (e:any) => {
      if (e.target.checked) {
        checkedListKeys.value = Array.from(new Set([...checkedListKeys.value, ...unref(sourceList).filter(item => !item.disabled).map(item => { return item.key  })]))
      } else {
        checkedListKeys.value = unref(sourceList).filter(item => item.disabled).map(item => { return item.key  })
      }
      const { keys, list, checkedList } = setItemChecked(checkedListKeys.value)
      console.log('checkedListKeys.value: ', checkedListKeys.value);
      emit('change', { keys: unref(keys), checkedList: unref(checkedList), list: unref(list) })
    }
    return {
      checkAll,
      checkedListKeys,
      sourceList,
      indeterminate,
      // handleCheck,
      handleGroup,
      onCheckAllChange
    }
  }
})

</script>
