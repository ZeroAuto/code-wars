
const fib = (n) => {
    const arr = [0, 1];  // Starting from 0, 1 for the Fibonacci sequence
    let position = 2;
    while (position <= n) {
        arr.push(arr[position - 2] + arr[position - 1]);
        position += 1;
    }
    return arr[n];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
