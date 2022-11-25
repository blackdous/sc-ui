import type { ColumnProps } from "ant-design-vue/lib/table/interface"
import { PropType } from "vue"
export interface FilterItem {
  label: string,
  isShow?: boolean,
  isDisabled?: boolean,
  loading?: boolean,
  action: string,
  tooltip?: boolean,
  tooltipDes?: string,
  children?: Array<FilterItem>
}

export interface ScColumnProps extends ColumnProps {
  customFilter?: true,
  filterList?: Array<FilterItem>
}

export const scColumnProps = () => ({

})

export const scFilterProps = () => ({
  filterList: Object as PropType<Array<FilterItem>>
})

export interface ColumnItem {
  label: string,
  value: string,
  key: string,
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
  columnlist?: Array<ColumnItem>
}

export interface ColumnProvide {
  list: Array<ColumnItem>,
  keys: Array<string>,
  checkedList: Array<ColumnItem>
}

export const ColumnModal = () => ({
  visible: {
    type: Boolean
  },
  columnList: {
    type: Object as PropType<Array<ColumnItem>>,
    default () {
      return list
    }
  }
})