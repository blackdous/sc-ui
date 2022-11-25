import { ref, ComputedRef, unref, computed, watch } from 'vue'
import type { TableProps } from '../types/table'

export function useLoading(props: ComputedRef<TableProps>) {
  const loadingRef = ref(unref(props).loading);

  watch(
    () => unref(props).loading,
    (loading) => {
      loadingRef.value = loading;
    },
  );

  const getLoading = computed(() => unref(loadingRef));

  function setLoading(loading: boolean) {
    loadingRef.value = loading;
  }

  return { getLoading, setLoading };
}
