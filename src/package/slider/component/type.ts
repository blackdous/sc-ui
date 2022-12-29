import { TooltipProp } from 'vue-slider-component'
import { PropType, VNode, ExtractPropTypes } from 'vue'

export interface TooltipInfo {
  bgColor?: string;
  desc?: string;
  color?: string;
  Icon?: string | VNode;
  dotLabel?: string;
  label?: string;
  marker?: {
    markerColor?: string;
    icon?: string | VNode;
    label?: string;
  };
}

export interface InputNumberOptions {
  placeholder?: string
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
  dotWidth: {
    type: [Number, String],
    default: 60
  },
  unit: {
    type: [Number, String],
    default: 'Mbps'
  },
  infos: {
    type:  Object as PropType<TooltipInfos>,
    default: () => {
      return []
    }
  },
  customMarker: Boolean,
  showMinMaxMarker: Boolean,
  inputNumberOptions: Object as PropType<InputNumberOptions>
})

export declare type SliderProps = Partial<ExtractPropTypes<typeof Props>>