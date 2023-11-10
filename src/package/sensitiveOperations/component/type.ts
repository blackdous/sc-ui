// import { PropType } from "vue"
import type { ModalProps } from "../../modal"
import { modalProps } from '../../modal'

export interface SensitiveOperationProps extends ModalProps {
  title?: string;
  visible?: boolean;
  callbackOk?: () => any;
  sensitiveOperationId?: string;
  close?: () => any;
  verificationWays?: <T>(config:T) => Promise<T>;
  verificationCodeSend?: <T>(config:T) => Promise<T>;
  verificationCodeCheck?: <T>(config:T) => Promise<T>;
  verificationCodeEmailSend?: <T>(config:T) => Promise<T>;
  verificationCodeEmailCheck?: <T>(config:T) => Promise<T>;
  verificationValid?: <T>(config:T) => Promise<T>;
  loadingFun?: (loading: boolean) => any;
  catchFun?: (error?: any) => any;
  finallyFun?: (error?: any) => any;
  forcePass?: boolean;
  langConfig?: {
    [key:string]: any
  },
  userInfo?: {
    [key:string]: any
  }
}

export const baseProps = () => ({
  ...modalProps(),
  verificationWays: {
    type: Function,
    require: true
  },
  verificationCodeSend: {
    type: Function,
    require: true
  },
  verificationCodeCheck: {
    type: Function,
    require: true
  },
  verificationCodeEmailSend: {
    type: Function,
    require: true
  },
  verificationCodeEmailCheck: {
    type: Function,
    require: true
  },
  userInfo: {
    type: Object,
    require: true
  },
  langConfig: {
    type: Object,
    default: () => {
      return {
        yanZhengMa: '验证码',
        houChongChi: '后重试',
        faSongYanZhengMa: '发送验证码',
        qingXianShuRuYanZhengMa: '请先输入验证码',
        qingFaSongYanZhengMa: '请发送验证码',
        yanZhengFangShi: '验证方式',
        shouJiYanZheng: '手机验证',
        youXiangYanZheng: '邮箱验证',
        ninYiKaiQiCaoZuoBaohu: '您已开启操作保护，为了保障您的账号和资源安全，请进行身份验证。如需关闭操作保护，请在“安全设置>操作保护”中关闭。',
        shenFenYanZhengWeiQueBaoBenCi: '身份验证：为确保本次操作安全，请完成身份验证',
        phone: '手机号',
        youXiang: '邮箱',
        shouJi: '手机',
        ramFangWenKongZhi: 'RAM访问控制',
        anQuanSheZhi: '安全设置',
        ninShangWeiBangDingQianWang: '您尚未绑定{type}，可前往{page}进行绑定'
      }
    }
  },
  visible: {
    type: Boolean,
    default: false
  },
  // 成功校验后回调
  callbackOk: {
    type: Function
  },
  // 敏感操作id
  sensitiveOperationId: {
    type: String,
    default: ''
  },
  // 关闭弹框
  close: {
    type: Function
  },
  // 是否弹出校验框
  forcePass: Boolean
})

export interface CommonConfig {
  verificationWays?: <T>(config:T) => Promise<T>;
  verificationCodeSend?: <T>(config:T) => Promise<T>;
  verificationCodeCheck?: <T>(config:T) => Promise<T>;
  verificationCodeEmailSend?: <T>(config:T) => Promise<T>;
  verificationCodeEmailCheck?: <T>(config:T) => Promise<T>;
  verificationValid?: <T>(config:T) => Promise<T>;
  userInfo?: {
    [key:string]: any
  };
  langConfig?: {
    [key:string]: any
  }
}