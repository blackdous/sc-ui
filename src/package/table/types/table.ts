import { PropType, VNode, VNodeChild, CSSProperties } from "vue"
import { Column } from "./column"
// import type { ComputedRef } from "vue"
import { ColumnProps, SortOrder } from "ant-design-vue/lib/table/interface"
import type { TooltipProps } from 'ant-design-vue'
//@ts-ignore
import type { ActionProps as ActionOptions } from '../component/TableAction.vue'
import { PaginationProps } from './pagination'
import { ColumnModalItem } from './column'
import type { TableRowSelection as ITableRowSelection } from 'ant-design-vue/lib/table/interface'
// import type { ModalProps } from "../../modal"

export type SizeType = 'default' | 'middle' | 'small' | 'large';

export interface FetchSetting {
  // 请求接口当前页数
  pageField: string;
  // 每页显示多少条
  sizeField: string;
  // 请求结果列表字段  支持 a.b.c
  listField: string;
  // 请求结果总数字段  支持 a.b.c
  totalField: string;
}

export interface TableCustomRecord<T> {
  record?: T;
  index?: number;
}



export interface TableCurrentDataSource<T = Recordable> {
  currentDataSource: T[];
}

export interface TableRowSelection<T = any> extends ITableRowSelection {
  /**
   * 当所选行发生更改时执行的回调
   * @type Function
   */
  onChange?: (selectedRowKeys: string[] | number[], selectedRows: T[]) => any;

  /**
   * 当选择/取消选择一行时执行的回调
   * @type Function
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSelect?: (record: T, selected: boolean, selectedRows: Object[], nativeEvent: Event) => any;

  /**
   * 当选择/取消选择所有行时执行回调
   * @type Function
   */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => any;

  /**
   * 当行选择倒置时执行的回调
   * @type Function
   */
  onSelectInvert?: (selectedRows: string[] | number[]) => any;
}

export interface SorterResult {
  column: ColumnProps;
  order: SortOrder;
  field: string;
  columnKey: string;
}
// @ts-ignore
export interface BasicColumn extends ColumnProps {
  children?: BasicColumn[];
  filters?: {
    text: string;
    value: string;
    children?:
      | unknown[]
      | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
  }[];

  slots?: Recordable;

  // Whether to hide the column by default, it can be displayed in the column configuration
  defaultHidden?: boolean;

  // Help text for table column header
  helpMessage?: string | string[];

  // 业务控制是否显示
  ifShow?: boolean | ((column: BasicColumn) => boolean);
  // 动态 Disabled
  editDynamicDisabled?: boolean | ((record: Recordable) => boolean);
}


export const createButton = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 展示文本
  text: { type: String, default: '创建' },
  isDisabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  // sc-ui
  icon: { type: String, default: '' },
  // 按钮类型 默认'success', 'info', 'warning', 'error', 'primary'
  type: { type: String, default: 'info' },
  action: Function as PropType<(...arg:any) => void>
})

export interface CreateButton {
  show?: boolean,
  text?: string,
  isDisabled?: boolean,
  loading?: boolean,
  icon?: string,
  type?: string,
  action?: (...arg:any) => void
}

// export declare type CreateButton = ExtractPropTypes<typeof createButton>

export const multipleActionOptions = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  triggerMultiple: { type: Boolean, default: false },
  // 操作列表
  options: {
    type: Array as PropType<Array<ButtonType>>
  }
})

interface ButtonType {
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean | ((...args: any) => boolean),
  overlayClassName?: string,
  action?: string | ((...args: any) => void)
}

export interface MutilpActionOptions {
  show?: boolean,
  options?: Array<ButtonType>,
  [key:string]: any
}

// export declare type MutilpActionOptions = ExtractPropTypes<typeof multipleActionOptions>


export const searchOptions = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 是否显示select
  showSelect: { type: Boolean, default: true },
  // select选择框数据
  typeList: [Promise, Array],
  loading: { type: Boolean, default: false },
  // 查询方法
  action: Function as PropType<(fetchParams: FetchParams) => void>,
  selectOptions: Object as PropType<{placeholder: string, width: string}>,
  inputOptions: Object as PropType<{
    placeholder: (key:string) => string | string,
    validator: (key:string) => string | string,
    validatorTrigger: 'all' | 'search' | 'change',
    maxlength: number, 
    width: string, 
    allowClear: boolean
  }>
})

export interface SearchOptions {
  show?: boolean,
  showSelect?: boolean,
  typeList?: (...arg: any) => Promise<any> | Array<{label: string, value: string, disabled: boolean}>,
  action?: (fetchParams: FetchParams) => void,
  loading: boolean,
  selectOptions?: {
    placeholder?: string,
    width?: string,
    defaultValue: string
  },
  inputOptions?: {
    placeholder?: (key:string) => string | string,
    validator?: (key:string) => string | string,
    validatorTrigger?: 'all' | 'search' | 'change',
    maxlength?: number,
    width?: string,
    allowClear?: boolean,
    defaultValue?: string
  }
}

export interface ScrollProps {
    x: number,
    y: number
}

export interface ActiveOptions {
  reload?: {
    text?: string,
    show?: boolean,
    isDisabled?: boolean,
    action?: Fn
  },
  download?: {
    text?: string,
    show?: boolean,
    isDisabled?: boolean,
    action?: Fn,
    href?: string
  },
  columnDialog?: {
    text?: string,
    show?: boolean,
    isDisabled?: boolean,
    okModal?: Fn,
    cancelModal: Fn
  },
  // customActiveList: Array<VNode | { 
  //   icon?: string | VNode,
  //   text?: string,
  //   show?: boolean,
  //   isDisabled?: boolean,
  //   action?: Fn 
  // }>
}


export interface LocaleProps {
  filterConfirm?: string,
  filterReset?: string,
  emptyText?: string | VNode
}
export const tableProps = () => ({
  filterLeftStyle: Object as PropType<CSSProperties>,
  filterRightStyle: Object as PropType<CSSProperties>,
  createButtonOptions: {
    type: Object as PropType<CreateButton>,
    default () {
      return {
        show: true,
        text: '创建'
      }
    }
  },
  upTitle: {
    type: String,
    default () {
      return '点击升序'
    }
  },
  downTitle: {
    type: String,
    default () {
      return '点击降序'
    }
  },
  cancelUpTitle: {
    type: String,
    default () {
      return '点击取消升序'
    }
  },
  cancelDownTitle: {
    type: String,
    default () {
      return '点击取消降序'
    }
  },
  multipleOptions: {
    type: Object as PropType<MutilpActionOptions>
  },
  searchOptions: {
    type: Object as PropType<SearchOptions>
  },
  actionsOptions: Object as PropType<ActionOptions>,
  customFilter: {
    type: Boolean,
    default () {
      return true
    }
  },
  filterTag: {
    type: Boolean,
    default () {
      return true
    }
  },
  activeOptions: {
    type: Object as PropType<ActiveOptions>
  },
  columnFilterList: {
    type: Object as PropType<Array<ColumnModalItem>>,
    default () {
      return []
    }
  },
  // modalOptions: {
  //   type: Object as PropType<ModalProps>
  // },
  bordered: {
    type: Boolean,
    default () {
      return false
    }
  },
  // 自定义排序方法
  sortFn: Function as PropType<(sortInfo: SorterResult) => any>,
  // 排序方法
  filterFn: Function as PropType<(data: Partial<Recordable<string[]>>) => any>,

  pagination: {
    type: [Object, Boolean] as PropType<PaginationProps | boolean>,
    default () {
      return true
    }
  },
  scroll: {
    type: Object as PropType<ScrollProps>,
    default () {
      return {
        x: 'true'
      }
    }
  },
  dataSource: Array,
  isTreeTable: Boolean,
  autoCreateKey: Boolean,
  rowKey: String as PropType<string | ((record: Recordable) => string)>,
  defaultExpandAllRows: Boolean,
  defaultExpandedRowKeys: Object as PropType<string[]>,
  expandedRowKeys: Object as PropType<string[]>,
  expandIcon: Object as PropType<Function | VNodeChild | JSX.Element>,
  expandRowByClick: Boolean,
  expandIconColumnIndex: Number,
  size: {
    type: String as PropType<SizeType>,
    default () {
      return 'middle'
    }
  },
  childrenColumnName: String,
  
  // 接口请求对象
  api: Function as PropType<(...arg: any) => Promise<any>>,
  // 请求之前处理参数
  beforeFetch: Function as PropType<Fn>,
  // 自定义处理接口返回参数
  afterFetch: Function as PropType<Fn>,
  // 查询条件请求之前处理
  handleSearchInfoFn: Function as PropType<Fn>,
  // 请求接口配置
  fetchSetting: Object as PropType<Partial<FetchSetting>>,
  // 立即请求接口
  immediate: {
    type: Boolean,
    default () {
      return true
    }
  },
  // 在开起搜索表单的时候，如果没有数据是否显示表格
  emptyDataIsShowTable: Boolean,
  // 额外的请求参数
  searchInfo: Object as PropType<Recordable>,
  // 默认的排序参数
  defSort: Object as PropType<Recordable>,
  // loading加载
  loading: Boolean,
  /**
  * Row's className
  * @type Function
  */
  rowClassName: Function as PropType<<T>(record: TableCustomRecord<T>, index: number) => string>,

  /**
   * `table-layout` attribute of table element
   * `fixed` when header/columns are fixed, or using `column.ellipsis`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
   * @version 1.5.0
   */
  tableLayout: String as PropType<'auto' | 'fixed' | string>,
  showHeader: {
  type: Boolean,
  default () {
    return true
  }
  },
  /**
  * Set props on per header row
  * @type Function
  */
  customHeaderRow: Function as PropType<(column: ColumnProps, index: number) => object>,
  /**
 * Set props on per row
 * @type Function
 */
  customRow: Function as PropType<(record: any, index: number) => object>,
  /**
 * Row selection config
 * @type object
 */
  /**
  * Table footer renderer
  * @type Function | VNodeChild
  */
  footer: [Function, Object] as PropType<Function | VNodeChild | JSX.Element>,

  /**
 * Row selection config
 * @type object
 */
  rowSelection: Object as PropType<TableRowSelection>,
  // 列配置
  columns: Object as PropType<BasicColumn[]>,
  // 弹窗cancel事件
  cancelModal: Function as PropType<(...arg: any) => void>,
  // 弹窗okModal事件
  okModal: Function as PropType<(...arg: any) => void>,
  langLocale: {
    type: Object
  },
  locale: {
    type: Object as PropType<LocaleProps>
  },
  indentSize: {
    type: Number,
    default () {
      return 30
    }
  }
  
})

export interface TableProps {
  filterLeftStyle: CSSProperties,
  filterRightStyle: CSSProperties,
  upTitle: string,
  downTitle: string,
  createButtonOptions?: CreateButton,
  multipleOptions?: MutilpActionOptions,
  searchOptions?: SearchOptions,
  actionsOptions?: ActionOptions,
  customFilter?: boolean,
  filterTag?: boolean,
  activeOptions?: ActiveOptions,
  columnFilterList?: Array<ColumnModalItem>,
  // modalOptions?: ModalProps,
  bordered?: boolean,
  // 自定义排序方法
  sortFn?: (sortInfo: SorterResult) => any;
  // 排序方法
  filterFn?: (data: Partial<Recordable<string[]>>) => any;
  pagination? : PaginationProps | boolean,
  scroll?: ScrollProps,
  dataSource?: Array<any>,
  isTreeTable: boolean,
  autoCreateKey: boolean,
  rowKey?: string | ((record: Recordable) => string),
  defaultExpandAllRows?: boolean,
  defaultExpandedRowKeys?: string[],
  expandedRowKeys?: string[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  expandIcon?: Function | VNodeChild | JSX.Element,
  expandRowByClick?: boolean,
  expandIconColumnIndex?: number,
  size?: SizeType,
  childrenColumnName?: string,
  
  // 接口请求对象
  api?: (...arg: any) => Promise<any>,
  // 请求之前处理参数
  beforeFetch?: Fn,
  // 自定义处理接口返回参数
  afterFetch?: Fn,
  // 查询条件请求之前处理
  handleSearchInfoFn?: Fn,
  // 请求接口配置
  fetchSetting?: Partial<FetchSetting>,
  // 立即请求接口
  immediate?: boolean,
  // 在开起搜索表单的时候，如果没有数据是否显示表格
  emptyDataIsShowTable?: boolean,
  // 额外的请求参数
  searchInfo?: Recordable,
  // 默认的排序参数
  defSort?: Recordable,
  // loading加载
  loading?: boolean,
  /**
   * Row's className
   * @type Function
  */
  rowClassName?: <T>(record: TableCustomRecord<T>, index: number) => string,

  /**
   * `table-layout` attribute of table element
   * `fixed` when header/columns are fixed, or using `column.ellipsis`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
   * @version 1.5.0
   */
  tableLayout?: 'auto' | 'fixed' | string,
  showHeader?: boolean,
  /**
   * Set props on per header row
   * @type Function
   */
  customHeaderRow?: (column: ColumnProps, index: number) => object,
  /**
  * Set props on per row
  * @type Function
  */
  customRow?: (record: any, index: number) => object;
  /**
  * Row selection config
  * @type object
  */
  /**
   * Table footer renderer
   * @type Function | VNodeChild
   */
  footer?: Function | VNodeChild | JSX.Element,

  rowSelection?: TableRowSelection,
  // 列配置
  columns: BasicColumn[],
  // 弹窗cancel事件
  cancelModal?: (...arg: any) => void
  // 弹窗ok事件
  okModal?: (...arg: any) => void,
  langLocale?: object,
  locale?: LocaleProps,
  indentSize: number
}

export interface FetchParams {
  searchInfo?: Recordable;
  page?: number;
  sortInfo?: Recordable;
  filterInfo?: Recordable;
}

export interface GetColumnsParams {
  ignoreIndex?: boolean;
  ignoreAction?: boolean;
  sort?: boolean;
}

export interface TableActionType {
  reload: (opt?: FetchParams) => Promise<void>;
  setSelectedRows: (rows: Recordable[]) => void;
  getSelectRows: <T = Recordable>() => T[];
  clearSelectedRowKeys: () => void;
  expandAll: () => void;
  expandRows: (keys: string[] | number[]) => void;
  collapseAll: () => void;
  getSelectRowKeys: () => string[];
  deleteSelectRowByKey: (key: string) => void;
  setPagination: (info: Partial<PaginationProps>) => void;
  setTableData: <T = Recordable>(values: T[]) => void;
  updateTableDataRecord: (rowKey: string | number, record: Recordable) => Recordable | void;
  deleteTableDataRecord: (rowKey: string | number | string[] | number[]) => void;
  insertTableDataRecord: (record: Recordable, index?: number) => Recordable | void;
  findTableDataRecord: (rowKey: string | number) => Recordable | void;
  getColumns: (opt?: GetColumnsParams) => BasicColumn[];
  setColumns: (columns: BasicColumn[] | string[]) => void;
  getDataSource: <T = Recordable>() => T[];
  getRawDataSource: <T = Recordable>() => T;
  setLoading: (loading: boolean) => void;
  setProps: (props: Partial<TableProps>) => void;
  setSelectedRowKeys: (rowKeys: string[] | number[]) => void;
  getPaginationRef: () => PaginationProps | boolean;
  getRowSelection: () => TableRowSelection<Recordable>;
  emit?: EmitType;
  updateTableData: (index: number, key: string, value: any) => Recordable;
  setShowPagination: (show: boolean) => Promise<void>;
  getShowPagination: () => boolean;
  clearFilterDropdownRef: (column: Column) => void,
  setSearchOptions: (searchOptions: SearchOptions) => void,
  setMutilpAction: (multipleActionOptions: MutilpActionOptions) => void,
  setFilterColumnRef: (columns: Column[]) => void,
  setFilterColumnChecked: (colKeys: string[] | number[]) => void,
  setFilterColumnDisabled: (colKeys: string[] | number[]) => void,
}


// export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>