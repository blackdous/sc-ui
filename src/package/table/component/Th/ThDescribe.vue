<template>
  <span
    :class="[preFixClass]"
  >
    <Tooltip
      overlayClassName="scTooltip-white"
    >
      <template #title>
        {{propsRef.describe}}
      </template>
      <span
        :class="[preFixClass+'-text']"
      >
        {{propsRef.text}}
      </span>
      <!-- <i @click.stop class="sc-ui sc-question-circle-fill"></i> -->
    </Tooltip>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
    return {
      propsRef,
      preFixClass
    }
  }

})
</script>