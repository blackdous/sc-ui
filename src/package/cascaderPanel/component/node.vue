<template>
  <li
    :id="`${menuId}-${node.uid}`"
    role="menuitem"
    :aria-haspopup="!isLeaf"
    :aria-owns="isLeaf ? null : menuId"
    :aria-expanded="inExpandingPath"
    :tabindex="expandable ? -1 : undefined"
    :class="[
      ns,
      checkStrictly ? 'isSelectable' : '',
      node.checked ? 'isChecked' : '',
      !expandable ? 'isDisabled' : '',
      inExpandingPath && 'in-active-path',
      inCheckedPath && 'in-checked-path',
      isLeaf && node.checked && 'isSelected'
    ]"
    @mouseenter="handleHoverExpand"
    @focus="handleHoverExpand"
    @click="handleClick"
  >
    <!-- prefix -->
    <Checkbox
      v-if="multiple"
      :checked="node.checked"
      :indeterminate="node.indeterminate"
      :disabled="isDisabled"
      @click.stop
      @update:checked="handleSelectCheck"
    />
    <Radio
      v-else-if="checkStrictly"
      :checked="node.checked"
      :label="node.uid"
      :disabled="isDisabled"
      @update:checked="handleSelectCheck"
      @click.stop
    >
      <span />
    </Radio>
    <!-- <el-icon v-else-if="isLeaf && node.checked" :class="[ns + '-prefix' ]">
      <Icon icon="ep:check"></Icon>
    </el-icon> -->

    <!-- content -->
    <node-content />

    <!-- postfix -->
    <template v-if="!isLeaf">
      <span v-if="node.loading" :class="['isLoading', ns + '-postfix']">
        <span class="loading-transition"></span>
        <!-- loading... -->
      </span>
      <span v-else :class="['arrow-right', ns + '-postfix']">
        <i class="sc-ui sc-you"></i>
      </span>
    </template>
  </li>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, inject } from 'vue'
import { Checkbox, Radio } from 'ant-design-vue'
import NodeContent from './node-content'
import { CASCADER_PANEL_INJECTION_KEY } from './types'
import type { default as CascaderNode } from './node'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ScCascaderNode',

  components: {
    Checkbox,
    Radio,
    NodeContent
  },

  props: {
    node: {
      type: Object as PropType<CascaderNode>,
      required: true,
    },
    menuId: String,
  },

  emits: ['expand'],

  setup(props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!

    const ns = 'scCascader-node'
    const isHoverMenu = computed(() => panel.isHoverMenu)
    const multiple = computed(() => panel.config.multiple)
    const checkStrictly = computed(() => panel.config.checkStrictly)
    const checkedNodeId = computed(() => panel.checkedNodes[0]?.uid)
    const isDisabled = computed(() => props.node.isDisabled)
    const isLeaf = computed(() => props.node.isLeaf)
    const expandable = computed(
      () => (checkStrictly.value && !isLeaf.value) || !isDisabled.value
    )
    const inExpandingPath = computed(() => isInPath(panel.expandingNode!))
    // only useful in check-strictly mode
    const inCheckedPath = computed(
      () => checkStrictly.value && panel.checkedNodes.some(isInPath)
    )

    const isInPath = (node: CascaderNode) => {
      const { level, uid } = props.node
      return node?.pathNodes[level - 1]?.uid === uid
    }

    const doExpand = () => {
      if (inExpandingPath.value) return
      panel.expandNode(props.node)
    }

    const doCheck = (checked: boolean) => {
      const { node } = props
      if (checked === node.checked) return
      panel.handleCheckChange(node, checked)
    }

    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf.value) doExpand()
      })
    }

    const handleHoverExpand = (e: Event) => {
      if (!isHoverMenu.value) return
      handleExpand()
      !isLeaf.value && emit('expand', e)
    }

    const handleExpand = () => {
      const { node } = props
      // do not exclude leaf node because the menus expanded might have to reset
      if (!expandable.value || node.loading) return
      node.loaded ? doExpand() : doLoad()
    }

    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf.value) return

      if (
        isLeaf.value &&
        !isDisabled.value &&
        !checkStrictly.value &&
        !multiple.value
      ) {
        handleCheck(true)
      } else {
        handleExpand()
      }
    }

    const handleSelectCheck = (checked: boolean) => {
      // console.log('checked: ', checked);
      if (checkStrictly.value) {
        doCheck(checked)
        if (props.node.loaded) {
          doExpand()
        }
      } else {
        handleCheck(checked)
      }
    }

    const handleCheck = (checked: boolean) => {
      if (!props.node.loaded) {
        doLoad()
      } else {
        doCheck(checked)
        !checkStrictly.value && doExpand()
      }
    }

    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf,
      expandable,
      inExpandingPath,
      inCheckedPath,
      ns,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
      handleSelectCheck,
    }
  },
})
</script>
