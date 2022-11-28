import { PropType, ExtractPropTypes } from "vue"
import type { ComputedRef } from "vue"
import { ColumnProps, SortOrder } from "ant-design-vue/lib/table/interface"
import type { TooltipProps } from 'ant-design-vue'
//@ts-ignore
import type { ActionProps as ActionOptions } from '../component/TableAction.vue'
import { PaginationProps } from './pagination'
import { ColumnModalItem, list } from './column'
import type { TableRowSelection as ITableRowSelection } from 'ant-design-vue/lib/table/interface'
import type { ModalProps } from "../../modal"


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
  // iconfont
  icon: { type: String, default: '' },
  // 按钮类型 默认'success', 'info', 'warning', 'error', 'primary'
  type: { type: String, default: 'info' },
  createFunc: Function as PropType<(type: string, tableRef: ComputedRef) => void>
})

export interface CreateButton {
  show?: boolean,
  text?: string,
  isDisabled?: boolean,
  icon?: string,
  type?: string
}

// export declare type CreateButton = ExtractPropTypes<typeof createButton>

export const mutilpActionOptions = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 操作列表
  mutilpList: {
    type: Array as PropType<Array<ButtonType>>
  },
  // 自定义函数
  customFunc: Function as PropType<(type: string, tableRef: ComputedRef) => void>
})

interface ButtonType {
  tooltipDis?: boolean,
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean | ((tableRef: ComputedRef) => boolean),
  overlayClassName?: string,
  action?: string | ((tableSate: any) => void)
}

export interface MutilpActionOptions {
  show?: boolean,
  mutilpList?: Array<ButtonType>,
  customFunc?: (type: string, tableRef: ComputedRef) => void,
  [key:string]: any
}

// export declare type MutilpActionOptions = ExtractPropTypes<typeof mutilpActionOptions>


export const serachOptions = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 是否显示select
  showSelect: { type: Boolean, default: true },
  // select选择框数据
  typeList: [Promise, Array],
  loading: { type: Boolean, default: false },
  // 默认查询名字
  defaultSerachText: { type: String, default: undefined },
  // 查询方法
  action: Function as PropType<(fetchParams: FetchParams) => void>
})

export interface SerachOptions {
  show?: boolean,
  showSelect?: boolean,
  typeList?: (...arg: any) => Promise<any> | Array<{label: string, value: string, disabled: boolean}>,
  action?: (fetchParams: FetchParams) => void,
  loading: boolean,
  selectOptions?: {
    placeholder?: string,
    width?: string
  },
  inputOptions?: {
    placeholder?: string,
    maxlength?: number,
    width?: string
  }
  // selectPlaceholder?: string,
  // inputPlaceholder?: string
}
// export declare type SerachOptions = ExtractPropTypes<typeof serachOptions>

export interface ScrollProps {
    x: number,
    y: number
}

export interface ActiveOptions {
  reload?: {
    text?: string,
    show?: boolean,
    showTooltip?: boolean,
    isDisabled?: boolean,
    action?: Fn
  },
  columnDialog: {
    text?: string,
    show?: boolean,
    showTooltip?: boolean,
    isDisabled?: boolean
  }
}

export const tableProps = () => ({
  createButtonOptions: {
    type: Object as PropType<CreateButton>,
    default () {
      return {
        show: true,
        text: '创建',
        type: 'primary'
      }
    }
  },
  mutilpOptions: {
    type: Object as PropType<MutilpActionOptions>,
    default () {
      return {
        show: true
      }
    }
  },
  serachOptions: {
    type: Object as PropType<SerachOptions>,
    default () {
      return {
        show: true,
        showSelect: true,
        typeList: [],
        selectOptions: {
          placeholder: '请选择',
          width: '120px'
        },
        inputOptions: {
          placeholder: '请输入',
          width: '120px',
          maxlength: 40
        }
      }
    }
  },
  actionsOptions: Object as PropType<ActionOptions>,
  customFilter: {
    type: Boolean,
    default () {
      return false
    }
  },
  activeOptions: {
    type: Object as PropType<ActiveOptions>,
    default () {
      return {
        reload: {
          text: '刷新',
          show: true,
          showTooltip: true
        },
        columnDialog: {
          text: '定制列',
          show: true,
          showTooltip: true
        }
      }
    }
  },
  columnModalList: {
    type: Object as PropType<Array<ColumnModalItem>>,
    default () {
      return []
    }
  },
  modalOptions: {
    type: Object as PropType<ModalProps>
  },

  pagination: Object as PropType<PaginationProps>,
  scroll: Object as PropType<ScrollProps>,
  dataSource: Array,
  isTreeTable: Boolean,
  autoCreateKey: Boolean,
  rowKey: String as PropType<string | ((record: Recordable) => string)>,
  defaultExpandAllRows: Boolean,
  defaultExpandedRowKeys: Object as PropType<string[]>,
  expandedRowKeys: Object as PropType<string[]>,
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
  immediate: Boolean,
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
 * Row selection config
 * @type object
 */
  rowSelection: Object as PropType<TableRowSelection>,
  // 列配置
  columns: Object as PropType<BasicColumn[]>,
  // 弹窗cancel事件
  cancelModal: Function as PropType<(...arg: any) => void>,
  // 弹窗okModal事件
  okModal: Function as PropType<(...arg: any) => void>
})

export interface TableProps {
  createButtonOptions?: CreateButton,
  mutilpOptions?: MutilpActionOptions,
  serachOptions?: SerachOptions,
  actionsOptions?: ActionOptions,
  customFilter?: boolean,
  activeOptions?: ActiveOptions,
  columnModalList?: Array<ColumnModalItem>,
  modalOptions?: ModalProps,

  pagination? : PaginationProps | boolean,
  scroll?: ScrollProps,
  dataSource?: Array<any>,
  isTreeTable: boolean,
  autoCreateKey: boolean,
  rowKey?: string | ((record: Recordable) => string),
  defaultExpandAllRows?: boolean,
  defaultExpandedRowKeys?: string[],
  expandedRowKeys?: string[]
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
  * Row selection config
  * @type object
  */
  rowSelection?: TableRowSelection,
  // 列配置
  columns: BasicColumn[],
  // 弹窗cancel事件
  cancelModal: (...arg: any) => void
  // 弹窗ok事件
  okModal: (...arg: any) => void
}

export interface FetchParams {
  searchInfo?: Recordable;
  page?: number;
  sortInfo?: Recordable;
  filterInfo?: Recordable;
}


// export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>