<template>
  <span
    :class="[preFixClass]"
  >
    <span
      :class="[preFixClass+'-text']"
    >
      {{propsRef.text}}
    </span>
    <Tooltip
      overlayClassName="scTooltip-white"
    >
      <template #title>
        {{propsRef.describe}}
      </template>
      <i class="iconfont icon-question-circle-fill"></i>
    </Tooltip>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { Tooltip } from 'ant-design-vue'

const preFixClass = 'describeTh'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  describe: {
    type: [String, Number],
    default: ''
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

export default defineComponent({
  name: 'Describe',
  inheritAttrs: false,
  components: {
    Tooltip
  },
  props: props(),
  setup (props) {
    const propsRef = computed(() => {
      return props
    })
    console.log('propsRef: ', unref(propsRef));
    return {
      propsRef,
      preFixClass
    }
  }

})
</script>

<style lang="less">
</style>