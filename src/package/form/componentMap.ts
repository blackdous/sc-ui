import type { Component } from 'vue';
import type { ComponentType } from './types/index';

/**
 * Component list, register here to setting it in the form
 */
import {
  Input,
  // Select,
  Radio,
  Checkbox,
  AutoComplete,
  Cascader,
  // DatePicker,
  // InputNumber,
  Switch,
  // TimePicker,
  TreeSelect,
  // Slider,
  Rate,
  Divider,
} from 'ant-design-vue';

import { ScSelect } from '../select';
import { ScInput } from '../input';
import { ScSlider } from '../slider';

import ScDatePicker, { ScWeekPicker, ScMonthPicker, ScRangePicker, ScQuarterPicker, ScYearPicker } from '../datePicker';
import ScTimePicker, { ScTimeRangePicker } from '../timePicker';
import { ScInputNumber } from '../inputNumber';

import ApiRadioGroup from './component/ApiRadioGroup.vue';
import RadioButtonGroup from './component/RadioButtonGroup.vue';
import ApiSelect from './component/ApiSelect.vue';
import ApiTree from './component/ApiTree.vue';
import ApiTreeSelect from './component/ApiTreeSelect.vue';
import ApiCascader from './component/ApiCascader.vue';
// import { BasicUpload } from '/@/components/Upload';
// import { StrengthMeter } from '/@/components/StrengthMeter';
// import { BzIconPicker } from '/@/components/BzIcon';
// import { CountdownInput } from '/@/components/CountDown';

const componentMap = new Map<ComponentType, Component>();

componentMap.set('Input', ScInput);
componentMap.set('InputGroup', Input.Group);
componentMap.set('InputPassword', Input.Password);
componentMap.set('InputSearch', Input.Search);
componentMap.set('InputTextArea', Input.TextArea);
componentMap.set('InputNumber', ScInputNumber);
componentMap.set('AutoComplete', AutoComplete);

componentMap.set('Select', ScSelect);
componentMap.set('ApiSelect', ApiSelect);
componentMap.set('ApiTree', ApiTree);
componentMap.set('TreeSelect', TreeSelect);
componentMap.set('ApiTreeSelect', ApiTreeSelect);
componentMap.set('ApiRadioGroup', ApiRadioGroup);
componentMap.set('Switch', Switch);
componentMap.set('RadioButtonGroup', RadioButtonGroup);
componentMap.set('RadioGroup', Radio.Group);
componentMap.set('Checkbox', Checkbox);
componentMap.set('CheckboxGroup', Checkbox.Group);
componentMap.set('ApiCascader', ApiCascader);
componentMap.set('Cascader', Cascader);
componentMap.set('Slider', ScSlider);
componentMap.set('Rate', Rate);

// componentMap.set('DatePicker', DatePicker);
// componentMap.set('MonthPicker', DatePicker.MonthPicker);
// componentMap.set('RangePicker', DatePicker.RangePicker);
// componentMap.set('WeekPicker', DatePicker.WeekPicker);
// componentMap.set('TimePicker', TimePicker);

componentMap.set('DatePicker', ScDatePicker);
componentMap.set('MonthPicker', ScMonthPicker);
componentMap.set('RangePicker', ScRangePicker);
componentMap.set('WeekPicker', ScWeekPicker);
componentMap.set('YearPicker', ScYearPicker);
componentMap.set('QuarterPicker', ScQuarterPicker);
componentMap.set('TimePicker', ScTimePicker);
componentMap.set('TimeRangePicker', ScTimeRangePicker);

// componentMap.set('StrengthMeter', StrengthMeter);
// componentMap.set('IconPicker', BzIconPicker);
// componentMap.set('InputCountDown', CountdownInput);

// componentMap.set('Upload', BasicUpload);
componentMap.set('Divider', Divider);

export function add(compName: ComponentType, component: Component) {
  componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
  componentMap.delete(compName);
}

export { componentMap };
