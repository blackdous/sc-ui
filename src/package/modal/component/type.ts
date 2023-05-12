import type { PropType, CSSProperties, ComputedRef, ExtractPropTypes, VNodeTypes } from 'vue'
import type { LegacyButtonType, ButtonProps } from 'ant-design-vue/es/button/buttonTypes'
import { PropTypes } from '../../../utils/propTypes'
import { VueNode } from '../../../utils';
import { UseDraggableOptions } from '../../../types/draggable'
import { ScrollbarProps } from '../../scrollbar';

type getContainerFunc = () => HTMLElement;
export interface DraggableType {
  x: number,
  y: number,
  isDragging: boolean,
  position: {
    x: number,
    y: number
  },
  style: ComputedRef<string>
}
export const modalProps = () => ({
  showTooltip: { type: Boolean, default: false },
  isConfirm: { type: Boolean, default: false },
  tooltipDes: { type: String, default: '' },
  //显示取消按钮
  showCancelBtn: { type: Boolean, default: true },
  //显示确认按钮
  showOkBtn: { type: Boolean, default: true },
  afterClose: Function as PropType<() => Promise<VueNode>>,
  closeFunc: Function as PropType<() => Promise<boolean>>,
  type: [String],
  infoDes: String,
  prefixCls: { type: String },
  onCancelDisable: { type: Boolean, default: false },
  onOkDisable: { type: Boolean, default: false },
  isDraggable: { type: Boolean, default: true },
  DragOptions: {
    type: Object as PropType<UseDraggableOptions>
  },
  scrollOptions: {
    type: Object as PropType<ScrollbarProps>
  },
  dragChange : Function as PropType<(draggable: DraggableType) => void>,
  footerAlign: {
    type: String,
    default: 'center'
  },
  visible: { type: Boolean, default: false },
  confirmLoading: { type: Boolean, default: undefined },
  title: PropTypes.any,
  closable: { type: Boolean, default: undefined },
  closeIcon: PropTypes.any,
  onOk: Function as PropType<(e: MouseEvent) => void>,
  onCancel: Function as PropType<(e: MouseEvent) => void>,
  'onUpdate:visible': Function as PropType<(visible: boolean) => void>,
  onChange: Function as PropType<(visible: boolean) => void>,
  // afterClose: Function as PropType<() => void>,
  centered: { type: Boolean, default: true },
  width: {
    type: [String, Number],
    default: '480px'
  },
  footer: PropTypes.any,
  okText: { type: String },
  okType: String as PropType<LegacyButtonType>,
  cancelText: { type: String },
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
  appContext: PropTypes.any,
  autoFocusButton: [null, String]  as PropType< null | 'ok' | 'cancel'>,
  content: PropTypes.any,
});

export declare type ModalProps = Partial<ExtractPropTypes<typeof modalProps>> 

export interface ModalFuncProps extends ModalProps {
  autoFocusButton?: null | 'ok' | 'cancel',
  content?: string | (() => VNodeTypes) | VNodeTypes,
  icon?: (() => VNodeTypes) | VNodeTypes,
  okType?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default' | 'shadow' | 'icon',
  appContext?: any,
  [key: string]: any
}

export interface ModalMethods {
  setModalProps: (props: Partial<ModalProps>) => void;
  emitVisible?: (visible: boolean, uid: number) => void;
  redoModalHeight?: () => void;
}

export type RegisterFn = (modalMethods: ModalMethods, uuid?: string) => void;

export interface ReturnMethods extends ModalMethods {
  openModal: <T = any>(props?: boolean, data?: T, openOnSet?: boolean) => void;
  closeModal: () => void;
  getVisible?: ComputedRef<boolean>;
}

export interface ReturnInnerMethods extends ModalMethods {
  closeModal: () => void;
  changeLoading: (loading: boolean) => void;
  changeOkLoading: (loading: boolean) => void;
  getVisible?: ComputedRef<boolean>;
  redoModalHeight: () => void;
}

export type UseModalReturnType = [RegisterFn, ReturnMethods];

export type UseModalInnerReturnType = [RegisterFn, ReturnInnerMethods];
