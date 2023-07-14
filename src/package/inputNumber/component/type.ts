export const props = () => ({
  value: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  mode: {
    type: String,
    // 'internal' 'bothSides'
    default () {
      return 'bothSides'
    }
  },
  needDefault: {
    type: Boolean,
    default () {
      return true
    }
  },
  autoFocus: Boolean,
  showControl: {
    type: Boolean,
    default: true
  },
  // 'large' | 'small'
  size: String,
  stepStrictly: Boolean,
  step: {
    type: Number,
    default: 1
  },
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  }
})