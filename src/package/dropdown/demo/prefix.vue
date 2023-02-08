<template>
  <div class="text-center">
    <Dropdown
      :visible="true"
    >
      <Button>
        <template #icon>
          <i class="sc-ui sc-xinjian"></i>
        </template>
        填充按钮
      </Button>
      <template #overlay>
          <Menu>
            <template
              v-for="(item) in listRef"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Dropdown, Menu, SubMenu, MenuItem, Button } from 'ant-design-vue'

export default defineComponent({
  name: 'basic',
  inheritAttrs: false,
  components: {
    Dropdown,
    Menu,
    SubMenu,
    MenuItem,
    Button
  },
  setup() {
    const valueRef = ref()
    const listRef = ref([
      {
        label: '创建快照',
        isShow: true,
        loading: false,
        key: 'aa',
        isDisabled: false,
        action: (data: any) => {
          console.log('====================================');
          console.log(data);
          console.log('====================================');
        },
        tooltip: false,
        tooltipDes: '创建快照创建快照aa',
      },
      {
        label: '续费',
        isShow: true,
        isDisabled: false,
        key: 'bb',
        loading: false,
        action: 'bb',
        tooltip: false,
        tooltipDes: '续费续费续费续费续费'
      },
      {
        label: '一级选项',
        isDisabled: false,
        loading: false,
        key: 'cc',
        action: '1111',
        tooltip: false,
        tooltipDes: '一级选项111111111',
        children: [
          {
            label: '二级选项',
            isShow: true,
            isDisabled: false,
            loading: true,
            key: 'dd',
            action: '2222',
            tooltip: false,
            tooltipDes: '二级选项22222222',
          }
        ]
      }, {
        label: '三级选项',
        isShow: true,
        isDisabled: false,
        loading: false,
        key: 'ff',
        action: '3333',
        tooltip: true,
        tooltipDes: '三级选项33333333',
      }, {
        label: '四级选项',
        isShow: true,
        isDisabled: false,
        loading: false,
        action: '4444',
        key: '4444',
        tooltip: false,
        tooltipDes: '四级选项444444444',
      }
    ])

    const handle = (item:any) => {
      console.log('item: ', item);
    }
    return {
      valueRef,
      listRef,
      handle
    }
  }
})

</script>
