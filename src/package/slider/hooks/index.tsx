import { VNode, isVNode, h } from "vue"

type IconType = string | VNode

export const getIcon = (Icon:IconType) => {
  if (!Icon) {
    return
  }
  if (isVNode(Icon)) {
    return Icon
  }
  return h('img', { class: 'scSlider-tooltip__img', src: Icon })
}