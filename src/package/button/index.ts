import { ExtractPropTypes } from 'vue'
import { withInstall } from "../../utils/index"
import scButton from './component/ScButton.vue'
import { buttonProps } from './type'

export const ScButton = withInstall(scButton)

export declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>