<template>
  <div :class="className">
    <ConfigProvider :locale="newProps.langLocale">
      <Spin :spinning="false" v-if="isShowFilter">
        <TableFilter
          v-model:selectValue="selectValue"
          v-model:textValue="textValue"
          :createButtonOptions="createButtonOptions"
          :mutilpActionOptions="mutilpOptions"
          :serachOptions="serachOptions"
          @createClick="createHandle"
          @mutilpChange="mutilpChangeHandle"
          @serachClick="serachClickHandle"
          @selectChange="handleSelectChange"
          ref="tableFilter"
        >
          <template
            template
            #[item]="data"
            v-for="item in Object.keys($slots).filter((item) =>
              ['createButton', 'serach', 'mutilpBtns'].includes(item)
            )"
            :key="item"
          >
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
          <template #tableActive v-if="!isRableActive">
            <Tooltip
              v-if="activeOptions?.reload?.show"
              overlayClassName="scTooltip-white"
            >
              <template #title v-if="activeOptions?.reload?.showTooltip">
                {{ activeOptions?.reload.text }}
              </template>
              <Button
                :disabled="activeOptions?.reload?.isDisabled"
                @click="refresh"
              >
                <i class="iconfont icon-sync"></i>
              </Button>
            </Tooltip>
            <Tooltip
              v-if="activeOptions?.columnDialog?.show"
              overlayClassName="scTooltip-white"
            >
              <template #title v-if="activeOptions?.columnDialog?.showTooltip">
                {{ activeOptions?.columnDialog.text }}
              </template>
              <Button
                :disabled="activeOptions?.columnDialog?.isDisabled"
                @click="handleModal"
              >
                <i class="iconfont icon-setting"></i>
              </Button>
            </Tooltip>
          </template>
          <template #tableActive v-else>
            <slot name="tableActive"></slot>
          </template>
        </TableFilter>
      </Spin>
      <FilterTagsVue
        v-if="newProps.customFilter && newProps.filterTag"
        :columns="getFilterDropdownRef"
        @closeTag="handleCloseTag"
      ></FilterTagsVue>
      <Table
        size="small"
        ref="tableRef"
        v-bind="tableBindValue"
        :scroll="{ x: allOptions?.scroll?.x || 500 }"
        :expand-icon="expandIconFnc"
        @change="handleTableChange"
        >
        <template
          template
          #[item]="data"
          v-for="item in Object.keys($slots).filter(item => 
            ![...customComponentKey, 'renderEmpty'].includes(item)
          )"
          :key="item"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
        
        <template
          v-for="slotItem in tableBindValue.columns.filter((item: { type: any }) => !!item.type)"
          #[slotItem.type.componentName]="slotProps"
        >
          <component
            :is="getComponent(slotItem.type.componentName)"
            v-bind="{ ...slotProps, tableName: slotItem.type.componentName }"
            :key="slotItem.dataIndex"
            v-on="{...getEvent(slotItem.type.componentName)}"
          />
        </template>

        <template #action="{ record }">
          <slot v-if="isAction" slot="action" />
          <ScTableAction
            v-else
            name="action"
            :record="record"
            :fetchParams="fetchParams"
            v-bind="actionsOptions"
            @onAction="(action) => { handle(action, record) }"
          />
        </template>
        <template
          v-if="isCustomFilter"
          #filterDropdown="{
            confirm,
            column
          }"
        >
          <FilterDropDownVue
            :filterList="column.filterList || []"
            :overlayClassName="column.dataIndex + column.key"
            :column="column"
            :filterSelected="column.filterSelected"
            @filter="(item: FilterItem[], keys: string[]) => { filterDropDownClick(item, keys, confirm, column) }"
          >
          </FilterDropDownVue>
        </template>
        <template #filterIcon v-if="isCustomFilter">
          <FilterFilled></FilterFilled>
        </template>
      </Table>
      <ColumnDialogVue
        v-model:visible="visible"
        :columnList="columnList || getFilterColumnRef"
        @checkChange="checkedChange"
        @cancelModal="cancelModal"
        @okModal="okModal"
      >
      </ColumnDialogVue>
      <template #renderEmpty>
        <EmptyVue v-if="!isRenderEmpty"></EmptyVue>
        <slot name="renderEmpty" v-else></slot>
      </template>
    </ConfigProvider>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent, unref, onMounted, nextTick, toRaw } from 'vue'
import { Table, Tooltip, Button, Spin, ConfigProvider } from 'ant-design-vue'
import { FilterFilled } from '@ant-design/icons-vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
// import zhCN from 'ant-design-vue/es/locale/zh_CN.js'

import { basePrefixCls } from '../../../constans'
import TableFilter from './TableFilter.vue'
import ScTableAction, { ActionItemProps } from './TableAction.vue'
import FilterDropDownVue from './FilterDropDown.vue'
import ColumnDialogVue from './ColumnDialog.vue'
import EmptyVue from './Empty.vue'
import TdComponents from './Td'

//@ts-ignore
import { tableProps, ButtonType } from '../types/table'
import { Column, FilterItem } from '../types/column'
import { usePagination } from '../hooks/usePagination';
import { useTableExpand } from '../hooks/useTableExpand'
import { useFilter } from '../hooks/useFIlter'
import { useRowSelection } from '../hooks/useRowSelection'
import { useLoading } from '../hooks/useLoading'
import { useDataSource } from '../hooks/useDataSource'
import { useActions } from '../hooks/useActions'
import { useColumn } from '../hooks/uesColumn'
import isFunction from 'lodash/isFunction'
// import { Column } from '../types/column';

const tablePrefixCls = basePrefixCls + 'Table';

// const props = defineProps(tableProps())
// const emits = defineEmits(['onAction', 'tableChange', 'createClick', 'mutilpChange', 'filter'])

export default defineComponent({
  name: 'ScTable',
  inheritAttrs: false,
  props: tableProps(),
  components: {
    Table,
    Tooltip,
    Button,
    FilterFilled,
    TableFilter,
    ScTableAction,
    FilterDropDownVue,
    ColumnDialogVue,
    Spin,
    ConfigProvider,
    EmptyVue,
    ...TdComponents
    // Address,
    // Copy,
    // Ellipsis,
    // Status,
    // FilterTagsVue
  },
  setup(props, { attrs, slots, emit, expose }) {
    const tableRef = ref()
    const tableFilter = ref()
    const tableData = ref<Recordable[]>([])

    const textValue = ref()
    const selectValue = ref()
    
    const zhCN = ref({})
    const enUS = ref({})

    const fetchParams = ref<Recordable>({
      tableRef,
      mutilpValue: '',
      searchSelect: '',
      searchText: '',
      filters: {},
      selectedRowKeysRef: [],
      columns: [],
      pagination: {}
    })

    const newProps = computed(() => {
      return {
        ...props
      }
    })
    const visible = ref(false);

    const allOptions = computed(() => {
      return { ...props, ...attrs };
    });

    const { getLoading, setLoading } = useLoading(newProps);

    const {
      getPaginationInfo,
      setPagination,
      getPagination,
      setShowPagination,
      getShowPagination,
    } = usePagination(newProps);

    const {
      expandIconFnc,
      getExpandOption, 
      expandAll, 
      expandRows, 
      collapseAll,
    } = useTableExpand(newProps, tableData, emit)

    const {
      selectedRowKeysRef,
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      setSelectedRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,
    } = useRowSelection(newProps, tableData, emit)

    const {
      isShowFilter,
      createButtonOptions,
      mutilpOptions,
      serachOptions,
      getSerachOptions,
      setSerachOptions,
      getMutilpAction,
      setMutilpAction,
    } = useFilter(newProps, tableRef, selectedRowKeysRef)

    const {
      actionsOptions
    } = useActions(newProps, selectedRowKeysRef, fetchParams)

    const {
      customComponentKey,
      getDataSourceRef,
      getRowKey,
      getAutoCreateKey,
      handleTableChange: onTableChange,
      getEvent,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      reload,
      updateTableData,
    } = useDataSource(
      newProps,
      {
        tableData,
        getPaginationInfo,
        setLoading,
        setPagination,
        clearSelectedRowKeys,
      },
      emit,
    );

    const {
      // getColumnRef,
      getFilterDropdownRef,
      setFilterDropdownRef,
      clearFilterDropdownRef,
      getFilterColumnRef,
      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
    } = useColumn(newProps, fetchParams)

    const tableBindValue = computed(() => {
      const dataSource = unref(getDataSourceRef);
      fetchParams.value = {...unref(fetchParams), selectedRowKeysRef, pagination: getPaginationInfo}
      return {
        ...attrs,
        ...unref(newProps),
        columns: toRaw(unref(getFilterColumnRef)),
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        ...unref(getExpandOption),
        dataSource,
        loading: unref(getLoading),
        pagination: toRaw(unref(getPaginationInfo))
      }
    })
    const className = computed(() => {
      const classNames = [tablePrefixCls];
      return classNames;
    });

    const activeOptions = computed(() => {
      return props.activeOptions;
    });

    const isAction = computed(() => {
      return Object.keys(slots).includes('action');
    });
    const isRenderEmpty = computed(() => {
      return Object.keys(slots).includes('empty');
    });

    const isRableActive = computed(() => {
      return Object.keys(slots).includes('tableActive');
    });
    const isCustomFilter = computed(() => {
      return props.customFilter;
    });

    const getComponent = (type:string) => {
      // 预设组件
      if (unref(customComponentKey).includes(type)) {
        return type.charAt(0).toLocaleUpperCase() + type.slice(1)
      } else {
        // 不识别组件
        return type
      }
    }

    const handle = (action: ActionItemProps, record: any) => {
      if (isFunction(action.action)) {
        action.action({...unref(fetchParams), action, record})
        return false
      }
      emit('onAction', {...unref(fetchParams), action, record});
    };

    const handleSelectChange = (item: string) => {
      const selectItem = unref(serachOptions).typeList.find((_item: ButtonType) => item === _item.value)
      if (item) {
        fetchParams.value = {...unref(fetchParams), selectValue: item}
      }
      if (isFunction(selectItem.action)) {
        selectItem.action({...unref(fetchParams)})
      } else {
        emit('selectChange', {...unref(fetchParams)})
      }
    }

    const createHandle = () => {
      const options = unref(createButtonOptions)
      if (isFunction(options.action)) {
        options.action({...unref(fetchParams)})
      } else {
        emit('createClick', {...unref(fetchParams)})
      }
    };

    const handleTableChange = (
      ...args: any[]
      // pagination: PaginationProps,
      // filters: Partial<string[]>,
      // sorter: SorterResult,
      // //@ts-ignore
      // { currentDataSource }
    ) => {
      // @ts-ignore
      // setPagination(pagination);
      onTableChange.call(null, ...args)
      emit('change', ...args);
    };

    const mutilpChangeHandle = (value: any) => {
      fetchParams.value = {...unref(fetchParams), mutilpValue: value}
      if (isFunction(value.action)) {
        value.action(unref(fetchParams))
      } else {
        emit('mutilpChange', { ...unref(fetchParams) });
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    const filterDropDownClick = (
      items: FilterItem[],
      keys: string[],
      confirm: Function,
      column: any,
    ) => {
      confirm()
      setFilterDropdownRef(column, items)
      fetchParams.value = {
        ...unref(fetchParams),
        filters: {
          ...unref(fetchParams).filters,
          [column.dataIndex]: keys.length ? keys : undefined
        }
      }
      if (column.filterMultiple) {
        emit('filter', {
          imtes: items,
          column,
          fetchParams: unref(fetchParams),
          setLoading
        });
      } else {
        const item = items[0]
        if (isFunction(item?.action)) {
          item.action({
            filterItem: item,
            column,
            fetchParams: unref(fetchParams),
            setLoading
          })
        } else {
          emit('filter', {
            filterItem: item,
            column,
            fetchParams: unref(fetchParams),
            setLoading
          });
        }
      }
    };

    const handleCloseTag = (column: Column) => {
      clearFilterDropdownRef(column)
    }

    const handleModal = () => {
      visible.value = !visible.value;
    };
    //@ts-ignore
    const checkedChange = ({ keys}) => {
      console.log('keys: ', keys);
    }
    //@ts-ignore
    const cancelModal = ({ keys, checkedList }) => {
      const cancelModal = unref(newProps).cancelModal
      if (isFunction(cancelModal)) {
        cancelModal(keys, checkedList)
      }
    }
    //@ts-ignore
    const okModal = ({ keys, checkedList }) => {
      visible.value = false
      // console.log('keys: ', keys);
      setFilterColumnChecked(keys)
      const okModal = unref(newProps).okModal
      if (isFunction(okModal)) {
        okModal(keys, checkedList)
      }
    }

    const serachClickHandle = ({value, type}:any) => {
      const serach = unref(serachOptions)
      fetchParams.value = {...unref(fetchParams), searchSelect: type, searchText: value}
      if (isFunction(serach?.action)) {
        serach?.action({...unref(fetchParams)})
      } else {
        emit('serachClick', { ...unref(fetchParams) })
      }
    }

    const refresh = () => {
      const refresh = unref(activeOptions)
      if (isFunction(refresh?.reload?.action)) {
        refresh?.reload?.action({ ...unref(fetchParams) })
      } else {
        emit('refresh', { ...unref(fetchParams) })
      }
    }

    // watch([() => unref(textValue), () => unref(selectValue)], ([text, select]) => {
    //   if (text || select) {
    //     console.log('text: ', unref(text));
    //     console.log('select: ', unref(select));
    //   }
    // })

    onMounted(() => {
      nextTick(() => {
        fetchParams.value.tableRef = tableRef
      })
    })

    expose({
      getLoading,
      setLoading,

      setPagination,
      getPagination,
      setShowPagination,
      getShowPagination,

      expandAll, 
      expandRows, 
      collapseAll,
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      setSelectedRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,
      clearFilterDropdownRef,

      setSerachOptions,
      getSerachOptions,
      setMutilpAction,
      getMutilpAction,

      getDataSourceRef,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData,

      setFilterColumnRef,
      setFilterColumnChecked,
      setFilterColumnDisabled
      
    })

    return {
      enUS,
      zhCN,
      newProps,

      className,
      getLoading,
      allOptions,
      // columnList,
      visible,
      isRableActive,
      isCustomFilter,
      activeOptions,
      isAction,
      isRenderEmpty,

      getPaginationInfo,
      tableRef,
      tableFilter,

      tableBindValue,
      fetchParams,
      selectValue,
      textValue,

      mutilpOptions,
      createButtonOptions,
      serachOptions,
      actionsOptions,
      customComponentKey,
      getFilterColumnRef,
      isShowFilter,
      getFilterDropdownRef,

      handle,
      createHandle,
      handleModal,
      filterDropDownClick,
      mutilpChangeHandle,
      handleTableChange,
      checkedChange,
      expandIconFnc,
      serachClickHandle,
      getComponent,
      refresh,
      setFilterColumnRef,
      cancelModal,
      okModal,
      handleSelectChange,
      handleCloseTag,
      getEvent
    };
  },
});
</script>

<style lang="less"></style>
