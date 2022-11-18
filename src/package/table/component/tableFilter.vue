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

    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref } from 'vue'
import { Button, Select, SelectOption } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { prefixCls } from '../../../constans'
import { ScRadioTooltipGroup } from '../../radio'
import { CreateButton, MutilpActionOptions, SerachOptions } from './types/table'

const tableHeaderPrefixClas = prefixCls + 'TableFilter'

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
    console.log('isCreateButton: ', isCreateButton);

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
    console.log('serachOptions: ', serachOptions);
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
      createHandle,
      radioHandle
    }
  },
})

</script>
