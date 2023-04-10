import type { ExtractPropTypes } from "vue"
export const tagProps = () => ({
  size: {
    type: String,
    validator: (v:string) => ['small', 'default', 'large', 'medium'].includes(v) 
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
  selected: Boolean,
  disabled: Boolean
})

export type TagProps = ExtractPropTypes<typeof tagProps>