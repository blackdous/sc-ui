import type { App, Plugin, Component, PropType, VNode } from 'vue'
import { EventDataNode } from './nodeType'

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

export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export type NodeMouseEventHandler = (e: MouseEvent, node: EventDataNode) => void;

declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;
export type VueNode = VNodeChildAtom | VNodeChildAtom[] | JSX.Element;