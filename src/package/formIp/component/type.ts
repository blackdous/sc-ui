import { PropType } from "vue"

export const scIpProps = () => ({
  modalValue: [String, Array],
  value: [String, Array],
  disabled: Boolean,
  disabledIndex: Array,
  parseSeparator: {
    type: String,
    default () {
      return '.'
    }
  },
  joinSeparator: {
    type: String,
    default () {
      return '.'
    }
  },
  // parseType: {
  //   type: String as PropType<'ipv4' | 'ipv6'>,
  //   default () {
  //     return 'ipv4'
  //   }
  // },
  inputNumberOptions: {
    type: [Object, Array],
    default () {
      return {
        max: 255,
        min: 0,
        precision: 0,
        showControl: false,
        autoFocus: false
      }
    }
  }
})