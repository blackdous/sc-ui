import { computed } from 'vue'
import { NOOP } from '@vue/shared'

import type { PropType } from 'vue'
import type {
  CascaderConfig,
  CascaderOption,
  CascaderProps,
  CascaderValue,
} from './node'

export const CommonProps = {
  modelValue: [Number, String, Array] as PropType<CascaderValue>,
  options: {
    type: Array as PropType<CascaderOption[]>,
    default: () => [] as CascaderOption[],
  },
  props: {
    type: Object as PropType<CascaderProps>,
    default: () => ({} as CascaderProps),
  },
}

export const DefaultProps: CascaderConfig = {
  expandTrigger: 'click',
  multiple: false,
  checkStrictly: false, // whether all nodes can be selected
  emitPath: true, // wether to emit an array of all levels value in which node is located
  lazy: false,
  lazyLoad: NOOP,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500,
  nodeEllipsis: {
    open: false,
    maxWidth: '240px',
    width: '240px'
  }
}

export const useCascaderConfig = (props: { props: CascaderProps }) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props,
  }))
}
