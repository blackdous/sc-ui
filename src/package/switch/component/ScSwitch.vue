<template>
  <Switch
    :class="[baseClass]"
    v-bind="bindValue"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template> 
  </Switch>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { Switch } from 'ant-design-vue'
import { switchProps } from './type'
import { basePrefixCls } from '../../../constant'

export default defineComponent({
  name: 'ScSwitch',
  inheritAttrs: false,
  components: {
    Switch
  },
  props: switchProps,
  setup (props, { attrs, emit }) {
    let baseClass = computed(() => {
      return basePrefixCls + 'Switch ' + (props.size === 'large' ? 'ant-switch-large' : '')
    })
    
    const bindValue = computed(() => {
      return {
        ...attrs,
        ...props,
        size: props.size === 'large' ? 'default' : props.size
      }
    })

    return {
      baseClass,
      // checkedValue,
      bindValue
    }
  }
})
</script>
