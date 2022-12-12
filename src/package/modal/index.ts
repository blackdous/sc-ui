import type { ExtractPropTypes } from "vue";
import { withInstall } from "../../utils"

import scModal from './component/ScModal.vue'
import { modalProps} from "./component/type"

export const ScModal = withInstall(scModal);
export declare type ModalProps = Partial<ExtractPropTypes<typeof modalProps>> 
export * from './component/type'