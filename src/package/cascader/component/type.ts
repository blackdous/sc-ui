import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  value: Array as PropType<string[] | number[]>,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  prefixIcon: Object as PropType<VNodeChild>
})