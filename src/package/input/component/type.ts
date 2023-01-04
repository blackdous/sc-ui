// import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  describe: String,
  widthSize: {
    type: String,
    validator: (v:string) => ['l', 'xs', 'x', 'md', 'xl'].includes(v)
  },
  value: [String, Number],
  type: { type: String, validator: (v:string) => ['error', 'warning', 'success', 'info'].includes(v) },
})