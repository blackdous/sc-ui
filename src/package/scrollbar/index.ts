// import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scScrollbar from './component/scrollbar.vue'

export const ScScrollbar = withInstall(scScrollbar)

export * from './component/util'
export * from './component/scrollbar'
export * from './component/thumb'