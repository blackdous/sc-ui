import type { App, Plugin, Component, PropType } from 'vue'

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component as Component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  }
  return component as T & Plugin;
}

export const definePropType = <T>(val: any): PropType<T> => val

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])