<template>
  <Modal
    :class="className"
    v-bind="props"
    :visible="vBind.visible"
  >
    <template #[item]="data" v-for="item in ['default']">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template v-if="isSlotTitle" #title>
      <span :class="[prefixCls + '-status-icon']">
        <!-- <component :is="StatusIconName"></component> -->
        <InfoCircleFilled v-if="vBind.type === 'info'" />
        <CheckCircleFilled v-else-if="vBind.type === 'success'" />
        <ExclamationCircleFilled v-else-if="vBind.type === 'warning'" />
        <CloseCircleFilled v-else-if="vBind.type === 'error'" />
      </span>
      <slot name="title"></slot>
      <span v-if="vBind.showTooltip" :class="[prefixCls + '-tooltip']">
        <Tooltip>
          <template #title>
            {{ vBind.tooltipDes }}
          </template>
          <question-circle-outlined :class="[prefixCls + '-tooltip__icon']" />
        </Tooltip>
      </span>
    </template>
    <template v-if="!isSlotTitle" #title>
      <span :class="[prefixCls + '-status-icon']">
        <InfoCircleFilled v-if="vBind.type === 'info'" />
        <CheckCircleFilled v-else-if="vBind.type === 'success'" />
        <ExclamationCircleFilled v-else-if="vBind.type === 'warning'" />
        <CloseCircleFilled v-else-if="vBind.type === 'error'" />
      </span>
      {{ vBind.title }}
      <span v-if="vBind.showTooltip" :class="[prefixCls + '-tooltip']">
        <Tooltip>
          <template #title>
            {{ vBind.tooltipDes }}
          </template>
          <question-circle-outlined :class="[prefixCls + '-tooltip__icon']" />
        </Tooltip>
      </span>
    </template>

    <template v-if="isSlotFooter" #footer>
      <slot name="footer"> </slot>
    </template>
    <template v-if="!isSlotFooter" #footer>
      <div :class="[prefixCls + '-footer']">
        <Button
          :disabled="vBind.onCancelDisable"
          :class="[prefixCls + '-footer__cancel']"
          @click="closeVisable"
        >
          {{ vBind.cancelText }}
        </Button>
        <Button
          :disabled="vBind.onCancelDisable"
          :loading="vBind.confirmLoading"
          :class="[prefixCls + '-footer__ok']"
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
import { computed, defineProps, useSlots, defineEmits } from 'vue'
import { Modal, Button, Tooltip } from 'ant-design-vue'
import {
  QuestionCircleOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons-vue';

import { modalProps } from './type'

const prefixCls = 'scModal'
const emits = defineEmits(['update:visible'])
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
console.log('props: ', props);

const slots = useSlots()
console.log('slots: ', slots);
const className = computed(() => {
  const classNames = ['scModal']
  if (vBind.type) {
    classNames.push('scModal-' + vBind.type)
    classNames.push('scModal-status')
  }
  return classNames
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


</script>
