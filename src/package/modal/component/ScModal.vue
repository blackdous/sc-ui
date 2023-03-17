<template>
  <Modal
    :class="className"
    v-bind="getBindValue"
    v-model:visible="visibleRef"
    ref="modalRef"
    >
    <!-- :style="{'--model-width': getBindValue.width}" -->
    <template #[item]="data" v-for="item in ['default']">
      <div v-if="curProps.type" :class="[modalPrefixCls + '-status', modalPrefixCls + '-' + curProps.type]">
        <span v-if="props.type" :class="[modalPrefixCls + '-status-icon']">
          <InfoCircleFilled v-if="curProps.type === 'info'" />
          <CheckCircleFilled v-else-if="curProps.type === 'success'" />
          <ExclamationCircleFilled v-else-if="curProps.type === 'warning'" />
          <ExclamationCircleFilled v-else-if="curProps.type === 'error'" />
        </span>
        <p :class="[modalPrefixCls + '-txt']">
          {{ curProps.infoDes }}
        </p>
      </div>
      <div :class="[modalPrefixCls + '-content']">
        <slot :name="item" v-bind="data || {}" ></slot>
      </div>
    </template>
    
    <template #title>
      <header ref="modalTitleRef" :class="{'draggable-event': curProps?.isDraggable}">
        <slot name="title" v-if="isSlotTitle"></slot>
        <span v-else>
          {{ curProps.title }}
        </span>
        <span v-if="curProps.showTooltip" :class="[modalPrefixCls + '-tooltip']">
          <Tooltip
            overlayClassName="scTooltip-white"
          >
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
        <ScButton
          :class="[modalPrefixCls + '-footer__cancel']"
          status="info"
          v-bind="{...curProps, type: undefined, disabled: curProps?.cancelButtonProps?.disabled || curProps?.onCancelDisable}"
          title=""
          @click="closeVisible"
        >
          {{ curProps.cancelText }}
        </ScButton>
        <ScButton
          :loading="curProps.confirmLoading"
          :class="[modalPrefixCls + '-footer__ok']"
          v-bind="{...curProps, type: undefined, disabled: curProps?.okButtonProps?.disabled || curProps?.onOkDisable}"
          type="primary"
          title=""
          @click="curProps.onOk"
        >
          {{curProps.okText}}
        </ScButton>
      </div>
      <slot v-else name="footer"> </slot>
    </template>

    <template #closeIcon>
      <i 
        class="sc-ui sc-guanbi" v-if="!isClose"
        @click="closeVisible"
      >
      </i>
      <span 
        v-else
        @click="closeVisible"
      >
        <slot name="closeIcon"></slot>
      </span>
    </template>
  </Modal>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, watchEffect, watch, unref, nextTick, getCurrentInstance } from 'vue'
// import type { CSSProperties } from 'vue'
// import { useDraggable } from '@vueuse/core';
import { useModalDraggable } from '../hooks/useModalDraggable'
import { Modal, Tooltip } from 'ant-design-vue'
import { ScButton } from '../../button';
import {
  QuestionCircleOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons-vue';

import { modalProps, ModalProps, ModalMethods } from './type'
import { basePrefixCls } from '../../../constant'
import { isFunction } from '../../../utils/is';
import { deepMerge, pxToRem, isNumber } from '../../../utils'
import useLocale from '../../../hooks/useLocale';

export default defineComponent({
  name: 'ScModal',
  inheritAttrs: false,
  props: modalProps(),
  components: {
    Modal,
    ScButton,
    Tooltip,
    QuestionCircleOutlined,
    InfoCircleFilled,
    CheckCircleFilled,
    ExclamationCircleFilled,
    CloseCircleFilled
  },
  setup (props, { slots, attrs, emit}) {
    const modalPrefixCls = basePrefixCls + 'Modal'
    // const emit = defineemit(['update:visible', 'dragChange', 'register', 'visible-change', 'cancel'])
    const vBind = computed(() => {
      return props
    })


    const visibleRef = ref(false)
    const propsRef = ref();

    const curProps = computed(() => {
      const { okText, cancelText } = unref(vBind)
      const { antLocale } = useLocale()
      return {
        ...unref(vBind),
        ...propsRef.value,
        okText: okText || antLocale?.Modal?.okText,
        cancelText: cancelText || antLocale?.Modal.cancelText

      }
    })
    const getBindValue = computed((): Recordable => {
      const filterKey =  ['title', 'footer', 'cancelButtonProps', 'okButtonProps','cancelText', 'okText']
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
      const attr = {
        ...newProps,
        ...attrs,
        visible: unref(visibleRef)
      };
      
      if (unref(curProps).footer === null) {
        attr.footer = null
      }
      if (newProps.width) {
        if (isNumber(newProps.width)) {
          attr.width = pxToRem(newProps.width)
        } else if (String(newProps.width).includes('%')){
          attr.width = newProps.width
        } else {
          attr.width = pxToRem(parseInt(newProps.width))
        }
      }
      return attr
    });

    const className = computed(() => {
      const classNames = [modalPrefixCls]
      if (unref(vBind).type) {
        classNames.push(modalPrefixCls + '-container-' + unref(vBind).type)
        classNames.push(modalPrefixCls + '-container-status')
      }
      return classNames
    })

    const footerClassName = computed(() => {
      const footerClassNames = [modalPrefixCls + '-footer']
      switch(unref(vBind).footerAlign) {
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
      if (unref(vBind).closeFunc && isFunction(unref(vBind).closeFunc)) {
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
      // console.log('propsRef: ', propsRef);
      if (Reflect.has(props, 'visible')) {
        visibleRef.value = !!props?.visible;
      }
    }

    const modalMethods: ModalMethods = {
      setModalProps,
      emitVisible: undefined
    };

    const instance = getCurrentInstance();
    if (instance) {
      emit('register', modalMethods, instance.uid);
    }

    watchEffect(() => {
      visibleRef.value = !!(unref(vBind).visible);
    });

    const modalTitleRef = ref()
    watch(
      () => unref(visibleRef),
      (v) => {
        emit('visible-change', v);
        emit('update:visible', v);
        instance && modalMethods.emitVisible?.(v, instance.uid);
        if (v) {
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
    
    return {
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
      closeVisible
    }
  },
})
</script>
