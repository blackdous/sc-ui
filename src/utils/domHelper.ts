import { isFunction } from "./is";
export function findParentDom<T = any> (
  currentDom: any,
  level: number,
  fn: (...args: any) => any
): T | null {
  let count = 0;

  function recursion (dom:any, countLevel: number): T | null {
    if (!dom) {
      return null
    }
    if (countLevel >= level) {
      return null
    }
    if (isFunction(fn)) {
      if (fn(dom)) {
        return fn(dom)
      } else {
        return recursion(dom.parentNode, ++count)
      }
    } else {
      return dom
    }
  }
  if (currentDom.parentNode) {
    return recursion(currentDom.parentNode, ++count)
  } else {
    return currentDom
  }
}
export function findChildrenDom<T = any> (
  currentDom: any,
  level: number,
  fn: (...args: any) => any
): T | null {
  let count = 0;

  function recursion (dom:any, countLevel: number): T | null {
    if (!dom) {
      return null
    }
    if (countLevel >= level) {
      return null
    }
    if (isFunction(fn)) {
      if (fn(dom)) {
        return fn(dom)
      } else {
        return recursion(dom.children, ++count)
      }
    } else {
      return dom
    }
  }
  if (currentDom.parentNode) {
    return recursion(currentDom.children, ++count)
  } else {
    return currentDom
  }
}