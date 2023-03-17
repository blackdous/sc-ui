<template>
  <div
    :class="className"
  >
    <div 
      v-if="isShowLeftFilter" 
      :class="[className + '-left', isShowLeftFilter && !isShowRightFilter ? 'isOnlyLeft' : '']" 
      :style="newProps.filterLeftStyle"
    >
      <template v-if="!isCreateButton && createButtonOptions.show">
        <Button
          v-show="createButtonOptions.show"
          :disabled="createButtonOptions.isDisabled"
          :loading="createButtonOptions.loading"
          :type="createButtonOptions.type || 'primary'"
          :class="[className + '-addBtns']"
          @click="createHandle"
        >
          <i class="sc-ui sc-xinjian"></i> 
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
          :triggerMultiple="multipleActionOptions.triggerMultiple"
          @change="radioHandle"
        />
      </template>
      <template v-else>
        <slot name="multipleBtns"></slot>
      </template>
    </div>
    <div
      v-if="isShowRightFilter" 
      :class="[className + '-right', !isShowLeftFilter && isShowRightFilter ? 'isOnlyRight' : '']"
      :style="newProps.filterRightStyle"
    >
      <template v-if="!isSearch && searchOptions.show">
        <InputGroup>
          <Select
            v-model:value="selectValue"
            v-if="searchOptions.showSelect"
            :style="{width: transformPxtoRem(searchOptions.selectOptions?.width) || transformPxtoRem('120px')}"
            dropdownClassName="scDropdown"
            :placeholder="searchOptions.selectOptions?.placeholder"
            :loading="searchOptions.loading"
          >
            <SelectOption
              v-for="optionsItem in searchOptions.typeList"
              :key="optionsItem.value"
              :value="optionsItem.value"
              :disabled:="optionsItem.disabled || optionsItem.disabled"
            >
              {{ optionsItem.label }}
            </SelectOption>
          </Select>
          <div class="scSearchInput">
            <InputSearch
              v-model:value="textValue"
              :maxlength="searchOptions.inputOptions?.maxlength"
              :style="{width: transformPxtoRem(searchOptions.inputOptions?.width) || transformPxtoRem('120px')}"
              :placeholder="searchOptionsRef.inputOptions?.placeholder"
              :class="['scSearch', !validatorResult.result ? 'isError' : '']"
              @change="updateTextValue"
              @search="onSearch"
              :allowClear="true"
            >
              <template #suffix>
                <i class="sc-ui sc-sousuo"
                  @click="onSearch(textValue)"
                />
              </template>
            </InputSearch>
            <p v-if="!validatorResult.result" class="input-describe">{{validatorResult.tip}}</p>
          </div>
        </InputGroup>
      </template>
      <template v-else>
        <slot name="search"></slot>
      </template>
      <div :class="[className + '-active']">
        <slot name="tableActive"></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref, unref, CSSProperties, watch } from 'vue'
import { Button, Select, SelectOption, Tooltip, InputSearch, InputGroup } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import lodash from 'lodash'
// import cloneDeep from 'lodash/cloneDeep'

import { basePrefixCls } from '../../../constant'
import { ScRadioTooltipGroup } from '../../radio'
//@ts-ignore
import { CreateButton, MutilpActionOptions, SearchOptions } from './types/table'
import ColumnDialogVue from './ColumnDialog.vue'
import { isFunction, deepMerge, transformPxtoRem } from '../../../utils'

const tableHeaderPrefixClas = basePrefixCls + 'TableFilter'

const { cloneDeep } = lodash

export const TableFilterProps = () => ({
  selectValue: String,
  textValue: String,
  filterLeftStyle: {
    type: Object as PropType<CSSProperties>,
      default () {
        return {}
      }
  },
  filterRightStyle: {
    type: Object as PropType<CSSProperties>,
      default () {
        return {}
      }
  },
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
  searchOptions: {
    type: Object as PropType<SearchOptions>,
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
  setup(props, { slots, emit, expose }) {
    const multipleValue = ref()
    const textValue = ref()
    const isDefaultValue = ref(false)
    const searchOptionsRef = ref()
    const selectedItem = ref()

    const validatorResult = ref({
      result: true,
      tip: ''
    })

    watch(() => props?.searchOptions?.inputOptions?.defaultValue, (val) => {
      if (!unref(isDefaultValue) && !unref(textValue)) {
        textValue.value = val || props?.searchOptions?.inputOptions?.defaultValue || ''
        isDefaultValue.value = true
      }
    }, {
      immediate: true,
      deep: true
    })


    const newProps = computed(() => {
      return props
    })

    const isSearch = computed(() => {
      return Object.keys(slots).includes('search') 
    })

    const isCreateButton = computed(() => {
      return Object.keys(slots).includes('createButton')
    })

    const isMutilpBtns = computed(() => {
      return Object.keys(slots).includes('multipleBtns')
    })

    const isShowLeftFilter = computed(() => {
      return (
        props?.createButtonOptions?.show ||
        unref(isCreateButton) ||
        props?.multipleActionOptions?.show ||
        unref(isMutilpBtns)
      )
    })

    const isShowRightFilter = computed(() => {
      return (
        props?.searchOptions?.show ||
        unref(isSearch) ||
        Object.keys(slots).includes('tableActive')
      )
    })

    const className = computed(() => {
      const classNames = [tableHeaderPrefixClas]
      return classNames;
    })
    
    const selectValue = computed({
      get: () => {
        const { typeList, loading } = props.searchOptions || {}
        const { defaultValue } = props?.searchOptions?.selectOptions || {}
        if (!props.selectValue && typeList) {
          selectedItem.value = typeList[0]
        }
        return props.selectValue || (!loading ? defaultValue : undefined) || typeList[0]?.value
      },
      set: (val) => {
        selectedItem.value = unref(searchOptions)?.typeList?.find((item: any)=> item.value === val)
        textValue.value = ''
        validatorResult.value = {
          result: true,
          tip: ''
        }
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

    const updateSearchOptions = (searchOptions: SearchOptions) => {
      const cloneSearchOptions = deepMerge({inputOptions: {
        validatorTrigger: 'all'
      }}, cloneDeep(searchOptions))
      if (cloneSearchOptions) {
        const newSearchOptions = {
          ...cloneSearchOptions
        }
        if (newSearchOptions.inputOptions?.placeholder) {
          if (isFunction(newSearchOptions.inputOptions.placeholder)) {
            newSearchOptions.inputOptions.placeholder = newSearchOptions.inputOptions.placeholder(unref(selectedItem))
          }
        }
        searchOptionsRef.value = newSearchOptions
      }
    }
    const searchOptions = computed(() => {
      if (props.searchOptions) {
        updateSearchOptions(cloneDeep(props.searchOptions))
      }
      return props.searchOptions
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

    const resetSearch = () => {
      textValue.value = ''
      selectValue.value = ''
    }

    const resetMutilp = () => {
      multipleValue.value = ''
    } 

    const clearAll = () => {
      resetMutilp()
      resetMutilp()
    }

    const validatorInputValue = () => {
      const { inputOptions } = unref(searchOptionsRef)
      if (inputOptions?.validator) {
        if (isFunction(inputOptions?.validator)) {
          const { result, tip } = inputOptions.validator(unref(selectedItem), unref(textValue))
          validatorResult.value = {
            result,
            tip
          }
        }
      }
    }

    const updateTextValue = () => {
      const { inputOptions } = unref(searchOptionsRef)
      if (['all', 'change'].includes(inputOptions?.validatorTrigger)) {
        if (unref(textValue)) {
          validatorInputValue()
        } else {
          validatorResult.value = {
            result: true,
            tip: ''
          }
        }
      }
      emit('update:textValue', unref(textValue))
    }

    const onSearch = (val:string) => {
      const { inputOptions } = unref(searchOptionsRef)
      if (['all', 'search'].includes(inputOptions?.validatorTrigger)) {
        if (unref(textValue)) {
          validatorInputValue()
        } else {
          validatorResult.value = {
            result: true,
            tip: ''
          }
        }
      }
      const { result } = unref(validatorResult)
      // console.log('result: ', result);
      if (!result) {
        return false
      }
      emit('searchClick', { value: unref(val), type: unref(selectValue) })
    }

    expose({
      resetMutilp,
      resetSearch,
      clearAll
    })

    return {
      createButtonOptions,
      multipleActionOptions,
      searchOptions,
      searchOptionsRef,
      isSearch,
      isCreateButton,
      isMutilpBtns,
      className,
      selectValue,
      textValue,
      basePrefixCls,
      isShowLeftFilter,
      isShowRightFilter,
      multipleValue,
      newProps,
      validatorResult,
      transformPxtoRem,
      createHandle,
      radioHandle,
      onSearch,
      updateTextValue,
    }
  },
})

</script>
