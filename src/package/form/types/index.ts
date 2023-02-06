type ColSpanType = number | string;
export interface ColEx {
  style?: any;
  /**
   * raster 要占用的单元格数，, 0 为 display: none
   *
   * @default none (0)
   * @type ColSpanType
   */
  span?: ColSpanType;

  /**
   * 光栅顺序，用于弹性布局模式
   * @default 0
   * @type ColSpanType
   */
  order?: ColSpanType;

  /**
   * flex的布局填充
   * @default none
   * @type ColSpanType
   */
  flex?: ColSpanType;

  /**
   * 从左侧偏移 Col 的单元格数
   *
   * @default 0
   * @type ColSpanType
   */
  offset?: ColSpanType;

  /**
   * 栅格向右移动的cell数
   *
   * @default 0
   * @type ColSpanType
   */
  push?: ColSpanType;

  /**栅格向左移动的cell数
   *
   * @default 0
   * @type ColSpanType
   */
  pull?: ColSpanType;

  /**
   * <576px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xs?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   *
   * ≥576px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  sm?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥768px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  md?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥992px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  lg?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1200px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1600px
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xxl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
}

export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  | 'ApiSelect'
  | 'TreeSelect'
  | 'ApiTree'
  | 'ApiTreeSelect'
  | 'ApiRadioGroup'
  | 'RadioButtonGroup'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'ApiCascader'
  | 'Cascader'
  | 'DatePicker'
  | 'YearPicker'
  | 'QuarterPicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'TimeRangePicker'
  | 'Switch'
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider';
