<template>
  <div :class="[prefixCls + 'Actions']">
    <template
      v-for="(item) in filterShow.slice(0, props.showBtn)"
      :key="item.label"
    >
      <Button 
        :disabled="item.isDisabled"
        type="link"
        @click="handle(item.action)"
      >
        {{ item.label }}
      </Button>
    </template>
    <template v-if="filterShow.length > props.showBtn">
      <Dropdown
        placement="bottomLeft"
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
                >
                  <MenuItem
                  >
                    {{ subItem.label }}
                  </MenuItem>
                </SubMenu>
              </template>
              <template v-else>
                <MenuItem
                >
                  {{ item.label }}
                </MenuItem>
              </template>
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
import { Button, Dropdown, Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'

import { prefixCls } from '../../../constans/event'


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

onMounted(() => {
  const buttonMenu = unref(menuRef)
  console.log('buttonMenu: ', menuRef);
  buttonMenu.addEventListener('mouseenter', () => {
    const totalHeight = window.innerHeight || document.documentElement.clientHeight;
    console.log('totalHeight: ', totalHeight);
    const totalWidth = window.innerWidth || document.documentElement.clientWidth;
    console.log('totalWidth: ', totalWidth);
    // 当滚动条滚动时，top, left, bottom, right时刻会发生改变。
    const { top, right, bottom, left } = buttonMenu.getBoundingClientRect();
    console.log('top, right, bottom, left: ', top, right, bottom, left);
    // return (top >= 0 && left >= 0 && right <= totalWidth && bottom <= totalHeight);
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
