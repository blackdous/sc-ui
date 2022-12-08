<template>
  <span @click="handle">
    {{ isEmptyText(newProps.text) ? '--' : newProps.column.statusChange(newProps.text) }}
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isEmptyText } from '../../../../utils/is'

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
  }
})
export default defineComponent({
  name: 'Status',
  inheritAttrs: false,
  props: props(),
  setup (props) {
    const newProps = computed(() => {
      return props
    })

    const handle = async () => {
      if (props?.column?.handle) {
        // @ts-ignore
        await props?.column?.handle(newProps?.column, newProps?.record)
      }
    }

    return {
      newProps,
      isEmptyText,
      handle
    }
  }
})

</script>
