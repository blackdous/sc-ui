import { defineComponent, ref } from 'vue';
import type { RangePickerTimeProps } from '../datePicker/generatePicker';
import generatePicker from '../datePicker/generatePicker';
import {
  commonProps,
  datePickerProps,
  rangePickerProps,
} from '../datePicker/generatePicker/props';
import type { CommonProps, DatePickerProps } from '../datePicker/generatePicker/props';
import type { GenerateConfig } from '../picker/generate';
import type { PanelMode, RangeValue } from '../picker/interface';
import type { RangePickerSharedProps } from '../picker/RangePicker';
import devWarning from '../../utils/devWarning';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../../utils/omit';

export interface TimePickerLocale {
  placeholder?: string;
  rangePlaceholder?: [string, string];
}

export const timePickerProps = () => ({
  format: String,
  showNow: { type: Boolean, default: undefined },
  showHour: { type: Boolean, default: undefined },
  showMinute: { type: Boolean, default: undefined },
  showSecond: { type: Boolean, default: undefined },
  use12Hours: { type: Boolean, default: undefined },
  hourStep: Number,
  minuteStep: Number,
  secondStep: Number,
  hideDisabledOptions: { type: Boolean, default: undefined },
  popupClassName: String,
});

export interface CommonTimePickerProps {
  format?: string;
  showNow?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  hideDisabledOptions?: boolean;
  popupClassName?: string;
}

export type TimeRangePickerProps<T> = Omit<RangePickerTimeProps<T>, 'picker'> & {
  popupClassName?: string;
  valueFormat?: string;
};

export type TimePickerProps<DateType> = CommonProps<DateType> &
  DatePickerProps<DateType> &
  CommonTimePickerProps & {
    addon?: () => void;
  };

function createTimePicker<
  DateType,
  DTimePickerProps extends TimePickerProps<DateType> = TimePickerProps<DateType>,
  DTimeRangePickerProps extends TimeRangePickerProps<DateType> = TimeRangePickerProps<DateType>,
>(generateConfig: GenerateConfig<DateType>) {
  const DatePicker = generatePicker<DateType>(generateConfig, {
    ...timePickerProps(),
    order: { type: Boolean, default: true },
  });

  const { ScTimePicker: InternalTimePicker, ScRangePicker: InternalRangePicker } = DatePicker as any;
  const TimePicker = defineComponent<DTimePickerProps>({
    name: 'ScTimePicker',
    inheritAttrs: false,
    props: {
      ...commonProps<DateType>(),
      ...datePickerProps<DateType>(),
      ...timePickerProps(),
      addon: { type: Function },
    } as any,
    slot: ['addon', 'renderExtraFooter', 'suffixIcon', 'clearIcon'],
    setup(props, { slots, expose, emit, attrs }) {
      const formItemContext = useInjectFormItemContext();
      devWarning(
        !(slots.addon || props.addon),
        'TimePicker',
        '`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.',
      );
      const pickerRef = ref();
      expose({
        focus: () => {
          pickerRef.value?.focus();
        },
        blur: () => {
          pickerRef.value?.blur();
        },
      });
      const onChange = (value: DateType | string, dateString: string) => {
        emit('update:value', value);
        emit('change', value, dateString);
        formItemContext.onFieldChange();
      };
      const onOpenChange = (open: boolean) => {
        emit('update:open', open);
        emit('openChange', open);
      };
      const onFocus = () => {
        emit('focus');
      };
      const onBlur = () => {
        emit('blur');
        formItemContext.onFieldBlur();
      };
      const onOk = (value: DateType) => {
        emit('ok', value);
      };
      return () => {
        const { id = formItemContext.id.value, ...restProps } = props;
        return (
          <InternalTimePicker
            {...attrs}
            {...omit(restProps, ['onUpdate:value', 'onUpdate:open'])}
            id={id}
            dropdownClassName={props.popupClassName}
            mode={undefined}
            ref={pickerRef}
            renderExtraFooter={
              props.addon || slots.addon || props.renderExtraFooter || slots.renderExtraFooter
            }
            onChange={onChange}
            onOpenChange={onOpenChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onOk={onOk}
            v-slots={slots}
          />
        );
      };
    },
  });

  const TimeRangePicker = defineComponent<DTimeRangePickerProps>({
    name: 'ScTimeRangePicker',
    inheritAttrs: false,
    props: {
      ...commonProps<DateType>(),
      ...rangePickerProps<DateType>(),
      ...timePickerProps(),
      order: { type: Boolean, default: true },
    } as any,
    slot: ['renderExtraFooter', 'suffixIcon', 'clearIcon'],
    setup(props, { slots, expose, emit, attrs }) {
      const pickerRef = ref();

      const formItemContext = useInjectFormItemContext();

      expose({
        focus: () => {
          pickerRef.value?.focus();
        },
        blur: () => {
          pickerRef.value?.blur();
        },
      });
      const onChange = (
        values: RangeValue<string> | RangeValue<DateType>,
        dateStrings: [string, string],
      ) => {
        emit('update:value', values);
        emit('change', values, dateStrings);
        formItemContext.onFieldChange();
      };
      const onOpenChange = (open: boolean) => {
        emit('update:open', open);
        emit('openChange', open);
      };
      const onFocus = () => {
        emit('focus');
      };
      const onBlur = () => {
        emit('blur');
        formItemContext.onFieldBlur();
      };
      const onPanelChange = (
        values: RangeValue<string> | RangeValue<DateType>,
        modes: [PanelMode, PanelMode],
      ) => {
        emit('panelChange', values, modes);
      };
      const onOk = (values: RangeValue<string | DateType>) => {
        emit('ok', values);
      };
      const onCalendarChange: RangePickerSharedProps<DateType>['onCalendarChange'] = (
        values: RangeValue<string> | RangeValue<DateType>,
        dateStrings: [string, string],
        info,
      ) => {
        emit('calendarChange', values, dateStrings, info);
      };
      return () => {
        const { id = formItemContext.id.value, ...restProps } = props;
        return (
          <InternalRangePicker
            {...attrs}
            {...omit(restProps, ['onUpdate:open', 'onUpdate:value'])}
            id={id}
            dropdownClassName={props.popupClassName}
            picker="time"
            mode={undefined}
            ref={pickerRef}
            onChange={onChange}
            onOpenChange={onOpenChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onPanelChange={onPanelChange}
            onOk={onOk}
            onCalendarChange={onCalendarChange}
            v-slots={slots}
          />
        );
      };
    },
  });

  return {
    ScTimePicker: TimePicker,
    ScTimeRangePicker: TimeRangePicker,
  };
}

export default createTimePicker;
