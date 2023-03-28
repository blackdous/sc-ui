import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scTag from './component/ScTag.vue'
import { tagProps } from './component/type'

export const ScTag = withInstall(scTag)
export declare type TagProps = Partial<ExtractPropTypes<typeof tagProps>> 