// import { tuple } from "../../../utils";
import { PropTypes } from "../../../utils/propTypes";
import { PropType } from 'vue'
// export const SwitchSizes = tuple('small', 'default', 'large');
type CheckedType = boolean | string | number;
const switchProps = {
  prefixCls: PropTypes.string,
  size: {
    type: String,
    validator: (v:string) => ['small', 'default', 'large'].includes(v)
  },
  disabled: Boolean,
  checkedChildren: PropTypes.VNodeChild,
  unCheckedChildren: PropTypes.VNodeChild,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autofocus: Boolean,
  loading: Boolean,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, Boolean]),
  checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, Boolean]).def(
    true,
  ),
  unCheckedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    Boolean,
  ]).def(false),
  onChange: {
    type: Function as PropType<(checked: CheckedType, e: Event) => void>,
  },
  onClick: {
    type: Function as PropType<(checked: CheckedType, e: Event) => void>,
  },
  onKeydown: {
    type: Function as PropType<(e: Event) => void>,
  },
  onMouseup: {
    type: Function as PropType<(e: Event) => void>,
  },
  'onUpdate:checked': {
    type: Function as PropType<(checked: CheckedType) => void>,
  },
};

export { switchProps }
