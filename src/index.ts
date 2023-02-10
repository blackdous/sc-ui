import type { App } from 'vue'
import { message } from 'ant-design-vue'

import './style/index.less';
// import './style/index'

import { ScHelp } from './package/other'
import { ScSteps, ScStep } from "./package/steps"
import { ScTabs } from './package/tabs'
import { ScRadioGroup, ScRadioTooltipGroup } from './package/radio'
import { ScAlert } from './package/alert'
import { ScModal, useModalContext, useModal, useModalInner } from './package/modal'
import { ScTable, useTable, Copy, TableAction, ColumnDialog, Empty } from './package/table'
import { ScLoading, useLoading } from './package/loading'
import { ScButton } from './package/button'
import { ScInputNumber } from './package/inputNumber'
import { ScSelect } from './package/select'
import { ScSwitch } from './package/switch'
import { useContextMenu } from './package/contextMenu'
import { ScDropDown } from './package/dropdown'
import { ScInput } from './package/input'
import { ScScrollbar } from './package/scrollbar'
import { ScPopconfirm } from './package/popconfirm'
import { ScCascader } from './package/cascader'
import { ScBreadcrumb } from './package/breadcrumb'
import { useMessage } from './hooks'
import { ScSlider } from './package/slider'
import ScDatePicker, {
  ScMonthPicker,
  ScWeekPicker,
  ScRangePicker,
  ScQuarterPicker,
} from './package/datePicker/index'
import ScTimePicker, {
  ScTimeRangePicker
} from './package/timePicker'
import { ScDescription, useDescription } from './package/description'
import { 
  ScForm,
  ApiSelect,
  RadioButtonGroup,
  ApiTreeSelect,
  ApiTree,
  ApiRadioGroup,
  ApiCascader,
  useForm
} from './package/form'

import { installGlobalDirectives } from './directives'
import ClickOutside from './directives/clickOutside'
import TextCollapse from './directives/textCollapse'
import LoadingDirective from './directives/loading'

message.config({
  duration: 2, // 持续时间
  maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

const components = [
  ScHelp,
  ScSteps,
  ScStep,
  ScTabs,
  ScRadioGroup,
  ScRadioTooltipGroup,
  ScAlert,
  ScModal,

  ScTable,
  Copy,
  TableAction,
  ColumnDialog,
  Empty,

  ScLoading,
  ScButton,
  ScInputNumber,
  ScSelect,
  ScSwitch,
  ScDropDown,
  ScInput,
  ScScrollbar,
  ScPopconfirm,
  ScCascader,
  ScBreadcrumb,
  ScSlider,
  ScDescription,
  ScForm,
  
  ScDatePicker,
  ScMonthPicker,
  ScWeekPicker,
  ScRangePicker,
  ScQuarterPicker,

  ScTimePicker,
  ScTimeRangePicker,

  ApiSelect,
  RadioButtonGroup,
  ApiTreeSelect,
  ApiTree,
  ApiRadioGroup,
  ApiCascader
]

const install = (app: App) => {
  components.forEach((i: any) => {
    app.use(i);
  });
};

const ScUi = {
  version: '0.0.57',
  install,
};

export {
  install,
  ScHelp,
  ScSteps,
  ScStep,
  ScTabs,
  ScRadioGroup,
  ScRadioTooltipGroup,
  ScAlert,
  ScModal,

  ScTable,
  Copy,
  TableAction,
  ColumnDialog,
  Empty,

  ScLoading,
  ScButton,
  ScInputNumber,
  ScSelect,
  ScSwitch,
  ScDropDown,
  ScInput,
  ScScrollbar,
  ScPopconfirm,
  ScCascader,
  ScBreadcrumb,
  ScSlider,
  ScDescription,
  ScForm,

  ScDatePicker,
  ScMonthPicker,
  ScWeekPicker,
  ScRangePicker,
  ScQuarterPicker,

  ScTimePicker,
  ScTimeRangePicker,
  
  ApiSelect,
  RadioButtonGroup,
  ApiTreeSelect,
  ApiTree,
  ApiRadioGroup,
  ApiCascader
}

export * from './types'

export { installGlobalDirectives as installGlobalDirectives, ClickOutside, TextCollapse, LoadingDirective }

export { 
  useTable, 
  useLoading,
  useContextMenu,
  useModal, 
  useModalInner,
  useModalContext,
  useMessage,
  useDescription,
  useForm
}

export default ScUi;