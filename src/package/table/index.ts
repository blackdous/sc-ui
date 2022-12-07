import { withInstall } from "../../utils/index"
import scTable from './component/ScTable.vue'

export * from './types/table'
export * from './types/pagination'
export * from './types/column'
export { useTable } from './hooks/useTable'

export const ScTable = withInstall(scTable)