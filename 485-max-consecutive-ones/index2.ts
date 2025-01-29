var findMaxConsecutiveOnes2 = function (nums: string | any[]) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current = (nums[i] === 0) ? 0 : current + 1;

        max = Math.max(current, max);
    }

    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));