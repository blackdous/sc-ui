import { withInstall } from "../utils"
// @ts-ignore
import scRadioGroup from './components/radioGroup.vue'
// @ts-ignore
import scRadioTooltipGroup from './components/radioTooltipGroup.vue'

import type { TooltipButtonProps } from './components/radioTooltipGroup.vue'
import { ExtractPropTypes } from "vue/dist/vue";

export const ScRadioGroup = withInstall(scRadioGroup);
export const ScRadioTooltipGroup = withInstall(scRadioTooltipGroup);

export declare type TooltipButtonPropsType = Partial<ExtractPropTypes<typeof TooltipButtonProps>>