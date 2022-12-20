// import { VNodeChild, PropType } from 'vue'
export const props = () => ({
  describe: String,
  value: [String, Number],
  type: { type: String, validator: (v:string) => ['error', 'warning', 'success', 'info'].includes(v) },
})