import type { ExtractPropTypes } from "vue"
export const tagProps = () => ({
  size: {
    type: String,
    validator: (v:string) => ['size', 'default', 'large', 'medium'].includes(v) 
  },
  /**
 * @description type
 */
  type: {
    type: String,
    values: ['dark', 'light', 'outline', 'lightOutline'],
    default: 'lightOutline',
  },
  status: {
    type: String,
    values: ['success', 'warning', 'error', 'primary', 'default'],
    default: 'default',
  },
  checked: Boolean,
  selected: Boolean
})

export type TagProps = ExtractPropTypes<typeof tagProps>