<template>
  <span>
    <a
      v-if="isEmptyText(newProps.text)"
      :id="id"
      :class="['td_href', linkClass]"
      @click="handle"
    >
      {{ newProps.text }}
      <i
        v-if="newProps.column.icon"
        :class="['sc-ui', newProps.column.icon]"
      ></i>
    </a>
    <span
      v-else
      type="text"
      >-</span
    >
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from 'vue'
import { isEmptyText } from '../../../../utils/is'

const props = () => ({
  column: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
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
  name: 'TdHandle',
  inheritAttrs: false,
  props: props(),
  setup (props, { emit }) {
    const isHandle = ref(false)
    const newProps = computed(() => {
      return props
    })
    const id = computed(() => {
      return `tb_btn_${unref(newProps).index}_${unref(newProps).column?.type?.componentName}_${unref(newProps).record.key}`
    })

    const linkClass = computed(() => {
      let className = ''
      if (unref(newProps).column.handle) {
        className = 'linkBtn'
      }
      return className
    })
    const handle = async () => {
      // const newId = unref(id)
      // const dom = document.querySelector(`#${newId}`) as HTMLElement
      // dom.className = dom.className + ' linkBtn'
      if (unref(newProps)?.column?.handle) {
        // @ts-ignore
        await props?.column?.handle({ column: unref(newProps).column, record: unref(newProps)?.record})
        isHandle.value = true
      }
      emit('handle', { column: unref(newProps).column, record: unref(newProps)?.record})
    }

    return {
      id,
      linkClass,
      newProps,
      isEmptyText,
      handle
    }
  }
})

</script>
