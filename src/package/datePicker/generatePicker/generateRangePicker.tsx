import { CalendarOutlined } from '@ant-design/icons-vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { CloseCircleFilled } from '@ant-design/icons-vue';
// import { SwapRightOutlined } from '@ant-design/icons-vue';
import { RangePicker as VCRangePicker } from '../../picker';
import type { GenerateConfig } from '../../picker/generate/index';
import enUS from '../locale/en_US';
import { useLocaleReceiver } from '../../../locale-provider/LocaleReceiver';
import { getRangePlaceholder } from '../util';
import { getTimeProps, Components } from '.';
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import useConfigInject from '../../../hooks/useConfigInject';
import classNames from '../../../utils/classNames';
import type { CommonProps, RangePickerProps } from './props';
import { commonProps, rangePickerProps } from './props';
import type { PanelMode, RangeValue } from '../../picker/interface';
import type { RangePickerSharedProps } from '../../picker/RangePicker';
import devWarning from '../../../utils/devWarning';
import { useInjectFormItemContext } from '../../form/FormItemContext';
import omit from '../../../utils/omit';

export default function generateRangePicker<DateType, ExtraProps = {}>(
  generateConfig: GenerateConfig<DateType>,
  extraProps: ExtraProps,
) {
  const RangePicker = defineComponent({
    name: 'ScRangePicker',
    inheritAttrs: false,
    props: {
      ...commonProps<DateType>(),
      ...rangePickerProps<DateType>(),
      ...extraProps,
      onChange: [Function, Array],
      onBlur: [Function, Array],
    },
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
      // 'separator',
    ],
    setup(_props, { expose, slots, attrs, emit }) {
      const props = _props as unknown as CommonProps<DateType> & RangePickerProps<DateType>;
      const formItemContext = useInjectFormItemContext();
      devWarning(
        !attrs.getCalendarContainer,
        'DatePicker',
        '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.',
      );
      const { direction, getPopupContainer, size, rootPrefixCls } = useConfigInject(
      // const { prefixCls, direction, getPopupContainer, size, rootPrefixCls } = useConfigInject(
        'picker',
        props,
      );
      const prefixCls = ref('scPicker');
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
      const maybeToStrings = (dates: DateType[]) => {
        return props.valueFormat ? generateConfig.toString(dates, props.valueFormat) : dates;
      };
      const onChange = (dates: [DateType, DateType], dateStrings: [string, string]) => {
        const values = maybeToStrings(dates);
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
      const onPanelChange = (dates: RangeValue<DateType>, modes: [PanelMode, PanelMode]) => {
        const values = maybeToStrings(dates);
        emit('panelChange', values, modes);
      };
      const onOk = (dates: DateType[]) => {
        const value = maybeToStrings(dates);
        emit('ok', value);
      };
      const onCalendarChange: RangePickerSharedProps<DateType>['onCalendarChange'] = (
        dates: [DateType, DateType],
        dateStrings: [string, string],
        info,
      ) => {
        const values = maybeToStrings(dates);
        emit('calendarChange', values, dateStrings, info);
      };
      const [contextLocale] = useLocaleReceiver('DatePicker', enUS);

      const value = computed(() => {
        if (props.value) {
          return props.valueFormat
            ? generateConfig.toDate(props.value, props.valueFormat)
            : props.value;
        }
        return props.value;
      });
      const defaultValue = computed(() => {
        if (props.defaultValue) {
          return props.valueFormat
            ? generateConfig.toDate(props.defaultValue, props.valueFormat)
            : props.defaultValue;
        }
        return props.defaultValue;
      });
      const defaultPickerValue = computed(() => {
        if (props.defaultPickerValue) {
          return props.valueFormat
            ? generateConfig.toDate(props.defaultPickerValue, props.valueFormat)
            : props.defaultPickerValue;
        }
        return props.defaultPickerValue;
      });
      return () => {
        const locale = { ...contextLocale.value, ...props.locale };
        const p = { ...props, ...attrs };
        const {
          prefixCls: customizePrefixCls,
          bordered = true,
          placeholder,
          suffixIcon = slots.suffixIcon?.(),
          prefixText,
          picker = 'date',
          transitionName,
          allowClear = true,
          dateRender = slots.dateRender,
          renderExtraFooter = slots.renderExtraFooter,
          separator = slots.separator?.(),
          clearIcon = slots.clearIcon?.(),
          id = formItemContext.id.value,
          ...restProps
        } = p;
        delete restProps['onUpdate:value'];
        delete restProps['onUpdate:open'];
        const { format, showTime } = p as any;

        let additionalOverrideProps: any = {};
        additionalOverrideProps = {
          ...additionalOverrideProps,
          ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
          ...(picker === 'time'
            ? getTimeProps({ format, ...omit(restProps, ['disabledTime']), picker })
            : {}),
        };
        const pre = prefixCls.value;
        return (
          <VCRangePicker
            dateRender={dateRender}
            renderExtraFooter={renderExtraFooter}
            separator={
              separator || (
                <span aria-label="to" class={`${pre}-separator`}>
                  {/* <SwapRightOutlined /> */}
                  {/* 一 */}
                  <i class="sc-ui sc-remove"></i>
                </span>
              )
            }
            ref={pickerRef}
            placeholder={getRangePlaceholder(picker, locale, placeholder as [string, string])}
            suffixIcon={
              suffixIcon || (picker === 'time' ? <ClockCircleOutlined /> : <CalendarOutlined />)
            }
            prefixText={prefixText}
            clearIcon={clearIcon || <CloseCircleFilled />}
            allowClear={allowClear}
            transitionName={transitionName || `${rootPrefixCls.value}-slide-up`}
            {...restProps}
            {...additionalOverrideProps}
            id={id}
            value={value.value}
            defaultValue={defaultValue.value}
            defaultPickerValue={defaultPickerValue.value}
            picker={picker}
            class={classNames(
              {
                [`scPicker-${size.value}`]: size.value,
                [`scPicker-borderless`]: !bordered,
              },
              attrs.class,
            )}
            locale={locale!.lang}
            prefixCls={pre}
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
            onCalendarChange={onCalendarChange}
            immediateCalendarChangeDateRangePicker={props.immediateCalendarChangeDateRangePicker}
          />
        );
      };
    },
  });

  return RangePicker;
}
