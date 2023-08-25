import { withInstall } from "../../utils/index"
import scTable from './component/ScTable.vue'
import TdCopy from './component/Td/TdCopy.vue'
import tableAction from "./component/TableAction.vue"
import columnDialog from "./component/ColumnDialog.vue"
import empty from "./component/Empty.vue"
import filterTags from "./component/FilterTags.vue"

export * from './types/table'
export * from './types/pagination'
export * from './types/column'
export { useTable } from './hooks/useTable'

export const ScTable = withInstall(scTable)
export const TableAction = withInstall(tableAction)
export const Copy = withInstall(TdCopy)
export const ColumnDialog = withInstall(columnDialog)
export const Empty = withInstall(empty)
export const FilterTags = withInstall(filterTags)