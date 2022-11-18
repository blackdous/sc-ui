import type { PaginationProps } from '../component/types/pagination';
import type { TableProps } from '../component/types/table';
import { computed, unref, ref, ComputedRef, watch } from 'vue';
import { PAGE_SIZE } from '../../../constans';

const isBoolean = (source:any) => {
  return Object.prototype.toString.call(source) === '[object Boolean]'
}

export function usePagination(refProps: ComputedRef<TableProps>) {
  const configRef = ref<PaginationProps>({});
  const show = ref(true);

  watch(
    () => unref(refProps).pagination,
    (pagination) => {
      if (!isBoolean(pagination) && pagination) {
        configRef.value = {
          ...unref(configRef),
          ...(pagination ?? {}),
        };
      }
    },
  );

  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination } = unref(refProps);

    if (!unref(show) || (isBoolean(pagination) && !pagination)) {
      return false;
    }

    return {
      current: 1,
      pageSize: PAGE_SIZE,
      size: 'default',
      defaultPageSize: PAGE_SIZE,
      showTotal: (total) => `共 ${total} 条`,
      showSizeChanger: true,
      // pageSizeOptions: PAGE_SIZE_OPTIONS,
      showQuickJumper: true,
      ...(isBoolean(pagination) ? {} : pagination),
      ...unref(configRef),
    };
  });

  function setPagination(info: Partial<PaginationProps>) {
    const paginationInfo = unref(getPaginationInfo);
    configRef.value = {
      // @ts-ignore
      ...(!isBoolean(paginationInfo) ? paginationInfo : {}),
      ...info,
    };
  }

  function getPagination() {
    return unref(getPaginationInfo);
  }

  function getShowPagination() {
    return unref(show);
  }

  async function setShowPagination(flag: boolean) {
    show.value = flag;
  }

  return { getPagination, getPaginationInfo, setShowPagination, getShowPagination, setPagination };
}
