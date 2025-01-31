import { createLoading } from '../package/loading/component/createLoading';
import type { Directive, App } from 'vue';

const LoadingDirective: Directive = {
  mounted(el, binding) {
    const tip = el.getAttribute('loading-tip');
    const background = el.getAttribute('loading-background');
    const size = el.getAttribute('loading-size');
    const fullscreen = !!binding.modifiers.fullscreen || !!binding.modifiers.isFullPage;
    if (!fullscreen) {
      el.style.position = 'relative'
    }
    const instance = createLoading(
      {
        tip,
        background,
        size: size,
        loading: !!binding.value,
        absolute: !fullscreen,
        isFullPage: fullscreen
      },
      fullscreen ? document.body : el,
    );
    el.instance = instance;
  },
  updated(el, binding) {
    const instance = el.instance;
    if (!instance) return;
    instance.setTip(el.getAttribute('loading-tip'));
    if (binding.oldValue !== binding.value) {
      instance.setLoading?.(binding.value && !instance.loading);
    }
  },
  unmounted(el) {
    el?.instance?.close();
  },
};

export function setupLoadingDirective(app: App) {
  app.directive('loading', LoadingDirective);
}

export default LoadingDirective;
