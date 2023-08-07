import { PropType } from "vue"

export const buttonProps = {
  status: { type: String, validator: (v:string) => ['error', 'warning', 'success', 'info'].includes(v) },
  type: { type: String, validator: (v:string) => ['primary', 'ghost', 'dashed', 'link', 'text', 'default', 'shadow', 'icon'].includes(v) },
  loading: { type: Boolean },
  disabled: { type: Boolean },
  onClick: { type: Function as PropType<(...args: any) => any>, default: null },
  color: { type: String },
  linkHover: { type: Boolean }
};

