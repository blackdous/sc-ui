import { ExtractPropTypes } from "vue/dist/vue"

import { withInstall } from "../../utils/index"
import scAlert from './component/ScAlert.vue'
import { alertProps } from "./component/type"

export const ScAlert = withInstall(scAlert)

export declare type AlertProps = Partial<ExtractPropTypes<typeof alertProps>> 