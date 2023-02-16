import { iconPropType } from "/@/utils"

import { CHANGE_EVENT } from "../../../constant"
import { isNumber } from '@vueuse/core';

export interface StepsProp {
  /**
   * 每个 step 的间距，不填写将自适应间距。 支持百分比。
   */
  space?: number|string,
  /**
   * 显示方向
   */
  direction?: 'horizontal' | 'vertical',
  /**
   * 设置当前激活步骤
   */
  active?: number,
  /**
   * 进行居中对齐
   */
  alignCenter?: boolean,
  /**
   * 是否应用简洁风格
   */
  simple?: boolean,
  /**
   * 设置结束步骤的状态
   * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
   */
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success',
  /**
   * 设置当前步骤的状态
   * 可选值 'wait' | 'process' | 'finish' | 'error' | 'success'
   */
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}


export interface StepProp {
  /**
   * 标题
   */
  title?: string,
  /**
   * 描述文案
   */
  description?: string,
  /**
   * 设置当前步骤的状态， 不设置则根据 steps 确定状态
   * 'wait' | 'process' | 'finish' | 'error' | 'success' | ''
   */
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success' | '',
  /**
   * Step 组件的自定义图标。 也支持 slot 方式写入
   */
  icon?: typeof iconPropType
}

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    [newVal, oldVal].every(isNumber),
  'changeIndex': (val:number) => val
}