import { notification } from "ant-design-vue"
import { h } from 'vue'
import type { NotificationArgsProps } from "ant-design-vue/lib/notification"
import {
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled
} from '@ant-design/icons-vue'

import { ScButton } from '../../button'
import { isFunction } from "../../../utils/is"

interface ScNotificationProps extends NotificationArgsProps {
  closeBtn?: boolean;
  edit?: boolean;
  cancelText?: string;
  cancelProps?: any;
  confirmProps?: any;
  confirmText?: string;
  cancelCb?: (e:Event) => any;
  confirmCb?: (e:Event) => any;
}


const getEditContent = (config: ScNotificationProps, current: any) => {
  // console.log('current: ', current);
  return h('div', 
    {
      class: 'ant-notification-notice-description__edit' 
    },
    [
      h(ScButton, 
        { 
          type: "text", 
          onClick: (event: Event) => {
            current?.destroy()
            if(isFunction(config.cancelCb)) {
              config.cancelCb(event)
            }
          },
          ...config.cancelProps
        }, 
        () => config.cancelText || '取消'
      ),
      h(ScButton, 
        { 
          type: "link", 
          onClick: (event: Event) => {
            if(isFunction(config.confirmCb)) {
              config.confirmCb(event)
            }
          },
          ...config.confirmProps
        }, 
        () => config.confirmText || '确认'
      )
    ]
  )
}

const getIconVnode = (type: string) => {
  let iconVnode = null  
  switch (type) {
    case 'success':
      iconVnode = h(CheckCircleFilled, {
        style: {
          color: '#2BA471'
        }
      })
      break;
    case 'error':
      iconVnode = h(CloseCircleFilled, {
        style: {
          color: '#D54941'
        }
      })
      break;
    case 'warning':
      iconVnode = h(ExclamationCircleFilled, {
        style: {
          color: '#E37318'
        }
      })
      break;
    case 'warn':
      iconVnode = h(ExclamationCircleFilled, {
        style: {
          color: '#E37318'
        }
      })
      break;
    case 'info':
      iconVnode = h(InfoCircleFilled, {
        style: {
          color: '#008CD3'
        }
      })
      break;
  }
  return iconVnode
} 

class scNotification {
  defaultConfig (config: ScNotificationProps, type?: string) {
    //@ts-ignore
    const newDescription = h('div', [ h('p', { class: 'ant-notification-notice-description__text' }, config.description), getEditContent(config, this)])
    const newConfig:ScNotificationProps  = {
      ...config,
      class: `
        scNotification 
        ${config.class ? config.class : ''} 
        ${config.closeBtn === false ? 'notCloseBtn' : ''}
      `,
      description: config.edit ? newDescription : config.description,
      // @ts-ignore
      icon: config.icon || getIconVnode(type || config.type)
    }
    return newConfig
  }
  /**
   * 用于打开notification
   * @param NotificationArgsProps 参数
   */
  open (config: ScNotificationProps) {
    notification.open(this.defaultConfig(config))
  }
  /**
   * 打开success信息通知
   * @param NotificationArgsProps 参数
   */
  success (config: ScNotificationProps) {
    notification.success(this.defaultConfig(config, 'success'))
  }
  /**
   * 打开error信息通知
   * @param NotificationArgsProps 参数
   */
  error (config: ScNotificationProps) {
    notification.error(this.defaultConfig(config, 'error'))
  }
  /**
   * 打开info信息通知
   * @param NotificationArgsProps 参数
   */
  info (config: ScNotificationProps) {
    notification.info(this.defaultConfig(config, 'info'))
  }
  /**
   * 打开warning信息通知
   * @param NotificationArgsProps 参数
   */
  warning (config: ScNotificationProps) {
    notification.warning(this.defaultConfig(config, 'warning'))
  }
  /**
   * 打开warn信息通知
   * @param NotificationArgsProps 参数
   */
  warn (config: ScNotificationProps) {
    notification.warn(this.defaultConfig(config, 'warn'))
  }
  /**
   * 关闭信息通知
   * @param key 参数
   */
  close (key: string) {
    notification.close(key)
  }
  /**
   * 关闭信息通知
   */
  destroy () {
    notification.destroy()
  }
}


export default scNotification
