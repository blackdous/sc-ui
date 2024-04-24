import { scrollTo, waitElementReady } from '../../utils/uiUtil';
import { useInjectPanel } from '../../PanelContext';
import classNames from '../../../../utils/classNames';
import { ref, onBeforeUnmount, watch, defineComponent, nextTick, onMounted } from 'vue';
// import { debounce } from 'lodash';
import lodash from 'lodash'

const { debounce } = lodash

export type Unit = {
  label: any;
  value: number;
  disabled: boolean;
};

export type TimeUnitColumnProps = {
  prefixCls?: string;
  units?: Unit[];
  value?: number;
  active?: boolean;
  hideDisabledOptions?: boolean;
  onSelect?: (value: number) => void;
};

export default defineComponent<TimeUnitColumnProps>({
  name: 'TimeUnitColumn',
  props: ['prefixCls', 'units', 'onSelect', 'value', 'active', 'hideDisabledOptions'] as any,
  setup(props) {
    const { open } = useInjectPanel();

    const ulRef = ref<HTMLUListElement>(null);
    const liRefs = ref<Map<number, HTMLElement | null>>(new Map());
    const scrollRef = ref<Function>();
    let notScroll = false;
    let isDefault = true;

    watch(
      () => props.value,
      () => {
        const li = liRefs.value.get(props.value!);
        notScroll = true
        //@ts-ignore
        if (li && open.value !== false) {
          //@ts-ignore
          scrollTo(ulRef.value!, li.offsetTop - 100, 120);
        }
        const timer = setTimeout(() => {
          notScroll = false
          clearTimeout(timer)
        }, 300)
      },
    );
    onBeforeUnmount(() => {
      scrollRef.value?.();
    });

    const scrollUrl = debounce((event: any) => {
      const { onSelect } = props;
      const ulRefOffsetTop = event?.target?.scrollTop || 0
      if (!notScroll && !isDefault) {
        let keyValue = props.value
        const oldKeyValue = props.value
        // let lastOffsetTop = 0
        let lastValue = 0
        const ulHeight = ulRef.value.scrollHeight - 196 - 96 - 20
        // console.log('ulRefOffsetTop > ulHeight: ', ulRefOffsetTop > ulHeight);
        // if (ulRefOffsetTop > ulHeight) {
        //   // @ts-ignore
        //   const lastLiRef = (Array?.from(liRefs.value).pop())?.[1] as HTMLElement
        //   // @ts-ignore
        //   const lastValue = parseInt(lastLiRef?.textContent)
        //   notScroll = true
        //   const timer = setTimeout(() => {
        //     //@ts-ignore
        //     scrollTo(ulRef.value!, (lastValue || 1) * 30, 40)
        //     //@ts-ignore
        //     notScroll = false
        //     clearTimeout(timer)
        //   }, 300)
        //   return false
        // }
        // // console.log('ulHeight: ', ulHeight);
        liRefs.value && liRefs.value.forEach((liRef: any) => {
          const liRefOffsetTop = liRef?.offsetTop - 100
          if ((liRefOffsetTop - 15) < ulRefOffsetTop &&  ulRefOffsetTop < (liRefOffsetTop + 15)) {
            keyValue = parseInt(liRef.textContent)
          }
          lastValue = parseInt(liRef.textContent)
          // lastOffsetTop = liRef.offsetTop - 100
        })
        if (oldKeyValue === keyValue) {
          if (ulRefOffsetTop > ulHeight) {
            notScroll = true
            // @ts-ignore
            scrollTo(ulRef.value!, (lastValue || 1) * 30, 80)
            notScroll = false
            return false
          }
          if (oldKeyValue !== -1 && keyValue !== -1) {
            // @ts-ignore
            scrollTo(ulRef.value!, (keyValue || 1) * 30, 80)
          }
        } else {
          // console.log('ulRefOffsetTop > ulHeight: ', ulRefOffsetTop > ulHeight);
          if (ulRefOffsetTop > ulHeight) {
            // @ts-ignore
            onSelect?.(lastValue)
            return false
          }
          // @ts-ignore
          onSelect?.(keyValue)
        }
      }
    }, 88)
    
    onMounted(() => {
      // @ts-ignore
      waitElementReady(ulRef.value, () => {
        ulRef.value.addEventListener('scroll', scrollUrl, {
        })
      })
    })
    
    //@ts-ignore
    watch(
      open,
      () => {
        scrollRef.value?.();
        nextTick(() => {
          // @ts-ignore
          if (open.value) {
            const li = liRefs.value.get(props.value!);
            if (li) {
              scrollRef.value = waitElementReady(li, () => {
                // @ts-ignore
                scrollTo(ulRef.value!, li.offsetTop - 100, 0)
              });
            }
            setTimeout(() => {
              isDefault = false
            }, 500)
          }
        });
      },
      { immediate: true, flush: 'post' },
    );
    return () => {
      const { prefixCls, units, onSelect, value, active, hideDisabledOptions } = props;
      const cellPrefixCls = `${prefixCls}-cell`;
      return (
        <ul
          class={classNames(`${prefixCls}-column`, {
            [`${prefixCls}-column-active`]: active,
          })}
          ref={ulRef}
          style={{ position: 'relative' }}
        >
          {units!.map(unit => {
            if (hideDisabledOptions && unit.disabled) {
              return null;
            }

            return (
              <li
                key={unit.value}
                ref={element => {
                  liRefs.value.set(unit.value, element as HTMLElement);
                }}
                class={classNames(cellPrefixCls, {
                  [`${cellPrefixCls}-disabled`]: unit.disabled,
                  [`${cellPrefixCls}-selected`]: value === unit.value,
                })}
                onClick={() => {
                  if (unit.disabled) {
                    return;
                  }
                  notScroll = true
                  // @ts-ignore
                  onSelect!(unit.value);
                  const timer = setTimeout(() => {
                    notScroll = false
                    clearTimeout(timer)
                  }, 300)
                }}
              >
                <div class={`${cellPrefixCls}-inner`}>{unit.label}</div>
              </li>
            );
          })}
        </ul>
      );
    };
  },
});
