import type { ColumnProps } from "ant-design-vue/lib/table/interface";
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