import type { PropType } from 'vue';
import type { AlertProps } from '../../alert/index'
import type { ScrollbarProps } from '../../scrollbar/index'

export const footerProps = {
  confirmLoading: { type: Boolean },
  /**
   * @description: Show close button
   */
  showCancelBtn: { type: Boolean, default: true },
  cancelButtonProps: Object as PropType<Recordable>,
  cancelText: { type: String, default: '取消' },
  /**
   * @description: Show confirmation button
   */
  showOkBtn: { type: Boolean, default: true },
  okButtonProps: Object as PropType<Recordable>,
  okText: { type: String, default: '确定' },
  okType: { type: String, default: 'primary' },
  showFooter: { type: Boolean, default: true },
  footerHeight: {
    type: [String, Number] as PropType<string | number>,
    default: 60,
  },
  footerAlign: {
    type: String,
    validator: (v:string) => ['left', 'center', 'right'].includes(v)
  }
};
export const basicProps = {
  transformTop: [Number, String],
  title: { type: String, default: '' },
  loadingText: { type: String },
  helpInfo: { type: String },
  showDetailBack: { type: Boolean, default: true },
  visible: { type: Boolean },
  alertOptions: {
    type: Object as PropType<AlertProps>
  },
  drawerStyle: Object,
  minusDefaultMaxHeight: {
    type: Number,
    default () {
      return 0
    }
  },

  onOk: Function as PropType<(e:MouseEvent) => void>,
  onCancel: Function as PropType<(e:MouseEvent) => void>,

  scrollbarOptions: {
    type: Object as PropType<ScrollbarProps>
  },
  closable: { type: Boolean, default: true },
  loading: { type: Boolean },
  width: {
    type: [Number, String]
  },
  widthSize: {
    type: String,
    validator: (v:string) => ['mini', 'middle', 'large'].includes(v)
  },
  maskClosable: { type: Boolean, default: true },
  getContainer: {
    type: [Object, String] as PropType<any>,
  },
  closeFunc: Function as PropType<() => Promise<boolean>>,
  destroyOnClose: { type: Boolean },
  ...footerProps,
};
