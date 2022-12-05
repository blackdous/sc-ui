import { PropType, VNodeChild } from "vue"
export interface FilterItem {
  label: string,
  isShow?: boolean,
  isDisabled?: boolean,
  key?: string,
  loading?: boolean,
  action: string | ((args: any) => void),
  tooltip?: boolean,
  tooltipDes?: string,
  children?: Array<FilterItem>
}

export const scFilterProps = () => ({
  filterList: Object as PropType<Array<FilterItem>>,
  overlayClassName: String,
  column: Object as PropType<Column>,
  filterSelected: Array as PropType<FilterItem[]>
})

export interface ColumnModalItem {
  label?: string,
  value?: string,
  key?: string,
  disabled?: boolean,
  checked?: boolean,
}

export const list = [1, 2, 3, 4, 5, 6].map((item:number) => {
  return {
    label: item.toString().repeat(4),
    value: item.toString().repeat(4),
    key: item.toString().repeat(4),
    disabled: item%2 === 1,
    checked: true,
  }
})

export interface ColumnModalType {
  visible?: boolean,
  columnlist?: Array<ColumnModalItem>
}

export interface ColumnProvide {
  list: Array<ColumnModalItem>,
  keys: Array<string>,
  checkedList: Array<ColumnModalItem>
}

export const ColumnModal = () => ({
  visible: {
    type: Boolean
  },
  columnList: {
    type: Object as PropType<Array<ColumnModalItem>>,
    default () {
      return list
    }
  }
})

export interface ColumnFilterItem {
  text?: string;
  value?: string;
  children?: any;
}



export declare type SortOrder = 'ascend' | 'descend';

export interface RecordProps<T> {
  text: any;
  record: T;
  index: number;
}

export interface FilterDropdownProps {
  prefixCls?: string;
  setSelectedKeys?: (selectedKeys: string[]) => void;
  selectedKeys?: string[];
  confirm?: () => void;
  clearFilters?: () => void;
  filters?: ColumnFilterItem[];
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  visible?: boolean;
}

export declare type CustomRenderFunction<T> = (record: RecordProps<T>) => VNodeChild | JSX.Element;

export interface Column {
  label?: string,
  value?: [string, number],
  disabled?: boolean,
  checked?: boolean,
  default?: boolean,
  filterList?: Array<FilterItem>,
  filterTag?: boolean,
  filterSelected?: Array<FilterItem>,
  flag?: string,
  type: {
    componentName: string,
    props: any
  },
  /**
   * 内容如何对齐
   * @default 'left'
   * @type string
   */
  align?: 'left' | 'right' | 'center';

  /**
   * ellipsize cell content, not working with sorter and filters for now.
   * tableLayout would be fixed when ellipsis is true.
   * @default false
   * @type boolean
   */
  ellipsis?: boolean;

  /**
   * 本列标题的跨度
   * @type number
   */
  colSpan?: number;

  /**
   * 数据记录的显示字段，可以设置如a.b.c
   * @type string
   */
  dataIndex?: string;

  /**
   * 默认过滤值
   * @type string[]
   */
  defaultFilteredValue?: string[];

  /**
   * 已排序值的默认顺序:'ascend' ' descent ' null
   * @type string
   */
  defaultSortOrder?: SortOrder;

  /**
   * 自定义过滤器覆盖
   * @type any (slot)
   */
  filterDropdown?:
    | VNodeChild
    | JSX.Element
    | ((props: FilterDropdownProps) => VNodeChild | JSX.Element);

  /**
   * filterDropdown是否可见
   * @type boolean
   */
  filterDropdownVisible?: boolean;

  /**
   * 数据源是否被过滤
   * @default false
   * @type boolean
   */
  filtered?: boolean;

  /**
   * 控制过滤值，过滤图标将高亮显示
   * @type string[]
   */
  filteredValue?: string[];

  /**
   * 自定义 过滤 图标
   * @default false
   * @type any
   */
  filterIcon?: boolean | VNodeChild | JSX.Element;

  /**
   * 是否可以选择多个过滤器
   * @default true
   * @type boolean
   */
  filterMultiple?: boolean;

  /**
   * 过滤器菜单配置
   * @type object[]
   */
  filters?: ColumnFilterItem[];

  /**
   * 设置column为固定值:true(与left相同)“left”“right”
   * @default false
   * @type boolean | string
   */
  fixed?: boolean | 'left' | 'right';

  /**
   * 这个列的唯一键，如果你设置了唯一的dataIndex，你可以忽略这个属性
   * @type string
   */
  key?: string;

  /**
   * 表格单元格的Render。返回值应该是一个VNode，或者colSpan/rowSpan配置的一个对象
   * @type Function | ScopedSlot
   */
  customRender?: CustomRenderFunction<any> | VNodeChild | JSX.Element;

  /**
   * 局部排序的排序函数，参见数组。的compareFunction排序。如果你只需要排序按钮，设置为true
   * @type boolean | Function
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  sorter?: boolean | Function;

  /**
   * 已排序值的顺序:'ascend' ' descent ' false
   * @type boolean | string
   */
  sortOrder?: boolean | SortOrder;

  /**
   * 支持的排序方式 ,'ascend', 'descend'
   * @default ['ascend', 'descend']
   * @type string[]
   */
  sortDirections?: SortOrder[];

  /**
   * 标题
   * @type any (string | slot)
   */
  title?: VNodeChild | JSX.Element;

  width?: string | number;

  /**
   * Callback executed when the confirm filter button is clicked, Use as a filter event when using template or jsx
   * @type Function
   */
  onFilter?: (value: any, record: any) => boolean;

  /**
   * Callback executed when filterDropdownVisible is changed, Use as a filterDropdownVisible event when using template or jsx
   * @type Function
   */
  onFilterDropdownVisibleChange?: (visible: boolean) => void;

  /**
   * When using columns, you can setting this property to configure the properties that support the slot,
   * such as slots: { filterIcon: 'XXX'}
   * @type object
   */
  slots?: Recordable<string>;
}