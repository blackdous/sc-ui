<template>
  <div
    :class="prefixCls"
    :style="style"
  >
    <div :class="['scStep-head', currentStatus ? 'is-' + currentStatus + ' is-status' : '']">
      <div :class="['scStep-icon', props.icon || $slots.icon ? 'is-icon' : 'is-text' ]">
        <!-- @slot 自定义图标 -->
        <slot name="icon">
          <!-- <Icon v-if="props.icon" :class="['scStep__icon-inner']" :icon="props.icon" /> -->
          <i v-if="props.icon"
            :class="['scStep__icon-inner', props.icon]" >
          </i>
          <i v-else-if="currentStatus === 'success'"
            :class="['scStep__icon-inner', 'success', 'sc-ui', 'sc-success']" >
          </i>
          <i v-else-if="currentStatus === 'error'"
            :class="['scStep__icon-inner', 'success', 'sc-ui', 'sc-error-fill']" >
          </i>
          <div v-else-if="!isSimple" :class="['scStep__icon-inner']">
            {{ index + 1 }}
          </div>

          <i v-else-if="isSimple"
            :class="['scStep__icon-inner', 'error', 'sc-ui', 'sc-success']" >
          </i>
          <!-- <Icon
          v-else-if="isSimple"
          :class="['scStep__icon-inner', 'error']"
          icon="ep:success-filled"
          /> -->
          <!-- <div v-else-if="isSimple">
          </div> -->
        </slot>
      </div>
      <div :class="['scStep-arrow']" v-if="!isSimple && isVertical">
        <i v-if="isSimple" class="sc-ui sc-you"></i>
        <div v-else-if="!isSimple && isVertical" class="scStep-line">
          <!-- <i class="scStep-line-inner" :style="lineStyle"></i> -->
        </div>
        <!-- <i v-else class="scStep-line-inner" :style="lineStyle"></i> -->
      </div>
    </div>
    <div :class="['scStep-main', currentStatus ? 'is-' + currentStatus + ' is-status' : '']">
      <div :class="['scStep-info']">
        <div :class="['scStep-title', currentStatus ? 'is-' + currentStatus  + ' is-status' : '']">
          <!-- @slot 自定义标题 -->
          <slot name="title">{{ title }}</slot>
        </div>
        <div :class="['scStep-description', currentStatus ? 'is-' + currentStatus  + ' is-status' : '']">
          <!-- @slot 自定义描述文案 -->
          <slot name="description">{{ description }}</slot>
        </div>
      </div>
      <div :class="['scStep-arrow']">
        <i v-if="isSimple" class="sc-ui sc-you"></i>
        <div v-else-if="!isSimple && !isVertical " class="scStep-line">
          <!-- <i class="scStep-line-inner" :style="lineStyle"></i> -->
        </div>
        <!-- <i v-else class="scStep-line-inner" :style="lineStyle"></i> -->
      </div>
      <!-- <div ></div> -->
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ScStep'
}
</script>
<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch
} from 'vue'
import type { Ref, CSSProperties } from 'vue'
// import { Icon } from '@iconify/vue'

// import { StepPropType } from './type'
import { iconPropType } from "/@/utils"

export interface IStepsProps {
  space: number | string
  active: number
  direction: string
  alignCenter: boolean
  simple: boolean
  finishStatus: string
  processStatus: string
}

export interface StepItemState {
  uid: number | undefined
  currentStatus: string
  setIndex: (val: number) => void
  calcProgress: (status: string) => void
}

export interface IStepsInject {
  props: IStepsProps
  steps: Ref<StepItemState[]>
}

export interface StepProp {
  /**
   * 标题
   */
  title?: string,
  /**
   * 描述文案
   */
  description?: string,
  /**
   * 设置当前步骤的状态， 不设置则根据 steps 确定状态
   * 'wait' | 'process' | 'finish' | 'error' | 'success' | ''
   */
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success' | '',
  /**
   * Step 组件的自定义图标。 也支持 slot 方式写入
   */
  icon?: typeof iconPropType
}

const props = withDefaults(defineProps<StepProp>(), {
  title: '',
  description: '',
  status: ''
})

const index = ref(-1)
const lineStyle = ref({})
const internalStatus = ref('')
const parent = inject('ScSteps') as IStepsInject
const currentInstance = getCurrentInstance()

onMounted(() => {
  watch(
    [
      () => parent.props.active,
      () => parent.props.processStatus,
      () => parent.props.finishStatus,
    ],
    ([active]) => {
      updateStatus(active)
    },
    { immediate: true }
  )
})

onBeforeUnmount(() => {
  parent.steps.value = parent.steps.value.filter(
    (instance) => instance.uid !== currentInstance?.uid
  )
})

const currentStatus = computed(() => {
  return props.status || internalStatus.value
})

const prevStatus = computed(() => {
  const prevStep = parent.steps.value[index.value - 1]
  return prevStep ? prevStep.currentStatus : 'wait'
})

const isCenter = computed(() => {
  return parent.props.alignCenter
})

const isVertical = computed(() => {
  return parent.props.direction === 'vertical'
})

const isSimple = computed(() => {
  return parent.props.simple
})

const stepsCount = computed(() => {
  return parent.steps.value.length
})

const isLast = computed(() => {
  return parent.steps.value[stepsCount.value - 1]?.uid === currentInstance?.uid
})

const space = computed(() => {
  return isSimple.value ? '' : parent.props.space
})

const prefixCls = computed(() => {
  const classNames:string[] = ['scStep']
  // console.log('parent.props.direction: ', parent.props.direction);
  if (parent.props.simple) {
    classNames.push('simple')
  } else {
    classNames.push('is-' + parent.props.direction)
  }
  if (isLast && !space && !isCenter) {
    classNames.push('is-flex')
  }
  if (isCenter.value && !isVertical.value && !isSimple.value) {
    classNames.push('is-center')
  }
  return classNames
})

const style = computed(() => {
  const style: CSSProperties = {
    flexBasis:
      typeof space.value === 'number'
        ? `${space.value}px`
        : space.value
        ? space.value
        : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`,
  }
  if (isVertical.value) return style
  if (isLast.value) {
    style.maxWidth = `${100 / stepsCount.value}%`
  }
  return style
})

const setIndex = (val: number) => {
  index.value = val
}

const calcProgress = (status: string) => {
  let step = 100
  const style: CSSProperties = {}
  style.transitionDelay = `${150 * index.value}ms`
  if (status === parent.props.processStatus) {
    step = 0
  } else if (status === 'wait') {
    step = 0
    style.transitionDelay = `${-150 * index.value}ms`
  }
  style.borderWidth = step && !isSimple.value ? '1px' : 0
  style[parent.props.direction === 'vertical' ? 'height' : 'width'] = `${step}%`
  lineStyle.value = ''
}

const updateStatus = (activeIndex: number) => {
  if (activeIndex > index.value) {
    internalStatus.value = parent.props.finishStatus
  } else if (activeIndex === index.value && prevStatus.value !== 'error') {
    internalStatus.value = parent.props.processStatus
  } else {
    internalStatus.value = 'wait'
  }
  const prevChild = parent.steps.value[index.value - 1]
  if (prevChild) prevChild.calcProgress(internalStatus.value)
}

const stepItemState = reactive({
  uid: computed(() => currentInstance?.uid),
  currentStatus,
  setIndex,
  calcProgress,
})

parent.steps.value = [...parent.steps.value, stepItemState]
</script>