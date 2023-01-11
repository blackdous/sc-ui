<template>
  <Tabs
    v-bind="{...props, ...$attrs}"
    :class="[...className, initClass ? 'initClass' : undefined]"
    @change="handleChange"
    >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Tabs>
</template>

<script lang="ts">
export default {
  name: 'ScTabs',
  inheritAttrs: false
}
</script>

<script lang='ts' setup>
import { Tabs } from 'ant-design-vue'
import { computed, ref, useSlots, camelize, nextTick } from 'vue'
import { flattenChildren, isValidElement } from '../../../utils'

export interface TabsProps {
  /**
   * 只有type的值为card的时候，设置styleMode 生效; 可选值 `'line' | 'card' | 'editable-card'`
   */
  type?: string,
  /**
   * styleMode 可选值 `gradient`、`shadow`
   */
  styleMode?: string
}
const props = withDefaults(defineProps<TabsProps>(), {
  styleMode: 'gradient'
})

const slots = useSlots()

function parseTabList(children: any[]): Tab[] {
  return children
    .map(node => {
      if (isValidElement(node)) {
        const props = { ...(node.props || {}) };
        for (const [k, v] of Object.entries(props)) {
          delete props[k];
          props[camelize(k)] = v;
        }
        const slots = node.children || {};
        const key = node.key !== undefined ? node.key : undefined;
        const {
          tab = slots.tab,
          disabled,
          forceRender,
          closable,
          animated,
          active,
          destroyInactiveTabPane,
        } = props;
        return {
          key,
          ...props,
          node,
          closeIcon: slots.closeIcon,
          tab,
          disabled: disabled === '' || disabled,
          forceRender: forceRender === '' || forceRender,
          closable: closable === '' || closable,
          animated: animated === '' || animated,
          active: active === '' || active,
          destroyInactiveTabPane: destroyInactiveTabPane === '' || destroyInactiveTabPane,
        };
      }

      return null;
    })
    .filter(tab => tab);
}

const tabs = parseTabList(flattenChildren(slots.default?.()));

const isTransformLeft = ref(false)

const prevActiveValue = ref(tabs[0].key)

const initClass = ref(true)

const className = computed(() => {
  const classNames = props.styleMode ? [props.styleMode] : []
  if (isTransformLeft.value) {
    classNames.push('tabs__transform-left')
  } else {
    classNames.push('tabs__transform-right')
  }
  return classNames
})

const handleChange = (activeKey: string) => {
  
  const findCurItemIndex = tabs.findIndex((item => item.key === activeKey))
  const findPrevItemIndex = tabs.findIndex((item => item.key === prevActiveValue.value))
  isTransformLeft.value = findCurItemIndex > findPrevItemIndex
  initClass.value = false
  nextTick(() => {
    prevActiveValue.value = activeKey
  })
}
</script>
