
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