import { h } from "vue";

export const useTable = () => {
  const expandIconFnc = (props:any) => {
    const { expandable, record, expanded, onExpand } = props;
    if (expandable && record.children.length > 0) {
      return h('i', {
        class: `iconfont ${expanded ? 'icon-up-circle' : 'icon-down-circle'}`,
        onClick: (event: Event) => {
          onExpand(record, event);
        }
      })
    }
  }
  return {
    expandIconFnc
  }
}