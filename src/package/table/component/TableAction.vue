<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div :class="[basePrefixCls + 'Actions']">
    <template
      v-for="(item) in filterShow.slice(0, actionsOptions.showBtn)"
      :key="item.label"
    >
      <Tooltip
        v-if="item.tooltipDes"
        overlayClassName = 'scTooltip-white'
        :disabled="item.isDisabled"
      >
        <template #title>
          {{ item.tooltipDes }}
        </template>
        <Button 
          type="link"
          class="underlineLink-hover"
          :disabled="!!item.isDisabled"
          :loading="!!(!item.isDisabled && item.loading)"
          @click="handle(item)"
        >
          {{ item.label }}
        </Button>
      </Tooltip>
      <Button 
        v-else
        type="link"
        class="underlineLink-hover"
        :disabled="!!item.isDisabled"
        :loading="!!(!item.isDisabled && item.loading)"
        @click="handle(item)"
      >
        {{ item.label }}
      </Button>
    </template>
    <template v-if="filterShow.length > actionsOptions.showBtn">
      <Dropdown
        placement="bottomRight"
        v-bind="actionsOptions.dropdownProps"
        :overlayClassName="basePrefixCls + 'TableDropdown'"
        @visibleChange="handleVisibleChange"
        >
        <!-- :visible="true" -->
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
                  :key="item.label"
                  :title="item.label"
                  :disabled="!!item.isDisabled"
                >
                  <MenuItem
                    v-for="(subItem) in item.children"
                    :disabled="!!subItem.isDisabled"
                  >
                    <template v-if="subItem.tooltipDes">
                      <Tooltip
                        overlayClassName = 'scTooltip-white'
                      >
                        <template #title>
                          {{ subItem.tooltipDes }}
                        </template>
                        <Button
                          type="link"
                          class="actionBtn"
                          :loading="!!subItem.loading"
                          :disabled="!!subItem.isDisabled"
                          @click="handle(subItem)"
                        >
                          {{ subItem.label }}
                        </Button>
                      </Tooltip>
                    </template>
                    <Button
                      v-else
                      type="link"
                      class="actionBtn"
                      :loading="!!subItem.loading"
                      :disabled="!!subItem.isDisabled"
                      @click="handle(subItem)"
                    >
                      {{ subItem.label }}
                    </Button>
                  </MenuItem>
                </SubMenu>
              </template>
              <MenuItem
                :disabled="!!item.isDisabled"
                v-else
              >
                <template v-if="item.tooltipDes">
                  <Tooltip
                    overlayClassName = 'scTooltip-white'
                  >
                    <template #title>
                      {{ item.tooltipDes }}
                    </template>
                    <Button
                      type="link"
                      class="actionBtn"
                      :loading="!!item.loading"
                      :disabled="!!item.isDisabled"
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
                    :loading="!!item.loading"
                    :disabled="!!item.isDisabled"
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



<script lang='ts' setup>
// @ts-nocheck
import { computed, defineProps, defineEmits, ref, unref, watch, nextTick } from 'vue'
import { Button, Dropdown, Menu, MenuItem, SubMenu, Tooltip } from 'ant-design-vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'
import type { DropdownProps } from 'ant-design-vue'

import { basePrefixCls } from '../../../constant'
import { isArray, isFunction } from '../../../utils/is'
import { treeMap } from '../../../utils/treeHelper'

// import cloneDeep from 'lodash/cloneDeep'
import lodash from 'lodash'

const { cloneDeep } = lodash

export interface ActionItemProps {
  label: string,
  isShow?: boolean | (() => boolean),
  key?: string,
  isDisabled?: boolean | (() => boolean),
  loading?: boolean | (() => boolean),
  tooltip?: boolean,
  tooltipDes?: string | (() => boolean),
  children?: Array<ActionItemProps>,
  action?: string | (() => void)
}

export interface ActionProps {
  showBtn?: number,
  actions?: Array<ActionItemProps>,
  record?: any,
  fetchParams?: any,
  data?: any
  dropdownProps?: DropdownProps,
  uuid?: string
}

const props = withDefaults(defineProps<ActionProps>(), {
  showBtn: 2
})

const filterShow = ref([] as Array<ActionItemProps>)

const defaultValue = ref(false)

const actionsOptions = computed(() => {
  return props.record?.actionsOptions || { 
    showBtn: props.showBtn, 
    actions: props.actions,
    dropdownProps: { getPopupContainer: () => {
      return document.querySelector(`.${props.uuid}`)
    }, ...props.dropdownProps } || {}
  }
})

const fetchParams = computed(() => {
  return props.fetchParams
})

const emits = defineEmits(['onAction'])

const visibleRef = ref(false)

const menuRef = ref()
const placementRef = ref<string>('bottomRight')

function flapSetItem (actions: Array<ActionItemProps>) {
  if (!isArray(actions)) {
    return actions
  }
  // @ts-ignore
  const newActions = actions?.map(item => {
    if (isFunction(item.isDisabled)) {
      // @ts-ignore
      item.isDisabled = item?.isDisabled({ ...unref(fetchParams), record: props.record })
    }
    if (isFunction(item.loading)) {
      // @ts-ignore
      item.loading = item?.loading({ ...unref(fetchParams), record: props.record})
    }
    if (isFunction(item.isShow)) {
      // @ts-ignore
      item.isShow = item?.isShow({ ...unref(fetchParams), record: props.record})
    }
    if (isFunction(item.tooltipDes)) {
      // @ts-ignore
      item.tooltipDes = item?.tooltipDes({ ...unref(fetchParams), record: props.record})
    }
    if (item.children) {
      flapSetItem(item.children)
    }
    return item
  })
  return newActions
}

const handleVisibleChange = (visible: boolean) => {
  visibleRef.value = visible
  updateActionsStatus()
}

const updateActionsStatus = () => {
  const { data, actions } = props
  const propsData = data
  if (!actions || !propsData) {
    return false
  }
  const record = cloneDeep(props.record)
  let actionsOptions = cloneDeep(actions) as Array<ActionItemProps>
  let list:Array<ActionItemProps> = []
  const isCustomActionsOptions = !!record.actionsOptions
  if (isCustomActionsOptions) {
    list = flapSetItem(cloneDeep(record.actionsOptions.actions))
  } else {
    list = treeMap(flapSetItem(cloneDeep(actionsOptions)), { children: 'children', conversion: (data:any) => {
      if (Object.keys(unref(record)).includes(data.key)) {
        // @ts-ignore
        data.isDisabled = record[data.key]?.disable
        // @ts-ignore
        data.loading = record[data.key]?.loading
      }
      return data
    }})
  }
  filterShow.value = list?.filter(item => item.isShow)
}

watch([() => props.data, () => props.actions], () => {
  if (!filterShow.value.length) {
    updateActionsStatus()
    defaultValue.value = true
  }
}, {
  immediate: true
})

const handle = (action: ActionItemProps) => {
  if (action.isDisabled || action.loading) {
    return false
  }
  emits('onAction', action)
}
</script>
