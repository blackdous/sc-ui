<template>
  <div :class="prefixCls">
    <div :class="[prefixCls + '-header']">
      <div :class="[prefixCls+'-title']">
        <slot name="title" v-if="isTitle"></slot>
        <span v-else :class="[prefixCls+'-title__text']"> 
          <template v-if="isVNode(newProps.title)">
            <component :is="newProps.title"></component>
          </template>
          {{ isVNode(newProps.title) ? '' : newProps.title }}
        </span>
        <Tooltip
          v-if="newProps.describe"
          :title="newProps.describe"
        >
          <i class="sc-ui sc-question-circle"></i>
        </Tooltip>
      </div>
      <div :class="`${prefixCls}-action`">
        <slot name="action"></slot>
        <i
          v-if="newProps.canExpan"
          :class="['sc-ui', 'sc-xiangxia', show ? '' : 'arrow-up']"
          @click="() => { handleExpand(!show) }"
        ></i>
      </div>
    </div>

    <CollapseTransition :enable="newProps.canExpan">
      <Skeleton v-if="loading" :active="loading" />
      <div :class="`${prefixCls}__body`" v-else v-show="show">
        <slot></slot>
      </div>
    </CollapseTransition>
    <div :class="`${prefixCls}__footer`" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import type { PropType } from 'vue'
  import { ref, defineComponent, computed, isVNode, unref } from 'vue'
  import lodash from 'lodash'
  // import isNil from 'lodash/isNil'
  // component
  import { Skeleton, Tooltip } from 'ant-design-vue'
  import CollapseTransition from './CollapseTransition.vue'
  import { triggerWindowResize } from '../../../utils'
  import { basePrefixCls } from '../../../constant'
  // hook
  import { useTimeoutFn } from '../../../hooks'

  const { isNil } = lodash

  export default defineComponent({
    name: 'ScCollapseContainer',
    props: {
      title: { type: [String, Object], default: '' },
      loading: { type: Boolean },
      /**
       *  Can it be expanded
       */
      canExpan: { type: Boolean, default: true },
      /**
       * Warm reminder on the right side of the title
       */
      describe: {
        type: [String] as PropType<string>,
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
      CollapseTransition,
      Tooltip
    },
    setup(props, { slots, expose }) {
      const show = ref(true)
      const prefixCls = basePrefixCls + 'Collapse-container'

      /**
       * @description: Handling development events
       */
      function handleExpand(val: boolean) {
        show.value = isNil(val) ? !show.value : val
        if (props.triggerWindowResize) {
          useTimeoutFn(triggerWindowResize, 200)
        }
      }
      const newProps = computed(() => {
        return props
      })
      
      const isTitle = computed(() => {
        return Object.keys(slots).includes('title')
      })

      expose({
        handleExpand,
      });

      return {
        isTitle,
        isVNode,
        newProps,
        prefixCls,
        show,
        handleExpand
      }
    }
  })
</script>
