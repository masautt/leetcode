/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit4 = (prices: number[]): number => 
    prices.reduce((acc: number, cur: number, idx: number, arr: number[]) => 
        idx ? Math.max(cur - arr[idx - 1], acc) : acc, 0);

const maxProfit5 = (p: number[]): number => 
    p.reduce((m: number, v: number, i: number, a: number[]) => 
        i ? Math.max(v - a[i - 1], m) : m, 0);
