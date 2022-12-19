<template>
  <div :class="[baseClass, uuid, isPrefixIcon ? 'is-prefix' : '']">
    <Dropdown
      v-bind="bindValue"
    >
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template> 
    </Dropdown>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { Dropdown } from 'ant-design-vue'
import { basePrefixCls } from '../../../constant'
import { buildUUID } from '../../../utils/uuid'

export default defineComponent({
  components: {
    Dropdown
  },
  setup (props, { slots, attrs }) {
    const baseClass = basePrefixCls + 'Dropdown'
    const uuid = 'sc' + buildUUID()

    const bindValue = computed(() => {
      console.log('...props: ', props);
      return {
        ...props,
        ...attrs
      }
    })

    const isPrefixIcon = computed(() => {
      return Object.keys(slots).includes('prefixIcon')
    })

    return {
      uuid,
      baseClass,
      bindValue,
      isPrefixIcon
    }
  }
})
</script>
