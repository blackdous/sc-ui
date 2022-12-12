import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scSelect from './component/ScSelect.vue'
import { props } from './component/type'

export const ScSelect = withInstall(scSelect)
export declare type SelectProps = Partial<ExtractPropTypes<typeof props>> 