import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scBadge from './component/ScBadge.vue'
import { badgeProps } from './component/type'

export const ScBadge = withInstall(scBadge)

export declare type BadgeProps = Partial<ExtractPropTypes<typeof badgeProps>>