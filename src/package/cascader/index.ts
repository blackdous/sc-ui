import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scCascader from './component/ScCascader.vue'
import { props } from './component/type'

export const ScCascader = withInstall(scCascader)
export declare type SelectProps = Partial<ExtractPropTypes<typeof props>> 