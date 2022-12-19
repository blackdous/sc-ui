import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  value: Number,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  prefixIcon: Object as PropType<VNodeChild>
})