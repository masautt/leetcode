/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit3(prices: number[]): number {
    let maxProfit = 0;
    for (var i = 0, j = 1; j < prices.length; j++) {
        let profit = prices[j] - prices[i];
        if (profit >= maxProfit) {
            maxProfit = profit;
        }
        else {
            i++;
        }
    }
    return maxProfit;
};