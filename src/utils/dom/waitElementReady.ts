import isVisible from "./isVisible";
import raf from '../raf'
/** Trigger when element is visible in view */
export function waitElementReady(element: HTMLElement, callback: () => void): () => void {
  let id: number;

  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = raf(() => {
        tryOrNextFrame();
      });
    }
  }

  tryOrNextFrame();

  return () => {
    raf.cancel(id);
  };
}