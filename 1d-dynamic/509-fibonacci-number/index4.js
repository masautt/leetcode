// dynamic programming memoization (top down)
// use recursion to start with the largest value and move down

const fib = (n, m = {}) => {
    if (n <= 1) return n;
    if (n in memo) return memo[n];

    m[n] = fib(n - 1, m) + fib(n - 2, m);

    return m[n];
}

console.log(fib(4));