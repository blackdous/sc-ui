import { PropType, ExtractPropTypes } from "vue"
import type { ComputedRef } from "vue"
//@ts-ignore
import type { ActionProps } from '../component/TableAction.vue'
import { PaginationProps } from './types/pagination'
import { ColumnProps, SortOrder } from "ant-design-vue/lib/table/interface"
import type { TableRowSelection as ITableRowSelection } from 'ant-design-vue/lib/table/interface'
import type { TooltipButtonProps } from '../../../radio/components/ScRadioTooltipGroup.vue'

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
    type: Array
    // default: [ {lable: '开启', type: 'open', disable: false }, { lable: '重启', type: 'restart', disable: false }, { lable: '关闭', type: 'close', disable: false }, { lable: '续费', type: 'update', disable: false } ]
  },
  // 自定义函数
  customFunc: Function as PropType<(type: string, tableRef: ComputedRef) => void>
})

export interface MutilpActionOptions {
  show?: boolean,
  mutilpList?: Array<TooltipButtonProps>,
  customFunc?: (type: string, tableRef: ComputedRef) => void
}

// export declare type MutilpActionOptions = ExtractPropTypes<typeof mutilpActionOptions>


export const serachOptions = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 是否显示select
  showSelect: { type: Boolean, default: true },
  // select选择框数据
  typeList: [ { lable: '', value: '' }, { lable: '', value: '' } ],
  // 默认查询名字
  defaultSerachText: { type: String, default: undefined },
  // 查询方法
  customSerachFunc: Function as PropType<(tableRef: ComputedRef) => void>
})

export interface SerachOptions {
  show?: boolean,
  showSelect?: boolean,
  typeList?: Array<{label: string, value: string}>,
  customSerachFunc?: (tableRef: ComputedRef) => void
}
// export declare type SerachOptions = ExtractPropTypes<typeof serachOptions>

export interface ScrollProps {
    x: number,
    y: number
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
  mutilpActionOptions: {
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
        showSelect: true
      }
    }
  },
  actionsProps: Object as PropType<ActionProps>,
  pagination: Object as PropType<PaginationProps>,
  scroll: Object as PropType<ScrollProps>
})

export interface TableProps {
  createButtonOptions?: CreateButton,
  mutilpActionOptions?: MutilpActionOptions,
  serachOptions?: SerachOptions,
  actionsProps?: ActionProps,
  pagination? : PaginationProps | boolean,
  scroll: {
    x: number,
    y: number
  }
}

// export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>