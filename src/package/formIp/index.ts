import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scIp from './component/ScIp.vue'
import { scIpProps } from './component/type'

export const ScIp = withInstall(scIp)
export declare type ScIpProps = Partial<ExtractPropTypes<typeof scIpProps>> 