import { createApp } from "vue"
import lodash from 'lodash'

import { isFunction } from "../../utils"
import { SensitiveOperationProps, CommonConfig } from './component/type'
import sensitiveOperationsModal from "./component/sensitiveOperations.vue"

const { debounce } = lodash

export const createSensitiveOperationsModal = debounce(async (option:SensitiveOperationProps) => {
  const { loadingFun, verificationValid, catchFun, finallyFun, sensitiveOperationId, forcePass } = option
  console.log('forcePass: ', forcePass);
  try {
    isFunction(loadingFun) && loadingFun(true)
    const pass = isFunction(verificationValid) ?  await verificationValid({ sensitiveOperationId: sensitiveOperationId }) : undefined
    isFunction(loadingFun) && loadingFun(false)
    if (pass && forcePass !== true) {
      // 不需要校验
      option.callbackOk && option.callbackOk()
    } else {
      // 需要校验
      const mountNode = document.createElement('div')
      const Instance = createApp(sensitiveOperationsModal, {
        visible: true,
        ...option,
        close: () => {
          Instance.unmount(mountNode)
          document.body.removeChild(mountNode)
        }
      })
      document.body.appendChild(mountNode)
      Instance.mount(mountNode)
      // const handleDestroy = () => {
      //   render(null, document.body)
      // }
      // // 使用 h 函数创建 vnode
      // const vnode = h(sensitiveOperationsModal, {
      //   ...option,
      //   destroy: handleDestroy
      // })
      // // 使用 render 函数将 vnode 渲染为真实DOM并挂载到 body 上
      // render(vnode, document.body)
    }
  } catch {
    isFunction(loadingFun) && loadingFun(false)
    isFunction(catchFun) && catchFun()
  } finally {
    isFunction(finallyFun) && finallyFun()
  }
}, 300)


export const useSensitiveOperationsModal = (commonConfig:CommonConfig) => {
  return (option:SensitiveOperationProps) => createSensitiveOperationsModal({...option, ...commonConfig})
}