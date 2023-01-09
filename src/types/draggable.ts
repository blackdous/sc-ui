import { MaybeComputedRef, PointerType, Position } from "@vueuse/core"
import { ComputedRef, Ref } from "vue"

export interface UseDraggableOptions {
  /**
   * Only start the dragging when click on the element directly
   *
   * @default false
   */
  exact?: boolean
  /**
   * Prevent events defaults
   *
   * @default false
   */
  preventDefault?: boolean
  /**
   * Prevent events propagation
   *
   * @default false
   */
  stopPropagation?: boolean
  /**
   * Element to attach `pointermove` and `pointerup` events to.
   *
   * @default window
   */
  draggingElement?: MaybeComputedRef<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >
  /**
   * Handle that triggers the drag event
   *
   * @default target
   */
  handle?: MaybeComputedRef<HTMLElement | SVGElement | null | undefined>
  /**
   * Pointer types that listen to.
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * Initial position of the element.
   *
   * @default { x: 0, y: 0 }
   */
  initialValue?: MaybeComputedRef<Position>
  /**
   * Callback when the dragging starts. Return `false` to prevent dragging.
   */
  onStart?: (position: Position, event: PointerEvent) => void | false
  /**
   * Callback during dragging.
   */
  onMove?: (position: Position, event: PointerEvent) => void
  /**
   * Callback when dragging end.
   */
  onEnd?: (position: Position, event: PointerEvent) => void
}
/**
 * Make elements draggable.
 *
 * @see https://vueuse.org/useDraggable
 * @param target
 * @param options
 */
export declare function useDraggable(
  target: MaybeComputedRef<HTMLElement | SVGElement | null | undefined>,
  options?: UseDraggableOptions
): {
  position: Ref<{
    x: number
    y: number
  }>
  isDragging: ComputedRef<boolean>
  style: ComputedRef<string>
  x: Ref<number>
  y: Ref<number>
}
export declare type UseDraggableReturn = ReturnType<typeof useDraggable>

