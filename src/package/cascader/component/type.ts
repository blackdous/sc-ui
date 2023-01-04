import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  value: Array as PropType<string[] | number[]>,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  widthSize: {
    type: String,
    validator: (v:string) => ['l', 'xs', 'x', 'md', 'xl'].includes(v)
  },
  prefixIcon: Object as PropType<VNodeChild>
})