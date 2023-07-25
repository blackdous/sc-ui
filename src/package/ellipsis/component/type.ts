import { PropType } from "vue"
import { TooltipProps } from "ant-design-vue"
export const ellipsisProps = () => ({
  tooltip: {
    type: [Boolean, Object as PropType<TooltipProps>],
    default () {
      return true
    }
  },
  expandTrigger: {
    type: String as PropType<'click'>
  },
  lineClamp: {
    type: [Number, String]
  }
})