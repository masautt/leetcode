/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
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

maxProfit([7,1,5,3,6,4]);