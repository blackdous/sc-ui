<!--
 * @Description:
 * @Author: Format-qi 283810417@qq.com
 * @Date: 2022-05-10 17:21:00
 * @LastEditors: 庞昭昭
 * @LastEditTime: 2022-11-04 14:44:55
-->
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
      :indicator="indicator"
    />
  </section>
</template>
<script lang="ts">
import { h, PropType, VNode } from 'vue'
import { defineComponent } from 'vue'
import { Spin } from 'ant-design-vue'
import { SizeEnum } from '@/enums/sizeEnum'

export default defineComponent({
  name: 'BzLoading',
  components: { Spin },
  props: {
    tip: {
      type: String as PropType<string>,
      default: ''
    },
    size: {
      type: String as PropType<SizeEnum>,
      default: SizeEnum.LARGE,
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
      default: h('img', { src: require('@/assets/gif/loading.gif'), style: { width: '92px', height: '136px' } })
    }
  }
})
</script>
<style lang="less">
.full-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(240 242 245 / 40%);

  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 300;
  }
}
</style>
