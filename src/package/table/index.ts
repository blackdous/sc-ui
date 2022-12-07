import { withInstall } from "../../utils/index"
import scTable from './component/ScTable.vue'
import copy from './component/Td/Copy.vue'

export * from './types/table'
export * from './types/pagination'
export * from './types/column'
export { useTable } from './hooks/useTable'

export const ScTable = withInstall(scTable)

export const Copy = withInstall(copy)