import { PropTypes } from "../../../utils/propTypes";
import { NodeMouseEventHandler, tuple } from "../../../utils";
import { PropType } from "vue";

const AlertTypes = tuple('success', 'info', 'warning', 'error');

export const alertProps = () => ({
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: PropTypes.oneOf(AlertTypes),
  /** Whether Alert can be closed */
  closable: { type: Boolean, default: undefined },
  /** Close text to show */
  closeText: PropTypes.any,
  /** Content of Alert */
  message: PropTypes.any,
  /** Additional content of Alert */
  description: PropTypes.any,
  /** Trigger when animation ending of Alert */
  afterClose: Function as PropType<() => void>,
  /** Whether to show icon */
  showIcon: { type: Boolean, default: undefined },
  prefixCls: String,
  banner: { type: Boolean, default: undefined },
  icon: PropTypes.any,
  closeIcon: PropTypes.any,
  onClose: Function as PropType<NodeMouseEventHandler>,
  textColor: { type: Boolean, default: undefined },
});

export const api = alertProps();