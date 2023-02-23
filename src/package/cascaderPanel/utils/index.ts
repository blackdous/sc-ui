// import castArray as ensureArray from "lodash/castArray"

import { isArray, isObject, capitalize as toCapitalize } from "@vue/shared"
import { isClient } from "@vueuse/core"


export const EVENT_CODE = {
  tab: 'Tab',
  enter: 'Enter',
  space: 'Space',
  left: 'ArrowLeft', // 37
  up: 'ArrowUp', // 38
  right: 'ArrowRight', // 39
  down: 'ArrowDown', // 40
  esc: 'Escape',
  delete: 'Delete',
  backspace: 'Backspace',
  numpadEnter: 'NumpadEnter',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  home: 'Home',
  end: 'End',
}

export const CHANGE_EVENT = 'change'

export const UPDATE_MODEL_EVENT = 'update:modelValue'

export const capitalize = <T extends string>(str: T) => toCapitalize(str) as Capitalize<T>

export const isUndefined = (val: any): val is undefined => val === undefined

export const unique = <T>(arr: T[]) => [...new Set(arr)]

type Many<T> = T | ReadonlyArray<T>

export type Nullable<T> = T | null

export const castArray = <T>(arr: Many<T>): T[] => {
  if(!arr && (arr as any) !== 0) return []
  return Array.isArray(arr) ? arr : [arr]
}

export const isLeaf = (el:HTMLElement) => {
  return !el.getAttribute('aria-owns')
}

export const focusNode = (el:HTMLElement) => {
  if (!el) {
    return
  }
  el.focus()
  !isLeaf(el) && el.click()
}

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

export const isEmpty = (val:unknown) => {
  return (!val && val !== 0) || (isArray(val) && val.length === 0) || (isObject(val) && !Object.keys(val).length)
}

export const scrollView = (
  container: HTMLElement,
  selected: HTMLElement
): void => {
  if (!isClient) return

  if (!selected) {
    container.scrollTop = 0
    return
  }

  const offsetParents: HTMLElement[] = []
  let pointer = selected.offsetParent
  while (
    pointer !== null &&
    container !== pointer &&
    container.contains(pointer)
  ) {
    offsetParents.push(pointer as HTMLElement)
    pointer = (pointer as HTMLElement).offsetParent
  }
  const top =
    selected.offsetTop +
    offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0)
  const bottom = top + selected.offsetHeight
  const viewRectTop = container.scrollTop
  const viewRectBottom = viewRectTop + container.clientHeight

  if (top < viewRectTop) {
    container.scrollTop = top
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight
  }

}

export const generateId = (): number => Math.floor(Math.random() * 10000)