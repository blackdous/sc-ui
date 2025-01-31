import type { ExtractPropTypes } from "vue"
export const tagProps = () => ({
  color: String,
  size: {
    type: String,
    validator: (v:string) => ['small', 'default', 'large', 'medium'].includes(v) 
  },
  tooltipDes: String,
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
    values: ['success', 'warning', 'error', 'primary', 'default', 'process', 'freeze'],
    default: 'default',
  },
  border: {
    type: Boolean,
    default: true
  },
  checked: Boolean,
  selected: Boolean,
  disabled: Boolean,
  loading: Boolean
})

export type TagProps = ExtractPropTypes<typeof tagProps>