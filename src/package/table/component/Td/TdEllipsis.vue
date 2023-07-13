<template>
  <Tooltip
    :overlayClassName="newProps.column.type.props.className"
    :id="`tb_${String(index)}_${key}_ellipsis`"
  >
    <template #title v-if="newProps.column.type.props.isShow ?? true">
      {{ isVNode(newProps.text) ? '' : newProps.text }}
      <component v-if="isVNode(newProps.text)" :is='newProps.text'></component>
    </template>
    <div class="tdEllipsisCon" @click="handle">
      <p 
        :class="className"
        :style="{width: newProps.column.width - 32 + 'px', '-webkit-line-clamp': newProps.column.type.props.lineheigth}"
      >
        {{ isVNode(newProps.text) ? '' : newProps.text }}
        <component v-if="isVNode(newProps.text)" :is='newProps.text'></component>
      </p>
      <TdCopy v-if="newProps.column.type.props.copy || newProps.copy" :copyTxt="newProps.copyText" :notText="false"/>
    </div>
  </Tooltip>
</template>

<script lang='ts'>
import { computed, defineComponent, isVNode } from 'vue'
import { Tooltip } from 'ant-design-vue'

import TdCopy from './TdCopy.vue'
// import { isEmptyText } from '../../../../utils/is'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  record: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  },
  index: {
    type: [String, Number],
    default: 0
  },
  key: {
    type: [String, Number],
    default: 0
  },
  copy: {
    type: Boolean,
    default: false
  }
})
export default defineComponent({
  name: 'TdEllipsis',
  inheritAttrs: false,
  props: props(),
  components: {
    Tooltip,
    TdCopy
  },
  setup (props) {
    const handle = async () => {
      if (props?.column?.handle) {
        await props?.column?.handle()
      }
    }
    
    const className = computed(() => {
      const names = ['tdEllipsis']
      const { column } = props
      if (column.type.componentName === 'tdEllipsis') {
        names.push('ellipsisText')
      }
      return names
    })

    const newProps = computed(() => {
      return {
        ...props,
        copyText: String(props.text) || props.text
      }
    })

    return {
      newProps,
      className,
      handle,
      isVNode
      // isEmptyText
    }
  }
})


</script>

<style>
.tdEllipsisCon {
  display: flex;
  align-items: flex-end;
}
</style>
