<template>
  <ScSelect
    @dropdown-visible-change="handleFetch"
    v-bind="$attrs"
    @change="handleChange"
    :options="getOptions"
    v-model:value="state"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #suffixIcon v-if="loading">
      <LoadingOutlined spin />
    </template>
    <template #notFoundContent v-if="loading">
      <span>
        <LoadingOutlined spin class="mr-1" />
        请等待数据加载完成...
      </span>
    </template>
  </ScSelect>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watchEffect, computed, unref, watch } from 'vue';
  import { ScSelect } from '../../select';
  import { isFunction, PropTypes } from '../../../utils';
  import { useRuleFormItem } from '../hooks/useFormItem';
  import { useAttrs } from '../../../hooks';
  import lodash from 'lodash'
  // import get from 'lodash/get'
  // import omit from 'lodash/omit'
  import { LoadingOutlined } from '@ant-design/icons-vue';

  type OptionsItem = { label: string; value: string; disabled?: boolean };
  const { get, omit } = lodash
  export default defineComponent({
    name: 'ApiSelect',
    components: {
      ScSelect,
      LoadingOutlined,
    },
    inheritAttrs: false,
    props: {
      value: [Array, Object, String, Number],
      numberToString: PropTypes.bool,
      api: {
        type: Function as PropType<(arg?: Recordable) => Promise<OptionsItem[]>>,
        default: null,
      },
      // api params
      params: {
        type: Object as PropType<Recordable>,
        default: () => ({}),
      },
      // support xxx.xxx.xx
      resultField: PropTypes.string.def(''),
      labelField: PropTypes.string.def('label'),
      valueField: PropTypes.string.def('value'),
      immediate: PropTypes.bool.def(true),
      alwaysLoad: PropTypes.bool.def(false),
    },
    emits: ['options-change', 'change', 'update:value'],
    setup(props, { emit }) {
      const options = ref<OptionsItem[]>([]);
      const loading = ref(false);
      const isFirstLoad = ref(true);
      const emitData = ref<any[]>([]);
      const attrs = useAttrs();

      // 嵌入在表单中，只需使用钩子绑定来执行表单验证
      const [state] = useRuleFormItem(props, 'value', 'change', emitData);

      const getOptions = computed(() => {
        const { labelField, valueField, numberToString } = props;

        return unref(options).reduce((prev, next: Recordable) => {
          if (next) {
            const value = next[valueField];
            prev.push({
              ...omit(next, [labelField, valueField]),
              label: next[labelField],
              value: numberToString ? `${value}` : value,
            });
          }
          return prev;
        }, [] as OptionsItem[]);
      });

      watchEffect(() => {
        props.immediate && !props.alwaysLoad && fetch();
      });
      watch(
        () => state.value,
        (v) => {
          emit('update:value', v);
        },
      );
      watch(
        () => props.params,
        () => {
          !unref(isFirstLoad) && fetch();
        },
        { deep: true },
      );

      async function fetch() {
        const api = props.api;
        if (!api || !isFunction(api)) return;
        options.value = [];
        try {
          loading.value = true;
          const res = await api(props.params);
          if (Array.isArray(res)) {
            options.value = res;
            emitChange();
            return;
          }
          if (props.resultField) {
            options.value = get(res, props.resultField) || [];
          }
          emitChange();
        } catch (error) {
          console.warn(error);
        } finally {
          loading.value = false;
        }
      }

      async function handleFetch(visible: boolean) {
        if (visible) {
          if (props.alwaysLoad) {
            await fetch();
          } else if (!props.immediate && unref(isFirstLoad)) {
            await fetch();
            isFirstLoad.value = false;
          }
        }
      }

      function emitChange() {
        emit('options-change', unref(getOptions));
      }

      function handleChange(_, ...args) {
        emitData.value = args;
      }

      return { state, attrs, getOptions, loading, handleFetch, handleChange };
    },
  });
</script>
