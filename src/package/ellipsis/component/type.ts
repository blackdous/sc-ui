import { PropType } from "vue"
// import { TooltipProps } from "ant-design-vue"

export interface EditType {
  show?: boolean
  placeholder?: string
  maxLength?: number
  describe?: string
  confirmLoading?: boolean
  align?: string
  text?: string
  [key: string]: any
}

export const ellipsisProps = () => ({
  tooltip: {
    type: [Boolean, Object],
    default () {
      return true
    }
  },
  expandTrigger: {
    type: String as PropType<'click'>
  },
  lineClamp: {
    type: [Number, String]
  },
  isCollapse: {
    type: Boolean,
    default (){
      return false
    }
  },
  hoverSuffix: {
    type: Boolean,
    default () {
      return false
    }
  },
  edit: {
    type: Object as PropType<EditType>,
    default () {
      return {
      }
    }
  },
  copyTxt: {
    type: String
  },
  hrefLink: {
    type: Boolean
  }
})