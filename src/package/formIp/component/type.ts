
export const scIpProps = () => ({
  modalValue: [String, Array],
  value: [String, Array],
  disabled: Boolean,
  disabledIndex: {
    type: Array,
    default () {
      return []
    }
  },
  type: {
    type: String,
    default () {
      return 'number'
    }
  },
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
  needDefault: {
    type: Boolean,
    default () {
      return true
    }
  },
  copyDisabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  inputNumberOptions: {
    type: [Object, Array],
    default () {
      return {
        max: 255,
        min: 0,
        precision: 0,
        showControl: false,
        focus: false
      }
    }
  }
})

export interface IpItemType {
  value?: string | number,
  max?: string | number,
  min?: string | number,
  autoFocus?: boolean,
  [key:string]: any
}