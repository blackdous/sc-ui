import { h } from "vue";
import type { ComputedRef, Ref } from 'vue';
import type { TableProps } from '../types/table';
import { computed, unref, ref, toRaw } from 'vue';

const ROW_KEY = 'key'

export const useTableExpand = (
  propsRef: ComputedRef<TableProps>,
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
    // use row ID expands the specified table row
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
    const { expandable, record, expanded, onExpand } = props;
    const { isTreeTable } = unref(propsRef);
    if ((expandable && record?.children?.length > 0) || isTreeTable) {
      return h('i', {
        class: `iconfont ${expanded ? 'icon-up-circle' : 'icon-down-circle'}`,
        onClick: (event: Event) => {
          onExpand(record, event);
        }
      })
    }
  }
  return {
    expandIconFnc, getExpandOption, expandAll, expandRows, collapseAll
  }
}