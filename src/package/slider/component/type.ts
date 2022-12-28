import { TooltipProp } from 'vue-slider-component'
// import { PropTypes } from '../../../utils'
import { PropType } from 'vue'

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
  }
})