import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scSwitch from './component/ScSwitch.vue'
import { switchProps } from './component/type'

export const ScSwitch = withInstall(scSwitch)

export declare type SwitchProps = Partial<ExtractPropTypes<typeof switchProps>>;