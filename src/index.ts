import type { App } from 'vue'
import { message } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import './style/index.less';

import { ScSteps, ScStep } from "./package/steps"
import { ScTabs } from './package/tabs'
import { ScRadioGroup, ScRadioTooltipGroup } from './package/radio'
import { ScAlert } from './package/alert'
import { ScModal } from './package/modal'


import { installGlobalDireactives } from './direactives'
import ClickOutside from './direactives/clickOutside'
import TextCollapse from './direactives/textCollapse'

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
  ScModal
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
  ScModal
}

export * from './types'

export { installGlobalDireactives, ClickOutside, TextCollapse }

export default ScUi;