
import { withInstall } from "../../utils/index"
import scDrawer from './component/ScDrawer.vue'

export const ScDrawer = withInstall(scDrawer)
export * from './component/typing';
export { useDrawer, useDrawerInner } from './component/useDrawer';
