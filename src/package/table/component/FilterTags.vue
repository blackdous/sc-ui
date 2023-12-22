<template>
  <div class="disFlex" v-if="isFilter">
    <template
      v-for="columnItem in filterList"
      :key="columnItem.dataIndex"
    >
      <Tag
        v-if="columnItem.filterSelected?.length"
        closable
        class="tag-filter"
        @close="onTagClose(columnItem)"
      >
        {{ columnItem.title || columnItem?.titleType?.props?.text }}
        <span
          v-for="(filterItem, index) in (columnItem.filterSelected || [])"
          :key="filterItem.key"
        >
          {{index !== 0 ? ';' : ''}}
          {{filterItem.label }}
        </span>
      </Tag>
    </template>
    <span v-if="isFilter" class="clearAll" @click="closeAll">{{curLocale?.cleanUp}}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, PropType } from 'vue'
import { Tag } from 'ant-design-vue'

import { Column } from '../types/column'
import useLocale from '../../../hooks/useLocale'

const FilterTagsProps = () => ({
  columns: {
    required: true,
    type: Array as PropType<Column[]>
  }
})

export default defineComponent({
  name: 'FilterTags',
  inheritAttrs: false,
  props: FilterTagsProps(),
  components: {
    Tag
  },
  setup(props, { emit }) {
    const filterList = computed(() => {
      return props.columns
    })

    const onTagClose = (...args: any[]) => {
      emit('closeTag', ...args)
    }
    const closeAll = (...args: any[]) => {
      emit('closeAll', ...args)
    }

    const isFilter = computed(() => {
      const flag = Boolean(props.columns?.find((item) => item.filterSelected?.length))
      return flag
    })

    const { curLocale } = useLocale()
    return {
      filterList,
      isFilter,
      curLocale,
      onTagClose,
      closeAll
    }
  }
})
</script>
