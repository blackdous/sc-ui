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

      <template v-if="!isMutilpBtns && multipleActionOptions.show">
        <ScRadioTooltipGroup
          v-model:value="multipleValue"
          :options="multipleActionOptions.options"
          @change="radioHandle"
        />
      </template>
      <template v-else>
        <slot name="multipleBtns"></slot>
      </template>
    </div>
    <div :class="[className + '-right']">
      <template v-if="!isSerach && serachOptions.show">
        <InputGroup>
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
              :disabled:="optionsItem.disabled || optionsItem.disabled"
            >
              {{ optionsItem.label }}
            </SelectOption>
          </Select>
          <InputSearch
            v-model:value="textValue"
            :maxlength="serachOptions.inputOptions?.maxlength"
            :style="{width: serachOptions.inputOptions?.width || '120px'}"
            :placeholder="serachOptionsRef.inputOptions?.placeholder"
            class="scSerach"
            @change="updateTextValue"
            @search="onSearch"
            :allowClear="true"
          >
            <template #suffix>
              <i class="iconfont icon-sousuo"
                @click="onSearch(textValue)"
              />
            </template>
          </InputSearch>
        </InputGroup>
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
import { computed, defineComponent, PropType, ref, defineExpose, unref, watch, isRef } from 'vue'
import { Button, Select, SelectOption, Tooltip, InputSearch, InputGroup } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import cloneDeep from 'lodash/cloneDeep'

import { basePrefixCls } from '../../../constans'
import { ScRadioTooltipGroup } from '../../radio'
//@ts-ignore
import { CreateButton, MutilpActionOptions, SerachOptions } from './types/table'
import ColumnDialogVue from './ColumnDialog.vue'
import { isFunction } from '../../../utils/is'

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
      }
    }
  },
  multipleActionOptions: {
    type: Object as PropType<MutilpActionOptions>,
    default () {
      return {
      }
    }
  },
  serachOptions: {
    type: Object as PropType<SerachOptions>,
    default () {
      return {
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
    InputSearch,
    InputGroup
  },
  setup(props, { slots, emit }) {
    const multipleValue = ref()
    const textValue = ref()
    const serachOptionsRef = ref()
    const selectedItem = ref()

    const isSerach = computed(() => {
      return Object.keys(slots).includes('serach') 
    })

    const isCreateButton = computed(() => {
      return Object.keys(slots).includes('createButton')
    })

    const isMutilpBtns = computed(() => {
      return Object.keys(slots).includes('multipleBtns')
    })

    const className = computed(() => {
      const classNames = [tableHeaderPrefixClas]
      return classNames;
    })
    
    const selectValue = computed({
      get: () => {
        const { typeList } = props.serachOptions || {}
        let defaultValue = undefined
        if (!props.selectValue && typeList) {
          defaultValue = typeList[0]?.value
          selectedItem.value = typeList[0]
        }
        return props.selectValue || defaultValue
      },
      set: (val) => {
        selectedItem.value = unref(serachOptions)?.typeList?.find((item: any)=> item.value === val)
        emit('selectChange', val)
        emit('update:selectValue', val)
      }
    })
    
    const createButtonOptions = computed(() => {
      return props.createButtonOptions
    })
    
    const multipleActionOptions = computed(() => {
      return props.multipleActionOptions
    })

    const updateSerachOptions = (serachOptions: SerachOptions) => {
      const cloneSerachOptions = cloneDeep(serachOptions)
      if (cloneSerachOptions) {
        const newSerachOptions = {
          ...serachOptions
        }
        if (newSerachOptions.inputOptions?.placeholder) {
          if (isFunction(newSerachOptions.inputOptions.placeholder)) {
            newSerachOptions.inputOptions.placeholder = newSerachOptions.inputOptions.placeholder(unref(selectedItem))
          }
        }
        serachOptionsRef.value = newSerachOptions
      }
    }
    const serachOptions = computed(() => {
      if (props.serachOptions) {
        updateSerachOptions(cloneDeep(props.serachOptions))
      }
      return props.serachOptions
    })

    const createHandle = () => {
      emit('createClick')
    }
    const radioHandle = (value:string) => {
      const item = unref(multipleActionOptions)?.options?.filter((item:any) => {
        return item.value === value
      })
      emit('multipleChange', item[0] || {})
    }

    const resetSerach = () => {
      textValue.value = ''
    }

    const resetMutilp = () => {
      multipleValue.value = ''
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
      multipleActionOptions,
      serachOptions,
      serachOptionsRef,
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
      updateTextValue,
    }
  },
})

</script>
