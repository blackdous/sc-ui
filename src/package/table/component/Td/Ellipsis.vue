<template>
  <Tooltip
    v-if="isEmptyText(newProps.text)"
    overlayClassName="scTooltip-white"
    :id="`tb_${index}_${key}_ellipsis`"
  >
    <template #title>
      {{newProps.text}}
    </template>
    <div class="tdEllipsisCon" @click="handle">
      <p 
        :class="className"
        :style="{width: newProps.column.width - 32 + 'px', '-webkit-line-clamp': newProps.column.type.props.lineheigth}"
      >
        {{newProps.text}}
      </p>
    </div>
  </Tooltip>
  <span v-else>
    {{ '--' }}
  </span>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { Tooltip } from 'ant-design-vue'
import { isEmptyText } from '../../../../utils/is'

const props = () =>({
  column: {
    type: Object,
    default: () => ({})
  },
  record: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: [String, Number],
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
  key: {
    type: String,
    default: 0
  }
})
export default defineComponent({
  name: 'Ellipsis',
  inheritAttrs: false,
  props: props(),
  components: {
    Tooltip
  },
  setup (props) {
    const handle = async () => {
      if (props?.column?.handle) {
        await props?.column?.handle()
      }
    }
    
    const className = computed(() => {
      const names = ['tdEllipsis']
      const { column } = props
      if (column.type.componentName === 'ellipsis') {
        names.push('ellipsisText')
      }
      return names
    })

    const newProps = computed(() => {
      return props
    })

    return {
      newProps,
      className,
      handle,
      isEmptyText
    }
  }
})


</script>
