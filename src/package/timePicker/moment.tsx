import type { Moment } from 'moment';
import createTimePicker from './time-picker';
import momentGenerateConfig from '../picker/generate/moment';
import type { App } from 'vue';
import type { PickerTimeProps, RangePickerTimeProps } from '../datePicker/generatePicker';

const { ScTimePicker, ScTimeRangePicker } = createTimePicker<Moment>(momentGenerateConfig);

export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Moment>, 'picker'> {
  popupClassName?: string;
  valueFormat?: string;
}
export interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {
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
