<template>
  <span
    :class="[preFixClass]"
  >
    <span
      :class="[preFixClass+'-text']"
    >
      {{propsRef.text}}
    </span>
    <span
      :class="[preFixClass+'-unit']"
    >
      {{propsRef.unit}}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Tooltip } from 'ant-design-vue'

const preFixClass = 'unitTh'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  unit: {
    type: [String, Number],
    default: ''
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

export default defineComponent({
  name: 'Unit',
  inheritAttrs: false,
  components: {
    Tooltip
  },
  props: props(),
  setup (props) {
    const propsRef = computed(() => {
      return props
    })
    console.log('propsRef: ', propsRef);
    return {
      propsRef,
      preFixClass
    }
  }

})
</script>

<style lang="less">
</style>