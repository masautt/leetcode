/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxProfit = 0;
    for (var l = 0, r = 1; r < prices.length; r++) {
        if (prices[l] < prices[r]){
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(profit, maxProfit);
        }
        else {
            l = r;
        }
    }
    return maxProfit;
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]));