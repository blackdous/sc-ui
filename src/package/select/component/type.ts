export const props = () => ({
  value: Number,
  disabled: {
    type: Boolean,
    default () {
      return false
    }
  },
  // 'checkbox'
  optionMode: String
})