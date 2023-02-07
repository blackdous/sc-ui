<template>
  <Button
    v-bind="getBindValue"
    :class="getButtonClass"
    @click="onClick"
  >
    <template #icon v-if="isIcon">
      <span class="scButton-icon">
        <slot name="icon"></slot>
      </span>
    </template>
    <template #default="data">
      <slot v-bind="data || {}"></slot>
    </template>
    <!-- <template #icon v-if="isIcon">
      <span class="scButton-icon">
        <slot name="icon"></slot>
      </span>
    </template> -->
  </Button>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { Button } from 'ant-design-vue'

import { basePrefixCls } from '../../../constant'
import { buttonProps } from '../type'
  import { useAttrs } from '../../../hooks/useAttrs'

export default defineComponent({
  name: 'ScButton',
  inheritAttrs: false,
  props: buttonProps,
  components: {
    Button
  },
  setup (props, { slots }) {
    const attrs = useAttrs({ excludeDefaultKeys: false });
    const getButtonClass = computed(() => {
      const { status, disabled, type } = props;
      return [
        basePrefixCls + 'button',
        type || status ? '' : 'is-default', 
        {
          [`ant-btn-${status}`]: !!status,
          [`is-disabled`]: disabled,
          [`ant-btn-${type}`]: !!type,
        },
      ];
    });

    const getBindValue = computed(() => {
      const { type } = props;
      return { ...unref(attrs), ...props, type: ['shadow', 'icon'].includes(type) ? undefined : type }
    });

    const isIcon = computed(() => {
      return Object.keys(slots).includes('icon')
    })
    return {
      getButtonClass,
      getBindValue,
      isIcon
    };
  }
})
</script>