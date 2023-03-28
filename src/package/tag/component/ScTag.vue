<template>
  <Tag
    v-bind="$attrs"
    :disable="compProps.disabled"
    :class="classNames"
    @click="handleChange"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Tag>
</template>

<script lang='ts'>
import { defineComponent, unref, computed, ref, watch } from 'vue';
import { Tag } from 'ant-design-vue';

import { basePrefixCls } from '../../../constant';
import { tagProps } from './type'

export default defineComponent({
  name: 'ScTag',
  inheritAttrs: false,
  components: {
    Tag
  },
  props: tagProps(),
  emits: ['change', 'update:checked'],
  setup (props, { attrs, emit }) {
    const baseClass = basePrefixCls + 'Tag';

    const checked = ref()

    const compProps = computed(() => {
      return props
    })
    
    watch(() => props.checked, (val) => {
      checked.value = val
    }, {
      immediate: true
    })
    
    const classNames = computed(() => {
      const { type, size, status, selected, disabled } = unref(compProps)
      return [
        attrs.class,
        baseClass,
        size ? baseClass + '--' + size : '',
        status ? 'is-' + status : '',
        type ? baseClass + '-' + type : '',
        selected ? unref(checked) ? 'is-selected onSelect' : 'onSelect' : '',
        disabled ? 'is-disabled' : ''
      ]
    })
    const handleChange = () => {
      const { disabled } = unref(compProps)
      if (disabled) {
        return false
      }
      emit('update:checked', !checked.value)
      emit('change', !checked.value)
    }
    return {
      classNames,
      compProps,
      handleChange
    }
  }
})
</script>
