/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(prices: number[]): number {
    let maxProfit = 0;
    for (var l = 0, r = 1; r < prices.length; r++) {
        if (prices[l] < prices[r]){
            let profit = prices[r] - prices[l];
            if (profit >= maxProfit) {
                maxProfit = profit;
            }
            else {
                l++;
            }
        }
    }
    return maxProfit;
};