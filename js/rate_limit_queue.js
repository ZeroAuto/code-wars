function rateLimitQueue(fn, delay) {
  const queue = [];
  let isExecuting = false;

  function processQueue() {
    if (queue.length === 0) {
      isExecuting = false;
      return;
    }

    isExecuting = true;
    const { context, args } = queue.shift();

    fn.apply(context, args);

    // Wait for the delay before processing the next item in the queue
    setTimeout(processQueue, delay);
  }

  return function (...args) {
    queue.push({ context: this, args });

    if (!isExecuting) {
      processQueue();
    }
  };
}

const log = rateLimitQueue((msg) => console.log(msg), 1000);

log('First');  // Should log immediately (or after first interval)
log('Second'); // Should be ignored or delayed until the window passes
log('Third');
