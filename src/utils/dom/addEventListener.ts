// @ts-nocheck
import supportsPassive from '../supportsPassive';

export default function addEventListenerWrap(target, eventType, cb, option) {
  if (target && target.addEventListener) {
    let opt = option;
    if (
      opt === undefined &&
      supportsPassive &&
      (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel')
    ) {
      opt = { passive: false };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    },
  };
}


export const optimizedResize = (function() {
  const callbacks = []
  let running = false

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }
  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(function(callback) {
      callback();
    });
    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function(callback) {
      if (!callbacks.length) {
          window.addEventListener('resize', resize);
      }
      addCallback(callback);
    }
  }
}());
