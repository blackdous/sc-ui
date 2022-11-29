import { ref, watchEffect, unref } from "vue"
import { Column } from "../types/column"

export function setItem (columnList:Array<Column>, item:Column) {
  return {...columnList, item}
}

export function useChecked (columnList:Array<Column>) {
  const list = ref()
  const keys = ref([] as Array<string>)
  const checkedList = ref([] as Array<Column>)
  
  const setItemChecked = (colItem: Column) => {
    if (!colItem.checked) {
      //@ts-ignore
      keys.value = [...unref(keys), colItem.key]
      checkedList.value = [...unref(checkedList), colItem]
    } else {
      keys.value = unref(keys).filter(_item => colItem.key !== _item)
      checkedList.value = unref(checkedList).filter(_item => colItem.key !== _item.key)
    }
    list.value = unref(list).map((_item: Column) => {
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
  const setList = (columnList:Array<Column>) => {
    list.value = columnList
  }

  const initChecked = (columnList: Array<Column>) => {
    const initKeys:string[] = []
    const initChecked: Column[] = []
    columnList?.forEach(item => {
      if (item.checked) {
        //@ts-ignore
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
    setList,
    initChecked
  }
}