import { withInstall } from "../../utils/index"
import scLoading from './component/Loading.vue'

export const ScLoading = withInstall(scLoading)

export { useLoading } from './component/useLoading'
export { createLoading } from './component/createLoading'

export type { LoadingProps } from './component/typing'
