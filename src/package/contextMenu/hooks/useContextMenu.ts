import { onUnmounted, getCurrentInstance } from 'vue';
import { createContextMenu, destroyContextMenu } from '../component/createContextMenu';
import type { ContextMenuItem } from '../component/type';
export type { ContextMenuItem };
export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  return [createContextMenu, destroyContextMenu];
}