import type { TooltipProps } from 'ant-design-vue'

export interface TooltipButtonProps {
  tooltipDis?: boolean,
  toolOptions?: TooltipProps,
  tooltipDes?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean
}