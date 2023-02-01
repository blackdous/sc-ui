import createTimePicker from './time-picker';
import dateFnsGenerateConfig from '../picker/generate/dateFns';
import type { App } from 'vue';
import type { PickerTimeProps, RangePickerTimeProps } from '../datePicker/generatePicker';

const { ScTimePicker, ScTimeRangePicker } = createTimePicker<Date>(dateFnsGenerateConfig);

export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Date>, 'picker'> {
  popupClassName?: string;
  valueFormat?: string;
}
export interface TimePickerProps extends Omit<PickerTimeProps<Date>, 'picker'> {
  popupClassName?: string;
  valueFormat?: string;
}
/* istanbul ignore next */
export { ScTimePicker, ScTimeRangePicker };
export default Object.assign(ScTimePicker, {
  ScTimePicker,
  ScTimeRangePicker,
  install: (app: App) => {
    app.component(ScTimePicker.name, ScTimePicker);
    app.component(ScTimeRangePicker.name, ScTimeRangePicker);
    return app;
  },
});
