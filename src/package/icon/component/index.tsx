import { defineComponent, computed, unref } from 'vue'
import useIcon from '../../../hooks/useIcon'
const ScIconComponent = useIcon({})
{/* <template>
  <ScIconComponent
    v-bind="newProps"
    :type="newProps.type"
  />
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import useIcon from '../../../hooks/useIcon'
const ScIconComponent = useIcon({})

export default defineComponent({
  name: 'ScIcon',
  components: {
    ScIconComponent
  },
  props: {
    type: {
      type: String,
      require: true
    },
  },
  setup (props, { attrs }) {
    const newProps = computed(() => {
      return {
        ...attrs,
        ...props,
        class: [props.type, attrs.class].join('')
      }
    })
    return {
      newProps
    }
  }
})
</script> */}

function ScIcon () {
  return defineComponent({
    name: 'ScIcon',
    components: {
      ScIconComponent
    },
    props: {
      type: {
        type: String,
        require: true
      },
    },
    setup (props, { attrs }) {
      const newProps = computed(() => {
        return {
          ...attrs,
          ...props,
          class: [props.type, attrs.class].join('')
        }
      })
      // return {
      //   newProps
      // }
      return () => (
        <ScIconComponent
          type={unref(newProps).type || ''}
          style={unref(newProps).style || {}}
          class={unref(newProps).class || ''}
        />
      )
    }
  })
}

export default ScIcon()