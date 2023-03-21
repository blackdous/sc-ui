<template>
  <a
    :class="classNames"
  >
    <span class="prepend" v-if="currentProps.icon">
      <ScIcon :type="currentProps.icon" v-if="isString(currentProps.icon)"></ScIcon>
      <component v-else :is="currentProps.icon"></component>
    </span>
    <span v-if="$slots.default" :class="[baseClass + '-inner']" ><slot name="default"></slot></span>
    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang='ts'>
import { defineComponent, computed, unref, isVNode } from 'vue';

import { linkProps } from './type';
import { basePrefixCls } from '../../../constant';
import { isString } from '../../../utils/is';
import { ScIcon } from '../../icon';

export default defineComponent({
  name: 'ScLink',
  props: linkProps(),
  components: {
    ScIcon
  },
  emits: ['click'],
  setup (props) {
    const currentProps = computed(() => {
      return props
    })
    const baseClass = basePrefixCls + 'Link'
    const classNames = [
      baseClass,
      unref(currentProps)?.type ? baseClass + '-' + unref(currentProps)?.type : '',
      unref(currentProps).disabled ? 'isDisabled' : '',
      unref(currentProps).underline ? 'isUnderline' : '',
      unref(currentProps).size ? baseClass + '-' + unref(currentProps).size : ''
    ]
    return {
      currentProps,
      baseClass,
      classNames,
      isString,
      isVNode
    }
  }
})
</script>
