import { Slot, CSSProperties, VNode, ExtractPropTypes } from "vue"

import { SizeEnum } from './../../../enums/sizeEnum'

export const componentSizes = ['', 'default', 'small', 'large'] as const

export type { Placement, Options } from '@popperjs/core'

export interface OptionsItem {
  label: string,
  value: string,
  children: string,
  disabled: boolean,
  [key: string]: any
}
export interface ShowSearch {
  filter?: (inputValue: string, options: OptionsItem[], fieldNames: OptionsItem) => boolean;
  render?: (arg?: {
    inputValue: string;
    path: OptionsItem[];
    prefixCls: string;
    fieldNames: OptionsItem;
  }) => any;
  sort?: (a: OptionsItem[], b: OptionsItem[], inputValue: string, fieldNames: OptionsItem) => number;
  matchInputWidth?: boolean;
  limit?: number | false;
}

export interface CascaderProps {
  allowClear: boolean,
  autofocus: boolean,
  bordered: boolean,
  clearIcon: Slot,
  defaultValue: string[] | number[],
  disabled: boolean,
  dropdownClassName: string,
  dropdownStyle: CSSProperties,
  expandIcon: Slot,
  expandTrigger: 'click' | 'hover',
  fieldNames: Partial<OptionsItem>,
  getPopupContainer: (triggerNode: HTMLElement) => void,

  // displayRender
  // loadData:

  maxTagCount: number,
  maxTagPlaceholder: any,
  multiple: boolean,
  notFoundContent: string | Slot,
  open: boolean,
  options: Partial<OptionsItem[]>,
  placeholder: string,
  placement: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight',
  removeIcon: Slot,
  searchValue: string,
  showSearch: boolean | ShowSearch,
  size: SizeEnum,
  suffixIcon: VNode | Slot,
  tagRender: Slot,
  value: string | number | string[] | number[]
}

export const tagProps = () => ({
  closable: Boolean,
  type: {
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light',
  },
  round: Boolean,
} as const)
export type TagProps = ExtractPropTypes<typeof tagProps>

export type ScCascaderNewProps = CascaderProps