<template>
  <Modal
    :class="className"
    v-bind="getBindValue"
    ref="modalRef"
  >
    <template #[item]="data" v-for="item in ['default']">
      <div v-if="props.type" :class="[modalPrefixCls + '-status', modalPrefixCls + '-' + props.type]">
        <span v-if="props.type" :class="[modalPrefixCls + '-status-icon']">
          <InfoCircleFilled v-if="props.type === 'info'" />
          <CheckCircleFilled v-else-if="props.type === 'success'" />
          <ExclamationCircleFilled v-else-if="props.type === 'warning'" />
          <CloseCircleFilled v-else-if="props.type === 'error'" />
        </span>
        <span :class="[modalPrefixCls + '-txt']">
          {{ props.infoDes }}
        </span>
      </div>
      <div :class="[modalPrefixCls + '-content']">
        <slot :name="item" v-bind="data || {}" ></slot>
      </div>
    </template>
    
    <template #title>
      <header ref="modalTitleRef" :class="{'draggable-event': props?.isDraggable}">
        <slot name="title" v-if="isSlotTitle"></slot>
        <span v-else>
          {{ props.title }}
        </span>
        <span v-if="props.showTooltip" :class="[modalPrefixCls + '-tooltip']">
          <Tooltip
            overlayClassName="scTooltip-white"
          >
            <template #title>
              {{ props.tooltipDes }}
            </template>
            <question-circle-outlined :class="[modalPrefixCls + '-tooltip__icon']" />
          </Tooltip>
        </span>
      </header>
    </template>

    <template  #footer>
      <div :class="footerClassName" v-if="!isSlotFooter">
        <slot name="insertFooter"></slot>
        <Button
          :disabled="props.onCancelDisable"
          :class="[modalPrefixCls + '-footer__cancel']"
          @click="closeVisible"
        >
          {{ props.cancelText }}
        </Button>
        <Button
          :disabled="props.onCancelDisable"
          :loading="props.confirmLoading"
          :class="[modalPrefixCls + '-footer__ok']"
          type="primary"
          @click="props.onOk"
        >
          {{props.okText}}
        </Button>
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

<script lang='ts' setup>
import { computed, defineProps, useSlots, useAttrs,defineEmits, ref, watchEffect, watch, unref, getCurrentInstance } from 'vue'
// import type { CSSProperties } from 'vue'
// import { useDraggable } from '@vueuse/core';
import { useModalDraggable } from '../hooks/useModalDraggable'
import { Modal, Button, Tooltip } from 'ant-design-vue'
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
import { deepMerge } from '../../../utils'

const modalPrefixCls = basePrefixCls + 'Modal'
const emits = defineEmits(['update:visible', 'dragChange', 'register', 'visible-change'])
const attrs = useAttrs()
const vBind = defineProps(modalProps())

const visibleRef = ref(false)
const propsRef = ref<Partial<ModalProps> | null>(null);

const props = computed(() => {
  return {
    ...vBind,
    ...propsRef.value
  }
})

const getBindValue = computed((): Recordable => {
  const filterKey =  ['title', 'footer', 'cancelButtonProps', 'okButtonProps','cancelText', 'okText']
  const newProps = Object.entries(vBind).reduce((pre, next) => {
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
    ...attrs,
    ...newProps,
    visible: unref(visibleRef),
  };
  return attr
});

const slots = useSlots()

const className = computed(() => {
  const classNames = [modalPrefixCls]
  if (vBind.type) {
    classNames.push(modalPrefixCls + '-container-' + vBind.type)
  }
  return classNames
})

const footerClassName = computed(() => {
  const footerClassNames = [modalPrefixCls + '-footer']
  switch(vBind.footerAlign) {
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
  if (vBind.closeFunc && isFunction(vBind.closeFunc)) {
    const isClose: boolean = await vBind.closeFunc();
    emits('update:visible', isClose)
    visibleRef.value = isClose
    return;
  }
  visibleRef.value = false
  emits('update:visible', false)
}

/**
 * @description: 设置modal参数
*/
function setModalProps(props: Partial<ModalProps>): void {
  // Keep the last setModalProps
  propsRef.value = deepMerge(unref(propsRef) || ({} as any), props);
  console.log('propsRef: ', propsRef);
  if (Reflect.has(props, 'visible')) {
    visibleRef.value = !!props.visible;
  }
}

const modalMethods: ModalMethods = {
  setModalProps,
  emitVisible: undefined
};

const instance = getCurrentInstance();
if (instance) {
  emits('register', modalMethods, instance.uid);
}

watchEffect(() => {
  visibleRef.value = !!unref(vBind).visible;
});

watch(
  () => unref(visibleRef),
  (v) => {
    emits('visible-change', v);
    emits('update:visible', v);
    instance && modalMethods.emitVisible?.(v, instance.uid);
  },
  {
    immediate: false,
  },
);

const modalTitleRef = ref<HTMLElement>()
useModalDraggable(modalTitleRef, visibleRef, props, emits)

</script>
