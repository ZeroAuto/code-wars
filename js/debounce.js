function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

const log = debounce((msg) => console.log(msg), 100);

log('Hello');
log('World'); // Only "World" should log after 100ms
