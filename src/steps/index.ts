import type { ExtractPropTypes } from 'vue'

import { withInstall } from "../utils"
import scSteps from './component/Steps.vue'
import scStep from './component/Step.vue'

import type { StepsProp } from './component/Steps.vue'
import type { StepProp } from './component/Step.vue'

export const ScSteps = withInstall(scSteps)
export const ScStep = withInstall(scStep)

export declare type StepsPropType = Partial<ExtractPropTypes<typeof StepsProp>>
export declare type StepPropType = Partial<ExtractPropTypes<typeof StepProp>>

