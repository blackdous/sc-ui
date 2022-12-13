<template>
  <div
    v-if="isEmptyText(newProps.text)"
    :id="`tb_btn_${index}_copy`"
    class="tbCopy"
  >
    <span
      class="tbCopy-prefix"
      @click="handle"
    >
      <slot name="text" v-if="isCopyPrefix">
      </slot>
      <span v-else>
        {{ newProps.text }}
      </span>
    </span>
    <CopyOutlined @click="copyText" />
  </div>
  <div v-else>--</div>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick, unref } from 'vue'
import { CopyOutlined } from '@ant-design/icons-vue'
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { isEmptyText } from '../../../../utils/is'

const props = () => ({
  column: {
    type: Object,
    default: () => ({})
  },
  record: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  text: {
    type: [String, Number],
    default: ''
  }
})

export default defineComponent({
  name: 'TdCopy',
  inheritAttrs: false,
  props: props(),
  components: {
    CopyOutlined
  },
  setup (props, { slots }) {
    const newProps = computed(() => {
      return props
    })
    const isCopyPrefix = computed(() => {
      return Object.keys(slots).includes('text');
    }) 
    const { copy, copied } = useClipboard({
      legacy: true
    })
    const copyText = () => {
      nextTick(() => {
        copy(String(unref(newProps).text))
        if (copied) {
          message.success({
            content: props.column?.type.props.successTxt
          })
        }
      })
    }

    const handle = async () => {
      if (props?.column?.handle) {
        await props?.column?.handle()
      }
    }
    
    return {
      isCopyPrefix,
      newProps,
      copyText,
      isEmptyText,
      // copy,
      handle
    }
  }
})

</script>
