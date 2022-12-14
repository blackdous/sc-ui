import type { App } from 'vue'
import { message } from 'ant-design-vue'

import './style/index.less';

import { ScSteps, ScStep } from "./package/steps"
import { ScTabs } from './package/tabs'
import { ScRadioGroup, ScRadioTooltipGroup } from './package/radio'
import { ScAlert } from './package/alert'
import { ScModal } from './package/modal'
import { ScTable, useTable, Copy, TableActionVue } from './package/table'
import { ScLoading, useLoading } from './package/loading'
import { ScButton } from './package/button'
import { ScInputNumber } from './package/inputNumber'
import { ScSelect } from './package/select'


import { installGlobalDirectives } from './directives'
import ClickOutside from './directives/clickOutside'
import TextCollapse from './directives/textCollapse'
import LoadingDirective from './directives/loading'

message.config({
  duration: 2, // 持续时间
  maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

const components = [
  ScSteps,
  ScStep,
  ScTabs,
  ScRadioGroup,
  ScRadioTooltipGroup,
  ScAlert,
  ScModal,
  ScTable,
  Copy,
  TableActionVue,
  ScLoading,
  ScButton,
  ScInputNumber,
  ScSelect
]

const install = (app: App) => {
  components.forEach((i: any) => {
    app.use(i);
  });
};

const ScUi = {
  version: '0.0.20',
  install,
};

export {
  install,
  ScSteps,
  ScStep,
  ScTabs,
  ScRadioGroup,
  ScRadioTooltipGroup,
  ScAlert,
  ScModal,
  ScTable,
  Copy,
  TableActionVue,
  ScLoading,
  ScButton,
  ScInputNumber,
  ScSelect
}

export * from './types'

export { installGlobalDirectives as installGlobalDirectives, ClickOutside, TextCollapse, LoadingDirective }

export { useTable, useLoading }

export default ScUi;