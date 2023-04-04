import type { TableProps, TableActionType, FetchParams, BasicColumn, SearchOptions, MultipleActionOptions } from '../types/table'
import type { Column } from '../types/column'
import type { PaginationProps } from '../types/pagination'
import type { DynamicProps } from '../../../../types/utils'
import type { WatchStopHandle } from 'vue'
import { getDynamicProps } from '../../../utils'
import { ref, onUnmounted, unref, watch, toRaw } from 'vue'

type Props = Partial<DynamicProps<TableProps>>;

// type UseTableMethod = TableActionType & {
//   getForm: () => FormActionType;
// };

export function useTable(tableProps?: Props): [
  (instance: TableActionType) => void,
  TableActionType
  // TableActionType & {
  //   getForm: () => FormActionType;
  // },
] {
  const tableRef = ref<Nullable<TableActionType>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);
  // const formRef = ref<Nullable<UseTableMethod>>(null);

  let stopWatch: WatchStopHandle;

  function register(instance: TableActionType) {
    onUnmounted(() => {
      tableRef.value = null;
      loadedRef.value = null;
    });

    if (unref(loadedRef) && instance === unref(tableRef)) return;

    tableRef.value = instance;
    // formRef.value = formInstance;
    tableProps && instance.setProps(getDynamicProps(tableProps));
    loadedRef.value = true;

    stopWatch?.();

    stopWatch = watch(
      () => tableProps,
      () => {
        tableProps && instance.setProps(getDynamicProps(tableProps));
      },
      {
        immediate: true,
        deep: true,
      },
    );
  }

  function getTableInstance(): TableActionType {
    const table = unref(tableRef);
    if (!table) {
      console.error(
        'The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!',
      );
    }
    return table as TableActionType;
  }

  const methods: TableActionType = {
    reload: async (opt?: FetchParams) => {
      return await getTableInstance().reload(opt);
    },
    setProps: (props: Partial<TableProps>) => {
      getTableInstance().setProps(props);
    },
    setSelectedRows: (rows: Recordable[]) => {
      return toRaw(getTableInstance().setSelectedRows(rows));
    },
    setLoading: (loading: boolean) => {
      getTableInstance().setLoading(loading);
    },
    getDataSource: () => {
      return getTableInstance().getDataSource();
    },
    getRawDataSource: () => {
      return getTableInstance().getRawDataSource();
    },
    getColumns: ({ ignoreIndex = false }: { ignoreIndex?: boolean } = {}) => {
      const columns = getTableInstance().getColumns({ ignoreIndex }) || [];
      return toRaw(columns);
    },
    setColumns: (columns: BasicColumn[]) => {
      getTableInstance().setColumns(columns);
    },
    setTableData: (values: any[]) => {
      return getTableInstance().setTableData(values);
    },
    setPagination: (info: Partial<PaginationProps>) => {
      return getTableInstance().setPagination(info);
    },
    deleteSelectRowByKey: (key: string) => {
      getTableInstance().deleteSelectRowByKey(key);
    },
    getSelectRowKeys: () => {
      return toRaw(getTableInstance().getSelectRowKeys());
    },
    getSelectRows: () => {
      return toRaw(getTableInstance().getSelectRows());
    },
    clearSelectedRowKeys: () => {
      getTableInstance().clearSelectedRowKeys();
    },
    setSelectedRowKeys: (keys: string[] | number[]) => {
      getTableInstance().setSelectedRowKeys(keys);
    },
    getPaginationRef: () => {
      return getTableInstance().getPaginationRef();
    },
    // getSize: () => {
    //   return toRaw(getTableInstance().getSize());
    // },
    updateTableData: (index: number, key: string, value: any) => {
      return getTableInstance().updateTableData(index, key, value);
    },
    deleteTableDataRecord: (rowKey: string | number | string[] | number[]) => {
      return getTableInstance().deleteTableDataRecord(rowKey);
    },
    insertTableDataRecord: (record: Recordable | Recordable[], index?: number) => {
      return getTableInstance().insertTableDataRecord(record, index);
    },
    updateTableDataRecord: (rowKey: string | number, record: Recordable) => {
      return getTableInstance().updateTableDataRecord(rowKey, record);
    },
    findTableDataRecord: (rowKey: string | number) => {
      return getTableInstance().findTableDataRecord(rowKey);
    },
    getRowSelection: () => {
      return toRaw(getTableInstance().getRowSelection());
    },
    // clearFilterDropdownRef,
    // setSearchOptions,
    // setMutilpAction,
    // setFilterColumnRef,
    // setFilterColumnChecked,
    // setFilterColumnDisabled
    clearFilterDropdownRef: (column: Column) => {
      return toRaw(getTableInstance().clearFilterDropdownRef(column));
    },
    setSearchOptions: (searchOptions: SearchOptions) => {
      return toRaw(getTableInstance().setSearchOptions(searchOptions));
    },
    setMultipleAction: (multipleActionOptions: MultipleActionOptions) => {
      return toRaw(getTableInstance().setMultipleAction(multipleActionOptions));
    },
    setFilterColumnRef: (columns: Column[]) => {
      return toRaw(getTableInstance().setFilterColumnRef(columns));
    },
    setFilterColumnChecked: (colKeys: string[] | number[]) => {
      return toRaw(getTableInstance().setFilterColumnChecked(colKeys));
    },
    setFilterColumnDisabled: (colKeys: string[] | number[]) => {
      return toRaw(getTableInstance().setFilterColumnDisabled(colKeys));
    },
    // getCacheColumns: () => {
    //   return toRaw(getTableInstance().getCacheColumns());
    // },
    // getForm: () => {
    //   return unref(formRef) as unknown as FormActionType;
    // },
    setShowPagination: async (show: boolean) => {
      getTableInstance().setShowPagination(show);
    },
    getShowPagination: () => {
      return toRaw(getTableInstance().getShowPagination());
    },
    expandAll: () => {
      getTableInstance().expandAll();
    },
    expandRows: (keys: string[]) => {
      getTableInstance().expandRows(keys);
    },
    collapseAll: () => {
      getTableInstance().collapseAll();
    }
  };

  return [register, methods];
}
