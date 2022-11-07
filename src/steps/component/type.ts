import { iconPropType } from "@/utils"

import { CHANGE_EVENT } from "../../constans/event"
import { isNumber } from '@vueuse/core';

export interface StepsPropType {
  space?: string | number,
  direction?: 'horizontal' | 'vertical',
  active?: number,
  alignCenter?: boolean,
  simple?: boolean,
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}

export interface StepPropType {
  title?: string,
  description?: string,
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success' | '',
  icon?: typeof iconPropType
}

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    [newVal, oldVal].every(isNumber),
}