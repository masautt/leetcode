// dynamic programming tabulation (bottom up)
// start with the smallest values and move upward
const fib = (n) => {
    if (n <= 1) return n;

    let m = [n+1];

    m[0] = 0;
    m[1] = 1;

    for (let i = 2; i <= n; i++) {
        m[i] = m[i - 1] + m[i - 2];
    }

    return m[n];
}


console.log(fib(4));