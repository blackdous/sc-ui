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
  // 'large' | 'small'
  size: String,
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