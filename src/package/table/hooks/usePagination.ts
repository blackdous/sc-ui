import type { PaginationProps } from '../types/pagination';
// import type { TableProps } from '../types/table';
import { computed, unref, ref, ComputedRef, watch, h } from 'vue';
import { PAGE_SIZE } from '../../../constant';
import useLocale from '../../../hooks/useLocale'

const isBoolean = (source:any) => {
  return Object.prototype.toString.call(source) === '[object Boolean]'
}

export function usePagination(refProps: ComputedRef<Recordable>, props: Recordable) {
  const configRef = ref<PaginationProps>({});
  const show = ref(true);

  watch(
    () => props.pagination,
    (pagination) => {
      if (!isBoolean(pagination) && pagination) {
        configRef.value = {
          ...unref(configRef),
          // @ts-ignore
          ...(pagination ?? {}),
        };
      }
    },
    {
      deep: true
    }
  );
  const { curLocale } = useLocale()
  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination } = props;

    if (!unref(show) || (isBoolean(pagination) && !pagination)) {
      return false;
    }

    return {
      current: 1,
      pageSize: PAGE_SIZE,
      size: 'default',
      defaultPageSize: PAGE_SIZE,
      showTotal: (total) => `${curLocale?.total || '共'} ${total} ${curLocale?.item || '条'}`,
      itemRender: ({type, originalElement}) => {
        if (type === 'prev') {
          return h('i', { class: 'sc-ui sc-you' })
        } else if (type === 'next') {
          return h('i', { class: 'sc-ui sc-you' })
        } else {
          return originalElement
        }
  
      },
      showSizeChanger: true,
      // pageSizeOptions: PAGE_SIZE_OPTIONS,
      showQuickJumper: true,
      //@ts-ignore
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
