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
    
    <template v-if="isSlotTitle" #title>
      <header ref="modalTitleRef" :class="{'draggable-event': props?.isDraggable}">
        <slot name="title"></slot>
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
    <template v-if="!isSlotTitle" #title>
      <header ref="modalTitleRef" :class="{'draggable-event': props?.isDraggable}">
        {{ props.title }}
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

    <template v-if="isSlotFooter" #footer>
      <slot name="footer"> </slot>
    </template>
    <template v-if="!isSlotFooter" #footer>
      <div :class="footerClassName">
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
import { useDraggable } from '@vueuse/core';
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
console.log('vBind: ', vBind);

const visibleRef = ref(false)
const propsRef = ref<Partial<ModalProps> | null>(null);

const props = computed(() => {
  return {
    ...vBind,
    propsRef
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
    classNames.push(modalPrefixCls + '-' + vBind.type)
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

const modalTitleRef = ref<HTMLElement>()
const modalRef = ref<HTMLElement>()
const { x, y, isDragging, style, position } = useDraggable(modalTitleRef, vBind.DragOptions)
const startX = ref<number>(0)
const startY = ref<number>(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 });
watch([x, y], () => {
  if (!startedDrag.value) {
    startX.value = x.value;
    startY.value = y.value;
    const bodyRect = document.body.getBoundingClientRect();
    const titleRect = modalTitleRef?.value?.getBoundingClientRect();
    // @ts-ignore
    dragRect.value.right = bodyRect.width - titleRect?.width;
    // @ts-ignore
    dragRect.value.bottom = bodyRect.height - titleRect?.height;
    preTransformX.value = transformX.value;
    preTransformY.value = transformY.value;
  }
  startedDrag.value = true;
});
watch(isDragging, () => {
  if (!isDragging) {
    startedDrag.value = false;
  }
});

watchEffect(() => {
  visibleRef.value = !!unref(vBind).visible;
});

watchEffect(() => {
  if (startedDrag.value) {
    transformX.value =
      preTransformX.value +
      Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
      startX.value;
    transformY.value =
      preTransformY.value +
      Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
      startY.value;
    if (modalTitleRef.value && vBind.isDraggable && vBind.visible) {
      const modalTitleDom = unref(modalTitleRef)?.parentNode?.parentNode?.parentNode
      // @ts-ignore
      modalTitleDom.style.transform = `translate(${transformX.value}px, ${transformY.value}px)`
      emits('dragChange', { x, y, isDragging, style, position })
    }
  }
});

watch(
  () => unref(visibleRef),
  (v) => {
    console.log('v: ', v);
    emits('visible-change', v);
    emits('update:visible', v);
    instance && modalMethods.emitVisible?.(v, instance.uid);
  },
  {
    immediate: false,
  },
);


</script>
