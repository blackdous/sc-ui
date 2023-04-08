import { FunctionalComponent } from 'vue'
import type { ModalFuncProps } from './type';
import ScModal from './ScModal.vue';


function renderSomeContent(_name, someContent) {
  if (typeof someContent === 'function') {
    return someContent();
  }
  return someContent;
}


const ConfirmDialog:FunctionalComponent<ModalFuncProps> = props => {

  const {
    icon,
    onCancel,
    footerAlign = 'right',
    onOk,
    close,
    closable = false,
    zIndex,
    afterClose,
    visible,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    okButtonProps,
    cancelButtonProps,
  } = props

  const okType = props.okType || 'primary';
  const prefixCls = props.prefixCls || 'ant-modal';
  const contentPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  const classString = [
    'scModal-confirm',
    contentPrefixCls,
    `${contentPrefixCls}-${props.type}`,
    `${prefixCls}-${props.type}`,
    props.class,
  ].join(' ')
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  // const runtimeLocale = getConfirmLocale();
  // const okText =
  //   renderSomeContent('okText', props.okText) ||
  //   (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  // const cancelText = renderSomeContent('cancelText', props.cancelText) || runtimeLocale.cancelText;
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const transitionName = props.transitionName || 'zoom';
  const maskTransitionName = props.maskTransitionName || 'fade';

  console.log(closable)
  return (
    <ScModal
      prefixCls={prefixCls}
      wrapClassName={classString}
      onCancel={e => close({ triggerCancel: true }, e)}
      onOk={onOk}
      visible={visible}
      title={null}
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
      mask={mask}
      maskClosable={maskClosable}
      maskStyle={maskStyle}
      style={style}
      width={width}
      zIndex={zIndex}
      afterClose={afterClose}
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
