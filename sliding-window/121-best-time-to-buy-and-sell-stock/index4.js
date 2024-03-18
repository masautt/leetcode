/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => 
    prices.reduce((acc, cur, idx, arr) => 
    idx && Math.max(cur - arr[idx - 1], acc), 0);

const mxPrft = (p) => 
    p.reduce((m, v, i, a) => 
        i && Math.max(v - a[i - 1], m), 0);
