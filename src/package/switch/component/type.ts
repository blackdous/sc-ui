import { tuple } from "../../../utils";
import { PropTypes } from "../../../utils/propTypes";
import { PropType, ExtractPropTypes } from 'vue'
export const SwitchSizes = tuple('small', 'default', 'large');
type CheckedType = boolean | string | number;
const switchProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(SwitchSizes),
  disabled: PropTypes.looseBool,
  checkedChildren: PropTypes.VNodeChild,
  unCheckedChildren: PropTypes.VNodeChild,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autofocus: PropTypes.looseBool,
  loading: PropTypes.looseBool,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]),
  checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(
    true,
  ),
  unCheckedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.looseBool,
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
