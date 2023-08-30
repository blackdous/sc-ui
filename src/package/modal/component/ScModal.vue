<template>
  <Modal :class="className" v-bind="getBindValue" v-model:visible="visibleRef" ref="modalRef">
    <!-- :style="{'--model-width': getBindValue.width}" -->

    <template #[item]="data" v-for="item in ['default']">
      <div v-if="curProps.type && !$slots.infoText"
        :class="[modalPrefixCls + '-status', modalPrefixCls + '-' + curProps.type]">
        <span v-if="props.type" :class="[modalPrefixCls + '-status-icon']">
          <InfoCircleFilled v-if="curProps.type === 'info'" />
          <CheckCircleFilled v-else-if="curProps.type === 'success'" />
          <ExclamationCircleFilled v-else-if="curProps.type === 'warning'" />
          <ExclamationCircleFilled v-else-if="curProps.type === 'error'" />
        </span>
        <template v-if="isArray(curProps.infoDes)">
          <div>
            <p :class="[modalPrefixCls + '-txt']" v-for="item in (curProps.infoDes || [])">
              {{ item }}
            </p>
          </div>
        </template>
        <p v-else :class="[modalPrefixCls + '-txt']">
          {{ curProps.infoDes }}
        </p>
      </div>
      <template v-else="$slots.infoText">
        <slot name="infoText"></slot>
      </template>
      <div :class="[modalPrefixCls + '-content']" v-loading="getBindValue.loading" :loading-tip="getBindValue.loadingText || '加载中...'">
        <ScScrollbar ref="scrollBarRef" v-bind="scrollbarProps" :fullscreen="false"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </ScScrollbar>
      </div>
    </template>

    <template #title>
      <header ref="modalTitleRef" :class="{ 'draggable-event': curProps?.isDraggable }"
        v-if="curProps.title || isSlotTitle">
        <slot name="title" v-if="isSlotTitle"></slot>
        <span v-else>
          {{ curProps.title }}
        </span>
        <span v-if="curProps.showTooltip" :class="[modalPrefixCls + '-tooltip']">
          <Tooltip overlayClassName="scTooltip-white" destroyTooltipOnHide>
            <template #title>
              {{ curProps.tooltipDes }}
            </template>
            <question-circle-outlined :class="[modalPrefixCls + '-tooltip__icon']" />
          </Tooltip>
        </span>
      </header>
    </template>

    <template #footer v-if="curProps.footer !== null">
      <div :class="footerClassName" v-if="!isSlotFooter">
        <slot name="insertFooter"></slot>
        <ScButton v-if="curProps.showCancelBtn" :class="[modalPrefixCls + '-footer__cancel']" status="info" v-bind="{
          ...curProps.cancelButtonProps,
          type: undefined,
          disabled: curProps?.cancelButtonProps?.disabled || curProps?.onCancelDisable || curProps.confirmLoading
        }" title="" @click="closeVisible">
          {{ curProps.cancelText }}
        </ScButton>
        <ScButton v-if="curProps.showOkBtn" :loading="loadingRef || curProps.confirmLoading"
          :class="[modalPrefixCls + '-footer__ok']"
          v-bind="{ ...curProps.okButtonProps, type: undefined, disabled: curProps?.okButtonProps?.disabled || curProps?.onOkDisable }"
          type="primary" title="" @click="$event => handleOk()">
          {{ curProps.okText }}
        </ScButton>
        <slot name="afterFooter"></slot>
      </div>
      <slot v-else name="footer"> </slot>
    </template>

    <template #closeIcon>
      <i :class="['sc-ui', 'sc-guanbi', curProps.confirmLoading || loadingRef ? 'not-allow' : '']" v-if="!isClose"
        @click="closeVisible">
      </i>
      <span v-else :class="[curProps.confirmLoading || loadingRef ? 'not-allow' : '']" @click="closeVisible">
        <slot name="closeIcon"></slot>
      </span>
    </template>
  </Modal>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, watchEffect, watch, unref, nextTick, getCurrentInstance, onMounted } from 'vue'
// import type { CSSProperties } from 'vue'
// import { useDraggable } from '@vueuse/core';
import { useModalDraggable } from '../hooks/useModalDraggable'
import { Modal, Tooltip } from 'ant-design-vue'
import { ScButton } from '../../button';
import { ScScrollbar } from '../../scrollbar';
import {
  QuestionCircleOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons-vue';

import { modalProps, ModalProps, ModalMethods } from './type'
import { basePrefixCls } from '../../../constant'
import { optimizedResize } from '../../../utils/dom/addEventListener'
import { isFunction, isArray } from '../../../utils/is'
import { deepMerge, pxToRem, isNumber, buildUUID } from '../../../utils'
import useLocale from '../../../hooks/useLocale'
import LoadingDirective from '../../../directives/loading'

export default defineComponent({
  name: 'ScModal',
  inheritAttrs: false,
  props: modalProps(),
  components: {
    Modal,
    ScButton,
    Tooltip,
    ScScrollbar,
    QuestionCircleOutlined,
    InfoCircleFilled,
    CheckCircleFilled,
    ExclamationCircleFilled,
    CloseCircleFilled
  },
  directives: {
    loading: LoadingDirective
  },
  setup(props, { slots, attrs, emit, expose }) {
    const modalPrefixCls = basePrefixCls + 'Modal'
    const uuid = modalPrefixCls + buildUUID()
    // const emit = defineemit(['update:visible', 'dragChange', 'register', 'visible-change', 'cancel'])
    const vBind = computed(() => {
      return props
    })

    const visibleRef = ref(false)
    const propsRef = ref()
    const scrollbarRef = ref()
    const maxHeight = ref()

    const loadingRef = ref(false)

    const curProps = computed(() => {
      const { okText, cancelText } = unref(vBind)
      const { antLocale } = useLocale()
      return {
        ...unref(vBind),
        ...propsRef.value,
        okText: okText || antLocale?.Modal?.okText || '确认',
        cancelText: cancelText || antLocale?.Modal.cancelText || '取消'
      }
    })
    const getBindValue = computed((): Recordable => {
      const filterKey = ['title', 'footer', 'cancelButtonProps', 'okButtonProps', 'cancelText', 'okText']
      const newProps = Object.entries(unref(curProps)).reduce((pre, next) => {
        if (filterKey.includes(next[0])) {
          return {
            ...pre
          }
        } else {
          return {
            ...pre,
            [next[0]]: next[1]
          }
        }
      }, {})
      // const { confirmLoading, maskClosable } = unref(curProps)
      const attr = {
        ...newProps,
        ...attrs,
        visible: unref(visibleRef),
        // infoDes: isArray(unref(curProps).infoDes) ? unref(curProps).infoDes : [unref(curProps).infoDes]
        // maskClosable: confirmLoading || loadingRef ? false : maskClosable
      };
      const { footer, showCancelBtn, showOkBtn, title } = unref(curProps)
      if (
        footer === null ||
        footer === 'null' ||
        (!showCancelBtn && !showOkBtn)
      ) {
        attr.footer = null
      }
      if (
        title === null ||
        title === 'null'
      ) {
        attr.title = null
      }
      // @ts-ignore
      if (newProps.width) {
        // @ts-ignore
        if (isNumber(newProps.width)) {
          // @ts-ignore
          attr.width = pxToRem(newProps.width)
          // @ts-ignore
        } else if (String(newProps.width).includes('%')) {
          // @ts-ignore
          attr.width = newProps.width
        } else {
          // @ts-ignore
          attr.width = pxToRem(parseInt(newProps.width))
        }
      }
      return attr
    });

    const scrollbarProps = computed(() => {
      const { scrollOptions } = unref(curProps)
      return {
        ...scrollOptions,
        // @ts-ignore
        maxHeight: scrollOptions?.maxHeight ? scrollOptions?.maxHeight : maxHeight.value,
        // @ts-ignore
        // height: scrollOptions?.maxHeight ? scrollOptions?.maxHeight :  maxHeight.value
      }
    })

    const className = computed(() => {
      const classNames = [modalPrefixCls, uuid]
      if (unref(vBind).type) {
        classNames.push(modalPrefixCls + '-container-' + unref(vBind).type)
        classNames.push(modalPrefixCls + '-container-status')
      }
      return classNames
    })

    const footerClassName = computed(() => {
      const footerClassNames = [modalPrefixCls + '-footer']
      switch (unref(vBind).footerAlign) {
        case 'left':
          footerClassNames.push('text-left')
          break;
        case 'right':
          footerClassNames.push('text-right')
          break;
        case 'center':
          footerClassNames.push('text-center')
          break;
      }
      return footerClassNames
    })

    const isSlotTitle = computed(() => {
      return Object.keys(slots).includes('title')
    })

    const isSlotFooter = computed(() => {
      return Object.keys(slots).includes('footer')
    })

    const isClose = computed(() => {
      return Object.keys(slots).includes('closeIcon')
    })

    const closeVisible = async (e: Event) => {
      e?.stopPropagation();
      const { confirmLoading } = curProps.value
      if (confirmLoading || loadingRef.value) {
        return false
      }
      if (unref(vBind).closeFunc && isFunction(unref(vBind).closeFunc)) {
        // @ts-ignore
        const isClose: boolean = await unref(vBind).closeFunc();
        emit('update:visible', isClose)
        visibleRef.value = isClose
        return;
      }
      emit('cancel', false)
      visibleRef.value = false
      emit('update:visible', false)
    }

    /**
     * @description: 设置modal参数
    */
    function setModalProps(props: Partial<ModalProps>): void {
      // Keep the last setModalProps
      propsRef.value = deepMerge(unref(propsRef) || ({} as any), props);
      if (Reflect.has(props, 'visible')) {
        // @ts-ignore
        visibleRef.value = !!props?.visible;
      }
    }

    const handleOk = async () => {
      const { onOk, isConfirm } = curProps.value
      try {
        if (onOk && isFunction(onOk)) {
          const ret = onOk()
          if (ret && ret.then) {
            loadingRef.value = true
            ret.then((res: any) => {
              loadingRef.value = false
              if (isConfirm) {
                visibleRef.value = false
              }
            }).catch((error: any) => {
              console.log('error: ', error);
              loadingRef.value = false
            })
          } else {
            if (isConfirm) {
              visibleRef.value = false
            }
          }
        } else {
          if (isConfirm) {
            visibleRef.value = false
          }
        }
      } catch (error) {
        loadingRef.value = false
        console.log('error: ', error);
      }
    }

    const modalMethods: ModalMethods = {
      setModalProps,
      emitVisible: undefined
    };

    const instance = getCurrentInstance();
    if (instance) {
      emit('register', modalMethods, instance.uid)
    }

    const updateMaxHeight = () => {
      if (window) {
        const headerHeight: number = document.querySelector('.' + uuid + ' .ant-modal-header')?.scrollHeight || 0
        const footerHeight: number = document.querySelector('.' + uuid + ' .ant-modal-footer')?.scrollHeight || 0
        const alertHeight: number = (document.querySelector('.' + uuid + ' .scModal-status')?.scrollHeight || 0) + 4
        const innerHeightView: number = (window && window?.innerHeight) || 0
        maxHeight.value = innerHeightView - headerHeight - footerHeight - alertHeight - 88 + 'px'
      }
    }

    onMounted(() => {
      updateMaxHeight()
      optimizedResize.add(updateMaxHeight)
    })

    watchEffect(() => {
      visibleRef.value = !!(unref(vBind).visible)
    })

    const modalTitleRef = ref()
    watch(
      () => visibleRef.value,
      (v) => {
        emit('visible-change', v)
        emit('update:visible', v)
        instance && modalMethods.emitVisible?.(v, instance.uid);
        if (v) {
          nextTick(() => {
            updateMaxHeight()
          })
          const timer = setTimeout(() => {
            nextTick(() => {
              useModalDraggable(modalTitleRef, visibleRef, vBind, emit)
              clearTimeout(timer)
            })
          }, 300)
        }
      },
      {
        immediate: false,
      },
    );
    // onMounted(() => {
    // })

    expose({
      updateMaxHeight,
      setModalProps,
      scrollbarRef
    })

    return {
      uuid,
      className,
      getBindValue,
      isClose,
      isSlotTitle,
      isSlotFooter,
      footerClassName,
      props: vBind,
      modalPrefixCls,
      visibleRef,
      modalTitleRef,
      curProps,
      loadingRef,
      scrollbarRef,
      scrollbarProps,
      isArray,
      handleOk,
      closeVisible
    }
  },
})
</script>
