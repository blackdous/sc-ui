import { PropType, ExtractPropTypes } from "vue"
import type { ComputedRef } from "vue"
//@ts-ignore
import type { ActionProps } from '../component/TableAction.vue'

export const createButton = () => ({
  // 是否展示
  show: { type: Boolean, default: true },
  // 展示文本
  text: { type: String, default: '创建' },
  // iconfont
  icon: { type: String, default: '' },
  // 按钮类型 默认'success', 'info', 'warning', 'error'
  type: { type: String, default: 'info' },
  createFunc: Function as PropType<(type: string, tableRef: ComputedRef) => void>
})
export declare type CreateButton = Partial<ExtractPropTypes<typeof createButton>>

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
export declare type MutilpActionOptions = Partial<ExtractPropTypes<typeof mutilpActionOptions>>


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
export declare type SerachOptions = Partial<ExtractPropTypes<typeof serachOptions>>

// export declare type ATableProps = Partial<ExtractPropTypes<typeof aTableProps>>

export const tableProps = () => ({
  createButtonOptions: Object as PropType<CreateButton>,
  mutilpActionOptions: Object as PropType<MutilpActionOptions>,
  serachOptions: Object as PropType<SerachOptions>,
  actionsProps: Object as PropType<ActionProps>
})

export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>