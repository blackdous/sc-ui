import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scInput from './component/ScInput.vue'
import { props } from './component/type'

export const ScInput = withInstall(scInput)
export declare type InputProps = Partial<ExtractPropTypes<typeof props>> 