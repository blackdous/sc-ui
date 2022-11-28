import { cloneDeep } from 'lodash'
import { ref, Ref, unref, computed } from 'vue'

import { Column } from '../types/column'

export function useColumn (
  propsRef: Ref<Recordable>
) {
  const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<Column[]>;

  function setColumnRef (colums: Column[]) {
    columnsRef.value = colums
  }

  const getColumnRef = computed(() => {
    const columns = cloneDeep(unref(columnsRef)).map(item => {
      if (item.type) {
        item.slots = {
          customRender: item.type.componentName
        }
      }
      return item
    })
    return columns
  })

  return {
    getColumnRef,
    setColumnRef
  }
} 