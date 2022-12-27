import { VNode, h } from 'vue'
import { message } from "ant-design-vue"
import { buildUUID } from '../utils/uuid'
import { basePrefixCls } from '../constant'


type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
interface Options {
  type?: NoticeType;
  content?: VNode | string;
  duration?: number;
  onClose?: () => void;
  icon?: VNode;
}

export const createCloseMessage = ({
  type = 'info',
  content,
  duration = 3000,
  onClose,
  icon
}: Options) => {
  const uuid = buildUUID()
  switch(type) {
    default:
      message.open({ 
        type: type, 
        content: h('span', { 
            class: `${basePrefixCls}Message-allowClose`
          }, 
          [
            content, 
            h('i', { 
              class: 'sc-ui sc-guanbi',
              onClick: () => {
                message.destroy({key: uuid})
              }
            })
          ]
        ), 
        duration, 
        onClose, 
        icon: type === 'loading' ? h('span', { class: 'loading-transition' }) : icon, 
        key: uuid
      })
  }
}

export const useMessage = () => {
  return {
    createCloseMessage
  }
}