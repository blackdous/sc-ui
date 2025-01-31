import { CalendarOutlined } from '@ant-design/icons-vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { CloseCircleFilled } from '@ant-design/icons-vue';
import RCPicker from '../../picker';
import type { PanelMode, PickerMode } from '../../picker/interface';
import type { GenerateConfig } from '../../picker/generate/index';
import enUS from '../locale/en_US';
import { getPlaceholder } from '../util';
import { useLocaleReceiver } from '../../../locale-provider/LocaleReceiver';
import { getTimeProps, Components } from '.';
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import useConfigInject from '../../../hooks/useConfigInject';
import classNames from '../../../utils/classNames';
import type { CommonProps, DatePickerProps } from './props';
import { commonProps, datePickerProps } from './props';

import devWarning from '../../../utils/devWarning';
import { useInjectFormItemContext } from '../../form/FormItemContext';

export default function generateSinglePicker<DateType, ExtraProps = {}>(
  generateConfig: GenerateConfig<DateType>,
  extraProps: ExtraProps,
) {
  function getPicker(picker?: PickerMode, displayName?: string) {
    const comProps = {
      ...commonProps<DateType>(),
      ...datePickerProps<DateType>(),
      ...extraProps,
    };
    return defineComponent({
      name: displayName,
      inheritAttrs: false,
      props: comProps,
      slots: [
        'suffixIcon',
        // 'clearIcon',
        'prevIcon',
        'nextIcon',
        'superPrevIcon',
        'superNextIcon',
        // 'panelRender',
        'dateRender',
        'renderExtraFooter',
        'monthCellRender',
      ],
      setup(_props, { slots, expose, attrs, emit }) {
        // 兼容 vue 3.2.7
        const props = _props as unknown as CommonProps<DateType> &
          DatePickerProps<DateType> &
          ExtraProps;
        const formItemContext = useInjectFormItemContext();
        devWarning(
          !(props.monthCellContentRender || slots.monthCellContentRender),
          'DatePicker',
          '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.',
        );

        devWarning(
          !attrs.getCalendarContainer,
          'DatePicker',
          '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.',
        );
        const { direction, getPopupContainer, size, rootPrefixCls } = useConfigInject(
          'picker',
          props,
          );
        const prefixCls = 'scPicker'
        const pickerRef = ref();
        onMounted(() => {
          nextTick(() => {
            if (process.env.NODE_ENV === 'test') {
              if (props.autofocus) {
                pickerRef.value?.focus();
              }
            }
          });
        });
        expose({
          focus: () => {
            pickerRef.value?.focus();
          },
          blur: () => {
            pickerRef.value?.blur();
          },
        });
        const maybeToString = (date: DateType) => {
          return props.valueFormat ? generateConfig.toString(date, props.valueFormat) : date;
        };
        const onChange = (date: DateType, dateString: string) => {
          const value = maybeToString(date);
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
        const onPanelChange = (date: DateType, mode: PanelMode | null) => {
          const value = maybeToString(date);
          emit('panelChange', value, mode);
        };
        const onOk = (date: DateType) => {
          const value = maybeToString(date);
          emit('ok', value);
        };

        const [contextLocale] = useLocaleReceiver('DatePicker', enUS);

        const value = computed(() => {
          if (props.value) {
            return props.valueFormat
              ? generateConfig.toDate(props.value as string | DateType, props.valueFormat)
              : props.value;
          }
          return (props.value === '' ? undefined : props.value) as DateType;
        });
        const defaultValue = computed(() => {
          if (props.defaultValue) {
            return props.valueFormat
              ? generateConfig.toDate(props.defaultValue as string | DateType, props.valueFormat)
              : props.defaultValue;
          }
          return (props.defaultValue === '' ? undefined : props.defaultValue) as DateType;
        });
        const defaultPickerValue = computed(() => {
          if (props.defaultPickerValue) {
            return props.valueFormat
              ? generateConfig.toDate(
                  props.defaultPickerValue as string | DateType,
                  props.valueFormat,
                )
              : props.defaultPickerValue;
          }
          return (
            props.defaultPickerValue === '' ? undefined : props.defaultPickerValue
          ) as DateType;
        });

        return () => {
          const locale = { ...contextLocale.value, ...props.locale };
          const p = { ...props, ...attrs };
          const {
            bordered = true,
            placeholder,
            suffixIcon = slots.suffixIcon?.(),
            prefixText,
            showToday = true,
            transitionName,
            allowClear = true,
            dateRender = slots.dateRender,
            renderExtraFooter = slots.renderExtraFooter,
            monthCellRender = slots.monthCellRender ||
            (props as any).monthCellContentRender ||
            slots.monthCellContentRender,
            clearIcon = slots.clearIcon?.(),
            id = formItemContext.id.value,
            ...restProps
          } = p;
          const showTime = p.showTime === '' ? true : p.showTime;
          const { format } = p as any;

          let additionalOverrideProps: any = {};
          if (picker) {
            additionalOverrideProps.picker = picker;
          }
          const mergedPicker = picker || p.picker || 'date';

          additionalOverrideProps = {
            ...additionalOverrideProps,
            ...(showTime
              ? getTimeProps({
                  format,
                  picker: mergedPicker,
                  ...(typeof showTime === 'object' ? showTime : {}),
                })
              : {}),
            ...(mergedPicker === 'time'
              ? getTimeProps({ format, ...restProps, picker: mergedPicker })
              : {}),
          };
          const pre = prefixCls.value;
          return (
            <RCPicker
              monthCellRender={monthCellRender}
              dateRender={dateRender}
              renderExtraFooter={renderExtraFooter}
              ref={pickerRef}
              placeholder={getPlaceholder(mergedPicker, locale, placeholder)}
              suffixIcon={
                suffixIcon ||
                (mergedPicker === 'time' ? <ClockCircleOutlined /> : <CalendarOutlined />)
              }
              clearIcon={clearIcon || <CloseCircleFilled />}
              allowClear={allowClear}
              transitionName={transitionName || `${rootPrefixCls.value}-slide-up`}
              {...restProps}
              {...additionalOverrideProps}
              id={id}
              picker={mergedPicker}
              value={value.value}
              defaultValue={defaultValue.value}
              defaultPickerValue={defaultPickerValue.value}
              showToday={showToday}
              locale={locale!.lang}
              class={classNames(
                {
                  [`scPicker-${size.value}`]: size.value,
                  [`scPicker-borderless`]: !bordered,
                },
                attrs.class,
              )}
              prefixCls={pre}
              prefixText={prefixText}
              getPopupContainer={attrs.getCalendarContainer || getPopupContainer.value}
              generateConfig={generateConfig}
              prevIcon={slots.prevIcon?.() || <span class={`scPicker-prev-icon`} />}
              nextIcon={slots.nextIcon?.() || <span class={`scPicker-next-icon`} />}
              superPrevIcon={slots.superPrevIcon?.() || <span class={`scPicker-super-prev-icon`} />}
              superNextIcon={slots.superNextIcon?.() || <span class={`scPicker-super-next-icon`} />}
              components={Components}
              direction={direction.value}
              onChange={onChange}
              onOpenChange={onOpenChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onPanelChange={onPanelChange}
              onOk={onOk}
            />
          );
        };
      },
    });
  }

  const DatePicker = getPicker(undefined, 'ScDatePicker');
  const WeekPicker = getPicker('week', 'ScWeekPicker');
  const MonthPicker = getPicker('month', 'ScMonthPicker');
  const YearPicker = getPicker('year', 'ScYearPicker');
  const TimePicker = getPicker('time', 'ScTimePicker'); // 给独立组件 TimePicker 使用，此处名称不用更改
  const QuarterPicker = getPicker('quarter', 'ScQuarterPicker');

  return {
    DatePicker,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker,
  };
}
