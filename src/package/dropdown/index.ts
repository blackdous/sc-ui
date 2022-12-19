import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scDropDown from './component/ScDropDown.vue'
import { props } from './component/type'

export const ScDropDown = withInstall(scDropDown)
export declare type SelectProps = Partial<ExtractPropTypes<typeof props>> 