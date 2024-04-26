<script lang="tsx">
  import type { DescriptionProps, DescInstance, DescItem } from './type'
  import type { DescriptionsProps } from 'ant-design-vue/es/descriptions/index'
  import type { CSSProperties, PropType, ExtractPropTypes } from 'vue'
  import { Descriptions } from 'ant-design-vue'
  import { isFunction, getSlot } from '../../../utils'
  import { useAttrs } from '../../../hooks'
  import { basePrefixCls } from '../../../constant'
  import { defineComponent, computed, ref, unref, toRefs, isReactive, isReadonly } from 'vue'
  import lodash from 'lodash'
  // import get from 'lodash/get'
  import CollapseContainer from './CollapseContainer.vue'

  declare type CollapseContainerProps = Partial<ExtractPropTypes<typeof CollapseContainer>> 
  
  const { get } = lodash
  const props = {
    useCollapse: { type: Boolean, default: true },
    title: { type: [String, Object]},
    size: {
      type: String,
      validator: (v:string) => ['small', 'default', 'middle', undefined].includes(v),
      default: 'small',
    },
    bordered: { type: Boolean, default: false },
    column: {
      type: [Number, Object] as PropType<number | Recordable>,
      default: () => {
        return { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      },
    },
    collapseOptions: {
      type: Object as PropType<CollapseContainerProps>,
      default: null,
    },
    schema: {
      type: Array as PropType<DescItem[]>,
      default: () => [],
    },
    data: { type: Object },
  };

  export default defineComponent({
    name: 'ScDescription',
    props,
    emits: ['register'],
    setup(props, { slots, emit }) {
      const propsRef = ref<Partial<DescriptionProps> | null>(null);

      const prefixCls = basePrefixCls + 'Description'
      const attrs = useAttrs();

      // Custom title component: get title
      const getMergeProps = computed(() => {
        return {
          ...props,
          ...(unref(propsRef) as Recordable),
        } as DescriptionProps;
      });

      const useWrapper = computed(() => !!unref(getMergeProps).useCollapse);

      const getProps = computed(() => {
        const opt = {
          ...unref(getMergeProps),
          title: unref(useWrapper) ? undefined : unref(getMergeProps).title
        };
        return opt as DescriptionProps;
      });

      const getCollapseOptions = computed((): CollapseContainerProps => {
        return {
          // Cannot be expanded by default
          canExpand: unref(useWrapper) ?? true,
          ...unref(getProps).collapseOptions,
        };
      });

      const getDescriptionsProps = computed(() => {
        return { ...unref(attrs), ...unref(getProps) } as DescriptionsProps;
      });

      /**
       * @description:设置desc
       */
      function setDescProps(descProps: Partial<DescriptionProps>): void {
        // Keep the last setDrawerProps
        propsRef.value = { ...(unref(propsRef) as Recordable), ...descProps } as Recordable;
      }

      // Prevent line breaks
      function renderLabel({ label, labelMinWidth, labelStyle }: DescItem) {
        if (!labelStyle && !labelMinWidth) {
          return label;
        }

        const labelStyles: CSSProperties = {
          ...labelStyle,
          minWidth: `${labelMinWidth}px `,
        };
        return <div style={labelStyles}>{label}</div>;
      }

      function renderItem() {
        const { schema, data } = unref(getProps);
        return unref(schema)
          .map((item) => {
            const { render, field, span, show, contentMinWidth } = item;

            if (show && isFunction(show) && !show(data)) {
              return null;
            }
            const getContent = () => {
              const _data = unref(getProps)?.data;
              // console.log('_data: ', _data);
              if (!_data) {
                return null;
              }
              const getField = get(_data, field);
              const isProxy = isReactive(_data) || isReadonly(_data);
              if (getField && (!(isProxy ? toRefs(_data) : _data).hasOwnProperty(field))) {
                return isFunction(render) ? render('', _data) : '';
              }
              return isFunction(render) ? render(getField, _data) : getField ?? '';
            };

            const width = contentMinWidth;
            return (
              <Descriptions.Item label={renderLabel(item)} key={field} span={span}>
                {() => {
                  if (!contentMinWidth) {
                    return getContent();
                  }
                  const style: CSSProperties = {
                    minWidth: `${width}px`,
                  };
                  return <div style={style}>{getContent()}</div>;
                }}
              </Descriptions.Item>
            );
          })
          .filter((item) => !!item);
      }

      const renderDesc = () => {
        const isTitle = Object.keys(slots).includes('title')
        const isDefault = Object.keys(slots).includes('default')
        const layoutClass = attrs.value?.layout ? `${prefixCls}-${attrs.value?.layout}`  : ''
        return (
          <Descriptions 
            class={`${prefixCls} ${layoutClass}`} {...(unref(getDescriptionsProps) as any)}
            v-slots={{
              [isTitle && !unref(useWrapper) ? 'title' : '']: () => (isTitle && !unref(useWrapper) ? getSlot(slots, 'title') : null),
              [isDefault ? 'default' : '']: () => (isDefault ? getSlot(slots, 'default') : null)
            }}
          >
            { renderItem()}
          </Descriptions>
        );
      };

      const renderContainer = () => {

        const { canExpand, describe } = unref(getCollapseOptions);
        const { title } = unref(getMergeProps);

        const isTitle = Object.keys(slots).includes('title')

        return (
          <CollapseContainer title={title} canExpan={canExpand} describe={describe}>
            {{
              default: () => renderDesc(),
              action: () => getSlot(slots, 'action'),
              [isTitle ? 'title' : '']: () => (isTitle ? getSlot(slots, 'title') : null)
            }}
          </CollapseContainer>
        );
      };
      // title: () => (isTitle ? getSlot(slots, 'title') : undefined)
      // title: () => getSlot(slots, 'title')

      const methods: DescInstance = {
        setDescProps,
      };

      emit('register', methods);
      return () => (unref(useWrapper) ? renderContainer() : renderDesc());
    },
  });
</script>