import { ExtractPropTypes } from "vue/dist/vue"
import { PropType } from 'vue'
import { PropTypes } from "../../../utils"

export const PopconfirmProps = () => ({
  visible: { type: Boolean, default: false },
  okBeforeFun: Function as PropType<() => Promise<unknown>>,
  cancelBeforeFun: Function as PropType<() => Promise<unknown>>,
  type: {
    type: String, 
    validator: (v:string) => ['primary', 'success', 'warning', 'error', 'default'].includes(v),
    default () {
      return 'default'
    }
  },
  describe: String,
  icon: PropTypes.any,
  okText: PropTypes.any,
  cancelText: PropTypes.any,
  title: PropTypes.any,
  isShowIcon: {
    type: Boolean,
    default () {
      return true
    }
  }
})

export declare type ScPopconfirmProps = Partial<ExtractPropTypes<typeof PopconfirmProps>> 