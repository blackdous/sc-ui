import { withInstall } from "../../utils/index"
import scCascaderPanel from "./component/index.vue"
export * from "./component/node"
export * from "./component/config"

export const ScCascaderPanel = withInstall(scCascaderPanel)
