<template>
  <Modal
    :class="className"
    v-bind="props"
    :visible="vBind.visible"
    ref="modalRef"
  >
    <template #[item]="data" v-for="item in ['default']">
      <div v-if="vBind.type" :class="[modalPrefixCls + '-status', modalPrefixCls + '-' + vBind.type]">
        <span v-if="type" :class="[modalPrefixCls + '-status-icon']">
          <InfoCircleFilled v-if="vBind.type === 'info'" />
          <CheckCircleFilled v-else-if="vBind.type === 'success'" />
          <ExclamationCircleFilled v-else-if="vBind.type === 'warning'" />
          <CloseCircleFilled v-else-if="vBind.type === 'error'" />
        </span>
        <span :class="[modalPrefixCls + '-txt']">
          {{ vBind.infoDes }}
        </span>
      </div>
      <slot :name="item" v-bind="data || {}" ></slot>
    </template>
    <template v-if="isSlotTitle" #title>
      <header ref="modalTitleRef" :class="{'draggable-event': vBind?.isDraggable}">
        <slot name="title"></slot>
        <span v-if="vBind.showTooltip" :class="[modalPrefixCls + '-tooltip']">
          <Tooltip
            overlayClassName="scTooltip-white"
          >
            <template #title>
              {{ vBind.tooltipDes }}
            </template>
            <question-circle-outlined :class="[modalPrefixCls + '-tooltip__icon']" />
          </Tooltip>
        </span>
      </header>
    </template>
    <template v-if="!isSlotTitle" #title>
      <header ref="modalTitleRef" :class="{'draggable-event': vBind?.isDraggable}">
        {{ vBind.title }}
        <span v-if="vBind.showTooltip" :class="[modalPrefixCls + '-tooltip']">
          <Tooltip
            overlayClassName="scTooltip-white"
          >
            <template #title>
              {{ vBind.tooltipDes }}
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
          :disabled="vBind.onCancelDisable"
          :class="[modalPrefixCls + '-footer__cancel']"
          @click="closeVisable"
        >
          {{ vBind.cancelText }}
        </Button>
        <Button
          :disabled="vBind.onCancelDisable"
          :loading="vBind.confirmLoading"
          :class="[modalPrefixCls + '-footer__ok']"
          type="primary"
          @click="vBind.onOk"
        >
          {{vBind.okText}}
        </Button>
      </div>
    </template>
  </Modal>
</template>

<script lang='ts' setup>
import { computed, defineProps, useSlots, defineEmits, ref, watchEffect, watch, unref } from 'vue'
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

import { modalProps } from './type'
import { prefixCls } from '../../../constans';

const modalPrefixCls = prefixCls + 'Modal'
const emits = defineEmits(['update:visible', 'dragChange'])
const vBind = defineProps(modalProps())


const props = computed(() => {
  const filterKey =  ['title', 'footer', 'cancelButtonProps', 'okButtonProps','cancelText', 'okText']
  return Object.entries(vBind).reduce((pre, next) => {
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
})

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

const closeVisable = () => {
  emits('update:visible', false)
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


</script>
