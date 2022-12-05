<template>
  <div :class="[basePrefixCls + 'Actions']">
    <template
      v-for="(item) in filterShow.slice(0, actionsOptions.showBtn)"
      :key="item.label"
    >
      <Button 
        :disabled="item.isDisabled"
        type="link"
        :loading="!item.isDisabled && item.loading"
        @click="handle(item)"
      >
        {{ item.label }}
      </Button>
    </template>
    <template v-if="filterShow.length > actionsOptions.showBtn">
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
              v-for="(item) in filterShow.slice(actionsOptions.showBtn)"
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
                  >
                    <Button
                      type="link"
                      class="actionBtn"
                      :loading="subItem.loading"
                      :disabled="subItem.isDisabled"
                      @click="handle(subItem)"
                    >
                      {{ subItem.label }}
                    </Button>
                  </MenuItem>
                </SubMenu>
              </template>
              <MenuItem
                :disabled="item.isDisabled"
                v-else
              >
                <template v-if="item.isDisabled && item.tooltipDes">
                  <Tooltip
                    overlayClassName = 'scTooltip-white'
                  >
                    <template #title>
                      {{ item.tooltipDes }}
                    </template>
                    <Button
                      type="link"
                      class="actionBtn"
                      :loading="item.loading"
                      :disabled="item.isDisabled"
                      @click="handle(item)"
                    >
                      {{ item.label }}
                    </Button>
                  </Tooltip>
                </template>
                <template v-else>
                  <Button
                    type="link"
                    class="actionBtn"
                    :loading="item.loading"
                    :disabled="item.isDisabled"
                    @click="handle(item)"
                  >
                    {{ item.label }}
                  </Button>
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
import { computed, defineProps, defineEmits, ref, onMounted, unref, watch } from 'vue'
import { Button, Dropdown, Menu, MenuItem, SubMenu, Tooltip } from 'ant-design-vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'

import { basePrefixCls } from '../../../constans'
import { treeMap } from '../../../utils/treeHelper'

import cloneDeep from 'lodash/cloneDeep'


export interface ActionItemProps {
  label: string,
  isShow?: boolean | (() => boolean),
  key?: string,
  isDisabled?: boolean | (() => boolean),
  loading?: boolean | (() => boolean),
  tooltip?: boolean,
  tooltipDes?: string,
  children?: Array<ActionItemProps>,
  action?: string | (() => void)
}

export interface ActionProps {
  showBtn?: number,
  actions?: Array<ActionItemProps>,
  record?: any
}

const props = withDefaults(defineProps<ActionProps>(), {
  showBtn: 2
})

const filterShow = ref([] as Array<ActionItemProps>)

const actionsOptions = computed(() => {
  return props.record?.actionsOptions || { showBtn: props.showBtn, actions: props.actions }
})

const emits = defineEmits(['onAction'])

const menuRef = ref()
const placementRef = ref<string>('bottomLeft')

onMounted(() => {
  const buttonMenu = unref(menuRef)
  buttonMenu && buttonMenu.addEventListener('mouseenter', () => {
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

watch([() => props.record, () => props.actions], ([prospRecord, actions]) => {
  if (!actions || !prospRecord) {
    return false
  }
  const record = cloneDeep(prospRecord)
  let actionsOptions = cloneDeep(actions) as Array<ActionItemProps>
  let list:Array<ActionItemProps> = []
  const isCustomActionsOptions = !!record.actionsOptions
  if (isCustomActionsOptions) {
    list = cloneDeep(record.actionsOptions.actions)
    // list = treeMap(actionsOptions, { children: 'children', conversion: (data:any) => {
    //   if (isFunction(data.isDisabled)) {
    //     // @ts-ignore
    //     data.isDisabled = data?.isDisabled({  })
    //   }
    //   if (isFunction(data.loading)) {
    //     // @ts-ignore
    //     data.loading = data?.loading({ })
    //   }
    //   return data
    // }})
  } else {
    list = treeMap(actionsOptions, { children: 'children', conversion: (data:any) => {
      if (Object.keys(unref(record)).includes(data.key)) {
        // @ts-ignore
        data.isDisabled = record[data.key]?.disable
        // @ts-ignore
        data.loading = record[data.key]?.loading
      }
      return data
    }})
  }
  filterShow.value = list?.filter(item => item.isShow).map(item => {
    if (item.isDisabled) {
      item.tooltip = true;
      item.tooltipDes = (item.tooltipDes || item.label)
    }
    return item
  }) || []
}, {
  deep: true,
  immediate: true
})

const handle = (action: ActionItemProps) => {
  if (action.isDisabled || action.loading) {
    return false
  }
  emits('onAction', action)
}
</script>
