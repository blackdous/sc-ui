import { SizeEnum } from './../../../enums/sizeEnum';
import { Slot, CSSProperties, VNode } from "vue"

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