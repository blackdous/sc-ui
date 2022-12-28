import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  value: Number,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  // 'checkbox'
  optionMode: String,
  prefixIcon: Object as PropType<VNodeChild>
})

export enum SizePx {
  'small' = 24,
  'default' = 32,
  'large' = 40
}