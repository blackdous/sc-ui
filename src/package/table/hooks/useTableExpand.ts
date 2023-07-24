import { h } from "vue";
import type { ComputedRef, Ref } from 'vue';
// import type { TableProps } from '../types/table';
import { computed, unref, ref, toRaw } from 'vue';

const ROW_KEY = 'key'

export const useTableExpand = (
  propsRef: ComputedRef<Recordable>,
  tableData: Ref<Recordable[]>,
  emit: EmitType
  ) => {
  const expandedRowKeys = ref<string[]>([]);

  const getAutoCreateKey = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });

  const getRowKey = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });

  const getExpandOption = computed(() => {
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable) return {};

    return {
      expandedRowKeys: unref(expandedRowKeys),
      onExpandedRowsChange: (keys: string[]) => {
        expandedRowKeys.value = keys;
        emit('expanded-rows-change', keys);
      },
    };
  });

  function expandAll() {
    const keys = getAllKeys();
    expandedRowKeys.value = keys;
  }

  function expandRows(keys: string[]) {
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable) return;
    expandedRowKeys.value = [...expandedRowKeys.value, ...keys];
  }

  function getAllKeys(data?: Recordable[]) {
    const keys: string[] = [];
    const { childrenColumnName } = unref(propsRef);
    toRaw(data || unref(tableData)).forEach((item) => {
      keys.push(item[unref(getRowKey) as string]);
      const children = item[childrenColumnName || 'children'];
      if (children?.length) {
        keys.push(...getAllKeys(children));
      }
    });
    return keys;
  }

  function collapseAll() {
    expandedRowKeys.value = [];
  }

  const expandIconFnc = (props:any) => {
    const {record, expanded, onExpand } = props;
    const { isTreeTable } = unref(propsRef);
    if (isTreeTable) {
      if (record?.children?.length > 0) {
        return h('i', {
          class: `sc-ui sc-a-chevron-rightdouble ${expanded ? 'icon-downArrow' : 'icon-upArrow'}`,
          onClick: (event: Event) => {
            onExpand(record, event);
          }
        })
      } else {
        return h('span', {
          class: `ant-table-row-indent`
        })
      }
    }
  }
  return {
    expandIconFnc, getExpandOption, expandAll, expandRows, collapseAll
  }
}