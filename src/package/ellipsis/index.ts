import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scEllipsis from './component/ScEllipsis.vue'
// import { props } from './component/type'

export const ScEllipsis = withInstall(scEllipsis)
// export declare type SelectProps = Partial<ExtractPropTypes<typeof props>> 