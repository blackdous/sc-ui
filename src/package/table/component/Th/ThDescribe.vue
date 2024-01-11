<template>
  <span
    :class="[preFixClass]"
  >
    <Tooltip
      :overlayClassName="propsRef.overlayClassName"
      :overlayStyle="propsRef.overlayStyle"
    >
      <template #title>
        {{isVNode(propsRef.describe) ? '' : propsRef.describe}}
        <component v-if="isVNode(propsRef.describe)" :is='propsRef.describe'></component>
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
import { defineComponent, computed, isVNode } from 'vue'
import { Tooltip } from 'ant-design-vue'

const preFixClass = 'describeTh'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  describe: {
    type: [String, Number, Object],
    default: ''
  },
  text: {
    type: [String, Number],
    default: ''
  },
  overlayClassName: String,
  overlayStyle: Object
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
      preFixClass,
      isVNode
    }
  }

})
</script>