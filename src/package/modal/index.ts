import { withInstall } from "../../utils"

import scModal from './component/ScModal.vue'

export const ScModal = withInstall(scModal)
export { useModalContext } from './hooks/useModalContext'
export { useModal, useModalInner } from './hooks/useModal'

export * from './component/type'