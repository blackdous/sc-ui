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
    let ticking = false; 
    let notScroll = false;
    let isDefault = true;

    watch(
      () => props.value,
      () => {
        const li = liRefs.value.get(props.value!);
        notScroll = true
        if (li && open.value !== false) {
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
      // console.log('ulRefOffsetTop: ', ulRefOffsetTop);
      if (!notScroll && !isDefault) {
        let keyValue = props.value
        const oldKeyValue = props.value
        // let lastOffsetTop = 0
        liRefs.value && liRefs.value.forEach((liRef: any) => {
          const liRefOffsetTop = liRef?.offsetTop - 100
          if ((liRefOffsetTop - 15) < ulRefOffsetTop &&  ulRefOffsetTop < (liRefOffsetTop + 15)) {
            keyValue = parseInt(liRef.textContent)
          }
          // lastOffsetTop = liRef.offsetTop - 100
        })
        // console.log('lastOffsetTop: ', lastOffsetTop)
        if (oldKeyValue === keyValue) {
          scrollTo(ulRef.value!, (keyValue || 1) * 30, 120)
        } else {
          onSelect?.(keyValue)
        }
      }
    }, 100)

    onMounted(() => {
      waitElementReady(ulRef.value, () => {
        ulRef.value.addEventListener('scroll', scrollUrl, {
          
        })
        // ulRef.value.addEventListener('scroll', (event) => {
        //   const ulRefOffsetTop = event?.target?.scrollTop || 0
        //   // console.log('ulRefOffsetTop: ', ulRefOffsetTop);
        //   if (!ticking && !notScroll && !isDefault) {
        //     window?.requestAnimationFrame(() => {
        //       // console.log(liRefs.value)
        //       let keyValue = props.value
        //       liRefs.value && liRefs.value.forEach((liRef: any) => {
        //         const liRefOffsetTop = liRef.offsetTop - 100
        //         // console.log('liRefOffsetTop: ', liRefOffsetTop);
        //         if ((liRefOffsetTop - 15) < ulRefOffsetTop &&  ulRefOffsetTop < (liRefOffsetTop + 15)) {
        //           // console.log('liRef.textContent: ', liRef.textContent);
        //           keyValue = parseInt(liRef.textContent)
        //         }
        //       })
        //       console.log('keyValue: ', keyValue);
        //       onSelect?.(keyValue)
        //       ticking = false
        //       // const li = liRefs.value.get(props.value!);
        //       // if (li && open.value !== false) {
        //       //   scrollTo(ulRef.value!, li.offsetTop - 100, 120);
        //       // }
        //     })
        //     ticking = true;
        //   }
        // })
      })
    })
    

    watch(
      open,
      () => {
        scrollRef.value?.();
        nextTick(() => {
          if (open.value) {
            const li = liRefs.value.get(props.value!);
            if (li) {
              scrollRef.value = waitElementReady(li, () => {
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
