<template>
  <BreadcrumbItem
    v-bind="vBindValue"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item"  v-bind="data || {}"></slot>
    </template>
  </BreadcrumbItem>
</template>
<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { BreadcrumbItem } from 'ant-design-vue'

import { Props } from './type'

export default defineComponent({
  name: 'ScBreadcrumbItem',
  inheritAttrs: false,
  props: Props(),
  components: {
    BreadcrumbItem
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