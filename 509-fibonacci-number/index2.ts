// enhancement on original, just condensing if statements to 1

const fib2 = (n: number) => {
    if (n <= 1 ) return n;
    return fib(n-1) + fib(n-2);
}