// @ts-nocheck
import { defineComponent, h } from 'vue'
import { ScEllipsis } from '../../ellipsis'
export default defineComponent({
  name: 'NodeContent',
  setup() {
    const ns = 'scCascader-node'
    return {
      ns,
    }
  },
  render() {
    const { ns } = this
    const { node, panel } = this.$parent
    const { data, label } = node
    const { renderLabelFn, config } = panel
    const { nodeEllipsis } = config
    return nodeEllipsis?.open ? h(
      ScEllipsis, {
        style: {
          maxWidth: nodeEllipsis?.maxWidth || '240px',
          width: nodeEllipsis?.width || '240px'
        }
      }, [
        h(
          'span',
          { class: ns + '-label' },
          renderLabelFn ? renderLabelFn({ node, data }) : label
        )
      ]
    ) : h(
      'span',
      { class: ns + '-label' },
      renderLabelFn ? renderLabelFn({ node, data }) : label
    )
  },
})
