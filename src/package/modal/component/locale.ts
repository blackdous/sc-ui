import defaultLocale from '../../../locale/default'

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

let runtimeLocale = {
  ...defaultLocale,
};

export function changeConfirmLocale(newLocale?: ModalLocale) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale,
    };
  }
}

export function getConfirmLocale() {
  return runtimeLocale;
}
