<template>
  <Tag>

  </Tag>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Tag } from 'ant-design-vue'

const FilterTagsProps = () => ({
  filteredInfo: {
      required: true,
      type: Object,
      default: () => ({}),
      deep: true
    },
    getColumns: {
      required: true,
      type: [Function, Array]
    }
})

export default defineComponent({
  name: 'FilterTags',
  inheritAttrs: false,
  props: FilterTagsProps(),
  components: {
    Tag
  },
  setup(props) {

  }
})
</script>
