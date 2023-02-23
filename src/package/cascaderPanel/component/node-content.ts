// @ts-nocheck
import { defineComponent, h } from 'vue'
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
    const { renderLabelFn } = panel
    return h(
      'span',
      { class: ns + '-label' },
      renderLabelFn ? renderLabelFn({ node, data }) : label
    )
  },
})
