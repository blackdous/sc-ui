<template>
  <sc-scrollbar
    :key="menuId"
    tag="ul"
    role="menu"
    :class="ns"
    :wrap-class="ns + '-wrap'"
    :view-class="[ns + '-list', isEmpty ? 'isEmpty' : '']"
    @mousemove="handleMouseMove"
    @mouseleave="clearHoverZone"
  >
    <ScCascaderNode
      v-for="node in nodes"
      :key="node.uid"
      :node="node"
      :menu-id="menuId"
      @expand="handleExpand"
    />
    <div v-if="isLoading" :class="ns + '-empty-text'">
      <span class="loading-transition"></span>
    </div>
    <div v-else-if="isEmpty" :class="ns + '-empty-text'">
      <!-- {{ t('el.cascader.noData') }} -->
      no data
    </div>
    <svg
      v-else-if="panel?.isHoverMenu"
      ref="hoverZone"
      :class="ns + '-hover-zone'"
    ></svg>
  </sc-scrollbar>
</template>

<script lang="ts">

import { computed, defineComponent, getCurrentInstance, inject, ref } from 'vue'
import { ScScrollbar } from '../../scrollbar'
import ScCascaderNode from './node.vue'
import { CASCADER_PANEL_INJECTION_KEY } from './types'
import { generateId } from '../utils'
import { basePrefixCls } from '../../../constant'

import type { default as CascaderNode } from './node'
import type { PropType, Ref } from 'vue'


export default defineComponent({
  name: 'ScCascaderMenu',

  components: {
    ScScrollbar,
    ScCascaderNode,
  },

  props: {
    nodes: {
      type: Array as PropType<CascaderNode[]>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const instance = getCurrentInstance()!
    const ns = basePrefixCls + 'Cascader-menu'

    const id = generateId()
    let activeNode: Nullable<HTMLElement> = null
    let hoverTimer: Nullable<number> = null

    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

    const hoverZone = ref<null | SVGSVGElement | Ref>(null)

    const isEmpty = computed(() => !props.nodes.length)
    const isLoading = computed(() => !panel.initialLoaded)
    const menuId = computed(() => `cascader-menu-${id}-${props.index}`)

    const handleExpand = (e: MouseEvent) => {
      activeNode = e.target as HTMLElement
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value) return

      if (activeNode.contains(e.target as HTMLElement)) {
        clearHoverTimer()

        const el = instance.vnode.el as HTMLElement
        const { left } = el.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = el
        const startX = e.clientX - left
        const top = activeNode.offsetTop
        const bottom = top + activeNode.offsetHeight

        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(
          clearHoverZone,
          panel.config.hoverThreshold
        )
      }
    }

    const clearHoverTimer = () => {
      if (!hoverTimer) return
      clearTimeout(hoverTimer)
      hoverTimer = null
    }

    const clearHoverZone = () => {
      if (!hoverZone.value) return
      hoverZone.value.innerHTML = ''
      clearHoverTimer()
    }
    return {
      ns,
      panel,
      hoverZone,
      isEmpty,
      isLoading,
      menuId,
      handleExpand,
      handleMouseMove,
      clearHoverZone,
    }
  },
})
</script>
