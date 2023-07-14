import type { App } from 'vue'
import { message } from 'ant-design-vue'
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
import { ScCascaderPanel } from './package/cascaderPanel'
import { ScCascaderNew } from './package/scCascader'
import { ScBreadcrumb, ScBreadcrumbItem } from './package/breadcrumb'
import { useMessage } from './hooks'
import { ScSlider } from './package/slider'
import { ScIcon } from './package/icon'
import { ScLink } from './package/link'
import { ScTag } from './package/tag'
import { ScBadge } from './package/badge'
import useIcon from './hooks/useIcon'
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
import { ScIp } from './package/formIp'
import { ScDrawer, useDrawer, useDrawerInner } from './package/drawer'

// 指令
import { installGlobalDirectives } from './directives'
import ClickOutside from './directives/clickOutside'
import TextCollapse from './directives/textCollapse'
import LoadingDirective from './directives/loading'
import StopEvent from './directives/stopEvent'

import './style/index.less';

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
  ScDrawer,

  ScTable,
  Copy,
  TableAction,
  ColumnDialog,
  Empty,
  ScIcon,
  ScLink,
  ScTag,
  ScBadge,
  ScIp,

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
  ScCascaderPanel,
  ScCascaderNew,

  ScBreadcrumb,
  ScBreadcrumbItem,

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
  ApiCascader,

  // 未修改的组件
  message
]

const install = (app: App) => {
  components.forEach((i: any) => {
    app.use(i);
  });
};

const ScUi = {
  version: '0.0.144',
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
  ScDrawer,

  ScTable,
  
  Copy,
  TableAction,
  ColumnDialog,
  Empty,
  ScIcon,
  ScLink,
  ScTag,
  ScBadge,
  ScIp,

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
  ScCascaderPanel,
  ScCascaderNew,

  ScBreadcrumb,
  ScBreadcrumbItem,
  
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
  ApiCascader,

  // 未修改的组件
  message
}

export * from './types'

export { installGlobalDirectives as installGlobalDirectives, ClickOutside, TextCollapse, LoadingDirective, StopEvent }

export { 
  useTable, 
  useLoading,
  useContextMenu,
  useModal, 
  useModalInner,
  useModalContext,
  useMessage,
  useDescription,
  useForm,
  useIcon,
  useDrawer, 
  useDrawerInner
}

export default ScUi;