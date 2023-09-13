import { CSSProperties, PropType } from 'vue'

export interface AutoCompleteOptionsItem {
  value: string;
  text?: string;
  [key:string]: any;
}

export const props = () => ({
  allowClear: Boolean,
  autofocus: Boolean,
  backfill: Boolean,
  options: Array,
  optionsSource: Array,
  dropdownMenuStyle: Object as PropType<CSSProperties>,
  defaultActiveFirstOption: {
    type: Boolean,
    default () {
      return true
    }
  },
  disabled: Boolean,
  filterOption: [Boolean, Function],
  optionLabelProp: {
    type: String,
    default () {
      return 'children'
    }
  },
  placeholder: String,
  defaultOpen: Boolean,
  open: Boolean,
  value: [String, Array, Object],
  isGroup: Boolean,
  dropdownClassName: String
})
