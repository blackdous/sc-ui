import type { Directive, DirectiveBinding } from "vue"
import { isString, isArray } from "../utils/is"

const StopEvent: Directive = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    let keyCode = [13]
    const { modifiers } = binding

    if (isString(binding.value)) {
      keyCode = [parseInt(binding.value)]
    } else if (isArray(binding.value)) {
      keyCode = binding.value
    }
    
    el?.addEventListener('keydown', (event: Event) => {
      if (keyCode.includes(event?.keyCode)) {
        if (modifiers.all) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (Object.keys(modifiers).length === 0) {
          event.preventDefault();
        }
        if (modifiers.stop) {
          event.stopPropagation();
        }
      }
    }, { capture: true })
  }
}

export default StopEvent