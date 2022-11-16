// import type { Ref } from "vue"
import { provide, inject, ComputedRef } from "vue"
import type { Ref } from 'vue'
import type { ATableProps } from '../component/type'

const key = Symbol('scTable')

type Instance = {
  tableRef: Ref<ComputedRef>,
  tableProps: ATableProps
}

export function createTableContext(instance: Instance) {
  provide(key, instance);
}

export function useTableContext(): Instance {
  return inject(key) as Instance;
}