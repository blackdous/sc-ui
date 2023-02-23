import { ExtractPropTypes } from "vue/dist/vue"

import { withInstall } from "../../utils/index"
import scCascaderPanel from './component/index.vue'
import { alertProps } from "./component/type"

export const ScCascaderPanel = withInstall(scCascaderPanel)

// export declare type AlertProps = Partial<ExtractPropTypes<typeof alertProps>> 