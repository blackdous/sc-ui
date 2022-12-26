<template>
  <Breadcrumb
    v-bind="vBindValue"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item"  v-bind="data || {}"></slot>
    </template>
  </Breadcrumb>
</template>
<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { Breadcrumb } from 'ant-design-vue'

import { Props } from './type'

export default defineComponent({
  name: 'ScBreadcrumb',
  inheritAttrs: false,
  props: Props(),
  components: {
    Breadcrumb
  },
  setup (props, { attrs }) {
    const newProps = computed(() => {
      return props
    })

    const vBindValue = computed(() => {
      return {
        ...unref(newProps),
        ...attrs
      }
    })
    return {
      newProps,
      vBindValue
    }
  }
})
</script>