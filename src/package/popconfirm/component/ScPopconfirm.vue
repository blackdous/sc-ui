<template>
  <Popconfirm
    v-bind="bindValue"
    @visibleChange="handleVisibleChange"
  >
    <template 
      #[item]="data" 
      v-for="item in Object.keys($slots).filter(_item => !['icon', 'title', 'okText'].includes(_item))"
      :key="item"
    >
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #icon>
      <span v-if="isIcon" :class="[baseClass+ '-icon']">
        <slot name="icon"></slot>
      </span>
      <span v-else-if="!isIcon && !isShowIcon" class="empty-icon">
      </span>
      <span v-else 
        :class="[
          baseClass+ '-icon', 
          getProps.type ? baseClass + '-type' : '' ,
          getProps.type ? baseClass + '-' + getProps.type : ''
        ]"
      >
        <i class="sc-ui sc-warning-circle-fill"></i>
      </span>
    </template>
    <template #title>
      <slot name="title" v-if="isTitle"></slot>
      <div v-else :class="[baseClass+ '-title']">
        {{ getProps.title }}
        <p  v-if="getProps.describe" :class="[baseClass+ '-describe']">
          {{ getProps.describe }}
        </p>
      </div>
    </template>
    <template #okText>
      <span @click="handleOkText">
        <slot name="title" v-if="isOkText">
        </slot>
        <span v-else>
          {{ getProps.okText }}
        </span>
      </span>
    </template>
    <template #cancelText>
      <span @click="handleCancelText">
        <slot name="title" v-if="isCancelText"></slot>
        <span v-else>
          {{ getProps.cancelText }}
        </span>
      </span>
    </template>
  </Popconfirm>
</template>

<script lang='ts'>
import { defineComponent, computed, unref, ref, watch } from 'vue'
import { Popconfirm } from 'ant-design-vue'

import { ScButton } from '../../button'
import { PopconfirmProps } from './type'
import { basePrefixCls } from '../../../constant'
import { isFunction } from '../../../utils'

export default defineComponent({
  name: 'ScPopconfirm',
  inheritAttrs: false,
  props: PopconfirmProps(),
  components: {
    Popconfirm,
    ScButton
  },
  setup (props, { attrs, slots, emit }) {

    const visibleRef = ref(false)

    const getProps = computed(() => {
      const filterKey =  ['icon']
      const newProps = Object.entries(props).reduce((pre, next) => {
        if (filterKey.includes(next[0]) && !props.isShowIcon) {
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
      return newProps
    })

    const handleVisibleChange = (bool: boolean) => {
      visibleRef.value = bool
    }

    const baseClass = basePrefixCls + 'Popconfirm'

    const isIcon = computed(() => {
      return Object.keys(slots).includes('icon')
    })
    const isTitle = computed(() => {
      return Object.keys(slots).includes('title')
    })
    const isOkText = computed(() => {
      return Object.keys(slots).includes('okText')
    })
    const isCancelText = computed(() => {
      return Object.keys(slots).includes('cancelText')
    })

    const handleOkText = async (e:Event) => {
      e.stopPropagation();
      if (isFunction(getProps.value?.okBeforeFun)) {
        const isClose = await getProps.value?.okBeforeFun()
        visibleRef.value = isClose
        return
      }
      visibleRef.value = false
    }

    const handleCancelText = async (e:Event) => {
      e.stopPropagation();
      if (isFunction(getProps.value?.cancelBeforeFun)) {
        const isClose = await getProps.value?.cancelBeforeFun()
        visibleRef.value = isClose
        return
      }
      visibleRef.value = false
    }

    watch(() => visibleRef, (val) => {
      emit('update:visible', val)
    })

    const bindValue = computed(() => {
      return {
        ...unref(getProps),
        ...attrs,
        visible: unref(visibleRef),
        title: undefined,
        okText: undefined,
        cancelText: undefined
      }
    })
    return {
      baseClass,
      getProps,
      bindValue,
      isIcon,
      isTitle,
      isOkText,
      isCancelText,
      visibleRef,
      handleVisibleChange,
      handleOkText,
      handleCancelText
    }
  }
})
</script>
