<template>
  <div class="text-center">
    <Pagination
      v-bind="pagination"
      v-model:current="current"
      v-model:page-size="pageSize"
    >
  
    </Pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import { Pagination } from 'ant-design-vue'

export default defineComponent({
  name: 'basic',
  inheritAttrs: false,
  components: {
    Pagination
  },
  setup () {
    const current = ref(1)
    const pageSize = ref(10);
    const pagination = ref({
      total: 100,
      current: 1,
      pageSize: 10,
      size: 'small',
      defaultPageSize: 10,
      showTotal: (total:string) => `共 ${total} 条`,
      itemRender: ({type, originalElement}:any) => {
        if (type === 'prev') {
          return h('i', { class: 'sc-ui sc-you' })
        } else if (type === 'next') {
          return h('i', { class: 'sc-ui sc-you' })
        } else {
          return originalElement
        }
  
      },
      showSizeChanger: true,
      // // pageSizeOptions: PAGE_SIZE_OPTIONS,
      showQuickJumper: true,
    })
    return {
      pagination,
      pageSize,
      current
    }
  }
})

</script>
<style scoped>
/* @import 'comment'; */
</style>