import type { ExtractPropTypes } from 'vue'

import { withInstall } from "../utils"
// @ts-ignore
import scSteps from './component/Steps.vue'
// @ts-ignore
import scStep from './component/Step.vue'
// @ts-ignore
import type { StepsProp } from './component/Steps.vue'
// @ts-ignore
import type { StepProp } from './component/Step.vue'

export const ScSteps = withInstall(scSteps)
export const ScStep = withInstall(scStep)
export declare type ButtonProps = Partial<ExtractPropTypes<typeof StepsProp>>
export declare type StepPropType = Partial<ExtractPropTypes<typeof StepProp>>

