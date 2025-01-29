// dynamic programming memoization (top down)
// use recursion to start with the largest value and move down

const fib4 = (n: number, m: { [key: number]: number } = {}): number => {
    if (n <= 1) return n;
    if (n in m) return m[n];

    m[n] = fib4(n - 1, m) + fib4(n - 2, m);

    return m[n];
}

console.log(fib(4));