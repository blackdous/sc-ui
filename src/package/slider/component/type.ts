import { TooltipProp } from 'vue-slider-component'
import { PropType, VNode } from 'vue'

export interface TooltipInfo {
  bgColor?: string;
  desc?: string;
  color?: string;
  Icon?: string | VNode;
  dotLabel?: string;
  label?: string;
}

export interface TooltipInfos {
  [key:string]: TooltipInfo
}

export const Props = () => ({
  tooltip: {
    type: String as PropType<TooltipProp>,
    default () {
      return 'none'
    }
  },
  value: {
    type: [Number, String],
    default: 0
  },
  min: {
    type: [Number, String],
    default: 0
  },
  max: {
    type: [Number, String],
    default: 100
  },
  step: {
    type: [Number, String],
    default: 10
  },
  wrapperWidth: {
    type: [Number, String],
    default: 480
  },
  unit: {
    type: [Number, String],
    default: 'Mbps'
  },
  tooltipInfos: {
    type:  Object as PropType<TooltipInfos>,
    default: () => {
      return []
    }
  }
})