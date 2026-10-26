function throttle(fn, delay) {
  let lastTime = 0;
  let timeoutId = null;

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastTime = now;
      fn.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastTime = Date.now();
        timeoutId = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

// Test cases (simulation)
const log = throttle((msg) => console.log(msg), 3000);

log('First');  // Should log immediately (or after first interval)
log('Second'); // Should be ignored or delayed until the window passes
log('Third');
