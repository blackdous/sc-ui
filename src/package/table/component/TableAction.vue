<template>
  <div :class="[basePrefixCls + 'Actions']">
    <template
      v-for="(item) in filterShow.slice(0, props.showBtn)"
      :key="item.label"
    >
      <Button 
        :disabled="item.isDisabled"
        type="link"
        :loading="item.loading"
        @click="handle(item.action)"
      >
        {{ item.label }}
      </Button>
    </template>
    <template v-if="filterShow.length > props.showBtn">
      <Dropdown
        :placement="placementRef"
        :overlayClassName="basePrefixCls + 'TableDropdown'"
      >
        <Button
          type="link"
        >
          <span ref="menuRef">
            <EllipsisOutlined />
          </span>
        </Button>
        <template #overlay>
          <Menu>
            <template
              v-for="(item) in filterShow.slice(props.showBtn)"
              :key="item.label"
            >
              <template v-if="item?.children && item?.children?.length">
                <SubMenu 
                  v-for="(subItem) in item.children"
                  :key="item.label"
                  :title="item.label"
                  :disabled="item.isDisabled"
                >
                  <MenuItem
                    :disabled="subItem.isDisabled"
                    @click="handle(item.action)"
                  >
                    {{ subItem.label }}
                  </MenuItem>
                </SubMenu>
              </template>
              <MenuItem
                :disabled="item.isDisabled"
                @click="handle(item.action)"
                v-else
              >
                <template v-if="item.isDisabled && item.tooltipDes">
                  <Tooltip
                    overlayClassName = 'scTooltip-white'
                  >
                    <template #title>
                      {{ item.tooltipDes }}
                    </template>
                    {{ item.label }}
                  </Tooltip>
                </template>
                <template v-else>
                  {{ item.label }}
                </template>
              </MenuItem>
            </template>
          </Menu>
        </template>
      </Dropdown>
    </template>
  </div>
</template>


<script lang="ts">
export default {
  name: 'ScTableAction',
  inheritAttrs: false
}
</script>

<script lang='ts' setup>
import { computed, defineProps, defineEmits, inject, ref, onMounted, unref } from 'vue'
import { Button, Dropdown, Menu, MenuItem, SubMenu, Tooltip } from 'ant-design-vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'

import { basePrefixCls } from '../../../constans'


export interface ActionItemProps {
  label: string,
  isShow?: boolean,
  isDisabled?: boolean,
  loading?: boolean,
  action: string,
  tooltip?: boolean,
  tooltipDes?: string,
  children?: Array<ActionItemProps>
}

export interface ActionProps {
  showBtn?: number,
  actions?: Array<ActionItemProps>
}

const props = withDefaults(defineProps<ActionProps>(), {
  showBtn: 2
})

const emits = defineEmits(['onAction'])

const scTable = inject('scTable')

const menuRef = ref()
const placementRef = ref<string>('bottomLeft')

onMounted(() => {
  const buttonMenu = unref(menuRef)
  buttonMenu.addEventListener('mouseenter', () => {
    const totalHeight = window.innerHeight || document.documentElement.clientHeight;
    const totalWidth = window.innerWidth || document.documentElement.clientWidth;
    // 当滚动条滚动时，top, left, bottom, right时刻会发生改变。
    const { top, right, bottom, left } = buttonMenu.getBoundingClientRect()
    let placementStr:Array<string> = ['bottom', 'Left']
    if (bottom >= totalHeight - 100) {
      placementStr[0] = 'top'
    }
    if (top < 20) {
      placementStr[0] = 'bottom'
    }

    if (left < 20) {
      placementStr[1] = 'Right'
    }
    if (right >= totalWidth - 100) {
      placementStr[1] = 'Left'
    }
    placementRef.value = placementStr.join('')
    return false;
  })
})

const filterShow = computed(() => {
  return props.actions?.filter(item => item.isShow).map(item => {
    if (item.isDisabled) {
      item.tooltip = true;
      item.tooltipDes = (item.tooltipDes || item.label)
    }
    return item
  }) || []
})

const handle = (action: string) => {
  emits('onAction', { action, scTable })
}
</script>
