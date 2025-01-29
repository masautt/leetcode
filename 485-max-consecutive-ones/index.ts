var findMaxConsecutiveOnes = function(nums: string | any[]): number {
    let maxTotal = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 && nums[i] == 1) {
            total = 1;
        }
        else if (nums[i -1] == 1 && nums[i] == 1) {
            total += 1;
            maxTotal = Math.max(total, maxTotal);
        }
        if (nums[i] == 0 && nums[i-1] == 1) {
            maxTotal = Math.max(total, maxTotal);
        }
    }
    return maxTotal;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));