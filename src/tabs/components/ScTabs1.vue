<template>
  <Tabs 
    v-bind="{...defaultProps, ...$attrs}"
    :class="className"
    >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Tabs>
</template>

<!-- <script lang="ts">
export default {
  name: 'ScTabs',
  inheritAttrs: false
}
</script> -->

<script lang='ts'>
import { Tabs } from 'ant-design-vue'
import { computed, defineComponent, ref } from 'vue'
import type { Ref } from 'vue'

export interface TabsProps {
  /**
   * 只有type的值为card的时候，设置styleMode 生效; 可选值 `'line' | 'card' | 'editable-card'`
   */
  type?: string,
  /**
   * styleMode 可选值 `gradient`
   */
  styleMode?: string
}


export default defineComponent({
  name: 'ScTabs',
  inheritAttrs: false,
  component: [Tabs],
  setup (props:TabsProps) {
    console.log('props: ', props);
    const newProps = computed(() => {
      return props;
    })
    console.log('newProps: ', newProps.value);
    const className = computed(() => {
      const classNames = props.styleMode ? [props.styleMode] : []
      return classNames
    })
    const defaultProps:Ref<TabsProps> = ref({
      ...newProps,
      type: 'card'
    })
    console.log('defaultProps: ', className);
    return {
      defaultProps,
      className
    }
  }
})

</script>
