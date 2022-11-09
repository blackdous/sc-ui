import { DirectiveBinding, ObjectDirective } from "vue"


type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void
type FlushList = Map<
  HTMLElement,
  {
    documentHandler: DocumentHandler
    bindingFn: (...args: unknown[]) => unknown
  }[]
>

const nodeList: FlushList = new Map()

const TextCollapse: ObjectDirective = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    // console.log('binding: ', binding.value);
    const divDom = document.createElement('div')
    const spanDom = document.createElement('span')
    spanDom.innerText = '收起'
    el.style.height = 'auto'
    divDom.className = 'scTextCollapse'
    divDom.appendChild(spanDom)
    let isCollapse = false
    divDom.addEventListener('click', () => {
      if (!isCollapse) {
        spanDom.innerText = '展开更多'
        el.style.height = '20px'
        el.style.overflow = 'hidden'
      } else {
        spanDom.innerText = '收起'
        el.style.height = 'auto'
        el.style.overflow = 'none'
      }
      isCollapse = !isCollapse
    })
    el?.parentNode?.appendChild(divDom)
    if (binding.value === 'close') {
      // @ts-ignore
      divDom.click()
    }
  },
  unmounted (el) {
    nodeList.delete(el.parentNode)
  }
}

export default TextCollapse