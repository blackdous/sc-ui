import type { PropType, CSSProperties } from 'vue'
import type { LegacyButtonType, ButtonProps } from 'ant-design-vue/es/button/buttonTypes'
import { PropTypes } from '../../../utils/propTypes'
import { VueNode } from '../../../utils';

type getContainerFunc = () => HTMLElement;
export const modalProps = () => ({
  showTooltip: { type: Boolean, default: false },
  tooltipDes: { type: String, default: '' },
  type: String,
  prefixCls: { type: String },
  onCancelDisable: { type: Boolean, default: false },
  onOkDisable: { type: Boolean, default: false },
  visible: { type: Boolean, default: true },
  confirmLoading: { type: Boolean, default: undefined },
  title: PropTypes.any,
  closable: { type: Boolean, default: undefined },
  closeIcon: PropTypes.any,
  onOk: Function as PropType<(e: MouseEvent) => void>,
  onCancel: Function as PropType<(e: MouseEvent) => void>,
  'onUpdate:visible': Function as PropType<(visible: boolean) => void>,
  onChange: Function as PropType<(visible: boolean) => void>,
  afterClose: Function as PropType<() => void>,
  centered: { type: Boolean, default: undefined },
  width: {
    type: [String, Number],
    default: '480px'
  },
  footer: PropTypes.any,
  okText: PropTypes.any,
  okType: String as PropType<LegacyButtonType>,
  cancelText: PropTypes.any,
  icon: PropTypes.any,
  maskClosable: { type: Boolean, default: true },
  forceRender: { type: Boolean, default: undefined },
  okButtonProps: Object as PropType<ButtonProps>,
  cancelButtonProps: Object as PropType<ButtonProps>,
  destroyOnClose: { type: Boolean, default: true },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object] as PropType<
      string | HTMLElement | getContainerFunc | false
    >,
    default: undefined,
  },
  zIndex: Number,
  // @ts-ignore
  bodyStyle: { type: Object as PropType<CSSProperties>, default: undefined as CSSProperties },
  // @ts-ignore
  maskStyle: { type: Object as PropType<CSSProperties>, default: undefined as CSSProperties },
  mask: { type: Boolean, default: undefined },
  keyboard: { type: Boolean, default: undefined },
  wrapProps: Object,
  focusTriggerAfterClose: { type: Boolean, default: undefined },
  modalRender: Function as PropType<(arg: { originVNode: VueNode }) => VueNode>,
});