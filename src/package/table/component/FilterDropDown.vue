<template>
  <div :class="[basePrefixCls + 'filterDropDown', overlayClassName]">
    <Dropdown
      :class="basePrefixCls + 'TableDropdown'"
      :visible="visable"
      :overlayClassName="overlayClassName"
    >
      <Menu
        :multiple="columnOptions?.filterMultiple"
        v-model:selected-keys="menuKeys"
        @deselect="handleDeselect"
        @click="handle"
      >
        <template
          v-for="(item) in filterList"
          :key="item.label"
        >
          <template v-if="item?.children && item?.children?.length">
            <SubMenu 
              :title="item.label"
              :disabled="item.isDisabled"
              popupClassName="filterDropdown-subMenu"
            >
              <MenuItem
                v-for="(subItem) in item.children"
                :disabled="subItem.isDisabled"
                :aria-label="subItem.label"
                :key="subItem.key"
              >
                {{ subItem.label }}
              </MenuItem>
            </SubMenu>
          </template>
          <MenuItem
            v-else
            :disabled="item.isDisabled"
            :key="item.key"
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
    </Dropdown>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, unref, ref, watch } from 'vue'
import { Dropdown, Menu, MenuItem, SubMenu } from 'ant-design-vue'
import cloneDeep from 'lodash/cloneDeep'
//@ts-ignore
import { scFilterProps, FilterItem } from '../types/column'
import { basePrefixCls } from '../../../constant'
import { findNode } from '../../../utils/treeHelper'

// export interface 

export default defineComponent({
  name: 'ScTableFilterDropDown',
  inheritAttrs: false,
  components: { Dropdown, Menu, MenuItem, SubMenu },
  props: scFilterProps(),
  setup (props, { emit }) {
    const visable = ref<boolean>(true)
    const selectedItems = ref([] as FilterItem[])
    const menuKeys = ref()
    const selectedKeys = computed(() => {
      return unref(selectedItems)?.map((item: FilterItem) => item.key)
    })
    const overlayClassName = computed(() => {
      return props.overlayClassName
    })
    const filterList = computed(() => {
      return props.filterList?.map((item: FilterItem) => {
        if (item.text) {
          item.label = item.text
        }
        if (item.value) {
          item.key = item.value
        }
        return item
      })
    })
    const columnOptions = computed(() => {
      return cloneDeep(props.column)
    })
    const handle = ({key}:{key: string}) => {
      // @ts-ignore
      const item = findNode(unref(filterList), (node:FilterItem) => node.key === key, { key: 'key' })
      if (unref(columnOptions)?.filterMultiple) {
        selectedItems.value = [...unref(selectedItems), item]
      } else {
        selectedItems.value = [item]
      }
      emit('filter', unref(selectedItems), unref(selectedKeys))
    }
    const handleDeselect = ({ key }: { key: string }) => {
      selectedItems.value = unref(selectedItems).filter((item: FilterItem) => item.key !== key)
      emit('filter', unref(selectedItems), unref(selectedKeys))
    }
    watch(() => props.filterSelected, (val) => {
      menuKeys.value = val?.map(item => item.key) || []
      if (val?.length === 0) {
        selectedItems.value = []
      }
    })
    return {
      basePrefixCls,
      filterList,
      visable,
      overlayClassName,
      columnOptions,
      selectedKeys,
      menuKeys,
      handle,
      handleDeselect
    }
  }
})
</script>
