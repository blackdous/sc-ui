<template>
  <div :class="[basePrefixCls + 'filterDropDown']">
    <Dropdown
      :class="basePrefixCls + 'TableDropdown'"
      :visible="visable"
    >
      <Menu>
        <template
          v-for="(item) in filterList"
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
                @click="handle(item)"
                :aria-label="subItem.label"
                :key="subItem.label"
              >
                {{ subItem.label }}
              </MenuItem>
            </SubMenu>
          </template>
          <MenuItem
            v-else
            :disabled="item.isDisabled"
            :key="item.label"
            @click="handle(item)"
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
import { computed, defineComponent, unref, ref } from 'vue'
import { Dropdown, Menu, MenuItem, SubMenu } from 'ant-design-vue'
//@ts-ignore
import { scFilterProps, FilterItem } from '../types/column'
import { basePrefixCls } from '../../../constans'

export default defineComponent({
  name: 'ScTableFilterDropDown',
  inheritAttrs: false,
  components: { Dropdown, Menu, MenuItem, SubMenu },
  props: scFilterProps(),
  setup (props, { emit }) {
    const visable = ref<boolean>(true)
    const filterList = computed(() => {
      return unref(props.filterList)
    })
    const handle = (item: FilterItem) => {
      visable.value = false;
      emit('filter', item)
    }
    // console.log('filterList: ', filterList.value);
    return {
      basePrefixCls,
      filterList,
      visable,
      handle
    }
  }
})
</script>
