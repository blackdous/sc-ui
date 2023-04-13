import { FunctionalComponent } from 'vue'
import type { ModalFuncProps } from './type';
// import { modalProps } from './type';
import ScModal from './ScModal.vue';
import { buildUUID } from '../../../utils';
import { getConfirmLocale } from './locale'
// import useLocale from '../../../hooks/useLocale'

// @ts-ignore
function renderSomeContent(_name, someContent) {
  if (typeof someContent === 'function') {
    return someContent();
  }
  return someContent;
}


const ConfirmDialog:FunctionalComponent<ModalFuncProps> = props => {

  const {
    icon,
    footerAlign = 'right',
    onOk,
    close,
    closable = false,
    zIndex,
    // afterClose,
    visible,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    okButtonProps,
    cancelButtonProps,
    showCancelBtn,
    showOkBtn,
    tooltipDes,
  } = props

  const okType = props.okType || 'primary';
  const prefixCls = props.prefixCls || 'ant-modal';
  const contentPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  const uuid = 'scModal' + buildUUID()
  const classString = [
    'scModal-confirm',
    uuid,
    contentPrefixCls,
    `${contentPrefixCls}-${props.type}`,
    `${prefixCls}-${props.type}`,
    props.class,
  ].join(' ')

  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;

  // const { antLocale } = useLocale()
  const runtimeLocale = getConfirmLocale()
  const okText = props.okText || runtimeLocale?.Modal?.okText || '确认';
  const cancelText = props.cancelText || runtimeLocale?.Modal.cancelText || '取消';
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const transitionName = props.transitionName || 'zoom';
  const maskTransitionName = props.maskTransitionName || 'fade';
  if (autoFocusButton) {
    const timer = setTimeout(() => {
      const docCur = document.querySelectorAll(`.${uuid} .scModal-footer .ant-btn`)
      if (autoFocusButton === 'ok') {
        docCur?.forEach(item => {
          item.className.includes('scModal-footer__ok') ? item?.focus() : ''
        })
      } else if (autoFocusButton === 'cancel') {
        docCur?.forEach(item => {
          item.className.includes('scModal-footer__cancel') ? item?.focus() : ''
        })
      }
      clearTimeout(timer)
    }, 200)
  }

  return (
    <ScModal
      prefixCls={prefixCls}
      wrapClassName={classString}
      onCancel={e => { close({ triggerCancel: true }, e);} }
      onOk={onOk}
      visible={visible}
      title={null}
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
      mask={mask}
      okText={okText}
      cancelText={cancelText}
      maskClosable={maskClosable}
      maskStyle={maskStyle}
      style={style}
      width={width}
      zIndex={zIndex}
      showCancelBtn={showCancelBtn}
      showOkBtn={showOkBtn}
      tooltipDes={tooltipDes}
      // afterClose={afterClose}
      keyboard={keyboard}
      centered={centered}
      getContainer={getContainer}
      closable={closable}
      okButtonProps={Object.assign(okButtonProps || {}, { type: okType })}
      cancelButtonProps={cancelButtonProps}
      footerAlign={footerAlign}
    >
      <div class={`${contentPrefixCls}-body-wrapper`}>
        <div class={`${contentPrefixCls}-body`}>
          {renderSomeContent('icon', icon)}
          {props.title === undefined ? null : (
            <span class={`${contentPrefixCls}-title`}>
              {renderSomeContent('title', props.title)}
            </span>
          )}
          <div class={`${contentPrefixCls}-content`}>
            {renderSomeContent('content', props.content)}
          </div>
        </div>
      </div>
    </ScModal>
  )
}

export default ConfirmDialog

// export default function genConfirmDialog(curProps: ModalProps) {
//   console.log('curProps: ', curProps);
//   const confirmDialog = defineComponent({
//     name: 'ConfirmDialog',
//     inheritAttrs: false,
//     props: {
//       ...modalProps(),
//       // ...curProps
//     },
//     setup (_props, { attrs }) {
//       console.log('_props: ', _props);
//       const props = _props
//       const {
//         icon,
//         footerAlign = 'right',
//         onOk,
//         close,
//         closable = false,
//         zIndex,
//         // afterClose,
//         visible,
//         keyboard,
//         centered,
//         getContainer,
//         maskStyle,
//         okButtonProps,
//         cancelButtonProps,
//       } = props

//       const { antLocale } = useLocale()
//       console.log('antLocale: ', antLocale);
//       console.log('close: ', close);

//       const okType = props.okType || 'primary';
//       const prefixCls = props.prefixCls || 'ant-modal';
//       const contentPrefixCls = `${prefixCls}-confirm`;
//       const width = props.width || 416;
//       const style = attrs.style || {};
//       const mask = props.mask === undefined ? true : props.mask;
//       const uuid = 'scModal' + buildUUID()
//       const classString = [
//         'scModal-confirm',
//         uuid,
//         contentPrefixCls,
//         `${contentPrefixCls}-${props.type}`,
//         `${prefixCls}-${props.type}`,
//         attrs.class,
//       ].join(' ')

//       // 默认为 false，保持旧版默认行为
//       const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;

//       // const { antLocale } = useLocale()
//       // const okText = props.okText || antLocale?.Modal?.okText || '确认';
//       // const cancelText = props.cancelText || antLocale?.Modal.cancelText || '取消';
//       const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
//       const transitionName = props.transitionName || 'zoom';
//       const maskTransitionName = props.maskTransitionName || 'fade';
//       if (autoFocusButton) {
//         const timer = setTimeout(() => {
//           const docCur = document.querySelectorAll(`.${uuid} .scModal-footer .ant-btn`)
//           if (autoFocusButton === 'ok') {
//             docCur?.forEach(item => {
//               item.className.includes('scModal-footer__ok') ? item?.focus() : ''
//             })
//           } else if (autoFocusButton === 'cancel') {
//             docCur?.forEach(item => {
//               item.className.includes('scModal-footer__cancel') ? item?.focus() : ''
//             })
//           }
//           clearTimeout(timer)
//         }, 200)
//       }
//       return () => {
//         return (
//           <ScModal
//             prefixCls={prefixCls}
//             wrapClassName={classString}
//             onCancel={e => { close({ triggerCancel: true }, e);} }
//             onOk={onOk}
//             visible={visible}
//             title={null}
//             transitionName={transitionName}
//             maskTransitionName={maskTransitionName}
//             mask={mask}
//             // okText={okText}
//             // cancelText={cancelText}
//             maskClosable={maskClosable}
//             maskStyle={maskStyle}
//             style={style}
//             width={width}
//             zIndex={zIndex}
//             // afterClose={afterClose}
//             keyboard={keyboard}
//             centered={centered}
//             getContainer={getContainer}
//             closable={closable}
//             okButtonProps={Object.assign(okButtonProps || {}, { type: okType })}
//             cancelButtonProps={cancelButtonProps}
//             footerAlign={footerAlign}
//           >
//             <div class={`${contentPrefixCls}-body-wrapper`}>
//               <div class={`${contentPrefixCls}-body`}>
//                 {renderSomeContent('icon', icon)}
//                 {props.title === undefined ? null : (
//                   <span class={`${contentPrefixCls}-title`}>
//                     {renderSomeContent('title', props.title)}
//                   </span>
//                 )}
//                 <div class={`${contentPrefixCls}-content`}>
//                   {renderSomeContent('content', props.content)}
//                 </div>
//               </div>
//             </div>
//           </ScModal>
//         )
//       }
//     }
//   })
//   return confirmDialog
// }

