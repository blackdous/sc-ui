export const isLeaf = (el: HTMLElement) => !el.getAttribute('aria-owns')

export const getSibling = (
  el: HTMLElement,
  distance: number,
  elClass: string
) => {
  const { parentNode } = el
  if (!parentNode) return null
  const siblings = parentNode.querySelectorAll(elClass)
  const index = Array.prototype.indexOf.call(siblings, el)
  return siblings[index + distance] || null
}

export const focusNode = (el: HTMLElement) => {
  if (!el) return
  el.focus()
  !isLeaf(el) && el.click()
}

export const isKorean = (text: string) =>
  /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text)
