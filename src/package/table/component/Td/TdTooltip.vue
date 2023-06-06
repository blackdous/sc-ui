<template>
  <Tooltip
    :id="`tb_${String(index)}_${key}_tooltip`"
    placement="top"
  >
    <template #title v-if="tooltipDes">
      {{tooltipDes}}
    </template>
    <span 
      :class="className"
      @click="handle"
    >
      {{newProps.text}}
    </span>
  </Tooltip>
</template>

<script lang='ts'>
import { computed, defineComponent, watch, ref } from 'vue'
import { Tooltip } from 'ant-design-vue'

import TdCopy from './TdCopy.vue'
// import { isEmptyText } from '../../../../utils/is'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  tooltipDesKey: String,
  record: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  },
  index: {
    type: [String, Number],
    default: 0
  },
  key: {
    type: [String, Number],
    default: 0
  }
})
export default defineComponent({
  name: 'TdEllipsis',
  inheritAttrs: false,
  props: props(),
  components: {
    Tooltip,
    TdCopy
  },
  setup (props) {
    const handle = async () => {
      if (props?.column?.handle) {
        await props?.column?.handle()
      }
    }

    const tooltipDes = ref()

    watch(() => props.record, (val) => {
      // console.log('props: ', props.column.type.props.tooltipDesKey);
      // console.log('val: ', val);
      if (props.column.type.props.tooltipDesKey) {
        tooltipDes.value = val[props.column.type.props.tooltipDesKey]
      }
    }, {
      immediate: true,
      deep: true
    })
    
    const className = computed(() => {
      const names = ['tdTooltip']
      return names
    })

    const newProps = computed(() => {
      return {
        ...props,
        copyText: String(props.text) || props.text
      }
    })

    return {
      newProps,
      className,
      tooltipDes,
      handle,
      // isEmptyText
    }
  }
})


</script>

<style>
.tdEllipsisCon {
  display: flex;
  align-items: flex-end;
}
</style>
