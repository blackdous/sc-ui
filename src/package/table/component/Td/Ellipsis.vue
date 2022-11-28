<template>
  <Tooltip
    overlayClassName="scTooltip-white"
  >
    <template #title>
      {{props.text}}
    </template>
    <p 
      :class="className"
      :style="{width: props.column.width - 32 + 'px', '-webkit-line-clamp': props.column.type.props.lineheigth}"
    >
      {{props.text}}
    </p>
  </Tooltip>
</template>

<script lang='ts' setup>
import { defineProps, computed } from 'vue'
import { Tooltip } from 'ant-design-vue'
const props = defineProps({
  column: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

const className = computed(() => {
  const names = ['tdEllipsis']
  const { column } = props
  if (column.type.componentName === 'ellipsis') {
    names.push('ellipsisText')
  }
  return names
})

</script>
