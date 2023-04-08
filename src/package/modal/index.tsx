import {
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons-vue';

import { withInstall } from "../../utils"
import { ModalFuncProps } from "./component/type"
import scModal from './component/ScModal.vue'
import modalConfirm from './component/Confirm'

const info = function (props: ModalFuncProps) {
  const config = {
    type: 'info',
    icon: () => <InfoCircleFilled />,
    okCancel: false,
    ...props,
  };
  return modalConfirm(config);
};

const success = function (props: ModalFuncProps) {
  const config = {
    type: 'success',
    icon: () => <CheckCircleFilled />,
    okCancel: false,
    ...props,
  };
  return modalConfirm(config);
};

const error = function (props: ModalFuncProps) {
  const config = {
    type: 'error',
    icon: () => <CloseCircleFilled />,
    okCancel: false,
    ...props,
  };
  return modalConfirm(config);
};

const warning = function (props: ModalFuncProps) {
  const config = {
    type: 'warning',
    icon: () => <ExclamationCircleFilled />,
    okCancel: false,
    ...props,
  };
  return modalConfirm(config);
};
const warn = warning;

const confirm = function confirmFn(props: ModalFuncProps) {
  const { type, icon } = props
  console.log('icon: ', icon);
  let newIcon = icon
  if (!icon) {
    switch (type) {
      case 'info':
        newIcon = () => <InfoCircleFilled />
        break
      case 'error':
        newIcon = () => <CloseCircleFilled />
        break
      case 'success':
        newIcon = () => <CheckCircleFilled />
        break
      case 'warning':
        newIcon = () => <ExclamationCircleFilled />
        break
    }
  }
  const config = {
    type: 'confirm',
    okCancel: true,
    icon: newIcon,
    ...props,
  };
  return modalConfirm(config);
};

scModal.info = info;
scModal.success = success;
scModal.error = error;
scModal.warning = warning;
scModal.warn = warn;
scModal.confirm = confirm;

scModal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export const destroyFns:Array<any> = []

export const ScModal = withInstall(scModal)
export { useModalContext } from './hooks/useModalContext'
export { useModal, useModalInner } from './hooks/useModal'

export * from './component/type'