import type { Dayjs } from 'dayjs';
import type { App } from 'vue';
import dayjsGenerateConfig from '../picker/generate/dayjs';
import type {
  PickerProps,
  PickerDateProps,
  RangePickerProps as BaseRangePickerProps,
} from './generatePicker';
import generatePicker from './generatePicker';
import type { ExtraDatePickerProps, ExtraRangePickerProps } from './generatePicker/props';

export type DatePickerProps = PickerProps<Dayjs> & ExtraDatePickerProps<Dayjs>;
export type MonthPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'> & ExtraDatePickerProps<Dayjs>;
export type WeekPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'> & ExtraDatePickerProps<Dayjs>;
export type RangePickerProps = BaseRangePickerProps<Dayjs> & ExtraRangePickerProps<Dayjs>;

const { ScDatePicker, ScWeekPicker, ScMonthPicker, ScYearPicker, ScTimePicker, ScQuarterPicker, ScRangePicker } =
  generatePicker<Dayjs>(dayjsGenerateConfig);

/* istanbul ignore next */
export { ScRangePicker, ScWeekPicker, ScMonthPicker, ScQuarterPicker, ScYearPicker };

export default Object.assign(ScDatePicker, {
  ScWeekPicker: ScWeekPicker,
  ScMonthPicker: ScMonthPicker,
  ScYearPicker: ScYearPicker,
  ScRangePicker: ScRangePicker,
  ScTimePicker: ScTimePicker,
  ScQuarterPicker: ScQuarterPicker,
  install: (app: App) => {
    app.component(ScDatePicker.name, ScDatePicker);
    app.component(ScRangePicker.name, ScRangePicker);
    app.component(ScMonthPicker.name, ScMonthPicker);
    app.component(ScWeekPicker.name, ScWeekPicker);
    app.component(ScQuarterPicker.name, ScQuarterPicker);
    return app;
  },
});
