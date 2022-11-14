import type { ExtractPropTypes } from "vue";
import { withInstall } from "../../utils"

import scModal from './components/ScModal.vue'
import { modalProps} from "./components/type"

export const ScModal = withInstall(scModal);
export declare type AlertProps = Partial<ExtractPropTypes<typeof modalProps>> 
export * from './components/type'