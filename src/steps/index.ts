import type { ExtractPropTypes } from 'vue'

import { withInstall } from "../utils"

import scSteps from './component/ScSteps.vue'
import scStep from './component/ScStep.vue'

import { StepsProp } from './component/type'
import { StepProp } from './component/type'

export const ScSteps = withInstall(scSteps)
export const ScStep = withInstall(scStep)

export declare type StepsPropType = Partial<ExtractPropTypes<StepsProp>>
export declare type StepPropType = Partial<ExtractPropTypes<StepProp>>

