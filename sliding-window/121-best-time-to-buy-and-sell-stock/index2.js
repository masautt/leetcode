/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
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

maxProfit([7,1,5,3,6,4]);