import type { App } from 'vue'
import { message } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import './style/index.less';

import { ScSteps, ScStep } from "./Steps"
import { ScTabs } from './Tabs'
import { ScRadioGroup, ScRadioTooltipGroup } from './Radio'

message.config({
  duration: 2, // 持续时间
  maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

const components = [
  ScSteps,
  ScStep,
  ScTabs,
  ScRadioGroup,
  ScRadioTooltipGroup
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
  ScRadioTooltipGroup
}

export * from './types'

export default ScUi;