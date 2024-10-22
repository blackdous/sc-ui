import type { GenerateConfig } from '../../picker/generate';
import type { SharedTimeProps } from '../../picker/panels/TimePanel';
import type { PickerMode } from '../../picker/interface';
import PickerButton from '../PickerButton';
import PickerTag from '../PickerTag';
import generateSinglePicker from './generateSinglePicker';
import generateRangePicker from './generateRangePicker';

export * from './interface';

export const Components = { button: PickerButton, rangeItem: PickerTag };

function toArray<T>(list: T | T[]): T[] {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}

export function getTimeProps<DateType>(
  props: { format?: string; picker?: PickerMode } & SharedTimeProps<DateType>,
) {
  const { format, picker, showHour, showMinute, showSecond, use12Hours } = props;

  const firstFormat = toArray(format)[0];
  const showTimeObj: SharedTimeProps<DateType> = { ...props };

  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
      showTimeObj.showHour = false;
    }

    if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }

  return {
    showTime: showTimeObj,
  };
}

function generatePicker<DateType, ExtraProps extends {} = {}>(
  generateConfig: GenerateConfig<DateType>,
  extraProps?: ExtraProps,
) {
  // =========================== Picker ===========================
  const { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker } =
    generateSinglePicker<DateType, ExtraProps>(generateConfig, extraProps);

  // ======================== Range Picker ========================
  const RangePicker = generateRangePicker<DateType, ExtraProps>(generateConfig, extraProps);

  return {
    ScDatePicker: DatePicker,
    ScWeekPicker: WeekPicker,
    ScMonthPicker: MonthPicker,
    ScYearPicker: YearPicker,
    ScTimePicker: TimePicker,
    ScQuarterPicker: QuarterPicker,
    ScRangePicker: RangePicker,
  };
}

export default generatePicker;
