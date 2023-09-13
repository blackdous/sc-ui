import { ExtractPropTypes } from "vue"
import { withInstall } from "../../utils/index"
import scAutoComplete from "./component/index.vue"
import { props } from "./component/type"

const ScAutoCompleteProps = props()

export const ScAutoComplete = withInstall(scAutoComplete)

export declare type AlertProps = Partial<ExtractPropTypes<typeof ScAutoCompleteProps>> 
