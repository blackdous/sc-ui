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
          v-model:value="mutilpValue"
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
          v-model:value="selectValue"
          v-if="serachOptions.showSelect"
          :style="{width: serachOptions.selectOptions?.width || '120px'}"
          dropdownClassName="scDropdown"
          :placeholder="serachOptions.selectOptions?.placeholder"
          :loading="serachOptions.loading"
        >
          <SelectOption
            v-for="optionsItem in serachOptions.typeList"
            :key="optionsItem.value"
            :value="optionsItem.value"
            :disabled:="optionsItem.disabled"
          >
            {{ optionsItem.label }}
          </SelectOption>
        </Select>
        <InputSearch
          v-model:value="textValue"
          :maxlength="serachOptions.inputOptions?.maxlength"
          :style="{width: serachOptions.inputOptions?.width || '120px'}"
          :placeholder="serachOptions.inputOptions?.placeholder"
          class="scSerach"
          @change="updateTextValue"
          @pressEnter="onSearch"
        >
          <template #suffix>
            <i class="iconfont icon-sousuo"
              @click="onSearch(textValue)"
            />
          </template>
        </InputSearch>
      </template>
      <template v-else>
        <slot name="serach"></slot>
      </template>
      <div :class="[className + '-active']">
        <slot name="tableActive"></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref, defineExpose, unref } from 'vue'
import { Button, Select, SelectOption, Tooltip, InputSearch } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'

import { basePrefixCls } from '../../../constans'
import { ScRadioTooltipGroup } from '../../radio'
//@ts-ignore
import { CreateButton, MutilpActionOptions, SerachOptions } from './types/table'
import ColumnDialogVue from './ColumnDialog.vue'

const tableHeaderPrefixClas = basePrefixCls + 'TableFilter'

export const TableFilterProps = () => ({
  selectValue: String,
  textValue: String,
  selectLoading: {
    type: Boolean,
    default () {
      return false
    }
  },
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
    Tooltip,
    SelectOption,
    PlusOutlined,
    ColumnDialogVue,
    InputSearch
  },
  setup(props, { slots, emit }) {
    const mutilpValue = ref()
    const textValue = ref()

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
    
    const selectValue = computed({
      get: () => {
        return props.selectValue
      },
      set: (val) => {
        emit('update:selectValue', val)
      }
    })
    
    const createButtonOptions = computed(() => {
      return props.createButtonOptions
    })
    
    const mutilpActionOptions = computed(() => {
      return props.mutilpActionOptions
    })
    const serachOptions = computed(() => {
      console.log('props.serachOptions: ', props.serachOptions)
      return props.serachOptions
    })

    const createHandle = () => {
      emit('createClick')
    }
    const radioHandle = (value:string) => {
      // console.log('mutilpActionOptions: ', mutilpActionOptions);
      const item = unref(mutilpActionOptions)?.mutilpList?.filter((item:any) => {
        return item.value === value
      })
      emit('mutilpChange', item[0] || {})
    }

    const resetSerach = () => {
      textValue.value = ''
    }

    const resetMutilp = () => {
      mutilpValue.value = ''
    } 

    const updateTextValue = (value:string) => {
      emit('update:textValue', unref(textValue))
    }

    const onSearch = (val:string) => {
      emit('serachClick', { value: unref(val), type: unref(selectValue) })
    }

    defineExpose({
      resetMutilp,
      resetSerach
    })

    return {
      createButtonOptions,
      mutilpActionOptions,
      serachOptions,
      isSerach,
      isCreateButton,
      isMutilpBtns,
      className,
      selectValue,
      textValue,
      basePrefixCls,
      createHandle,
      radioHandle,
      onSearch,
      updateTextValue
    }
  },
})

</script>
