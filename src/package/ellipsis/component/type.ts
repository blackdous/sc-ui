import { PropType } from "vue"
// import { TooltipProps } from "ant-design-vue"
export interface EditType {
  show?: boolean
  placeholder?: string
  maxLength?: number
  describe?: string
  info?: string,
  confirmLoading?: boolean
  align?: string
  text?: string
  showMaxLength?: boolean
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
  baseHeight: {
    type: Number,
    default () {
      return 22
    }
  },
  isComputedEditPopoverPosition: {
    type: Boolean,
    default () {
      return true
    }
  },
  isCollapse: {
    type: Boolean,
    default (){
      return false
    }
  },
  isInheritParentWidth: {
    type: Boolean,
    default () {
      return false
    }
  },
  hoverSuffix: {
    type: Boolean,
    default () {
      return true
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
  isOnlyTips: {
    type: Boolean,
    default () {
      return false
    }
  },
  hrefLink: {
    type: Boolean
  }
})