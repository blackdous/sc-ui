<template>
  <span>
    <a
      v-if="text"
      :id="id"
      :class="['td_href']"
      @click="handle"
    >
      {{ text }}
      <i
        v-if="newProps.column.icon"
        :class="['iconfont', newProps.column.icon]"
      ></i>
    </a>
    <span
      v-else
      type="text"
      >--</span
    >
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from 'vue'
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
  name: 'Handle',
  inheritAttrs: false,
  props: props(),
  setup (props, { emit }) {
    const isHandle = ref(false)
    const newProps = computed(() => {
      return props
    })
    // console.log('newProps: ', unref(newProps));
    const id = computed(() => {
      return `tb_btn_${unref(newProps).index}_${unref(newProps).column?.componentName}_${unref(newProps).record.key}`
    })
    const handle = async () => {
      const newId = unref(id)
      const dom = document.querySelector(`#${newId}`) as HTMLElement
      dom.className = dom.className + ' linkBtn'
      if (unref(newProps)?.column?.handle) {
        // @ts-ignore
        await props?.column?.handle(unref(newProps)?.column, unref(newProps)?.record)
        isHandle.value = true
      }
      emit('handle', { column: unref(newProps).column, record: unref(newProps)?.record})
    }

    return {
      id,
      newProps,
      handle
    }
  }
})

</script>
