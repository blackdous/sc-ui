<template>
  <AutoComplete
    v-bind="newProps"
    v-model:value="value"
    :allowClear="false"
    @dropdownVisibleChange="handleDropdownVisibleChange"
  >
    <!-- @focus="handleFocus" -->
    <template #[item]="data" v-for="item in slotsKeys" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #options v-if="!$slots.options">
      <template
        v-if="!newProps.isGroup"
        v-for="item in optionsComp"
        :key="item.value"
      >
        <SelectOption
          v-if="item.parseHightHtml"
          :label="item.label"
          :value="item.value"
        >
          <span v-html="item.parseHightHtml" v-if="searchText">
          </span>
          <span v-else>
            {{ item.value }}
          </span>
        </SelectOption>
      </template>
      <template v-else>
        <SelectOptGroup
          v-for="item in optionsComp"
          :key="item.value"
        >
            <template #label>
              <Divider orientation="left" class="scAutoComplete-divider">
                {{ item.label }}
              </Divider>
            </template>
            <template
            v-for="selectItem in item.children"
            :key="item.value"
          >
            <SelectOption
              :label="selectItem.label"
              :value="selectItem.value"
            >
              <span v-html="selectItem.parseHightHtml" v-if="searchText">
              </span>
              <span v-else>
                {{ selectItem.value }}
              </span>
            </SelectOption>
          </template>
        </SelectOptGroup>
      </template>
    </template>
    <template #options v-else>
      <slot name="options"></slot>
    </template>
    <slot name="default" v-if="!$slots.default">
      <InputSearch
        :allowClear="newProps.allowClear"
      >
      </InputSearch>
    </slot>
    <slot name="default" v-if="$slots.default"></slot>
  </AutoComplete>
</template> 

<script lang='ts'>
import { defineComponent, ref, computed, nextTick, onBeforeUnmount, onMounted } from 'vue'
import { AutoComplete, InputSearch, SelectOption, SelectOptGroup, Divider } from 'ant-design-vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { props, AutoCompleteOptionsItem } from './type'
import { isFunction, buildUUID } from '../../../utils'
import { treeToList, filter } from '../../../utils/treeHelper'

export default defineComponent({
  name: 'ScAutoComplete',
  inheritAttrs: false,
  components: {
    AutoComplete,
    InputSearch,
    SearchOutlined,
    SelectOption,
    SelectOptGroup,
    Divider
  },
  emits: ['update:value', 'dropdownVisibleChange', 'focus'],
  props: props(),
  setup (props, { slots, attrs, emit }) {

    const uuid = buildUUID()

    const uuidClass = 'sc' + uuid

    const openRef = ref(false)

    const searchText = ref()

    let frameId = 0;

    const newProps = computed(() => {
      return {
        ...props,
        ...attrs,
        open: openRef.value || props.open,
        optionsSource: null,
        dropdownClassName: uuidClass + ' scAutoComplete-dropdown ' + props.dropdownClassName,
        onSearch: (val: string) => {
          if (isFunction(attrs.onSearch)) {
            attrs?.onSearch?.(val)
          }
          onSearch(val)
        },
        onSelect: (val: string) => {
          if (isFunction(attrs.onSelect)) {
            attrs?.onSelect?.(val)
          }
          onSelect(val)
        }
      }
    })

    const value = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        openRef.value = true
        emit('update:value', val)
      }
    })
    
    const slotsKeys = computed(() => {
      if (!slots.default) {
        return Object.keys(slots).filter(item => item === 'default')
      }
      return Object.keys(slots).filter(item => ['options', 'dataSource'].includes(item))
    })

    const optionsComp = computed(() => {
      const { isGroup } = props
      const val = searchText.value
      const regExp = new RegExp(val, 'g')
      if (isGroup) {
        const listOptions = treeToList(props.optionsSource).filter((item:any) => !item.children)
        const newOptions = listOptions?.filter((item: any) => item?.value?.includes(val)).map((item: any) => item.value)
        const newOptionsRef = filter(props.optionsSource || [], (item: any) => {
          if (newOptions.includes(item.value)) {
            item.parseHightHtml = item.value.replace(regExp, `<span style="color: #008CD3;">${val}</span>`)
          }
          return newOptions.includes(item.value)
        })
        return newOptionsRef
      } else {
        return props.optionsSource?.filter((item: AutoCompleteOptionsItem) => item?.value?.includes(val))?.map((item: AutoCompleteOptionsItem) => {
          item.parseHightHtml = item.value.replace(regExp, `<span style="color: #008CD3;">${val}</span>`)
          return item
        }) || []
      }
    })

    const onSearch = (val:string) => {
      searchText.value = val
      frameId = window?.requestAnimationFrame(() => {
        nextTick(() => {
          const virtualListDom = document.querySelector(`.${uuidClass} .rc-virtual-list-holder div`) as HTMLElement
          if (virtualListDom?.style?.height) {
            virtualListDom.style.marginRight = '4px'
          } else {
            virtualListDom && (virtualListDom.style.marginRight = '0')
          }
        })
      })
    }

    const onSelect = (val:string) => {
      searchText.value = val
    }

    const handleDropdownVisibleChange = (val:boolean) => {
      openRef.value = val
      emit('dropdownVisibleChange', val)
    }
    onMounted(() => {
      searchText.value = ''
    })
    onBeforeUnmount(() => {
      window.cancelAnimationFrame(frameId)
    })
    
    return {
      newProps,
      value,
      openRef,
      slotsKeys,
      searchText,
      optionsComp,
      uuidClass,
      // filterOptions,

      handleDropdownVisibleChange,
      onSearch
    }
  }
})
</script>
