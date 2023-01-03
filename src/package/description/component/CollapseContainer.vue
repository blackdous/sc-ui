<!--
 * @Description: 
 * @Author: Format-qi 283810417@qq.com
 * @Date: 2022-06-25 15:47:35
 * @LastEditors: Format-qi 283810417@qq.com
 * @LastEditTime: 2022-06-25 16:15:15
-->
<template>
  <div :class="prefixCls">
    <!-- <div class="" v-bind="props" :show="show" @expand="handleExpand">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </div> -->

    <div class="p-8">
      <CollapseTransition :enable="canExpan">
        <Skeleton v-if="loading" :active="loading" />
        <div :class="`${prefixCls}__body`" v-else v-show="show">
          <slot></slot>
        </div>
      </CollapseTransition>
    </div>
    <div :class="`${prefixCls}__footer`" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import type { PropType } from 'vue'
  import { ref, defineComponent } from 'vue'
  import isNil from 'lodash'
  // component
  import { Skeleton } from 'ant-design-vue'
  import CollapseTransition from './CollapseTransition.vue'
  import { triggerWindowResize } from '../../../utils'
  import { basePrefixCls } from '../../../constant'
  // hook
  import { useTimeoutFn } from '../../../hooks'

  export default defineComponent({
    name: 'ScCollapseContainer',
    props: {
      title: { type: String, default: '' },
      loading: { type: Boolean },
      /**
       *  Can it be expanded
       */
      canExpan: { type: Boolean, default: true },
      /**
       * Warm reminder on the right side of the title
       */
      helpMessage: {
        type: [Array, String] as PropType<string[] | string>,
        default: '',
      },
      /**
       * Whether to trigger window.resize when expanding and contracting,
       * Can adapt to tables and forms, when the form shrinks, the form triggers resize to adapt to the height
       */
      triggerWindowResize: { type: Boolean },
      /**
       * Delayed loading time
       */
      lazyTime: { type: Number, default: 0 },
    },
    components: {
      Skeleton,
      CollapseTransition
    },
    setup(props, { expose }) {
      const show = ref(true)
      const prefixCls = basePrefixCls + 'Collapse-container'
      /**
       * @description: Handling development events
       */
      function handleExpand(val: boolean) {
        show.value = isNil(val) ? !show.value : val
        if (props.triggerWindowResize) {
          // 200 milliseconds here is because the expansion has animation,
          useTimeoutFn(triggerWindowResize, 200)
        }
      }

      expose({
        handleExpand,
      });

      return {
        prefixCls,
        show,
        handleExpand
      }
    }
  })
</script>
