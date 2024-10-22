import { ExtractPropTypes } from "vue/dist/vue"


import { withInstall } from "../../utils"
import scRadioGroup from './components/ScRadioGroup.vue'
import scRadioTooltipGroup from "./components/ScRadioTooltipGroup.vue";
import { TooltipButtonProps } from './components/types'

export const ScRadioGroup = withInstall(scRadioGroup);
export const ScRadioTooltipGroup = withInstall(scRadioTooltipGroup);

export declare type TooltipButtonPropsType = Partial<ExtractPropTypes<TooltipButtonProps>>