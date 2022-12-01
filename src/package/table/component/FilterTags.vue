<template>
  <template
    v-for="columnItem in filterList"
    :key="columnItem.dataIndex"
  >
    <Tag
      v-for="filterItem in (columnItem.filterSelected || [])"
      closable
      class="tag-filter"
      @close="onTagClose(columnItem, filterItem)"
    >
      {{ columnItem.title }} :  {{ filterItem.label }}
    </Tag>
  </template>
</template>

<script lang='ts'>
import { defineComponent, computed, PropType } from 'vue'
import { Tag } from 'ant-design-vue'

import { Column } from '../types/column'

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
      console.log('...args: ', ...args);
      emit('closeTag', ...args)
    }

    return {
      filterList,
      onTagClose
    }
  }
})
</script>
