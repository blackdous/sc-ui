<template>
  <div
    :class="className"
  >
    <div :class="[className + '-left']">
      <template v-if="!isCreateButton && createButtonOptions.show">
        <Button
          v-show="createButtonOptions.show"
          :disabled="createButtonOptions.isDisabled"
          :type="createButtonOptions.type || 'primary'"
          @click="createHandle"
        >
          <PlusOutlined></PlusOutlined>
          {{ createButtonOptions.text }}
        </Button>
      </template>
      <template v-else>
        <slot name="createButton"></slot>
      </template>

      <template v-if="!isMutilpBtns && mutilpActionOptions.show">
        <ScRadioTooltipGroup
          :radio-list="mutilpActionOptions.mutilpList"
          @change="radioHandle"
        />
      </template>
      <template v-else>
        <slot name="mutilpBtns"></slot>
      </template>
    </div>
    <div :class="[className + '-right']">
      <template v-if="!isSerach && serachOptions.show">
        <Select
          v-model:value="serachSelectedValue"
          v-if="serachOptions.showSelect"
          style="width: 120px"
          dropdownClassName="scDropdown"
        >
          <SelectOption
            v-for="optionsItem in serachOptions.typeList"
            :key="optionsItem.value"
            :value="optionsItem.value"
          >
            {{ optionsItem.label }}
          </SelectOption>
        </Select>
      </template>
      <template v-else>
        <slot name="serach"></slot>
      </template>
      <div :class="[className + '-active']">
        <Tooltip 
          v-if="activeOptions?.reload?.show"
          overlayClassName="scTooltip-white"
        >
          <template #title v-if="activeOptions?.reload?.showTooltip">
            {{ activeOptions?.reload.text }}
          </template>
          <Button
            :disabled="activeOptions?.reload?.isDisabled"
          >
            <i class="iconfont icon-sync"></i>
          </Button>
        </Tooltip>
        <Tooltip
          v-if="activeOptions?.columnDialog?.show"
          overlayClassName="scTooltip-white"
        >
          <template #title v-if="activeOptions?.columnDialog?.showTooltip">
            {{ activeOptions?.columnDialog.text }}
          </template>
          <Button
            :disabled="activeOptions?.columnDialog?.isDisabled"
          >
            <i class="iconfont icon-setting"></i>
          </Button>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref } from 'vue'
import { Button, Select, SelectOption, Tooltip } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { basePrefixCls } from '../../../constans'
import { ScRadioTooltipGroup } from '../../radio'
import { CreateButton, MutilpActionOptions, SerachOptions, ActiveOptions, mutilpActionOptions, serachOptions } from './types/table'

const tableHeaderPrefixClas = basePrefixCls + 'TableFilter'

export const TableFilterProps = () => ({
  createButtonOptions: {
    type: Object as PropType<CreateButton>,
    default () {
      return {
        show: true,
        text: '创建',
        type: 'primary'
      }
    }
  },
  mutilpActionOptions: {
    type: Object as PropType<MutilpActionOptions>,
    default () {
      return {
        show: true
      }
    }
  },
  serachOptions: {
    type: Object as PropType<SerachOptions>,
    default () {
      return {
        show: true,
        showSelect: true
      }
    }
  },
  activeOptions: {
    type: Object as PropType<ActiveOptions>,
    default () {
      return {
        reload: {
          text: '刷新',
          show: true,
          showTooltip: true
        },
        columnDialog: {
          text: '定制列',
          show: true,
          showTooltip: true
        }
      }
    }
  }
  
})

export default defineComponent({
  name: 'TableFilter',
  inheritAttrs: false,
  props: TableFilterProps(),
  components: { 
    Button,
    ScRadioTooltipGroup,
    Select,
    Tooltip,
    SelectOption,
    PlusOutlined
  },
  setup(props, { slots, emit }) {
    const serachSelectedValue = ref()
    const isSerach = computed(() => {
      return Object.keys(slots).includes('serach') 
    })

    const isCreateButton = computed(() => {
      return Object.keys(slots).includes('createButton')
    })

    const isMutilpBtns = computed(() => {
      return Object.keys(slots).includes('mutilpBtns')
    })
    const className = computed(() => {
      const classNames = [tableHeaderPrefixClas]
      return classNames;
    })
    
    
    const createButtonOptions = computed(() => {
      return props.createButtonOptions
    })
    
    const mutilpActionOptions = computed(() => {
      return props.mutilpActionOptions
    })
    const serachOptions = computed(() => {
      return props.serachOptions
    })

    const activeOptions = computed(() => {
      return props.activeOptions
    })

    const createHandle = () => {
      emit('createClick')
    }
    const radioHandle = (value:string) => {
      emit('mutilpChange', value)
    }
    return {
      createButtonOptions,
      mutilpActionOptions,
      serachOptions,
      isSerach,
      isCreateButton,
      isMutilpBtns,
      className,
      serachSelectedValue,
      activeOptions,
      createHandle,
      radioHandle
    }
  },
})

</script>
