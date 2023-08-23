import { isFunction } from '../../../utils/is';
import type { TableRowSelection } from '../types/table';
import { computed, ComputedRef, nextTick, Ref, ref, toRaw, unref, watch } from 'vue';
import { ROW_KEY, SELECTION_ROW_KEY } from '../../../constant';
// import omit from 'lodash/omit'
import lodash from 'lodash'
import { findNodeAll } from '../../../utils/treeHelper'

const { omit } = lodash

export function useRowSelection(
  propsRef: ComputedRef<Recordable>,
  tableData: Ref<Recordable[]>,
  emit: EmitType,
  props: Recordable
) {
  const selectedRowKeysRef = ref<string[]>([]);
  const selectedRowRef = ref<Recordable[]>([]);

  const getRowSelectionRef = computed((): TableRowSelection | null => {
    const { rowSelection } = props;
    if (!rowSelection) {
      return null;
    }

    return {
      selectedRowKeys: unref(selectedRowKeysRef),
      onChange: (selectedRowKeys: string[]) => {
        setSelectedRowKeys(selectedRowKeys)
      },
      ...omit(rowSelection, ['onChange']),
    };
  });

  // watch(
  //   () => unref(propsRef).rowSelection?.selectedRowKeys,
  //   (v: string[]) => {
  //     setSelectedRowKeys(v);
  //   },
  // );

  watch(
    () => selectedRowKeysRef.value,
    () => {
      nextTick(() => {
        const { rowSelection } = props;
        if (rowSelection) {
          const { onChange } = rowSelection;
          if (onChange && isFunction(onChange)) onChange(getSelectRowKeys(), getSelectRows());
        }
        emit('selection-change', {
          keys: getSelectRowKeys(),
          rows: getSelectRows(),
        });
      });
    },
    { deep: true },
  );

  const getAutoCreateKey = computed(() => {
    return props.autoCreateKey && !props.rowKey;
  });

  const getRowKey = computed(() => {
    const { rowKey } = props;
    return unref(getAutoCreateKey) ? ROW_KEY : isFunction(rowKey) ? SELECTION_ROW_KEY : rowKey;
  });

  function setSelectedRowKeys(rowKeys: string[]) {
    selectedRowKeysRef.value = rowKeys;
    const allSelectedRows = findNodeAll(
      toRaw(unref(tableData)).concat(toRaw(unref(selectedRowRef))),
      (item) => rowKeys.includes(item[unref(getRowKey) as string]),
      {
        children: props.childrenColumnName ?? 'children',
      },
    );
    const trueSelectedRows: any[] = [];
    rowKeys.forEach((key: string) => {
      const found = allSelectedRows.find((item) => item[unref(getRowKey) as string] === key);
      found && trueSelectedRows.push(found);
    });
    selectedRowRef.value = trueSelectedRows;
  }

  function setSelectedRows(rows: Recordable[]) {
    selectedRowRef.value = rows;
  }

  function clearSelectedRowKeys() {
    selectedRowRef.value = [];
    selectedRowKeysRef.value = [];
  }

  function deleteSelectRowByKey(key: string) {
    const selectedRowKeys = unref(selectedRowKeysRef);
    const index = selectedRowKeys.findIndex((item) => item === key);
    if (index !== -1) {
      unref(selectedRowKeysRef).splice(index, 1);
    }
  }

  function getSelectRowKeys() {
    return unref(selectedRowKeysRef);
  }

  function getSelectRows<T = Recordable>() {
    // const ret = toRaw(unref(selectedRowRef)).map((item) => toRaw(item));
    const { rowKey } = props;
    return unref(selectedRowRef).map((item: any) => {
      if (isFunction(rowKey)) {
        Reflect.deleteProperty(item, SELECTION_ROW_KEY)
      }
      return item
    }) as T[];
  }

  function getRowSelection() {
    return unref(getRowSelectionRef)!;
  }

  return {
    selectedRowKeysRef,
    selectedRowRef,
    getRowSelection,
    getRowSelectionRef,
    getSelectRows,
    getSelectRowKeys,
    setSelectedRowKeys,
    clearSelectedRowKeys,
    deleteSelectRowByKey,
    setSelectedRows,
  };
}
