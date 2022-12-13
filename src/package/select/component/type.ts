export const props = () => ({
  value: {
    type: Number,
    default: 0
  },
  // 'large' | 'small'
  size: String,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  }
})