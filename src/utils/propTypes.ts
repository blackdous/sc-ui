import { CSSProperties, VNodeChild } from 'vue'
import { createTypes, VueTypeValidableDef, VueTypesInterface } from 'vue-types'

export type VueNode = VNodeChild | JSX.Element;

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>;
  readonly VNodeChild: VueTypeValidableDef<VueNode>;
  // readonly trueBool: VueTypeValidableDef<boolean>;
};

const PropTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes;

PropTypes.extend([
  {
    name: 'looseBool',
    getter: true,
    type: Boolean,
    default: undefined,
  },
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true,
    type: undefined,
  },
]);
export { PropTypes };
