import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  value: [Number, String, Array],
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  tooltip: {
    type: Boolean,
    default () {
      return true
    }
  },
  tooltipAlign: {
    type: String,
    default () {
      return 'right'
    }
  },
  infoTooltip: {
    type: String
  },
  isAddTooltipScrollHeight: {
    type: Boolean,
    default () {
      return true
    }
  },
  widthSize: {
    type: String,
    validator: (v:string) => ['l', 'xs', 'x', 'md', 'xl'].includes(v)
  },
  // 'checkbox'
  optionMode: String,
  prefixIcon: Object as PropType<VNodeChild>,
  onChange: [Function, Array]
})

export enum SizePx {
  'small' = 24,
  'default' = 32,
  'large' = 40
}