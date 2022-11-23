import { ref, watchEffect, unref } from "vue"
import { ColumnItem } from "../component/types/column"

export function setItem (columnList:Array<ColumnItem>, item:ColumnItem) {
  return {...columnList, item}
}

export function useChecked (columnList:Array<ColumnItem>) {
  const list = ref()
  const keys = ref([] as Array<string>)
  const checkedList = ref([] as Array<ColumnItem>)
  
  const setItemChecked = (colItem: ColumnItem) => {
    if (!colItem.checked) {
      keys.value = [...unref(keys), colItem.key]
      checkedList.value = [...unref(checkedList), colItem]
    } else {
      keys.value = unref(keys).filter(_item => colItem.key !== _item)
      checkedList.value = unref(checkedList).filter(_item => colItem.key !== _item.key)
    }
    list.value = unref(list).map((_item: ColumnItem) => {
      if (colItem.key === _item.key) {
        colItem.checked = !colItem.checked
      }
      return _item
    })
    return { keys, list, checkedList }
  }

  const getCheckedKeys = () => {
    return unref(keys)
    // return unref(keys)
  }

  const getCheckedItems = () => {
    return unref(checkedList)
  }

  const getList = () => {
    return unref(list)
  }

  const initChecked = (columnList: Array<ColumnItem>) => {
    const initKeys:string[] = []
    const initChecked: ColumnItem[] = []
    columnList?.forEach(item => {
      if (item.checked) {
        initKeys.push(item.key)
        initChecked.push(item)
      }
    })
    keys.value = initKeys
    checkedList.value = initChecked
  }

  watchEffect(() => {
    list.value = (columnList || [])
    if (columnList?.length) {
      initChecked(columnList)
    }
  })

  return {
    setItemChecked,
    getCheckedKeys,
    getCheckedItems,
    getList,
    initChecked
  }
}