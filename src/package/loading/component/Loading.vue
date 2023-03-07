<template>
  <section
    class="full-loading"
    :class="{ absolute, [theme]: !!theme }"
    :style="[background ? `background-color: ${background}` : '']"
    v-show="loading"
  >
    <Spin
      v-bind="$attrs"
      :tip="tip"
      :size="size"
      :spinning="loading"
      :indicator="newIndicator"
    />
  </section>
</template>
<script lang="ts">
import { h, PropType, VNode } from 'vue'
import { defineComponent, computed } from 'vue'
import { Spin } from 'ant-design-vue'
import { SizeEnum } from '../../../enums/sizeEnum'
import loadGif from '../../../assets/gif/loading.gif'

export default defineComponent({
  name: 'ScLoading',
  components: { Spin },
  props: {
    isFullPage: {
      type: Boolean,
      default () {
        return true
      }
    },
    tip: {
      type: String as PropType<string>,
      default: ''
    },
    size: {
      type: String as PropType<SizeEnum>,
      default: SizeEnum.DEFAULT,
      validator: (v: SizeEnum): boolean => {
        return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v)
      }
    },
    absolute: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    background: {
      type: String as PropType<string>
    },
    theme: {
      type: String as PropType<'dark' | 'light'>,
      default: 'light'
    },
    indicator: {
      type: Object as PropType<VNode>,
      default: h('img', { src: loadGif, class: 'loading-gif'})
    }
  },
  setup (props) {
    const newIndicator = computed(() => {
      let nerIndiactorH = props.indicator
      if (props.isFullPage === false) {
        nerIndiactorH = h('span', { class: 'loading-transition'})
      }
      if (props.isFullPage === true) {
        nerIndiactorH = h('img', { src: loadGif, class: 'loading-gif' })
      }
      if (props.indicator === null) {
        return props.indicator
      }
      return nerIndiactorH
    })
    return {
      newIndicator
    }
  }
})
</script>
