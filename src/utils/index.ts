import { App, Plugin, Component, PropType, VNode, unref } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import { EventDataNode } from './nodeType'
import { isObject } from './is'

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

export const isType = (source:any, typeStr: string) => {
  return Object.prototype.toString.call(source) === '[object ' + typeStr.toLocaleUpperCase() + ']'
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  const res: any = cloneDeep(src);
  for (key in target) {
    res[key] = isObject(res[key]) ? deepMerge(res[key], target[key]) : (res[key] = target[key]);
  }
  return res;
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

export function getDynamicProps<T, U>(props: T): Partial<U> {
  const ret: Recordable = {};
  // @ts-ignore
  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}

export * from './domHelper'
export * from './error'
export * from './is'
export * from './log'
export * from './nodeType'
export * from './propTypes'
export * from './style'
export * from './treeHelper'
export * from './uuid'