import type { CSSProperties } from 'vue';

export interface BasicDataNode {
  checkable?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  selectable?: boolean;
  switcherIcon?: IconType;

  /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
  class?: string;
  style?: CSSProperties;
  slots?: Record<string, string>;
  [key: string]: any;
}

export interface DataNode extends BasicDataNode {
  children?: DataNode[];
  key: string | number;
  title?: any;
}

export interface EventDataNode extends DataNode {
  expanded?: boolean;
  selected?: boolean;
  checked: boolean;
  loaded?: boolean;
  loading?: boolean;
  halfChecked?: boolean;
  dragOver?: boolean;
  dragOverGapTop?: boolean;
  dragOverGapBottom?: boolean;
  pos?: string;
  active?: boolean;
  dataRef?: DataNode;
  parent?: DataNode;
  eventKey?: Key; // 兼容 v2， 推荐直接用 key
}

export type IconType = any;

export type Key = string | number;

// export type NodeElement = VNode<TreeNodeProps>;

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}