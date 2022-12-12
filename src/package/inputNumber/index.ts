import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scInputNumber from './component/ScInputNumber.vue'
import { props } from './component/type'

export const ScInputNumber = withInstall(scInputNumber)
export declare type InputNumberProps = Partial<ExtractPropTypes<typeof props>> 