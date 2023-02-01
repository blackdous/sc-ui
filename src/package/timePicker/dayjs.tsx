import type { Dayjs } from 'dayjs';
import createTimePicker from './time-picker';
import dayjsGenerateConfig from '../picker/generate/dayjs';
import type { App } from 'vue';
import type { PickerTimeProps, RangePickerTimeProps } from '../datePicker/generatePicker';

const { ScTimePicker, ScTimeRangePicker } = createTimePicker<Dayjs>(dayjsGenerateConfig);

export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Dayjs>, 'picker'> {
  popupClassName?: string;
  valueFormat?: string;
}
export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
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
