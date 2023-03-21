import { ExtractPropTypes } from "vue"
import { withInstall } from "../../utils/index"
import scLink from './component/ScLink.vue'
import { linkProps } from "./component/type"

export const ScLink = withInstall(scLink)

export type LinkProps = ExtractPropTypes<typeof linkProps>