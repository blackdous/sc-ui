<template>
  <div
    v-if="!newProps.notText || isEmptyText(newProps.text)"
    :id="`tb_btn_${index}_copy`"
    class="tbCopy"
    v-bind="$attrs"
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
    <span class="tdCopy-icon" @click="copyText">
      <slot name="icon" v-if="isCopyIcon"></slot>
      <CopyOutlined v-else/>
    </span>
  </div>
  <div v-else>--</div>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { CopyOutlined } from '@ant-design/icons-vue'
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { isEmptyText, isFunction } from '../../../../utils'
import useLocale from '../../../../hooks/useLocale'

const props = () => ({
  column: {
    type: Object,
    default: () => ({})
  },
  handle: {
    type: Function
  },
  successTxt: {
    type: String
  },
  copyTxt: {
    type: [String, Function]
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
    default: '',
    require: true
  },
  notText: {
    type: Boolean,
    default: true
  }
})

export default defineComponent({
  name: 'TdCopy',
  inheritAttrs: false,
  props: props(),
  components: {
    CopyOutlined
  },
  emits: ['click'],
  setup (props, { slots }) {

    const newProps = computed(() => {
      return props
    })
    const isCopyPrefix = computed(() => {
      return Object.keys(slots).includes('text');
    }) 
    const isCopyIcon = computed(() => {
      return Object.keys(slots).includes('icon');
    }) 
    const { copy, copied } = useClipboard({
      legacy: true
    })
    const copyText = async () => {
      const copyText = unref(newProps).copyTxt || unref(newProps).text
      await copy(String(copyText))
      if (unref(newProps)?.successTxt === null) {
        return false
      }
      const { curLocale } = useLocale()
      if (copied && (unref(newProps).column?.type?.props?.successTxt || unref(newProps)?.successTxt) || curLocale?.copy?.successMessage) {
        message.success({
          content: unref(newProps).column?.type?.props?.successTxt || unref(newProps).successTxt || curLocale?.copy?.successMessage,
          duration: 1.5
        })
      }
    }

    const handle = async () => {
      if (unref(newProps)?.column?.handle || unref(newProps)?.handle) {
        if (isFunction(unref(newProps)?.handle)) {
          await unref(newProps)?.handle?.()
        }
        if (isFunction(unref(newProps)?.column?.handle)) {
          await unref(newProps)?.column?.handle()
        }
      }
    }
    
    return {
      isCopyPrefix,
      newProps,
      copyText,
      isEmptyText,
      isCopyIcon,
      // copy,
      handle
    }
  }
})

</script>
