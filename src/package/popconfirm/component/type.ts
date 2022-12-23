import { ExtractPropTypes } from "vue/dist/vue"
import { PropTypes } from "../../../utils"

export const PopconfirmProps = () => ({
  visible: { type: Boolean, default: false },
  type: {
    type: String, 
    validator: (v:string) => ['primary', 'success', 'warning', 'error', 'default'].includes(v),
    default () {
      return 'default'
    }
  },
  describe: String,
  icon: PropTypes.any,
  title: PropTypes.any,
  isShowIcon: {
    type: Boolean,
    default () {
      return true
    }
  }
})

export declare type ScPopconfirmProps = Partial<ExtractPropTypes<typeof PopconfirmProps>> 