import type { Component, ExtractPropTypes } from "vue"
import { definePropType } from "../../../utils/propTypes"
export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])
export const linkProps = () => ({
  size: {
    type: String,
    validator: (v:string) => ['small', 'default', 'large', 'medium'].includes(v) 
  },
  /**
 * @description type
 */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default',
  },
  /**
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: '' },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  }
})

export type LinkProps = ExtractPropTypes<typeof linkProps>