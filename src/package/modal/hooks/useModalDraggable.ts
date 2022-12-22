import { Ref, watch, ref, unref, watchEffect} from 'vue'
import { useDraggable } from '@vueuse/core'

export function useModalDraggable(
  modalTitleRef: Ref<Recordable>,
  visibleRef: Ref<boolean>,
  props: Ref<Recordable>,
  emits: EmitType
) {
  const { x, y, isDragging, style, position } = useDraggable(modalTitleRef, props.value.DragOptions)
  const startX = ref<number>(0)
  const startY = ref<number>(0);
  const startedDrag = ref(false);
  const transformX = ref(0);
  const transformY = ref(0);
  const preTransformX = ref(0);
  const preTransformY = ref(0);
  const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 });
  watch([x, y], () => {
    if (!startedDrag.value) {
      startX.value = x.value;
      startY.value = y.value;
      const bodyRect = document.body.getBoundingClientRect();
      const titleRect = modalTitleRef?.value?.getBoundingClientRect();
      // @ts-ignore
      dragRect.value.right = bodyRect.width - titleRect?.width;
      // @ts-ignore
      dragRect.value.bottom = bodyRect.height - titleRect?.height;
      preTransformX.value = transformX.value;
      preTransformY.value = transformY.value;
    }
    startedDrag.value = true;
  });
  watch(isDragging, () => {
    if (!isDragging) {
      startedDrag.value = false;
    }
  });

  watchEffect(() => {
    if (startedDrag.value) {
      transformX.value =
        preTransformX.value +
        Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
        startX.value;
      transformY.value =
        preTransformY.value +
        Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
        startY.value;
      if (modalTitleRef.value && props.value.isDraggable && visibleRef.value) {
        const modalTitleDom = unref(modalTitleRef)?.parentNode?.parentNode?.parentNode?.parentNode
        // const transformOrigin = modalTitleDom.style.transformOrigin.split(' ').map((item:string) => parseInt(item))
        // console.log('transformOriginx: ', transformOrigin);
        // const aa = `${parseInt(transformX.value + transformOrigin[0])}px ${parseInt(transformY.value + transformOrigin[1])}px`
        // console.log('aa: ', aa);
        modalTitleDom.style.transform = `translate(${transformX.value}px, ${transformY.value}px)`
        // modalTitleDom.style.left = `${transformX.value}px`
        // modalTitleDom.style.top = `${transformY.value}px`
        emits('dragChange', { x, y, isDragging, style, position })
      }
    }
  });

  watch(() => unref(visibleRef), (v) => {
    if (modalTitleRef.value && props.value.isDraggable) {
      x.value = startX.value
      y.value = startY.value
    }
  })
}