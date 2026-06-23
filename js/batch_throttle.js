/**
 * Executes an array of async tasks with a maximum concurrency limit.
 * @param {Array<() => Promise<any>>} tasks 
 * @param {number} limit 
 * @returns {Promise<Array<any>>}
 */
async function batchRequests(tasks, limit) {
  const results = new Array(tasks.length);
  let currentIndex = 0;

  // A worker pulls the next available task from the queue, executes it, 
  // and recursively continues until the queue is completely drained.
  async function runWorker() {
    while (currentIndex < tasks.length) {
      // Capture the index for this task before incrementing the shared pointer
      const taskIndex = currentIndex++;
      const task = tasks[taskIndex];

      try {
        // Await the task execution and place the result in the exact matching index
        results[taskIndex] = await task();
      } catch (error) {
        // Handle/store failures depending on requirements (or rethrow to crash early)
        results[taskIndex] = error;
      }
    }
  }

  // Spin up an initial pool of workers up to the limit
  const workerPool = [];
  const initialPoolSize = Math.min(limit, tasks.length);

  for (let i = 0; i < initialPoolSize; i++) {
    workerPool.push(runWorker());
  }

  // Wait for all workers to finish draining the queue
  await Promise.all(workerPool);

  return results;
}

// --- TEST CONDITIONS ---
const delay = (ms, value) => () => new Promise(resolve => setTimeout(() => resolve(value), ms));

const tasks = [
  delay(100, 'A'), // Finish order: 1
  delay(300, 'B'), // Finish order: 3
  delay(100, 'C'), // Finish order: 2 (starts after A finishes)
  delay(200, 'D'), // Finish order: 4 (starts after C finishes)
];

console.log("1. Testing batchRequests...");
// With a limit of 2, 'A' and 'B' start immediately.
// 'C' should only start after 'A' finishes (~100ms).
const startTime = Date.now();
batchRequests(tasks, 2).then(results => {
  const duration = Date.now() - startTime;
  console.log("Results (Expected: ['A', 'B', 'C', 'D']):", results);
  console.log(`Duration (Expected: ~400ms): ${duration}ms`);
});
